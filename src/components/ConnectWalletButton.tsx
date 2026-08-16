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
import {
  Wallet,
  UserCircle,
  SignOut,
  ArrowSquareOut,
} from '@phosphor-icons/react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useAppKit } from '@reown/appkit/react'
import { useAccount, useSignMessage } from 'wagmi'
import { useDisconnect } from '@reown/appkit/react'
import makeBlockie from 'ethereum-blockies-base64'
import { SiweMessage } from 'siwe'
import { useTranslation } from 'react-i18next'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

// TEMP: fix https://github.com/chakra-ui/chakra-ui/issues/5896
import { PopoverTrigger as OrigPopoverTrigger } from '@chakra-ui/react'
export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger

import ExternalLink from 'components/ExternalLink'
import InternalLink from 'components/InternalLink'
import {
  DEFAULT_AVATAR,
  DEFAULT_ENS,
  IS_WALLET_DISABLED,
  SIWE_ENABLED,
} from 'constants/index'
import { BADGE_IDS } from 'constants/badges'
import { getUD, shortenAddress, api } from 'utils/index'
import { useSmallScreen } from 'hooks/index'
import OnrampButton from 'components/OnrampButton'
import BridgeButton from 'components/BridgeButton'

const Overlay = styled(Box)`
  opacity: 1;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: var(--chakra-colors-blackAlpha-600);
  z-index: 10;
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
  // `isSmallScreen` (<=800px) only picks the button size. The label has its own
  // threshold: the nav row is logo + language + this + menu, and it is tightest
  // between 390px and 500px, where the full 91px-wide wordmark is still shown
  // alongside the compressed small-screen controls.
  const [, , isNarrowScreen] = useSmallScreen()
  const { open } = useAppKit()
  const { address, connector, chainId } = useAccount()
  const router = useRouter()
  const { asPath } = router
  // const { simulate } = query
  // if (simulate && asPath === '/explorer/web3explorer.eth?simulate=true')
  //   address = '0xb00e26e79352882391604e24b371a3f3c8658e8c'
  const [waitingForSIWE, setWaitingForSIWE] = useState(false)
  const [isDisconnecting, setIsDisconnecting] = useState(false)
  const [, setScore] = useLocalStorage(`score`, 0)
  const { signMessageAsync } = useSignMessage()
  const [name, setName] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [, setBadges] = useState<number[]>([])
  const [siwe, setSiweLS] = useLocalStorage('siwe', '')
  const [connectWalletPopupLS, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )
  const [nameCache, setNameCache] = useLocalStorage(`name-cache`, {})
  const [ens, setEns] = useState('')
  const [, setBadgesMintedLS] = useLocalStorage('badgesMinted', [])
  const [, setKudosMintedLS] = useLocalStorage('kudosMinted', [])
  const [currentWallet, setCurrentWallet] = useLocalStorage(
    'current_wallet',
    ''
  )
  const [referrer, setReferrer] = useLocalStorage('referrer', '')
  const [emailLinked, setEmailLinked] = useLocalStorage('emailLinked', false)
  const [refreshBadgesLS, setRefreshBadgesLS] = useLocalStorage(
    'refreshBadges',
    false
  )
  const [, setCommunity] = useLocalStorage(`community`, '')
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { disconnect } = useDisconnect()
  const { referral, referrer: referrerQuery } = router.query
  const [email] = useLocalStorage('email', localStorage.getItem('email') || '')

  useEffect(() => {
    const getAddress = async (ens: string) => {
      try {
        const res = await fetch(`https://api.ensdata.net/${ens}`)
        const data = await res.json()
        console.log('referralAddress', data)
        return data.address?.toLowerCase()
      } catch (error) {
        console.log(error)
        return ''
      }
    }

    const extractAdressFromUrl = (pathname) => {
      const segments = pathname.split('/')
      return segments[segments.length - 1].split('?')[0]
    }

    const handleReferral = async () => {
      // Process referral from URL
      const referralString =
        (referral as string) === 'true' && asPath?.startsWith('/explorer/')
          ? extractAdressFromUrl(asPath)
          : (referral as string)

      if (referralString?.length) {
        const referralAddress = referralString?.includes('.')
          ? await getAddress(referralString)
          : referralString?.toLowerCase()

        if (referrer === '' && currentWallet !== referralAddress)
          setReferrer(referralAddress)
      }

      // Process referrer from query parameter
      if (
        referrerQuery &&
        typeof referrerQuery === 'string' &&
        referrerQuery.length > 0
      ) {
        const referrerAddress = referrerQuery.includes('.')
          ? await getAddress(referrerQuery)
          : referrerQuery.toLowerCase()

        if (referrer === '' && currentWallet !== referrerAddress)
          setReferrer(referrerAddress)
      }
    }

    if (currentWallet === referrer) setReferrer('')
    handleReferral()
  }, [asPath, referral, referrerQuery, currentWallet, referrer, setReferrer])

  const isLessonPage = asPath.includes('/lessons')
  const isProfilePage = asPath.includes('/explorer/my-profile')
  // Don't offer the wallet lesson to someone already reading it.
  const isWalletLesson = asPath.includes('creating-a-crypto-wallet')

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
    // console.log('updateName')
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
    const addressLower = address?.toLowerCase()
    if (nameCache[addressLower]?.name) setName(nameCache[addressLower].name)
    else setName(name)
    if (nameCache[addressLower]?.avatar)
      setAvatar(nameCache[addressLower].avatar)
    else setAvatar(avatar)

    const getEnsData = async (address: string) => {
      try {
        const res = await fetch(`https://api.ensdata.net/${address}`)
        const data = await res.json()
        console.log('ensData', data)
        return data
      } catch (error) {
        console.log(error)
        return null
      }
    }

    const ensData = await getEnsData(addressLower)
    console.log('ensData', ensData)

    const ensName =
      address.toLowerCase() === '0xb00e26e79352882391604e24b371a3f3c8658e8c'
        ? DEFAULT_ENS
        : ensData?.ens
    // console.log(ensName)
    if (ensName) {
      setEns(ensName)
      replaceName(ensName)
      const ensAvatar = ensData?.avatar_small
      // console.log(ensAvatar)
      if (ensAvatar) replaceAvatar(ensAvatar)
      if (ensName === DEFAULT_ENS) replaceAvatar(DEFAULT_AVATAR)
    } else {
      setEns('')
      // Check for basename
      const { data: baseEns } = await api(
        `/api/base-ens?address=${address}`,
        {}
      )
      const basename = baseEns?.basename
      if (basename) {
        replaceName(basename)
        const basenameAvatar = baseEns?.basenameAvatar
        if (basenameAvatar) replaceAvatar(basenameAvatar)
      } else {
        // Lens support temporarily disabled
        // const { data: lensProfile } = await api(
        //   `/api/lens?address=${address}`,
        //   {}
        // )
        // console.log(lensProfile)
        // if (lensProfile.name) {
        //   replaceName(lensProfile.name)
        //   if (lensProfile.avatar) {
        //     replaceAvatar(lensProfile.avatar)
        //   }
        // } else {
        const ud = await getUD(address)
        if (ud?.length) {
          replaceName(ud)
          replaceAvatar(
            `https://api.unstoppabledomains.com/metadata/image-src/${ud}`
          )
        }
        // }
      }
    }
    const newNameCache = JSON.parse(JSON.stringify(nameCache))
    newNameCache[addressLower] = { name, avatar }
    if (name?.includes('.')) {
      newNameCache[name] = { name, avatar }
    }
    setNameCache(newNameCache)
  }

  function refreshBadges() {
    if (address)
      axios.get(`/api/user/${address}`).then(async (res) => {
        const community = res?.data?.community
        setCommunity(community)
        const score = res?.data?.stats?.score || 0
        setScore(score)
        if (
          !emailLinked &&
          !res?.data?.emailLinked &&
          email?.length &&
          address?.length
        ) {
          try {
            const res = await api('/api/link-email', { email, address })
            console.log('res', res.data)
            if (res.data?.message) {
              setEmailLinked(true)
            }
          } catch (error) {
            console.error('error', error)
          }
        }
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
    if (currentWallet !== address?.toLowerCase()) {
      localStorage.removeItem('passport')
    }
    setCurrentWallet(address?.toLowerCase())
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
    if (SIWE_ENABLED && siwe?.length) {
      verify()
    }
  }, [])

  const signIn = async () => {
    // console.log('signIn')
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
        account: address,
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
      console.log('loadAddress', address)
      loadAddress(address)
    }
  }, [address])

  useEffect(() => {
    if (refreshBadgesLS) {
      setRefreshBadgesLS(false)
      refreshBadges()
    }
  }, [refreshBadgesLS])

  if (IS_WALLET_DISABLED) return null

  return (
    <>
      {name ? (
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
              border={isSmallScreen ? '1px solid transparent' : 'default'}
              px={isSmallScreen ? '11px !important' : '16px'}
              onClick={() => onOpen()}
            >
              <Box display="flex" alignItems="center">
                <Image
                  src={avatar || '/images/explorer_avatar.png'}
                  borderRadius="50%"
                  background="gray"
                  w={isSmallScreen ? '22px' : '28px'}
                  h={isSmallScreen ? '22px' : '28px'}
                  mr={isSmallScreen ? '0' : '12px'}
                />
                {isSmallScreen ? (
                  ''
                ) : (
                  <Text
                    maxW="200px"
                    display="flex"
                    alignItems="center"
                    isTruncated
                  >
                    {name || t('Click here to sign in')}
                  </Text>
                )}
                {isOpen ? <ChevronUpIcon ml="1" /> : <ChevronDownIcon ml="1" />}
              </Box>
            </Button>
          </PopoverTrigger>
          {/* Width follows the labels, so "Disconnect Wallet" and "Déconnecter
              le portefeuille" each get exactly the room they need.
              `max-content` rather than `auto`: this box is absolutely
              positioned, so `auto` means shrink-to-fit, and the w="100%"
              buttons inside then resolve against the AVAILABLE width instead
              of the content — which blew the menu up to ~570px. */}
          <PopoverContent
            w="max-content"
            minW={isSmallScreen ? '260px' : '300px'}
            maxW="calc(100vw - 32px)"
          >
            <PopoverArrow />
            <PopoverBody>
              <Box textAlign="center" m="2">
                <InternalLink
                  href={`/explorer/${
                    ens?.includes('.') ? ens : address
                  }?referral=true`}
                >
                  <Button
                    w="100%"
                    size={isSmallScreen ? 'md' : 'lg'}
                    variant="primaryWhite"
                    leftIcon={
                      <UserCircle height="24px" width="24px" weight="bold" />
                    }
                    onClick={onClose}
                  >
                    <Box whiteSpace="nowrap">{t('My Explorer Profile')}</Box>
                  </Button>
                </InternalLink>
              </Box>
              <Box textAlign="center" m="2">
                <BridgeButton
                  w="100%"
                  size={isSmallScreen ? 'md' : 'lg'}
                  border="2px solid white"
                  address={address}
                />
                <OnrampButton
                  w="100%"
                  mt="2"
                  size={isSmallScreen ? 'md' : 'lg'}
                  border="2px solid white"
                  address={address}
                />
              </Box>
              <Box textAlign="center" m="2">
                <Button
                  w="100%"
                  size={isSmallScreen ? 'md' : 'lg'}
                  variant="secondaryWhite"
                  leftIcon={
                    <SignOut height="24px" width="24px" weight="bold" />
                  }
                  onClick={disconnectWallet}
                >
                  <Box whiteSpace="nowrap">{t('Disconnect Wallet')}</Box>
                </Button>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <Popover
          returnFocusOnClose={false}
          placement="bottom-end"
          isOpen={connectWalletPopupLS && (isLessonPage || isProfilePage)}
          onClose={() => {
            if (!isProfilePage) {
              onClose()
              setConnectWalletPopupLS(false)
            }
          }}
        >
          <Overlay
            hidden={!(connectWalletPopupLS && (isLessonPage || isProfilePage))}
            margin="0 !important"
          />
          <PopoverTrigger>
            <Button
              onClick={openModal}
              size={isSmallScreen ? 'sm' : 'md'}
              leftIcon={<Wallet weight="bold" />}
              isLoading={waitingForSIWE || isDisconnecting}
              // No loadingText when narrow: Chakra then shows the spinner alone
              // at the button's existing width. These strings are far longer
              // than the label they replace ("Se connecter avec Ethereum" is 26
              // characters), so on a phone they blow the row apart mid-connect.
              loadingText={
                isNarrowScreen
                  ? undefined
                  : isDisconnecting
                  ? t('Disconnecting')
                  : SIWE_ENABLED
                  ? t('Sign In With Ethereum')
                  : t('Connecting wallet')
              }
              zIndex={10}
              variant={isLessonPage || isProfilePage ? 'primary' : 'secondary'}
              // Chakra buttons are nowrap with the flex default min-width:auto,
              // so without this an over-long label refuses to shrink and pushes
              // the 3-dot menu off the edge instead. Truncation is the last
              // resort, not the plan: the short label below should mean the
              // ellipsis never actually appears.
              minW={0}
            >
              {/* The full label needs ~180px of text width in French, which the
                  row cannot spare below 500px, so drop to the verb alone there.
                  Shorten here rather than in a translation: "Connecter
                  portefeuille" fits, but French does not allow a bare noun as
                  the object, and the same trap waits in every language whose
                  grammar is stricter than English's. */}
              <Box as="span" isTruncated minW={0}>
                {isNarrowScreen ? t('Connect') : t('Connect Wallet')}
              </Box>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Heading as="h2" size="md" textAlign="center" my="2">
                {t('Connect your wallet to proceed.')}
              </Heading>
              {/* Only for readers who have never connected here. `current_wallet`
                  outlives a disconnect, so someone signing back in after
                  clearing their session is not pitched a wallet they own. */}
              {!currentWallet && (
                <>
                  <Text textAlign="center" mb="2">
                    {t('No wallet?')}
                  </Text>
                  <ExternalLink href="https://bankless.ac/zerion" alt="Zerion">
                    {/* A block button, not an inline link: the old link wrapped
                        to a second line in most languages, and a two-line
                        inline link is a ragged tap target well under the 44px
                        mobile baseline. */}
                    <Button
                      variant="primaryWhite"
                      w="100%"
                      leftIcon={
                        <Image
                          src="/images/zerion-logo.svg"
                          w="20px"
                          h="20px"
                          alt=""
                        />
                      }
                      rightIcon={<ArrowSquareOut />}
                      // The popover is 320px wide and the French label runs to
                      // ~30 characters, so let it wrap rather than truncate.
                      // There is vertical room here, unlike in the nav.
                      whiteSpace="normal"
                      // Pin the geometry the variant's hover would otherwise
                      // change (padding 15px + a 1px border), so the label
                      // neither reflows nor grows 2px taller under the cursor.
                      px="15px"
                      // border="1px solid transparent"
                      h="auto"
                      minH="40px"
                      py="2"
                      lineHeight="1.3"
                    >
                      {t('Get the Zerion wallet')}
                    </Button>
                  </ExternalLink>
                  {/* Teaching before installing is the on-brand first rung, but
                      this popover fires when someone is blocked and trying to
                      proceed, so the lesson stays the quieter of the two. Its
                      title is already translated in every language via the
                      `lesson` namespace, so this adds no new i18n key. */}
                  {!isWalletLesson && (
                    <Text textAlign="center" mt="3" fontSize="sm">
                      <InternalLink
                        href="/lessons/creating-a-crypto-wallet"
                        alt={t('Creating a Crypto Wallet', { ns: 'lesson' })}
                        textDecoration="underline"
                        color="white"
                      >
                        {t('Creating a Crypto Wallet', { ns: 'lesson' })}
                      </InternalLink>
                    </Text>
                  )}
                </>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}
    </>
  )
}

export default ConnectWalletButton
