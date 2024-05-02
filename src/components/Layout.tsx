/* eslint-disable no-console */
import { Box, Container, Button } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { LessonTypeType } from 'entities/lesson'
import InternalLink from './InternalLink'
import { useSmallScreen } from 'hooks/index'
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
  const username = address
    ? address in nameCache
      ? nameCache[address].name
      : address
    : ''
  return (
    <Box display="flex">
      {!isSmallScreen && (
        <Box w="350px" pl="4" borderRight="2px #3D3838 solid">
          <Box mt="4">
            {username.includes('.') ? username : shortenAddress(username)}
          </Box>
          <Box mt="4">
            {address && (
              <InternalLink href={`/explorer/${username}?referral=true`}>
                <Button variant={page === 'PROFILE' ? 'primary' : 'secondary'}>
                  Profile
                </Button>
              </InternalLink>
            )}
          </Box>
          <Box mt="4">
            <InternalLink href="/lessons">
              <Button variant={page === 'LESSON' ? 'primary' : 'secondary'}>
                Lesson Select
              </Button>
            </InternalLink>
          </Box>
          <Box mt="4">
            <InternalLink href="/lessons/handbook">
              <Button variant={page === 'HANDBOOK' ? 'primary' : 'secondary'}>
                Explorer’s Handbook
              </Button>
            </InternalLink>
          </Box>
        </Box>
      )}
      <Container maxW="container.xl">{children}</Container>
      {isSmallScreen && (
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
