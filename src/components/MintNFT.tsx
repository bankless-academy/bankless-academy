/* eslint-disable no-console */
import { Box, Button, Image, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { switchChain } from '@wagmi/core'
import { baseSepolia } from 'wagmi/chains'
import { useWaitForTransactionReceipt, useAccount } from 'wagmi'
import { simulateContract, writeContract } from '@wagmi/core'
import { Gear, SealCheck } from '@phosphor-icons/react'
import { useWeb3Modal } from '@web3modal/wagmi/react'

import ExternalLink from 'components/ExternalLink'
import { useSmallScreen } from 'hooks/index'
import Confetti from 'components/Confetti'
import { wagmiConfig } from 'utils/wagmi'

const MintNFT = (): JSX.Element => {
  const { address, chain } = useAccount()
  const { open } = useWeb3Modal()
  const toast = useToast()
  const [isSmallScreen] = useSmallScreen()
  const [numberMinted, setNumberMinted] = useState('-')
  const [isMinting, setIsMinting] = useState(false)
  const [hash, setHash] = useState('')
  const [mintingError, setMintingError] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)

  // TEMP
  const numberCollected = '5'

  const NFTAddress = '0x7549f01633aebccddabcaa0f8046a12d8baddeee'

  const mintArg = {
    address: NFTAddress,
    abi: [
      {
        inputs: [
          { internalType: 'address', name: '_receiver', type: 'address' },
          { internalType: 'uint256', name: '_quantity', type: 'uint256' },
          { internalType: 'address', name: '_currency', type: 'address' },
          { internalType: 'uint256', name: '_pricePerToken', type: 'uint256' },
          {
            components: [
              { internalType: 'bytes32[]', name: 'proof', type: 'bytes32[]' },
              {
                internalType: 'uint256',
                name: 'quantityLimitPerWallet',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'pricePerToken',
                type: 'uint256',
              },
              { internalType: 'address', name: 'currency', type: 'address' },
            ],
            internalType: 'struct IDrop.AllowlistProof',
            name: '_allowlistProof',
            type: 'tuple',
          },
          { internalType: 'bytes', name: '_data', type: 'bytes' },
        ],
        name: 'claim',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    functionName: 'claim',
    args: [
      address,
      '1',
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      '0',
      [
        ['0x0000000000000000000000000000000000000000000000000000000000000000'],
        '1',
        '0',
        '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
      ],
      '0x',
    ],
    chainId: baseSepolia.id,
    value: 0,
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
    chainId: baseSepolia.id,
    hash: hash as any,
    pollingInterval: 1_000,
  })

  const updateArticlesCollectors = async () => {
    // const NFTCollectors = await getArticlesCollectors(lesson.mirrorNFTAddress)
    // NFTCollectors.reduce((p, c) => p + c?.tokenBalances?.length, 0)
    // setNumberMinted(
    //   NFTCollectors.reduce(
    //     (p, c) => p + c?.tokenBalances?.length,
    //     0
    //   )?.toString()
    // )

    // TEMP
    setNumberMinted('6')
  }
  useEffect(() => {
    if (address) updateArticlesCollectors().catch(console.error)
  }, [address])

  useEffect(() => {
    if (isLoading) {
      toast.closeAll()
      const txLink = `https://sepolia.basescan.org/tx/${hash}`
      toast({
        description: (
          <>
            <Box>
              <Box display="flex">
                <Box mr="4">
                  <Gear width="40px" height="auto" />
                </Box>
                <Box flexDirection="column">
                  <Box>Minting in progress:</Box>
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
      const txLink = `https://testnets.opensea.io/assets/base-sepolia/${NFTAddress}/${
        1 + parseInt(numberMinted)
      }`
      toast({
        description: (
          <>
            <Box>
              <Box display="flex">
                <Box mr="4">
                  <SealCheck width="40px" height="auto" />
                </Box>
                <Box flexDirection="column">
                  <Box>NFT minted:</Box>
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
    <Box maxW="500px" margin="auto" my="4">
      <Image
        src="https://raw.seadn.io/files/973e1681b73e67c3b59c32401c9f1e71.gif"
        width="100%"
        height="100%"
        mb="4"
      />
      {isSuccess ? (
        <Button
          variant="secondaryGold"
          w="100%"
          background="transparent !important"
        >
          NFT Collected
        </Button>
      ) : (
        <Button
          isDisabled={isLoading || isMinting}
          isLoading={isLoading || isMinting}
          loadingText={isMinting ? 'Minting NFT' : 'Minting...'}
          variant="primaryGold"
          w="100%"
          onClick={async () => {
            try {
              if (!address) {
                await open({ view: 'Connect' })
              } else if (numberMinted !== '-') {
                if (parseInt(numberMinted) >= 100) {
                  openInNewTab(
                    `https://testnets.opensea.io/collection/smart-wallet-oe`
                  )
                } else {
                  if (address && chain?.id !== baseSepolia.id) {
                    try {
                      await switchChain(wagmiConfig, {
                        chainId: baseSepolia.id,
                      })
                    } catch (error) {
                      console.error(error)
                      toast({
                        title: 'Switch your network to Base.',
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
                      title: 'The network has been switched to Base.',
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
                            <Box>Refresh the page before trying again.</Box>
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
                      ? 'The total cost including gas fee exceeds your balance of ETH on Base.'
                      : error.message?.includes('!Qty')
                      ? 'You have already minted the free NFT.'
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
          <Box fontWeight="bold">Mint Free Smart Wallet NFT</Box>
          <Box ml="2">{`(${numberCollected}/∞ minted)`}</Box>
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
export default MintNFT
