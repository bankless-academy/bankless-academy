/* eslint-disable no-console */
import { Box, Button, useToast } from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { useEffect, useState } from 'react'
import { switchChain } from '@wagmi/core'
import { optimism } from 'wagmi/chains'
import { useWaitForTransactionReceipt, useAccount } from 'wagmi'
import { simulateContract, writeContract } from '@wagmi/core'
import { Gear, SealCheck } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { useWeb3Modal } from '@web3modal/wagmi/react'

import ExternalLink from 'components/ExternalLink'
import { useSmallScreen } from 'hooks/index'
import { getArticlesCollectors } from 'utils/index'
import { parseEther } from 'viem'
import Confetti from 'components/Confetti'
import { wagmiConfig } from 'utils/wagmi'

const MintHandbookButton = ({
  lesson,
  numberCollected,
}: {
  lesson: LessonType
  numberCollected: number | '...'
}): JSX.Element => {
  if (!lesson.mirrorNFTAddress) return
  // TEST OE mint
  const isOpenEdition = lesson.slug === 'creating-a-crypto-wallet'
  if (isOpenEdition) {
    lesson.mirrorNFTAddress = '0x6dbf20730f513fc45b19e4d0b951c4e5f2564dd8'
  }
  const { t } = useTranslation()
  const { address, chain } = useAccount()
  const { open } = useWeb3Modal()
  const toast = useToast()
  const [isSmallScreen] = useSmallScreen()
  const [numberMinted, setNumberMinted] = useState('-')
  const [isMinting, setIsMinting] = useState(false)
  const [hash, setHash] = useState('')
  const [mintingError, setMintingError] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)

  const isNewContract =
    parseInt(lesson?.collectibleId.substring(1), 10) > 6 || isOpenEdition

  const mintArg = {
    address: lesson.mirrorNFTAddress,
    abi: isNewContract
      ? [
          {
            inputs: [
              {
                internalType: 'address',
                name: 'tokenRecipient',
                type: 'address',
              },
              { internalType: 'string', name: 'message', type: 'string' },
              {
                internalType: 'address',
                name: 'mintReferral',
                type: 'address',
              },
            ],
            name: 'purchase',
            outputs: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            stateMutability: 'payable',
            type: 'function',
          },
        ]
      : [
          {
            inputs: [
              {
                internalType: 'address',
                name: 'tokenRecipient',
                type: 'address',
              },
              { internalType: 'string', name: 'message', type: 'string' },
            ],
            name: 'purchase',
            outputs: [
              { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
            ],
            stateMutability: 'payable',
            type: 'function',
          },
        ],
    functionName: 'purchase',
    args: isNewContract
      ? [address, '', '0x0000000000000000000000000000000000000000']
      : [address, ''],
    chainId: optimism.id,
    // 0.01 + 0.00069 in collector fee
    value: isOpenEdition ? parseEther('0.00069') : parseEther('0.01069'),
    overrides: {
      gasLimit: 150000n,
    },
    onError(error) {
      console.error('Error', error)
      // setMintingError(error.message?.split('\n')[0])
    },
    onSuccess() {
      setMintingError('')
    },
  }

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    chainId: optimism.id,
    hash: hash as any,
    pollingInterval: 1_000,
  })

  const updateArticlesCollectors = async () => {
    const NFTCollectors = await getArticlesCollectors(lesson.mirrorNFTAddress)
    NFTCollectors.reduce((p, c) => p + c?.tokenBalances?.length, 0)
    setNumberMinted(
      NFTCollectors.reduce(
        (p, c) => p + c?.tokenBalances?.length,
        0
      )?.toString()
    )
  }
  useEffect(() => {
    if (lesson.mirrorNFTAddress && address)
      updateArticlesCollectors().catch(console.error)
  }, [address])

  useEffect(() => {
    if (isLoading) {
      toast.closeAll()
      const txLink = `https://optimistic.etherscan.io/tx/${hash}`
      toast({
        description: (
          <>
            <Box>
              <Box display="flex">
                <Box mr="4">
                  <Gear width="40px" height="auto" />
                </Box>
                <Box flexDirection="column">
                  <Box>{t('Minting in progress:')}</Box>
                  <ExternalLink
                    underline="true"
                    href={txLink}
                    alt="Etherscan transaction link"
                  >
                    {isSmallScreen ? `${txLink.substring(0, 50)}...` : txLink}
                  </ExternalLink>
                </Box>
              </Box>
            </Box>
          </>
        ),
        status: 'warning',
        duration: null,
        isClosable: true,
      })
    }
  }, [isLoading])

  useEffect(() => {
    if (isSuccess) {
      toast.closeAll()
      setShowConfetti(true)
      // HACK: guess tokenId
      const txLink = `https://opensea.io/assets/optimism/${
        lesson.mirrorNFTAddress
      }/${1 + parseInt(numberMinted)}`
      toast({
        description: (
          <>
            <Box>
              <Box display="flex">
                <Box mr="4">
                  <SealCheck width="40px" height="auto" />
                </Box>
                <Box flexDirection="column">
                  <Box>{t('Entry minted:')}</Box>
                  <ExternalLink
                    underline="true"
                    href={txLink}
                    alt="OpenSea Link"
                  >
                    {isSmallScreen ? `${txLink.substring(0, 50)}...` : txLink}
                  </ExternalLink>
                </Box>
              </Box>
            </Box>
          </>
        ),
        status: 'success',
        duration: 10000,
        isClosable: true,
      })
    }
  }, [isSuccess])

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box>
      {lesson.areMirrorNFTAllCollected ? (
        <ExternalLink
          href={`https://opensea.io/collection/${lesson.slug}`}
          alt="Collect on secondary market"
        >
          <Button variant="primaryGold" w="100%">
            {t('Collect on secondary market')}
          </Button>
        </ExternalLink>
      ) : isSuccess ? (
        <Button
          variant="secondaryGold"
          w="100%"
          background="transparent !important"
        >
          {t('Entry Collected')}
        </Button>
      ) : (
        <Button
          isDisabled={isLoading || isMinting}
          isLoading={isLoading || isMinting}
          loadingText={isMinting ? t('Collecting Entry') : t('Minting...')}
          variant="primaryGold"
          w="100%"
          onClick={async () => {
            try {
              if (!address) {
                await open({ view: 'Connect' })
              } else if (numberMinted !== '-') {
                if (parseInt(numberMinted) >= 100) {
                  openInNewTab(`https://opensea.io/collection/${lesson.slug}`)
                } else {
                  if (address && chain?.id !== optimism.id) {
                    try {
                      await switchChain(wagmiConfig, { chainId: optimism.id })
                    } catch (error) {
                      console.error(error)
                      toast({
                        title: 'Switch your network to Optimism.',
                        description: (
                          <>Click Mint again after switching network.</>
                        ),
                        status: 'error',
                        duration: 10000,
                        isClosable: true,
                      })
                    }
                    setIsMinting(false)
                    toast({
                      title: 'The network has been switched to Optimism.',
                      description: <>Click Mint again.</>,
                      status: 'warning',
                      duration: 10000,
                      isClosable: true,
                    })
                  } else if (!isMinting) {
                    setIsMinting(true)
                    setTimeout(() => {
                      setIsMinting(false)
                    }, 3000)
                    if (mintingError !== '') {
                      toast({
                        title: '⚠️ Problem while minting...',
                        description: (
                          <>
                            <Box>
                              {mintingError?.includes('exceeds the balance')
                                ? 'The total cost including gas fee exceeds your balance of ETH on Optimism.'
                                : mintingError}
                            </Box>
                            <Box>
                              {t('Refresh the page before trying again.')}
                            </Box>
                          </>
                        ),
                        status: 'error',
                        duration: null,
                        isClosable: true,
                      })
                    } else {
                      const { request } = await simulateContract(
                        wagmiConfig,
                        mintArg
                      )
                      const hash = await writeContract(wagmiConfig, request)
                      setHash(hash)
                    }
                  }
                }
              } else if (address) {
                alert('try again in 2 seconds')
              }
            } catch (error) {
              const errorMessage =
                error.message?.split('\n')[0] || 'Unknow error.'
              toast({
                title: '⚠️ Problem while minting...',
                description: (
                  <>
                    {errorMessage?.includes('exceeds the balance')
                      ? 'The total cost including gas fee exceeds your balance of ETH on Optimism.'
                      : errorMessage}
                  </>
                ),
                status: 'error',
                duration: 10000,
                isClosable: true,
              })
              console.error(error)
            }
          }}
        >
          <Box fontWeight="bold">
            {isOpenEdition ? 'Free Mint' : 'Mint for 0.01 ETH'}
          </Box>
          <Box ml="2">{`(${numberCollected}/${
            isOpenEdition ? '∞' : '100'
          } minted)`}</Box>
        </Button>
      )}
      <Confetti
        showConfetti={showConfetti}
        onConfettiComplete={() => {
          setShowConfetti(false)
        }}
      />
    </Box>
  )
}
export default MintHandbookButton
