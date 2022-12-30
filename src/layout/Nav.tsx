import React from 'react'
import { Box, Image, HStack, Spacer, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'

import ConnectWalletButton from 'components/ConnectWalletButton'
import InternalLink from 'components/InternalLink'
import OptionMenu from 'components/OptionMenu'
import SwitchNetworkButton from 'components/SwitchNetworkButton/'
import { PROJECT_NAME, LOGO, LOGO_SMALL } from 'constants/index'
import { useSmallScreen } from 'hooks/index'

const Nav: React.FC = () => {
  const router = useRouter()
  const { embed } = router.query
  const [isSmallScreen] = useSmallScreen()

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
