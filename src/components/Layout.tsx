/* eslint-disable no-console */
import { Box, Container, Button } from '@chakra-ui/react'
import { ReactElement } from 'react'

import { LevelType, LessonTypeType } from 'entities/lesson'
import InternalLink from './InternalLink'
import { useSmallScreen } from 'hooks/index'

const Layout = ({
  children,
  level,
  lessonType,
}: {
  children: ReactElement
  level?: LevelType
  lessonType?: LessonTypeType
}): React.ReactElement => {
  const [isSmallScreen] = useSmallScreen()
  return (
    <Box display="flex">
      {!isSmallScreen && (
        <Box w="350px" pl="4" borderRight="2px #3D3838 solid">
          <Box mt="4">Username.eth</Box>
          <Box mt="4">
            <InternalLink href="/explorer/my-profile">
              View Profile
            </InternalLink>
          </Box>
          <Box mt="4">Lesson Select</Box>
          <Box mt="4">
            <InternalLink href="/lessons">
              <Button
                variant={level === 'Essentials' ? 'primary' : 'secondary'}
              >
                Essentials
              </Button>
            </InternalLink>
          </Box>
          <Box mt="4">
            <InternalLink href="/lessons/level-1">
              <Button variant={level === 'Level 1' ? 'primary' : 'secondary'}>
                Level 1
              </Button>
            </InternalLink>
          </Box>
          <Box mt="4">
            <InternalLink href="/lessons/handbook">
              <Button
                variant={lessonType === 'HANDBOOK' ? 'primary' : 'secondary'}
              >
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
            <InternalLink href="/explorer/my-profile">Profile</InternalLink>
          </Box>
          <Box>
            <InternalLink href="/lessons">
              <Button
                variant={level === 'Essentials' ? 'primary' : 'secondary'}
              >
                Essentials
              </Button>
            </InternalLink>
          </Box>
          <Box>
            <InternalLink href="/lessons/handbook">
              <Button
                variant={lessonType === 'HANDBOOK' ? 'primary' : 'secondary'}
              >
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
