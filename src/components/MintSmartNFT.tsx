/* eslint-disable no-console */
import { Box, Button, Image, useToast } from '@chakra-ui/react'
import { useEffect, useMemo, useState, useRef } from 'react'
import { base } from 'wagmi/chains'
import {
  useWaitForTransactionReceipt,
  useAccount,
  useConnect,
  useDisconnect,
} from 'wagmi'
import { Gear, SealCheck } from '@phosphor-icons/react'
import { useCapabilities, useWriteContracts } from 'wagmi/experimental'
import styled from '@emotion/styled'

import ExternalLink from 'components/ExternalLink'
import { useSmallScreen } from 'hooks/index'
import Confetti from 'components/Confetti'
import { NFTAddress, nftABI } from 'constants/nft'
import { api, getNFTsCollectors } from 'utils/index'

const StyledBox = styled(Box)`
  .counter {
    position: absolute;
    top: 72%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    font-weight: bold;
    font-family: monospace;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
  }
`

const MintSmartNFT = (): JSX.Element => {
  const { address } = useAccount()
  const account = useAccount()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const toast = useToast()
  const [isSmallScreen] = useSmallScreen()
  const [numberMinted, setNumberMinted] = useState('-')
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const startTimeRef = useRef<number | null>(null)
  const [hash] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)
  const { writeContracts } = useWriteContracts({
    mutation: {
      onSuccess: (id) => {
        updateNFTCollectors().catch(console.error)
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
    if (account.status === 'connected') {
      console.log(startTimeRef.current)
      const params = {
        address: account.address,
        timestamp: startTimeRef.current,
      }
      console.log('params', params)
      api(`/api/nft/update-timestamp`, params)
    }
  }, [account.status, startTimeRef])

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

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRunning) {
      startTimeRef.current = Date.now() - time
      interval = setInterval(() => {
        setTime(Date.now() - startTimeRef.current!)
      }, 10)
    }

    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    const milliseconds = ms % 1000

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`
  }

  const handleStart = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - time
    }
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
    startTimeRef.current = null
  }

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
    <StyledBox maxW="500px" margin="auto" my="4">
      <Box w="500px" h="500px" position="relative">
        <Image src="/images/smart-wallet.gif" width="100%" height="100%" />
        <Box className="counter" zIndex="1">
          {formatTime(time)}
        </Box>
      </Box>
      <Box mt="4">
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
            {isRunning && account.status === 'disconnected' && (
              <>
                {connectors.map((connector) => (
                  <Button
                    id={connector.id}
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    variant="primaryGold"
                    w="100%"
                  >
                    Connect Smart Wallet
                  </Button>
                ))}
              </>
            )}
            {account.status === 'connected' && (
              <>
                <Button
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  loadingText={isLoading ? 'Minting NFT' : 'Minting...'}
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
                  <Box fontWeight="bold">Mint Free Smart Wallet NFT</Box>
                  <Box ml="2">{`(${numberMinted}/∞ minted)`}</Box>
                </Button>
                <Box display="flex" justifyContent="center" mt="4">
                  <Button onClick={() => disconnect()}>Disconnect</Button>
                </Box>
              </>
            )}
          </>
        )}
        <Box display="flex" justifyContent="center" mt="4">
          {isRunning && !account.isConnected && (
            <Button onClick={handleReset}>Reset timer</Button>
          )}
          {!isRunning && !account.isConnected && (
            <Button variant="primaryGold" onClick={handleStart}>
              Start
            </Button>
          )}
        </Box>
      </Box>
      <Confetti
        showConfetti={showConfetti}
        onConfettiComplete={() => {
          setShowConfetti(false)
        }}
      />
    </StyledBox>
  )
}
export default MintSmartNFT
