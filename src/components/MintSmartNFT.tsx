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
  // getNFTsCollectors,
  shortenAddress,
} from 'utils/index'
import { useSmallScreen } from 'hooks'
import ProgressSteps from 'components/ProgressSteps'
import Card from 'components/Card'
import Keyword from 'components/Keyword'
import { useRouter } from 'next/router'

const TIME_PLACEHOLDER = '--:--,--'

function timeToSeconds(timeStr: string | null): number | string {
  if (timeStr === TIME_PLACEHOLDER || !timeStr) return '--'
  const timeParts: string[] = timeStr?.replace(',', ':')?.split(':')

  const minutes: number = parseInt(timeParts[0], 10)
  const seconds: number = parseInt(timeParts[1], 10)
  const milliseconds: string = timeParts[2]

  const totalSeconds: number = minutes * 60 + seconds

  return totalSeconds + ',' + milliseconds
}

const StyledBox = styled(Box)<{ issmallscreen?: string }>`
  .counter {
    position: absolute;
    top: 77%;
    left: 50.6%;
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
  span.keyword {
    cursor: help;
    border-bottom: 1px dashed #e5afff;
    color: #e5afff;
    display: inline-block !important;
  }
`

const NFTImage = styled(Box)`
  margin-top: 32px;
  overflow: hidden;
  border-radius: 23px;
  position: relative;
  ::before {
    background: linear-gradient(
      104.42deg,
      #b06fd8 35.33%,
      rgba(89, 122, 238, 0.7) 93.21%
    );
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 23px;
    padding: 2px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: source-out;
    mask-composite: exclude;
  }
`

