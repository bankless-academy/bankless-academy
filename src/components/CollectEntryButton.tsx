import { Box, Button, useToast } from '@chakra-ui/react'
import { LessonType } from 'entities/lesson'
import { useEffect, useState } from 'react'
import { switchNetwork } from '@wagmi/core'
import { optimism } from 'wagmi/chains'
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useNetwork,
} from 'wagmi'
import { Gear, SealCheck } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import ExternalLink from 'components/ExternalLink'
import { useSmallScreen } from 'hooks'
import { getArticlesCollectors } from 'utils'
import { parseEther } from 'viem'
import { useLocalStorage } from 'usehooks-ts'

const CollectEntryButton = ({
  lesson,
  numberCollected,
}: {
  lesson: LessonType
  numberCollected: number | '...'
}): JSX.Element => {
  if (!lesson.mirrorNFTAddress) return
  const { t } = useTranslation()
  const { address } = useAccount()
  const { chain } = useNetwork()
  const toast = useToast()
  const [isSmallScreen] = useSmallScreen()
  const [numberMinted, setNumberMinted] = useState('-')
  const [isMinting, setIsMinting] = useState(false)
  const [, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )

  const { config } = usePrepareContractWrite({
    address: lesson.mirrorNFTAddress,
    abi: [
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
    args: [address, ''],
    chainId: optimism.id,
    // 0.01 + 0.00069 in collector fee
    value: parseEther('0.01069'),
    overrides: {
      gasLimit: 150000n,
    },
  })
  const { data, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
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
      const txLink = `https://optimistic.etherscan.io/tx/${data?.hash}`
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
                    alt="Transaction in progress"
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
                    alt="Transaction in progress"
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
          loadingText={isMinting ? t('Collecting Entry') : t('Minting ...')}
          variant="primaryGold"
          w="100%"
          onClick={async () => {
            if (numberMinted !== '-') {
              if (parseInt(numberMinted) >= 100) {
                openInNewTab(`https://opensea.io/collection/${lesson.slug}`)
              } else {
                if (chain.id !== optimism.id) {
                  await switchNetwork({ chainId: optimism.id })
                }
                if (!isMinting) {
                  setIsMinting(true)
                  setTimeout(() => {
                    setIsMinting(false)
                  }, 3000)
                  write?.()
                }
              }
            } else if (address) alert('try again in 2 seconds')
            else setConnectWalletPopupLS(true)
          }}
        >
          <Box fontWeight="bold">{t('Collect Entry')}</Box>
          <Box ml="2">{`(${numberCollected}/100 ${t('claimed')})`}</Box>
        </Button>
      )}
    </Box>
  )
}
export default CollectEntryButton
