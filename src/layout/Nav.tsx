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
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

export const injected = new InjectedConnector()
// import ColorModeSwitcher from 'layout/ColorModeSwitcher'
// import LanguageModeSwitcher from 'layout/LanguageModeSwitcher'
import ConnectWalletButton from 'components/ConnectWalletButton'
import SwitchNetworkButton from 'components/SwitchNetworkButton/'
import { PROJECT_NAME } from 'constants/index'

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
  const { activate } = useWeb3React()

  const connectMetamask = async () => {
    await activate(injected)
  }

  return (
    <header>
      <nav>
        <Flex p={4}>
          <HStack spacing={4}>
            {/* <Link href="/">
              <Button
                isActive={currentLink === '/'}
                variant="unstyled"
                size={isMobile ? 'sm' : 'md'}
              >
                ⚡️ {PROJECT_NAME}
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
            </Link> */}
            <Link href="/">
              <Button
                isActive={currentLink === '/'}
                variant="unstyled"
                size={isMobile ? 'sm' : 'md'}
              >
                ⚡️ {PROJECT_NAME}
              </Button>
            </Link>
          </HStack>
          <Spacer />
          <MenuConnect
            zIndex="toast"
            spacing={4}
            isMobile={isMobile}
            // TODO: auto change via theme
            bgColor={isMobile ? 'gray.200' : 'auto'}
            justifyContent="space-between"
          >
            <ConnectWalletButton isMobile={isMobile} />
            {/* <Box display="flex">
              <LanguageModeSwitcher size={isMobile ? 'sm' : 'md'} />
              <ColorModeSwitcher size={isMobile ? 'sm' : 'md'} />
            </Box> */}
            <SwitchNetworkButton />

            <Button onClick={() => connectMetamask()}>Simple Metamask</Button>
          </MenuConnect>
        </Flex>
      </nav>
    </header>
  )
}

export default Nav