const MintSmartNFT = (): JSX.Element => {
  const {
    query: { referral },
  } = useRouter()
  const { address, status, chainId } = useAccount()
  const [isSmallScreen] = useSmallScreen()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [numberMinted, setNumberMinted] = useState('-')
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
    if (
      nftInfo?.data?.time !== TIME_PLACEHOLDER &&
      nftInfo?.data?.tokenIds?.length
    ) {
      const mintId = nftInfo?.data?.tokenIds?.at(-1)
      console.log('mintId', mintId)
      setMintId(mintId)
      setMintTime(nftInfo?.data?.time)
      setIsLoadingInfo(false)
      // return mintId
      return nftInfo?.data?.tokenIds?.at(-1)
    }
    setIsLoadingInfo(false)
    return undefined
  }
  const { writeContracts } = useWriteContracts({
    mutation: {
      onSuccess: async (id) => {
        console.log('onSuccess')
        setMintTime(TIME_PLACEHOLDER)
        let mintId = null
        let retry = 0
        while (!mintId) {
          if (retry < 20) {
            mintId = await getNFTInfo()
            console.log('retry', retry)
          } else break
          retry++
        }
        if (mintId) {
          // await updateNFTCollectors().catch(console.error)
          console.log('id', id)
        }
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

  // const updateNFTCollectors = async () => {
  //   const NFTCollectors = await getNFTsCollectors(NFTAddress)
  //   NFTCollectors.reduce((p, c) => p + c?.tokenBalances?.length, 0)
  //   setNumberMinted(
  //     NFTCollectors.reduce(
  //       (p, c) => p + c?.tokenBalances?.length,
  //       0
  //     )?.toString()
  //   )
  // }

  const celebrateMint = () => {
    setShowConfetti(true)
  }

  // useEffect(() => {
  //   updateNFTCollectors().catch(console.error)
  // }, [])

  useEffect(() => {
    if (status === 'connected' && startTimeRef.current) {
      console.log(startTimeRef.current)
      const params = {
        address,
        timestamp: startTimeRef.current,
        referral,
      }
      console.log('params', params)
      api(`/api/nft/update-timestamp`, params)
    }
  }, [status, address, startTimeRef, referral])

  useEffect(() => {
    if (address && status === 'connected') {
      getNFTInfo()
    }
  }, [address, status])

  useEffect(() => {
    if (mintId > 0) {
      console.log('celebrateMint')
      celebrateMint()
    }
  }, [mintId])

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

  const shareLink = `https://app.banklessacademy.com/onchain-summer-challenge?time=${mintTime}&referral=${address}`
  const share = `Join the 🔆 OᑎᑕᕼᗩIᑎ ᔑᑌᗰᗰEᖇ 🔆 Challenge by @BanklessAcademy
I just got onchain in ${timeToSeconds(
    mintTime
  )} seconds, using my new @Coinbase Smart Wallet 🔑

How fast can you go onchain? #OnchainSummer
Take the challenge and mint your free NFT on @base now ↓`

  const twitterLink = generateTwitterLink(share, shareLink)

  const farcasterLink = generateFarcasterLink(share, shareLink)
    ?.replace(
      encodeURIComponent('#OnchainSummer'),
      encodeURIComponent('/onchainsummer')
    )
    ?.replace(encodeURIComponent('@Coinbase'), encodeURIComponent('@coinbase'))

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

  const step = !isRunning ? 0 : status !== 'connected' ? 1 : !mintId ? 2 : 3

  return (
    <>
      <StyledBox p="0 24px 24px 24px">
        <Card
          p={isSmallScreen ? 6 : 12}
          borderRadius="20px !important"
          maxW="700px"
          m="auto"
        >
          <Text
            as="h2"
            fontSize={isSmallScreen ? 'xl' : '4xl'}
            fontWeight="bold"
            textAlign="center"
            pb={isSmallScreen ? '2' : '4'}
          >
            {step === 1 ? (
              `1. Connect Smart Wallet`
            ) : step === 2 ? (
              `2. Go onchain`
            ) : step === 3 ? (
              `Challenge Complete!`
            ) : (
              <>
                {'How fast can you go '}
                <Keyword
                  definition={`Onchain refers to direct interactions with a blockchain.`}
                  keyword={'onchain'}
                />
                ?
              </>
            )}
          </Text>
          <ProgressSteps step={step} total={4} />
          <Box maxW="500px" m="auto" position="relative" ref={parentRef}>
            <NFTImage>
              <Image
                src="https://app.banklessacademy.com/images/smart-wallet.gif"
                width="100%"
                height="100%"
              />
            </NFTImage>
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
                      variant="primaryBig"
                      size="lg"
                    >
                      Connect
                    </Button>
                  ))}
                </>
              )}
              {!isLoadingInfo && !mintId && status === 'connected' && (
                <Button
                  variant="primaryGold"
                  padding="23px !important"
                  borderRadius="60px"
                  size="lg"
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
                  Submit Time
                </Button>
              )}
            </Box>
            {!isLoadingInfo && status === 'connected' && mintId !== null && (
              <>
                <Box textAlign="center">
                  {`Congratulations on creating your new `}
                  <Keyword
                    definition={`Smart wallets offer browser-based access, passkey onboarding, and simplified gasless transactions without complex setups.`}
                    keyword={'smart wallet'}
                  />
                  {`!`}
                  <br />
                  <br />
                  {`Your resulting time has been saved onchain and you’ve been sent the above `}
                  <Keyword
                    definition={`An NFT is a unique digital item, like a one-of-a-kind collectible, stored on a blockchain to prove ownership and authenticity.`}
                    keyword={'NFT'}
                  />
                  {` to commemorate this special moment!`}
                </Box>
                <Box textAlign="center" p="16px" maxW="300px" m="auto">
                  <Box pb="1">
                    <ExternalLink href={twitterLink} mr="2">
                      <Button
                        variant="primaryGold"
                        w="100%"
                        borderBottomRadius="0"
                        leftIcon={
                          <ChakraImage
                            width="20px"
                            src="/images/TwitterX.svg"
                          />
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
                          <ChakraImage
                            width="20px"
                            src="/images/Farcaster.svg"
                          />
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
                <Box textAlign="center">
                  <ExternalLink href={`/feedback?tally=wbOd0o`}>
                    📝 Leave feedback
                  </ExternalLink>
                  {' about your experience.'}
                </Box>
              </>
            )}
            {status === 'connected' && isLoadingInfo && (
              <Box textAlign="center">Loading ...</Box>
            )}
            {status === 'connected' && !isLoadingInfo && (
              <Box display="flex" justifyContent="center" mt="4">
                <Button
                  variant="secondaryBig"
                  size="lg"
                  onClick={() => {
                    handleReset()
                    setShowConfetti(false)
                    disconnect()
                  }}
                >
                  Disconnect {shortenAddress(address)}
                </Button>
              </Box>
            )}
            <Box display="flex" justifyContent="center" mt="4">
              {isRunning && status !== 'connected' && !isLoadingInfo && (
                <Button variant="secondaryBig" size="lg" onClick={handleReset}>
                  Reset timer
                </Button>
              )}
              {step === 0 && (
                <Button variant="primaryBig" size="lg" onClick={handleStart}>
                  Start Challenge
                </Button>
              )}
            </Box>
          </Box>
        </Card>
      </StyledBox>
      {/* avoid loading on ss */}
      {step !== 0 && (
        <Confetti
          showConfetti={showConfetti}
          onConfettiComplete={() => {
            setShowConfetti(false)
          }}
        />
      )}
    </>
  )
}
export default MintSmartNFT
