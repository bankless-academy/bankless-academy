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

import ConnectWalletButton from 'components/ConnectWalletButton'
import SwitchNetworkButton from 'components/SwitchNetworkButton/'
import { PROJECT_NAME, LOGO, LOGO_SMALL } from 'constants/index'

const Nav: React.FC = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  return (
    <header>
      <Box bgColor="black" borderBottom="1px solid #222222">
        <Flex p={4}>
          <Box cursor="pointer">
            <Link href="/">
              <Image
                height={isSmallScreen ? '31px' : '40px'}
                ml={isSmallScreen ? '' : '2'}
                src={isSmallScreen ? LOGO_SMALL : LOGO}
                alt={PROJECT_NAME}
              />
            </Link>
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
