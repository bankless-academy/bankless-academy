import React, { useEffect, useRef } from 'react'
import { Box, Image, HStack, Spacer, Flex } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import queryString from 'query-string'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'
import { useRouter } from 'next/router'

import ConnectWalletButton from 'components/ConnectWalletButton'
import InternalLink from 'components/InternalLink'
import OptionMenu from 'components/OptionMenu'
import SwitchNetworkButton from 'components/SwitchNetworkButton/index'
import { PROJECT_NAME, LOGO, LOGO_SMALL } from 'constants/index'
import { useSmallScreen } from 'hooks/index'
// import ExternalLink from 'components/ExternalLink'
import { api } from 'utils/index'
import {
  ONBOARDING_POPUP_DELAY,
  shouldAutoOpenOnboarding,
} from 'utils/onboarding'
import { AnnouncementType } from 'entities/announcement'
import LanguageSelector from 'components/LanguageSelector'
import { useApp } from 'contexts/AppContext'

declare global {
  interface Navigator {
    standalone: any
  }
}

const Nav: React.FC = () => {
  const router = useRouter()
  const [isSmallScreen, , , isTinyScreen] = useSmallScreen()
  const { isConnected } = useAccount()
  const [, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )
  const [, setAnnouncements] = useLocalStorage<AnnouncementType[] | null>(
    'announcements',
    null
  )
  const [onboardingRetry] = useLocalStorage('onboarding-retry', 0)

  const embed =
    typeof window !== 'undefined'
      ? (queryString.parse(window.location.search)?.embed || '')?.toString()
      : undefined
  const fullembed =
    typeof window !== 'undefined'
      ? (queryString.parse(window.location.search)?.fullembed || '')?.toString()
      : undefined
  const isEmbedded = typeof window !== 'undefined' && window !== window.parent

  const { openOnboardingModal } = useApp()
  const [onboarding] = useLocalStorage('onboarding', '')

  const [pwa, setPwa] = useLocalStorage('pwa', false)

  // Add this ref to track if modal has been shown in current session
  const hasShownModalThisSession = useRef(false)
  const onboardingTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.location.search.includes('webapp=true')
    ) {
      setPwa(true)
    }
  }, [setPwa])

  useEffect(() => {
    if (
      !shouldAutoOpenOnboarding({
        pathname: router.pathname,
        onboarding,
        onboardingRetry,
        embed,
        alreadyShownThisSession: hasShownModalThisSession.current,
      })
    ) {
      // conditions no longer hold (onboarding started elsewhere, retry limit
      // reached, navigated to a page that opens its own modal): drop the
      // pending popup instead of letting a stale timer fire later
      if (onboardingTimer.current) clearTimeout(onboardingTimer.current)
      onboardingTimer.current = null
      return
    }
    // at most one pending timer, ever - this effect re-runs on every route
    // change and on every `onboarding`/`onboarding-retry` write (usehooks-ts
    // broadcasts localStorage writes to all hook instances in the tab)
    if (onboardingTimer.current) return

    onboardingTimer.current = setTimeout(() => {
      onboardingTimer.current = null
      hasShownModalThisSession.current = true // Mark as shown for this session
      openOnboardingModal()
    }, ONBOARDING_POPUP_DELAY)
  }, [onboarding, router.pathname, embed, onboardingRetry, openOnboardingModal])

  useEffect(
    () => () => {
      if (onboardingTimer.current) clearTimeout(onboardingTimer.current)
      onboardingTimer.current = null
    },
    []
  )

  useEffect((): void => {
    const embedValue = pwa
      ? 'webapp'
      : fullembed?.length
      ? fullembed
      : embed?.length
      ? embed
      : ''
    // for front-end & back-end tracking
    if (
      localStorage.getItem('embed') === 'webapp' ||
      (isEmbedded && embedValue === '') ||
      localStorage.getItem('embed') === embedValue
    ) {
      // DO nothing
    } else localStorage.setItem('embed', embedValue)
  }, [])

  const logo = (
    <Image
      height={isSmallScreen ? '31px' : '40px'}
      ml={isSmallScreen ? '' : '2'}
      src={isTinyScreen ? LOGO_SMALL : LOGO}
      alt={PROJECT_NAME}
    />
  )

  const getAnnouncements = async () => {
    try {
      const a = await api('/api/get/announcement', {})
      if (a?.data) {
        setAnnouncements(a.data)
      } else {
        setAnnouncements(null)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getAnnouncements()
  }, [])

  return (
    <header>
      {/* {isEmbedded && isMobile && typeof window !== 'undefined' ? (
        <ExternalLink href={`/${window.location.search}`}>
          <Box w="100%" h="100%" position="absolute" zIndex="3" />
        </ExternalLink>
      ) : null} */}
      <Box
        bgColor="black"
        borderBottom="1px solid #222222"
        pr={isMobile ? 0 : 1}
      >
        <Flex p={4}>
          <Box
            cursor={embed ? 'auto' : 'pointer'}
            zIndex={2}
            onClick={() => setConnectWalletPopupLS(false)}
          >
            {embed ? (
              logo
            ) : (
              <InternalLink href="/" alt="homepage">
                {logo}
              </InternalLink>
            )}
          </Box>
          <Spacer />
          <HStack spacing={2} justifyContent="space-between">
            <LanguageSelector isSmallScreen={isSmallScreen} />
            {isConnected ? (
              <SwitchNetworkButton isSmallScreen={isSmallScreen} />
            ) : null}
            <ConnectWalletButton isSmallScreen={isSmallScreen} />
            <OptionMenu isSmallScreen={isSmallScreen} isWebApp={pwa} />
          </HStack>
        </Flex>
      </Box>
    </header>
  )
}

export default Nav
