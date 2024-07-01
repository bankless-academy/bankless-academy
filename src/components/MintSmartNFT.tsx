/* eslint-disable no-console */
import {
  Box,
  Button,
  Image,
  Text,
  Image as ChakraImage,
} from '@chakra-ui/react'
import { useEffect, useMemo, useState, useRef } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { ShootingStar } from '@phosphor-icons/react'
import { useCapabilities, useWriteContracts } from 'wagmi/experimental'
import styled from '@emotion/styled'

import ExternalLink from 'components/ExternalLink'
import Confetti from 'components/Confetti'
import { NFTAddress, nftABI } from 'constants/nft'
import {
  api,
  formatTime,
  generateFarcasterLink,
  generateTwitterLink,
  getNFTsCollectors,
} from 'utils/index'
import { useSmallScreen } from 'hooks'

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
  const [isSmallScreen] = useSmallScreen()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const [numberMinted, setNumberMinted] = useState('-')
  const [time, setTime] = useState(0)
  const [mintTime, setMintTime] = useState(0)
  const [mintId, setMintId] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [isLoadingInfo, setIsLoadingInfo] = useState(false)
  const startTimeRef = useRef<number | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const getNFTInfo = async () => {
    console.log('getNFTInfo')
    setIsLoadingInfo(true)
    const nftInfo = await api('/api/nft/get-info', { address })
    console.log(nftInfo)
    if (nftInfo?.data?.time && nftInfo?.data?.time !== '--:--:---') {
      setMintTime(nftInfo?.data?.time)
    }
    if (nftInfo?.data?.tokenIds?.length) {
      const mintId = nftInfo?.data?.tokenIds?.at(-1)
      console.log('mintId', mintId)
      setMintId(mintId)
    }
    setIsLoadingInfo(false)
    return nftInfo?.data?.tokenIds?.at(-1)
  }
  const { writeContracts } = useWriteContracts({
    mutation: {
      onSuccess: async (id) => {
        console.log('onSuccess')
        let mintId = null
        while (!mintId) {
          mintId = await getNFTInfo()
          console.log('retry', mintId)
        }
        await updateNFTCollectors().catch(console.error)
        console.log('celebrateMint')
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
    setShowConfetti(true)
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
    if (address) {
      getNFTInfo()
    }
  }, [address])

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

  const handleStart = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - time
    }
    setIsRunning(!isRunning)
  }

  const handleReset = () => {
    console.log('handleReset')
    setIsLoadingInfo(false)
    setTime(0)
    setMintId(null)
    setMintTime(null)
    setIsRunning(false)
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

  const shareLink = `https://app.banklessacademy.com/onchain-summer-challenge`
  const share = `🔆 OᑎᑕᕼᗩIᑎ ᔑᑌᗰᗰEᖇ 🔆 Challenge by @BanklessAcademy
I’ve just got onchain in XX seconds!

How fast can you go onchain?
#OnchainSummer`

  const twitterLink = generateTwitterLink(share, shareLink)

  const farcasterLink = generateFarcasterLink(share, shareLink)

  return (
    <>
      <Text
        as="h1"
        fontSize={isSmallScreen ? '3xl' : '5xl'}
        fontWeight="bold"
        textAlign="center"
        p={isSmallScreen ? '4' : '8'}
      >
        {mintTime ? 'Yes! 🥳' : '🤔'}
      </Text>
      <StyledBox p="8">
        <Box maxW="500px" m="auto" position="relative">
          <Image
            src="https://beta.banklessacademy.com/images/smart-wallet.gif"
            width="100%"
            height="100%"
            borderRadius="8px"
          />
          <Box className="counter" zIndex="1">
            {mintTime || formatTime(time)}
          </Box>
        </Box>
        <Box pt="4" maxW="500px" m="auto">
          <Box display="flex" justifyContent="center">
            {isRunning && account.status === 'disconnected' && (
              <>
                {connectors.map((connector) => (
                  <Button
                    id={connector.id}
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    variant="primaryGold"
                  >
                    Connect Smart Wallet
                  </Button>
                ))}
              </>
            )}
            {!isLoadingInfo && !mintTime && account.status === 'connected' && (
              <Button
                variant="primaryGold"
                h={isSmallScreen ? 'auto' : '40px'}
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
                <Box display={isSmallScreen ? 'block' : 'flex'} m="2">
                  <Box fontWeight="bold">Mint Smart Wallet NFT</Box>
                  <Box ml="2">{`(${numberMinted}/∞ minted)`}</Box>
                </Box>
              </Button>
            )}
          </Box>
          {!isLoadingInfo && account.status === 'connected' && mintId !== null && (
            <Box textAlign="center" p="16px" maxW="400px" m="auto">
              <Box display="flex" pb="1">
                <Button
                  variant="primaryGold"
                  w="full"
                  height="51px"
                  m="auto"
                  isDisabled
                  borderBottomRadius="0"
                  leftIcon={<ShootingStar width="28px" height="28px" />}
                >
                  <Box
                    display={isSmallScreen ? 'block' : 'flex'}
                    justifyContent="center"
                    alignItems="center"
                    fontSize="lg"
                  >
                    <Box fontWeight="bold">Challenge Completed</Box>
                    <Box ml="2" fontWeight="normal">
                      {`(${numberMinted}/∞ minted)`}
                    </Box>
                  </Box>
                </Button>
              </Box>
              <Box pb="1">
                <ExternalLink href={twitterLink} mr="2">
                  <Button
                    variant="primaryGold"
                    w="100%"
                    borderRadius="0"
                    leftIcon={
                      <ChakraImage width="20px" src="/images/TwitterX.svg" />
                    }
                  >
                    Share on Twitter / X
                  </Button>
                </ExternalLink>
              </Box>
              <Box pb="1">
                <ExternalLink href={farcasterLink} mr="2">
                  <Button
                    variant="primaryGold"
                    w="100%"
                    borderRadius="0"
                    leftIcon={
                      <ChakraImage width="20px" src="/images/Farcaster.svg" />
                    }
                  >
                    Share on Farcaster
                  </Button>
                </ExternalLink>
              </Box>
              <Box pb="1">
                <ExternalLink
                  href={`https://opensea.io/assets/base/${NFTAddress}/${mintId}`}
                >
                  <Button
                    variant="primaryGold"
                    w="100%"
                    borderTopRadius="0"
                    leftIcon={
                      <ChakraImage
                        width="24px"
                        height="24px"
                        src="/images/OpenSea.svg"
                      />
                    }
                  >
                    View on OpenSea
                  </Button>
                </ExternalLink>
              </Box>
            </Box>
          )}
          {account.status === 'connected' && isLoadingInfo && (
            <Box textAlign="center">Loading ...</Box>
          )}
          {account.status === 'connected' && !isLoadingInfo && (
            <Box display="flex" justifyContent="center" mt="4">
              <Button
                onClick={() => {
                  handleReset()
                  disconnect()
                }}
              >
                Disconnect
              </Button>
            </Box>
          )}
          <Box display="flex" justifyContent="center" mt="4">
            {isRunning && !account.isConnected && !isLoadingInfo && (
              <Button onClick={handleReset}>Reset timer</Button>
            )}
            {!isRunning && !account.isConnected && !mintId && (
              <Button variant="primaryGold" onClick={handleStart}>
                Start Challenge
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
    </>
  )
}
export default MintSmartNFT
