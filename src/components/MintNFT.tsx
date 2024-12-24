/* eslint-disable no-console */
import { Box, Button, Image, useToast } from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import { switchChain, simulateContract, writeContract } from '@wagmi/core'
import { base } from 'wagmi/chains'
import { useWaitForTransactionReceipt, useAccount } from 'wagmi'
import { Gear, SealCheck } from '@phosphor-icons/react'
import { useAppKit } from '@reown/appkit/react'
import { useCapabilities, useWriteContracts } from 'wagmi/experimental'

import ExternalLink from 'components/ExternalLink'
import { useSmallScreen } from 'hooks/index'
import Confetti from 'components/Confetti'
import { wagmiConfig } from 'utils/wagmi'
import { NFTAddress, nftABI } from 'constants/nft'
import { api, getNFTsCollectors } from 'utils/index'
import { client } from 'utils/paymaster'

const MintNFT = (): JSX.Element => {
  const { address, chain } = useAccount()
  const account = useAccount()
  const { open } = useAppKit()
  const toast = useToast()
  const [isSmallScreen] = useSmallScreen()
  const [numberMinted, setNumberMinted] = useState('-')
  const [isMinting, setIsMinting] = useState(false)
  const [hash, setHash] = useState('')
  const [mintingError, setMintingError] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)
  const { writeContracts } = useWriteContracts({
    mutation: {
      onSuccess: (id) => {
        celebrateMint()
        console.log('id', id)
      },
    },
  })

  const contractArgs = [
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
  ]

  const mintArg = {
    address: NFTAddress,
    abi: nftABI,
    functionName: 'claim',
    args: contractArgs,
    chainId: base.id,
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
    chainId: base.id,
    hash: hash as any,
    pollingInterval: 1_000,
  })

  const updateNFTCollectors = async () => {
    const NFTCollectors = await getNFTsCollectors(NFTAddress)
    NFTCollectors.reduce((p, c) => p + c?.tokenBalances?.length, 0)
    setNumberMinted(
      NFTCollectors.reduce(
        (p, c) => p + c?.tokenBalances?.length,
        0
      )?.toString()
    )
  }

  const celebrateMint = () => {
    toast.closeAll()
    setShowConfetti(true)
    // HACK: guess tokenId
    const txLink = `https://opensea.io/assets/base/${NFTAddress}/${
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
                <ExternalLink underline="true" href={txLink} alt="OpenSea Link">
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

  useEffect(() => {
    updateNFTCollectors().catch(console.error)
  }, [])

  useEffect(() => {
    if (isLoading) {
      toast.closeAll()
      const txLink = `https://basescan.org/tx/${hash}`
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
      celebrateMint()
    }
  }, [isSuccess])

  const { data: availableCapabilities } = useCapabilities({
    account: account.address,
  })
  const capabilities = useMemo(() => {
    if (!availableCapabilities || !account.chainId) return {}
    const capabilitiesForChain = availableCapabilities[account.chainId]
    if (
      capabilitiesForChain['paymasterService'] &&
      capabilitiesForChain['paymasterService'].supported
    ) {
      return {
        paymasterService: {
          url: `${document.location.origin}/api/paymaster`,
        },
      }
    }
    return {}
  }, [availableCapabilities, account.chainId])

  return (
    <Box maxW="500px" margin="auto" my="4">
      <Image
        src="https://i.seadn.io/s/raw/files/4102b70e716709c2189a036016ebe28c.gif"
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
        <>
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
                  if (address && chain?.id !== base.id) {
                    try {
                      await switchChain(wagmiConfig, {
                        chainId: base.id,
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
                      const code = await client.getBytecode({ address })
                      console.log('code', code)
                      if (
                        account.connector.type === 'coinbaseWallet' &&
                        code?.startsWith('0x')
                      ) {
                        // Coinbase Smart Account
                        const paymasterResults = await api('/api/paymaster', {
                          method: 'pm_getPaymasterStubData',
                          params: [
                            {
                              sender: address,
                              nonce: '0x2',
                              initCode: '0x',
                              callData: `0x34fcd5be00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000077b82880ab87bdd8910f1f6324b34752eeab96ff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001a484bb1e42000000000000000000000000${address.substring(
                                2
                              )}0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
                              callGasLimit: '0x19d8c',
                              verificationGasLimit: '0x97df4',
                              preVerificationGas: '0x58df9',
                              maxFeePerGas: '0x13e2110',
                              maxPriorityFeePerGas: '0xf4240',
                            },
                            NFTAddress,
                            '0x2105',
                            null,
                          ],
                        })
                        const errorDetails = paymasterResults?.data?.error
                        if (errorDetails) {
                          if (
                            errorDetails?.includes(
                              'address has maximum number of transactions defined in policy'
                            )
                          ) {
                            alert(
                              'You have already claimed your free sponsored mint.'
                            )
                          } else if (
                            errorDetails?.includes(
                              'address has maximum sponsorship cost defined in policy'
                            )
                          ) {
                            alert(
                              'Gas price is currently high, try again later to claim your gas free transaction.'
                            )
                          } else alert(errorDetails)
                        } else {
                          writeContracts({
                            account: address,
                            contracts: [
                              {
                                address: NFTAddress,
                                abi: nftABI,
                                functionName: 'claim',
                                args: contractArgs,
                              },
                            ],
                            capabilities,
                          } as any)
                        }
                      } else if (account.connector.type === 'coinbaseWallet') {
                        // TODO: simplify
                        // non-deployed Coinbase smart wallet
                        writeContracts({
                          account: address,
                          contracts: [
                            {
                              address: NFTAddress,
                              abi: nftABI,
                              functionName: 'claim',
                              args: contractArgs,
                            },
                          ],
                          capabilities,
                        } as any)
                        // Coinbase EOA
                        const { request } = await simulateContract(
                          wagmiConfig,
                          mintArg
                        )
                        const hash = await writeContract(wagmiConfig, request)
                        setHash(hash)
                      } else {
                        // EOA
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
            <Box ml="2">{`(${numberMinted}/∞ minted)`}</Box>
          </Button>
          <br />
          <br />
          <Button
            isDisabled={isLoading || isMinting}
            isLoading={isLoading || isMinting}
            loadingText={isMinting ? 'Minting NFT' : 'Minting...'}
            variant="primaryGold"
            w="100%"
            onClick={() =>
              writeContracts({
                account: address,
                contracts: [
                  {
                    address: NFTAddress,
                    abi: nftABI,
                    functionName: 'claim',
                    args: contractArgs,
                  },
                ],
                capabilities,
              } as any)
            }
          >
            <Box fontWeight="bold">test mobile mint</Box>
            <Box ml="2">{`(${numberMinted}/∞ minted)`}</Box>
          </Button>
        </>
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
