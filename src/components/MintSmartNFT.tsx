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
  shortenAddress,
} from 'utils/index'
import { useSmallScreen } from 'hooks'

const TIME_PLACEHOLDER = '--:--,--'

function timeToSeconds(timeStr: string | null): number | string {
  if (timeStr === TIME_PLACEHOLDER || !timeStr) return '--'
  const timeParts: string[] = timeStr?.replace(',', ':')?.split(':')

  const minutes: number = parseInt(timeParts[0], 10)
  const seconds: number = parseInt(timeParts[1], 10)
  const milliseconds: number = parseInt(timeParts[2], 10)

  const totalSeconds: number = minutes * 60 + seconds

  return totalSeconds + ',' + milliseconds
}

const StyledBox = styled(Box)<{ issmallscreen?: string }>`
  .counter {
    position: absolute;
    top: 76.8%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 19px;
    font-weight: bold;
    font-family: monospace;
    line-height: initial;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 0px 6px;
    border-radius: 6px;
    border: 1.5px solid #bfb8c8;
  }
`

const MintSmartNFT = (): JSX.Element => {
  const { address, status, chainId } = useAccount()
  const [isSmallScreen] = useSmallScreen()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  const [numberMinted, setNumberMinted] = useState('-')
  const [time, setTime] = useState(0)
  const [mintTime, setMintTime] = useState<string | null>(null)
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
    if (nftInfo?.data?.tokenIds?.length) {
      const mintId = nftInfo?.data?.tokenIds?.at(-1)
      console.log('mintId', mintId)
      setMintId(mintId)
    }
    if (nftInfo?.data?.time && nftInfo?.data?.tokenIds?.length) {
      setMintTime(nftInfo?.data?.time)
    }
    setIsLoadingInfo(false)
    return nftInfo?.data?.tokenIds?.at(-1)
  }
  const { writeContracts } = useWriteContracts({
    mutation: {
      onSuccess: async (id) => {
        console.log('onSuccess')
        setMintTime(TIME_PLACEHOLDER)
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
    if (status === 'connected' && startTimeRef.current) {
      console.log(startTimeRef.current)
      const params = {
        address,
        timestamp: startTimeRef.current,
      }
      console.log('params', params)
      api(`/api/nft/update-timestamp`, params)
    }
  }, [status, address, startTimeRef])

  useEffect(() => {
    if (address && status === 'connected') {
      getNFTInfo()
    }
  }, [address, status])

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
    account: address,
  })
  const capabilities = useMemo(() => {
    if (!availableCapabilities || !chainId) return {}
    const capabilitiesForChain = availableCapabilities[chainId]
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
  }, [availableCapabilities, chainId])

  const shareLink = `https://app.banklessacademy.com/onchain-summer-challenge`
  const share = `🔆 OᑎᑕᕼᗩIᑎ ᔑᑌᗰᗰEᖇ 🔆 Challenge by @BanklessAcademy
I’ve just got onchain in ${timeToSeconds(mintTime)} seconds!

How fast can you go onchain?
#OnchainSummer`

  const twitterLink = generateTwitterLink(share, shareLink)

  const farcasterLink = generateFarcasterLink(share, shareLink)

  const parentRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const imgageRef = useRef<HTMLDivElement>(null)

  const resizeFont = () => {
    if (parentRef.current && counterRef.current) {
      const parentWidth = parentRef.current.clientWidth
      counterRef.current.style.fontSize = `${(4 * parentWidth) / 100}px`
      counterRef.current.style.padding = `${(0.5 * parentWidth) / 100}px ${
        (1 * parentWidth) / 100
      }px`
      counterRef.current.style.borderRadius = `${(1 * parentWidth) / 100}px`
      counterRef.current.style.border = `${
        (0.25 * parentWidth) / 100
      }px solid #BFB8C8`

      imgageRef.current.style.width = `${(24 * parentWidth) / 100}px`
      imgageRef.current.style.bottom = `${(3.5 * parentWidth) / 100}px`
      imgageRef.current.style.right = `${(3.5 * parentWidth) / 100}px`
    }
  }

  useEffect(() => {
    resizeFont()

    window.addEventListener('resize', resizeFont)

    return () => {
      window.removeEventListener('resize', resizeFont)
    }
  }, [])

  return (
    <>
      <Text
        as="h1"
        fontSize={isSmallScreen ? '3xl' : '4xl'}
        fontWeight="bold"
        textAlign="center"
        p={isSmallScreen ? '2' : '0 16px 16px 16px'}
      >
        {mintTime && mintTime.startsWith('00:')
          ? 'Yes! 🥳'
          : mintTime
          ? 'No 😢'
          : '🤔'}
      </Text>
      <StyledBox p="0 24px 24px 24px">
        <Box maxW="500px" m="auto" position="relative" ref={parentRef}>
          <Image
            src="https://beta.banklessacademy.com/images/smart-wallet.gif"
            width="100%"
            height="100%"
            borderRadius="8px"
          />
          <Box className="counter" zIndex="1" ref={counterRef}>
            {mintTime || formatTime(time)}
          </Box>
          <Box
            ref={imgageRef}
            position="absolute"
            w="120px"
            bottom="15px"
            right="15px"
          >
            <ChakraImage
              src="https://app.banklessacademy.com/images/BanklessAcademy.svg"
              alt="Bankless Academy"
            />
          </Box>
        </Box>
        <Box pt="4" maxW="500px" m="auto">
          <Box display="flex" justifyContent="center">
            {isRunning && status !== 'connected' && (
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
            {!isLoadingInfo && !mintId && status === 'connected' && (
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
          {!isLoadingInfo && status === 'connected' && mintId !== null && (
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
          {status === 'connected' && isLoadingInfo && (
            <Box textAlign="center">Loading ...</Box>
          )}
          {status === 'connected' && !isLoadingInfo && (
            <Box display="flex" justifyContent="center" mt="4">
              <Button
                onClick={() => {
                  handleReset()
                  disconnect()
                }}
              >
                Disconnect {shortenAddress(address)}
              </Button>
            </Box>
          )}
          <Box display="flex" justifyContent="center" mt="4">
            {isRunning && status !== 'connected' && !isLoadingInfo && (
              <Button onClick={handleReset}>Reset timer</Button>
            )}
            {!isRunning && status !== 'connected' && !mintId && (
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
