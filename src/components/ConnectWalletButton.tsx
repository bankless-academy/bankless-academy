/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import {
  Button,
  Text,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Box,
  Image,
  Heading,
  useDisclosure,
} from '@chakra-ui/react'
import { Wallet } from '@phosphor-icons/react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useNetwork, useSignMessage, useDisconnect } from 'wagmi'
import { fetchEnsName, fetchEnsAvatar } from '@wagmi/core'
import makeBlockie from 'ethereum-blockies-base64'
import { SiweMessage } from 'siwe'
import { useTranslation } from 'react-i18next'

// TEMP: fix https://github.com/chakra-ui/chakra-ui/issues/5896
import { PopoverTrigger as OrigPopoverTrigger } from '@chakra-ui/react'
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger

import ExternalLink from 'components/ExternalLink'
import { SIWE_ENABLED } from 'constants/index'
import { BADGE_IDS } from 'constants/badges'
import { getUD, getLensProfile, shortenAddress, api } from 'utils'
import Badges from 'components/Badges'
// import { polygon, optimism } from 'wagmi/chains'

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
  const { t } = useTranslation()
  const { open } = useWeb3Modal()
  const { connector, address, isConnected } = useAccount()
  const { chain } = useNetwork()
  const [waitingForSIWE, setWaitingForSIWE] = useState(false)
  const [isDisconnecting, setIsDisconnecting] = useState(false)
  const { signMessageAsync } = useSignMessage()
  const [name, setName] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [badges, setBadges] = useState<number[]>([])
  const [siwe, setSiweLS] = useLocalStorage('siwe', '')
  const [connectWalletPopupLS, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )
  const [ens, setEns] = useLocalStorage(`ens-cache`, {})
  const [, setBadgesMintedLS] = useLocalStorage('badgesMinted', [])
  const [, setKudosMintedLS] = useLocalStorage('kudosMinted', [])
  const [refreshBadgesLS, setRefreshBadgesLS] = useLocalStorage(
    'refreshBadges',
    false
  )
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { asPath } = useRouter()
  const { disconnect } = useDisconnect({
    onError(error) {
      console.log('Error while disconnecting', error)
    },
    onSuccess() {
      console.log('Disconnect success')
      // HACK: mobile wallet disconnect issues
      if (localStorage.getItem('wagmi.wallet').includes('walletConnect')) {
        console.log('force reload')
        location.reload()
      }
    },
  })

  const isLessonPage = asPath.includes('/lessons/')

  // const networkVersion =
  //   typeof window !== 'undefined'
  //     ? (window as any).ethereum?.networkVersion
  //     : ''
  // if (networkVersion === '137') setDefaultChain(polygon)
  // if (networkVersion === '10') setDefaultChain(optimism)

  async function openModal() {
    await open({ view: 'Connect' })
  }

  async function disconnectWallet() {
    try {
      setWaitingForSIWE(false)
      setIsDisconnecting(true)
      onClose()
      setSiweLS('')
      setName(null)
      setAvatar(null)
      await fetch('/api/siwe/logout')
      setIsDisconnecting(false)
      disconnect()
    } catch (error) {
      console.error(error)
    }
  }

  async function updateName(address) {
    let name = shortenAddress(address)
    let avatar = makeBlockie(address)
    const replaceName = (newName) => {
      if (name !== newName) {
        setName(newName)
        name = newName
      }
    }
    const replaceAvatar = (newAvatar) => {
      if (avatar !== newAvatar) {
        setAvatar(newAvatar)
        avatar = newAvatar
      }
    }
    if (ens[address]?.name) setName(ens[address].name)
    else setName(name)
    if (ens[address]?.avatar) setAvatar(ens[address].avatar)
    else setAvatar(avatar)

    const ensName = await fetchEnsName({
      address,
      chainId: 1,
    })
    if (ensName) {
      replaceName(ensName)
      const ensAvatar = await fetchEnsAvatar({
        name: ensName,
        chainId: 1,
      })
      if (ensAvatar) replaceAvatar(ensAvatar)
    } else {
      const lensProfile = await getLensProfile(address)
      if (lensProfile.name) {
        replaceName(lensProfile.name)
        if (lensProfile.avatar) {
          replaceAvatar(lensProfile.avatar)
        }
      } else {
        const ud = await getUD(address)
        if (ud?.length) {
          replaceName(ud)
          replaceAvatar(
            `https://resolve.unstoppabledomains.com/image-src/${ud}`
          )
        }
      }
    }
    const ensCache = JSON.parse(JSON.stringify(ens))
    ensCache[address] = { name, avatar }
    setEns(ensCache)
  }

  function refreshBadges() {
    if (address)
      axios.get(`/api/user/${address}`).then((res) => {
        const badgeTokenIds = res?.data?.badgeTokenIds
        if (Array.isArray(badgeTokenIds)) {
          const badgesMinted = BADGE_IDS.filter((badgeId) =>
            badgeTokenIds.includes(badgeId)
          )
          // console.log(badgesMinted)
          setBadgesMintedLS(badgesMinted)
          for (const badgeId of BADGE_IDS) {
            localStorage.setItem(
              `isBadgeMinted-${badgeId.toString()}`,
              badgesMinted.includes(badgeId).toString()
            )
          }
          setBadges(badgesMinted)
        }
        const kudosTokenIds = res?.data?.kudosTokenIds
        if (Array.isArray(kudosTokenIds)) {
          setKudosMintedLS(kudosTokenIds)
        }
      })
  }

  const loadAddress = (address) => {
    setConnectWalletPopupLS(false)
    onClose()
    if (localStorage.getItem('current_wallet') !== address?.toLowerCase()) {
      localStorage.removeItem('passport')
    }
    localStorage.setItem('current_wallet', address?.toLowerCase())
    updateName(address)
    const wallets = localStorage.getItem('wallets')
      ? JSON.parse(localStorage.getItem('wallets'))
      : []
    if (!wallets.includes(address.toLowerCase())) {
      wallets.push(address.toLowerCase())
      localStorage.setItem('wallets', JSON.stringify(wallets))
    }
    refreshBadges()
  }

  const verify = async () => {
    try {
      const verifyRes = await api('/api/siwe/verify', JSON.parse(siwe))
      if (verifyRes.data.ok) {
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
    const chainId = chain?.id
    if (!chainId || waitingForSIWE || isDisconnecting) return
    const timeout = setTimeout(() => {
      console.log('SIWE timeout')
      disconnectWallet()
    }, 60000)
    try {
      setWaitingForSIWE(true)
      const nonceRes = await fetch('/api/siwe/nonce')
      const nonce = await nonceRes.text()

      // Create SIWE message with pre-fetched nonce and sign with wallet
      // https://wagmi.sh/examples/sign-in-with-ethereum
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: t('Sign in with Ethereum to the app.'),
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce,
      })
      await new Promise((resolve) => setTimeout(resolve, 500))
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })
      clearTimeout(timeout)

      // Verify signature
      const siwe = { message, signature }
      // TODO: use /me to get verified address
      // const res = await fetch('/api/siwe/me')
      // TODO: add support for multiple windows open
      const verifyRes = await api('/api/siwe/verify', siwe)
      // https://github.com/bankless-academy/bankless-academy/pull/90/commits/d130d22e70ad146b1e619133864d03a8bf4c3cb4#diff-caedf14611e4652b0b5f0287a5bc59621a76c1d0b41c544302d3c8c1a7641d22L107
      if (!verifyRes.data.ok) throw new Error('Error verifying message')
      setSiweLS(JSON.stringify(siwe))
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
    if (address && !SIWE_ENABLED) {
      // DO nothing
    } else {
      const { message }: any = siwe?.length ? JSON.parse(siwe) : {}
      if (connector && address && message?.address !== address) {
        signIn()
      }
    }
  }, [siwe, address, connector])

  useEffect(() => {
    if (address && !SIWE_ENABLED) {
      loadAddress(address)
    }
  }, [address])

  useEffect(() => {
    if (refreshBadgesLS) {
      setRefreshBadgesLS(false)
      refreshBadges()
    }
  }, [refreshBadgesLS])

  return (
    <>
      {isConnected && !waitingForSIWE && name ? (
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
                <Image
                  src={avatar || '/images/default_avatar.png'}
                  borderRadius="50%"
                  background="gray"
                  w={isSmallScreen ? '22px' : '28px'}
                  h={isSmallScreen ? '22px' : '28px'}
                />
              }
              onClick={() => onOpen()}
            >
              <Text maxW="200px" display="flex" alignItems="center" isTruncated>
                {name || t('Click here to sign in')}
              </Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Box textAlign="center" m="2">
                <Button
                  w="100%"
                  bg="var(--chakra-colors-whiteAlpha-500)"
                  size={isSmallScreen ? 'sm' : 'md'}
                  leftIcon={<Wallet weight="bold" />}
                  onClick={disconnectWallet}
                >
                  {t('Disconnect wallet')}
                </Button>
              </Box>
              <Badges badges={badges} />
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
              isLoading={waitingForSIWE || isDisconnecting}
              loadingText={
                isDisconnecting
                  ? t('Disconnecting')
                  : SIWE_ENABLED
                  ? t('Sign In With Ethereum')
                  : t('Connecting wallet')
              }
              zIndex={2}
              variant="primary"
            >
              {t('Connect wallet')}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Heading as="h2" size="md" textAlign="center" my="2">
                {t('Connect your wallet to proceed.')}
              </Heading>
              <Text textAlign="center">
                {`Don’t know how? `}
                <ExternalLink
                  underline="true"
                  href="/faq#edf3a4658d3d4aa78eac62e1dcf68978"
                >
                  {t('Get help here')}
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
