import React, { useState, useEffect } from 'react'
import {
  Button,
  Text,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  SimpleGrid,
  Box,
  Image,
  Heading,
  useDisclosure,
  Avatar,
} from '@chakra-ui/react'
import { Wallet } from 'phosphor-react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useWeb3Modal } from '@web3modal/react'
import { useAccount } from 'wagmi'
import { disconnect, fetchEnsName, fetchEnsAvatar } from '@wagmi/core'

// TEMP: fix https://github.com/chakra-ui/chakra-ui/issues/5896
import { PopoverTrigger as OrigPopoverTrigger } from '@chakra-ui/react'
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger

import ExternalLink from 'components/ExternalLink'
import { LESSONS } from 'constants/index'
import {
  MINTKUDOS_API,
  MINTKUDOS_COMMUNITY_ID,
  KUDOS_IDS,
} from 'constants/kudos'
import { KudosType } from 'entities/kudos'
import { shortenAddress } from 'utils'

const Overlay = styled(Box)`
  opacity: 1;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: var(--chakra-colors-blackAlpha-600);
  z-index: 1;
  backdrop-filter: blur(2px);
`

export interface Options {
  route?: 'Account' | 'ConnectWallet' | 'Help' | 'SelectNetwork'
}

const ConnectWalletButton = ({
  isSmallScreen,
}: {
  isSmallScreen: boolean
}): React.ReactElement => {
  const { open } = useWeb3Modal()
  const { address, isConnecting, isDisconnected } = useAccount()
  const [ensName, setEnsName] = useState(null)
  const [ensAvatar, setEnsAvatar] = useState(null)
  const [isPopOverOn, setIsPopOverOn] = useState(false)
  const [walletIsLoading, setWalletIsLoading] = useState(false)
  const [kudos, setKudos] = useState<KudosType[]>([])
  const [connectWalletPopupLS, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )
  const [, setKudosMintedLS] = useLocalStorage('kudosMinted', [])
  const [refreshKudosLS, setRefreshKudosLS] = useLocalStorage(
    'refreshKudos',
    false
  )
  const { onClose } = useDisclosure()
  const { asPath } = useRouter()

  const isLessonPage = asPath.includes('/lessons/')

  async function onOpen() {
    await open()
  }

  async function disconnectWallet() {
    setIsPopOverOn(false)
    await disconnect()
    setWalletIsLoading(false)
    setKudos([])
  }

  async function updateName() {
    const ensName = await fetchEnsName({
      address,
      chainId: 1,
    })
    const ensAvatar = await fetchEnsAvatar({
      address,
      chainId: 1,
    })
    setEnsName(ensName)
    setEnsAvatar(ensAvatar)
  }

  function refreshKudos() {
    axios
      .get(
        `${MINTKUDOS_API}/v1/wallets/${address}/tokens?limit=100&communityId=${MINTKUDOS_COMMUNITY_ID}&claimStatus=claimed`
      )
      .then((res) => {
        const data = res.data.data
        if (Array.isArray(data)) {
          setKudosMintedLS(
            KUDOS_IDS.filter((kudosId) =>
              data.some((kudos: KudosType) => kudos.kudosTokenId === kudosId)
            )
          )
          setKudos(
            data.filter((kudos: KudosType) =>
              KUDOS_IDS.includes(kudos.kudosTokenId)
            )
          )
        }
      })
  }

  useEffect(() => {
    setEnsName(null)
    setEnsAvatar(null)
    if (address) {
      updateName()
      if (localStorage.getItem('current_wallet') !== address.toLowerCase()) {
        localStorage.removeItem('passport')
      }
      localStorage.setItem('current_wallet', address.toLowerCase())
      const wallets = localStorage.getItem('wallets')
        ? JSON.parse(localStorage.getItem('wallets'))
        : []
      if (!wallets.includes(address.toLowerCase())) {
        wallets.push(address.toLowerCase())
        localStorage.setItem('wallets', JSON.stringify(wallets))
      }
      refreshKudos()
    }
  }, [address])

  useEffect(() => {
    if (refreshKudosLS) {
      setRefreshKudosLS(false)
      refreshKudos()
    }
  }, [refreshKudosLS])

  const nbKudosToDisplay = kudos?.map((k) =>
    LESSONS.find((lesson) => lesson.kudosId === k.kudosTokenId)
  )?.length

  return (
    <>
      {!isDisconnected ? (
        <Popover
          isOpen={isPopOverOn}
          placement="bottom-end"
          returnFocusOnClose={false}
          onClose={() => {
            onClose()
            setIsPopOverOn(false)
          }}
        >
          <PopoverTrigger>
            <Button
              variant="secondary"
              size={isSmallScreen ? 'sm' : 'md'}
              leftIcon={
                <Avatar
                  w="28px"
                  h="28px"
                  src={isConnecting ? null : ensAvatar}
                  loading="eager"
                  icon={
                    <Image
                      borderRadius="50%"
                      src="/images/default_avatar.png"
                    />
                  }
                />
              }
              onClick={() => setIsPopOverOn(!isPopOverOn)}
            >
              <Text maxW="200px" display="flex" alignItems="center" isTruncated>
                {isConnecting
                  ? '...'
                  : typeof ensName === 'string'
                  ? ensName
                  : shortenAddress(address)}
              </Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Box textAlign="center" m="2">
                <Button
                  isFullWidth
                  size={isSmallScreen ? 'sm' : 'md'}
                  leftIcon={<Wallet weight="bold" />}
                  onClick={disconnectWallet}
                >
                  Disconnect wallet
                </Button>
              </Box>
              {/* TODO: move to dedicated component? */}
              {kudos?.length > 0 && (
                <>
                  <Text fontSize="xl" fontWeight="bold" textAlign="center">
                    My Academy Badges
                  </Text>
                  <Box
                    h="215px"
                    overflowY={nbKudosToDisplay <= 6 ? 'hidden' : 'scroll'}
                    overflowX="hidden"
                    backgroundColor="blackAlpha.200"
                    borderRadius="10px"
                  >
                    <SimpleGrid columns={3} spacing={3} p={3}>
                      {kudos?.map((k, index) => {
                        const lesson = LESSONS.find(
                          (lesson) => lesson.kudosId === k.kudosTokenId
                        )
                        if (lesson) {
                          if (lesson.kudosImageLink.includes('.mp4')) {
                            return (
                              <Box
                                key={`kudos-${index}`}
                                height="78px"
                                width="78px"
                                boxShadow="0px 0px 4px 2px #00000060"
                                borderRadius="3px"
                                overflow="hidden"
                                border="1px solid #4b474b"
                              >
                                <video
                                  autoPlay
                                  loop
                                  playsInline
                                  muted
                                  style={{
                                    borderRadius: '3px',
                                    overflow: 'hidden',
                                  }}
                                >
                                  <source
                                    src={lesson.kudosImageLink}
                                    type="video/mp4"
                                  ></source>
                                </video>
                              </Box>
                            )
                          } else
                            return (
                              <Box
                                key={`kudos-${index}`}
                                justifySelf="center"
                                boxShadow="0px 0px 4px 2px #00000060"
                                borderRadius="3px"
                                backgroundColor="blackAlpha.300"
                                p={1}
                              >
                                <Image
                                  src={k.assetUrl}
                                  width="70px"
                                  height="70px"
                                  alt={lesson.name}
                                  title={lesson.name}
                                />
                              </Box>
                            )
                        }
                      })}
                    </SimpleGrid>
                  </Box>
                </>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <Popover
          returnFocusOnClose={false}
          placement="bottom-end"
          isOpen={connectWalletPopupLS && isLessonPage}
          onClose={() => {
            onClose()
            setConnectWalletPopupLS(false)
          }}
        >
          <Overlay
            hidden={!(connectWalletPopupLS && isLessonPage)}
            margin="0 !important"
          />
          <PopoverTrigger>
            <Button
              onClick={onOpen}
              size={isSmallScreen ? 'sm' : 'md'}
              leftIcon={<Wallet weight="bold" />}
              isLoading={walletIsLoading}
              loadingText="Connecting wallet"
              zIndex={2}
              variant="primary"
            >
              Connect wallet
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Heading as="h2" size="md" textAlign="center" my="2">
                Connect your wallet to proceed.
              </Heading>
              <Text textAlign="center">
                {`Don’t know how? `}
                <ExternalLink href="/faq#edf3a4658d3d4aa78eac62e1dcf68978">
                  Get help here
                </ExternalLink>
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </>
  )
}

export default ConnectWalletButton
