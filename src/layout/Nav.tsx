import React from 'react'
import {
  // Box,
  Button,
  HStack,
  Spacer,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'

// import ColorModeSwitcher from 'layout/ColorModeSwitcher'
// import LanguageModeSwitcher from 'layout/LanguageModeSwitcher'
import ConnectWalletButton from 'components/ConnectWalletButton'
import SwitchNetworkButton from 'components/SwitchNetworkButton/'
import { PROJECT_NAME } from 'constants/index'

const MenuConnect = styled(HStack)<{ isSmallScreen?: boolean }>`
  ${(props) =>
    props.isSmallScreen &&
    `
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
  `}
`

const Nav: React.FC = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  const router = useRouter()
  const currentLink = router.asPath

  return (
    <header>
      <nav>
        <Flex p={4}>
          <HStack spacing={4}>
            {/* <Link href="/">
              <Button
                isActive={currentLink === '/'}
                variant="unstyled"
                size={isSmallScreen ? 'sm' : 'md'}
              >
                ⚡️ {PROJECT_NAME}
              </Button>
            </Link>
            <Link href="/quests">
              <Button
                isActive={currentLink.includes('/quest')}
                size={isSmallScreen ? 'sm' : 'md'}
              >
                Quests
              </Button>
            </Link>
            <Link href="/about">
              <Button
                isActive={currentLink === '/about'}
                size={isSmallScreen ? 'sm' : 'md'}
              >
                About
              </Button>
            </Link> */}
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
                {PROJECT_NAME}
              </Button>
            </Link>
          </HStack>
          <Spacer />
          <MenuConnect
            zIndex="toast"
            spacing={4}
            isSmallScreen={isSmallScreen}
            // TODO: auto change via theme
            bgColor={isSmallScreen ? 'gray.200' : 'auto'}
            justifyContent="space-between"
          >
            <SwitchNetworkButton isSmallScreen={isSmallScreen} />
            <ConnectWalletButton isSmallScreen={isSmallScreen} />
            {/* <Box display="flex">
              <LanguageModeSwitcher size={isSmallScreen ? 'sm' : 'md'} />
              <ColorModeSwitcher size={isSmallScreen ? 'sm' : 'md'} />
            </Box> */}
          </MenuConnect>
        </Flex>
      </nav>
    </header>
  )
}

export default Nav
