import React, { useEffect } from 'react'
import { Box, Image, HStack, Spacer, Flex, Button } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import queryString from 'query-string'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'
import { useSession } from 'next-auth/react'

// import ConnectWalletButton from 'components/ConnectWalletButton'
import InternalLink from 'components/InternalLink'
import OptionMenu from 'components/OptionMenu'
import SwitchNetworkButton from 'components/SwitchNetworkButton/index'
import { PROJECT_NAME, LOGO, LOGO_SMALL } from 'constants/index'
import { useSmallScreen } from 'hooks/index'
import ExternalLink from 'components/ExternalLink'

declare global {
  interface Navigator {
    standalone: any
  }
}

const Nav: React.FC = () => {
  const [isSmallScreen] = useSmallScreen()
  const { asPath } = useRouter()
  const { t } = useTranslation()
  const { isConnected } = useAccount()
  const { status } = useSession()
  const [, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )

  const isProfilePage = asPath.includes('/explorer/my-profile')

  const embed =
    typeof window !== 'undefined'
      ? (queryString.parse(window.location.search)?.embed || '')?.toString()
      : undefined
  const fullembed =
    typeof window !== 'undefined'
      ? (queryString.parse(window.location.search)?.fullembed || '')?.toString()
      : undefined
  const webapp =
    typeof window !== 'undefined'
      ? window?.navigator?.standalone
        ? 'true'
        : (queryString.parse(window.location.search)?.webapp || '')?.toString()
      : undefined
  const isEmbedded = typeof window !== 'undefined' && window !== window.parent

  useEffect((): void => {
    const embedValue =
      webapp === 'true'
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
      src={isSmallScreen ? LOGO_SMALL : LOGO}
      alt={PROJECT_NAME}
    />
  )

  return (
    <header>
      {isEmbedded && isMobile && typeof window !== 'undefined' ? (
        <ExternalLink href={`/${window.location.search}`}>
          <Box w="100%" h="100%" position="absolute" zIndex="3" />
        </ExternalLink>
      ) : null}
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
            <InternalLink href={`/lessons`} alt="Explore Lessons" zIndex={2}>
              <Button
                variant={
                  asPath?.startsWith('/lessons') || isProfilePage
                    ? 'secondary'
                    : 'primary'
                }
                size={isSmallScreen ? 'sm' : 'md'}
                onClick={() => setConnectWalletPopupLS(false)}
              >
                {isSmallScreen ? t('Lessons') : t('Explore Lessons')}
              </Button>
            </InternalLink>
            {isConnected && status === 'authenticated' ? (
              <SwitchNetworkButton isSmallScreen={isSmallScreen} />
            ) : null}
            {/* <ConnectWalletButton isSmallScreen={isSmallScreen} /> */}
            <w3m-button />
            <OptionMenu
              isSmallScreen={isSmallScreen}
              isWebApp={webapp === 'true'}
            />
          </HStack>
        </Flex>
      </Box>
    </header>
  )
}

export default Nav
