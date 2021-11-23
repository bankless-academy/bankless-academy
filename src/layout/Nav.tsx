import React from 'react'
import {
  Box,
  Button,
  HStack,
  Spacer,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ConnectWalletButton from 'components/ConnectWalletButton'
import SwitchNetworkButton from 'components/SwitchNetworkButton/'
import { PROJECT_NAME } from 'constants/index'

const Nav: React.FC = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  const router = useRouter()
  const currentLink = router.asPath

  return (
    <header>
      <Box bgColor="black" borderBottom="1px solid #222222">
        <Flex p={4}>
          <HStack spacing={4}>
            <Link href="/">
              <Button
                isActive={currentLink === '/'}
                variant="unstyled"
                size={isSmallScreen ? 'sm' : 'md'}
                leftIcon={
                  <img width="32px" src="/favicon.png" alt="Bankless Academy" />
                }
                display="flex"
                fontSize="xl"
              >
                {!isSmallScreen && PROJECT_NAME}
              </Button>
            </Link>
          </HStack>
          <Spacer />
          <HStack
            zIndex="toast"
            spacing={4}
            isSmallScreen={isSmallScreen}
            justifyContent="space-between"
          >
            <SwitchNetworkButton isSmallScreen={isSmallScreen} />
            <ConnectWalletButton isSmallScreen={isSmallScreen} />
          </HStack>
        </Flex>
      </Box>
    </header>
  )
}

export default Nav
