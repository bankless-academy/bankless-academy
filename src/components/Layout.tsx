/* eslint-disable no-console */
import { Box, Container, Button, Image } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { LessonTypeType } from 'entities/lesson'
import InternalLink from './InternalLink'
import { useSmallScreen, useWindowScrollPositions } from 'hooks/index'
import { useAccount } from 'wagmi'
import { useLocalStorage } from 'usehooks-ts'
import { shortenAddress } from 'utils/index'

const Layout = ({
  children,
  page,
}: {
  children: ReactElement
  page?: LessonTypeType | 'PROFILE'
}): React.ReactElement => {
  const { address } = useAccount()
  const [nameCache] = useLocalStorage(`name-cache`, {})
  const [isSmallScreen] = useSmallScreen()
  const { scrollY } = useWindowScrollPositions()
  const username = address
    ? address in nameCache
      ? nameCache[address].name
      : address
    : ''

  const menuBarWidth = '250px'
  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      background={`linear-gradient(
      107.1deg,
      rgba(46, 33, 33, 0.3) -3.13%,
      rgba(80, 73, 84, 0.3) 16.16%,
      rgba(94, 89, 104, 0.3) 29.38%,
      rgba(86, 81, 94, 0.3) 41.5%,
      rgba(23, 21, 21, 0.3) 102.65%
    )`}
    >
      <Box
        marginLeft={isSmallScreen ? '0' : menuBarWidth}
        borderLeft={isSmallScreen ? '0' : '2px #3D3838 solid'}
        display="block"
        backgroundColor="#161515"
      >
        <Container maxW="container.xl">{children}</Container>
      </Box>
      {!isSmallScreen ? (
        <>
          {/* Desktop menu */}
          <Box
            w={menuBarWidth}
            position={scrollY > 80 ? 'fixed' : 'absolute'}
            top="0"
          >
            {address && (
              <>
                <InternalLink href={`/explorer/${username}?referral=true`}>
                  <Box
                    margin="auto"
                    mt="4"
                    pt="5px"
                    w="160px"
                    h="160px"
                    borderRadius="50%"
                    backgroundImage="linear-gradient(180deg, #A379BD 0%, #5B5198 100%)"
                  >
                    <Image
                      w="150px"
                      h="150px"
                      margin="auto"
                      borderRadius="50%"
                      backgroundColor="black"
                      src={`https://ensdata.net/media/avatar/${username}`}
                    />
                  </Box>
                  <Box textAlign="center" mt="4">
                    {username.includes('.')
                      ? username
                      : shortenAddress(username)}
                  </Box>
                </InternalLink>
              </>
            )}
            <Box pl="4">
              <Box mt="4">
                <InternalLink href="/lessons">
                  <Button variant={page === 'LESSON' ? 'primary' : 'secondary'}>
                    Lesson Select
                  </Button>
                </InternalLink>
              </Box>
              <Box mt="4">
                <InternalLink href="/lessons/handbook">
                  <Button
                    variant={page === 'HANDBOOK' ? 'primary' : 'secondary'}
                  >
                    Explorer’s Handbook
                  </Button>
                </InternalLink>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          position="fixed"
          w="100vw"
          h="60px"
          bottom="0"
          bg="black"
          display="flex"
          zIndex="2"
          justifyContent="space-around"
          placeItems="center"
        >
          {/* Mobile menu */}
          <Box>
            <InternalLink href={`/explorer/${username}?referral=true`}>
              <Button variant={page === 'PROFILE' ? 'primary' : 'secondary'}>
                Profile
              </Button>
            </InternalLink>
          </Box>
          <Box>
            <InternalLink href="/lessons">
              <Button variant={page === 'LESSON' ? 'primary' : 'secondary'}>
                Essentials
              </Button>
            </InternalLink>
          </Box>
          <Box>
            <InternalLink href="/lessons/handbook">
              <Button variant={page === 'HANDBOOK' ? 'primary' : 'secondary'}>
                Handbook
              </Button>
            </InternalLink>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Layout
