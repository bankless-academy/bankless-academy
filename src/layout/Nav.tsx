import React, { useEffect } from 'react'
import { Box, Image, HStack, Spacer, Flex } from '@chakra-ui/react'
import { isMobile } from 'react-device-detect'
import queryString from 'query-string'

import ConnectWalletButton from 'components/ConnectWalletButton'
import InternalLink from 'components/InternalLink'
import OptionMenu from 'components/OptionMenu'
import SwitchNetworkButton from 'components/SwitchNetworkButton/'
import { PROJECT_NAME, LOGO, LOGO_SMALL } from 'constants/index'
import { useSmallScreen } from 'hooks/index'

const Nav: React.FC = () => {
  const [isSmallScreen] = useSmallScreen()

  const embed =
    typeof window !== 'undefined'
      ? (queryString.parse(window.location.search)?.embed || '')?.toString()
      : undefined

  useEffect((): void => {
    const embedValue = embed === undefined ? '' : embed
    // for front-end & back-end tracking
    localStorage.setItem('embed', embedValue)
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
      <Box
        bgColor="black"
        borderBottom="1px solid #222222"
        pr={isMobile ? 0 : 1}
      >
        <Flex p={4}>
          <Box cursor={embed ? 'auto' : 'pointer'}>
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
            <SwitchNetworkButton isSmallScreen={isSmallScreen} />
            <ConnectWalletButton isSmallScreen={isSmallScreen} />
            <OptionMenu isSmallScreen={isSmallScreen} />
          </HStack>
        </Flex>
      </Box>
    </header>
  )
}

export default Nav
