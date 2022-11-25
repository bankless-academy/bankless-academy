import React from 'react'
import {
  Box,
  Image,
  HStack,
  Spacer,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { isMobile } from 'react-device-detect'

import ConnectWalletButton from 'components/ConnectWalletButton'
import SwitchNetworkButton from 'components/SwitchNetworkButton/'
import { PROJECT_NAME, LOGO, LOGO_SMALL } from 'constants/index'

const Nav: React.FC = () => {
  const router = useRouter()
  const { embed } = router.query
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

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
            {embed ? logo : <Link href="/">{logo}</Link>}
          </Box>
          <Spacer />
          <HStack spacing={4} justifyContent="space-between">
            <SwitchNetworkButton isSmallScreen={isSmallScreen} />
            <ConnectWalletButton isSmallScreen={isSmallScreen} />
          </HStack>
        </Flex>
      </Box>
    </header>
  )
}

export default Nav
