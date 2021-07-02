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
import styled from '@emotion/styled'

import ColorModeSwitcher from './ColorModeSwitcher'
import LanguageModeSwitcher from './LanguageModeSwitcher'
import ConnectWalletButton from '../components/ConnectWalletButton'

const MenuConnect = styled(HStack)<{ isMobile?: boolean }>`
  ${(props) =>
    props.isMobile &&
    `
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
  `}
`

const Nav: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 800px)')
  const router = useRouter()
  const currentLink = router.asPath

  return (
    <header>
      <nav>
        <Flex p={4}>
          <HStack spacing={4}>
            <Link href="/">
              <Button
                isActive={currentLink === '/'}
                variant="unstyled"
                size={isMobile ? 'sm' : 'md'}
              >
                ⚡️ Onboard
              </Button>
            </Link>
            <Link href="/quests">
              <Button
                isActive={currentLink.includes('/quest')}
                size={isMobile ? 'sm' : 'md'}
              >
                Quests
              </Button>
            </Link>
            <Link href="/about">
              <Button
                isActive={currentLink === '/about'}
                size={isMobile ? 'sm' : 'md'}
              >
                About
              </Button>
            </Link>
          </HStack>
          <Spacer />
          <MenuConnect
            zIndex="toast"
            spacing={4}
            isMobile={isMobile}
            // TODO: auto change
            bgColor={isMobile ? 'gray.200' : 'auto'}
          >
            <ConnectWalletButton isMobile={isMobile} />
            {isMobile && <Spacer />}
            <Box>
              <LanguageModeSwitcher size={isMobile ? 'sm' : 'md'} />
              <ColorModeSwitcher size={isMobile ? 'sm' : 'md'} />
            </Box>
          </MenuConnect>
        </Flex>
      </nav>
    </header>
  )
}

export default Nav
