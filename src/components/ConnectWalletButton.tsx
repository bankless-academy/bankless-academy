/* eslint-disable no-console */
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
import { useAccount, useNetwork, useSignMessage } from 'wagmi'
import { disconnect, fetchEnsName, fetchEnsAvatar } from '@wagmi/core'
import makeBlockie from 'ethereum-blockies-base64'
import { SiweMessage } from 'siwe'

// TEMP: fix https://github.com/chakra-ui/chakra-ui/issues/5896
import { PopoverTrigger as OrigPopoverTrigger } from '@chakra-ui/react'
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger

import ExternalLink from 'components/ExternalLink'
import { LESSONS, SIWE_ENABLED } from 'constants/index'
import {
  MINTKUDOS_API,
  MINTKUDOS_COMMUNITY_ID,
  KUDOS_IDS,
} from 'constants/kudos'
import { KudosType } from 'entities/kudos'
import { getUD, getLensProfile, shortenAddress } from 'utils'

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
  const { connector, address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const [waitingForSIWE, setWaitingForSIWE] = useState(false)
  const { signMessageAsync } = useSignMessage()
  const [name, setName] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [kudos, setKudos] = useState<KudosType[]>([])
  const [siwe, setSiweLS] = useLocalStorage('siwe', '')
  const [connectWalletPopupLS, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )
  const [, setKudosMintedLS] = useLocalStorage('kudosMinted', [])
  const [refreshKudosLS, setRefreshKudosLS] = useLocalStorage(
    'refreshKudos',
    false
  )
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { asPath } = useRouter()

  const isLessonPage = asPath.includes('/lessons/')

  async function openModal() {
    await open()
  }

  async function disconnectWallet() {
    onClose()
    await disconnect()
    setWaitingForSIWE(false)
    setSiweLS('')
    setName(null)
    setAvatar(null)
    setKudos([])
    await fetch('/api/siwe/logout')
  }

  async function updateName(address) {
    const ensName = await fetchEnsName({
      address,
      chainId: 1,
    })
    if (ensName) {
      setName(ensName)
      const ensAvatar = await fetchEnsAvatar({
        address,
        chainId: 1,
      })
      if (ensAvatar) setAvatar(ensAvatar)
    } else {
      const lensProfile = await getLensProfile(address)
      if (lensProfile.name) {
        setName(lensProfile.name)
      } else {
        const ud = await getUD(address)
        if (ud?.length) {
          setName(ud)
          setAvatar(`https://resolve.unstoppabledomains.com/image-src/${ud}`)
        }
      }
      if (lensProfile.avatar) {
        setAvatar(lensProfile.avatar)
      }
    }
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

  const loadAddress = (address) => {
    onClose()
    if (localStorage.getItem('current_wallet') !== address.toLowerCase()) {
      localStorage.removeItem('passport')
    }
    localStorage.setItem('current_wallet', address.toLowerCase())
    setName(shortenAddress(address))
    setAvatar(makeBlockie(address))
    updateName(address)
    const wallets = localStorage.getItem('wallets')
      ? JSON.parse(localStorage.getItem('wallets'))
      : []
    if (!wallets.includes(address.toLowerCase())) {
      wallets.push(address.toLowerCase())
      localStorage.setItem('wallets', JSON.stringify(wallets))
    }
    refreshKudos()
  }

  const verify = async () => {
    try {
      const verifyRes = await fetch('/api/siwe/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: siwe,
      })
      if (verifyRes.ok) {
        loadAddress(address)
      } else {
        console.error('pb SIWE signature')
        disconnectWallet()
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (siwe?.length) {
      verify()
    }
  }, [])

  const signIn = async () => {
    const timeout = setTimeout(() => {
      console.log('SIWE timeout')
      disconnectWallet()
    }, 6000)
    try {
      const chainId = chain?.id
      if (!chainId || waitingForSIWE) return
      const nonceRes = await fetch('/api/siwe/nonce')
      const nonce = await nonceRes.text()

      setWaitingForSIWE(true)
      // Create SIWE message with pre-fetched nonce and sign with wallet
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce,
      })
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })
      clearTimeout(timeout)

      // Verify signature
      const siwe = JSON.stringify({ message, signature })
      // TODO: use /me to get verified address
      // const res = await fetch('/api/siwe/me')
      // TODO: add support for multiple windows open
      // https://github.com/BanklessDAO/bankless-academy/pull/90/commits/d130d22e70ad146b1e619133864d03a8bf4c3cb4#diff-caedf14611e4652b0b5f0287a5bc59621a76c1d0b41c544302d3c8c1a7641d22L107
      const verifyRes = await fetch('/api/siwe/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: siwe,
      })
      if (!verifyRes.ok) throw new Error('Error verifying message')
      setSiweLS(siwe)
      loadAddress(address)
      setWaitingForSIWE(false)
    } catch (error) {
      clearTimeout(timeout)
      setWaitingForSIWE(false)
      setName(null)
      setAvatar(null)
    }
  }

  useEffect(() => {
    const { message }: any = siwe?.length ? JSON.parse(siwe) : {}
    if (connector && address && message?.address !== address) {
      signIn()
    }
  }, [siwe, address, connector])

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
      {isConnected && !waitingForSIWE ? (
        <Popover
          isOpen={isOpen}
          placement="bottom-end"
          returnFocusOnClose={false}
          onOpen={onOpen}
          onClose={onClose}
        >
          <PopoverTrigger>
            <Button
              variant={name ? 'secondary' : 'primary'}
              size={isSmallScreen ? 'sm' : 'md'}
              leftIcon={
                <Avatar
                  w="28px"
                  h="28px"
                  src={avatar}
                  loading="eager"
                  icon={
                    <Image
                      borderRadius="50%"
                      src="/images/default_avatar.png"
                    />
                  }
                />
              }
              onClick={() => onOpen()}
            >
              <Text maxW="200px" display="flex" alignItems="center" isTruncated>
                {name || 'Click here to sign in'}
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
              onClick={openModal}
              size={isSmallScreen ? 'sm' : 'md'}
              leftIcon={<Wallet weight="bold" />}
              isLoading={waitingForSIWE}
              loadingText={
                SIWE_ENABLED ? 'Sign In With Ethereum' : 'Connecting wallet'
              }
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
