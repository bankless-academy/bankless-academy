import React from 'react'
import {
  Box,
  Button,
  HStack,
  Spacer,
  SimpleGrid,
  Flex,
  Container,
  Text,
  Link,
  useMediaQuery,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import ColorModeSwitcher from '../components/ColorModeSwitcher'
import LanguageModeSwitcher from '../components/LanguageModeSwitcher'
import PageBackground from '../components/PageBackground'
import QuestCards from '../components/QuestCards'

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

// TEMP: hardcode
const address = 'didierkrux.eth'
const bank = '35000'

const Layout: React.FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 800px)')

  return (
    <PageBackground minH="100vh" marginBottom={isMobile ? '64px' : ''}>
      <header>
        <nav>
          <Flex p={4}>
            <HStack spacing={4}>
              <Link href="/">
                <Button variant="unstyled" size={isMobile ? 'sm' : 'md'}>
                  ⚡️ Onboard
                </Button>
              </Link>
              <Button isActive size={isMobile ? 'sm' : 'md'}>
                Quests
              </Button>
              <Button size={isMobile ? 'sm' : 'md'}>About</Button>
            </HStack>
            <Spacer />
            <MenuConnect
              zIndex="toast"
              spacing={4}
              isMobile={isMobile}
              // TODO: auto change
              bgColor={isMobile ? 'gray.200' : 'auto'}
            >
              {address ? (
                <Button
                  variant="outline"
                  paddingRight="1"
                  paddingLeft="4"
                  size={isMobile ? 'sm' : 'md'}
                >
                  {bank} BANK
                  <Button size={isMobile ? 'xs' : 'sm'} marginLeft="2">
                    <Text maxW="135px" isTruncated>
                      {address}
                    </Text>
                  </Button>
                </Button>
              ) : (
                <Button
                  // onClick={onConnect}
                  size={isMobile ? 'sm' : 'md'}
                  // isLoading={walletIsLoading}
                  loadingText="Connecting wallet"
                >
                  Connect wallet
                </Button>
              )}
              {isMobile && <Spacer />}
              <Box>
                <LanguageModeSwitcher size={isMobile ? 'sm' : 'md'} />
                <ColorModeSwitcher size={isMobile ? 'sm' : 'md'} />
              </Box>
            </MenuConnect>
          </Flex>
        </nav>
      </header>
      <Container maxW="container.lg">
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={12}>
          <QuestCards />
        </SimpleGrid>
      </Container>
    </PageBackground>
  )
}

export default Layout
