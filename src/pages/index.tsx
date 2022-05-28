import {
  Box,
  Text,
  Stack,
  Heading,
  Button,
  Container,
  SimpleGrid,
  Image,
  Center,
  useMediaQuery,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import LESSONS from 'constants/lessons'
import LessonBanner from 'components/LessonBanner'
// import { DEFAULT_METADATA } from 'constants/'

const LessonGrid = styled(SimpleGrid)`
  border-bottom: 1px solid #72757b;
  :last-child {
    border-bottom: none;
  }
`

const HomePage = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')
  return (
    <>
      <Center
        height="80vh"
        bgImage="/humanDAO/homepage_background.jpg"
        bgSize="cover"
        bgPosition="center"
      >
        <Stack
          width="100%"
          maxW="800px"
          spacing={6}
          textAlign="center"
          alignItems="center"
          pt="20vh"
        >
          {/* <Heading
            as="h2"
            size="xl"
            maxW="90%"
            filter="drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))"
          >
            {DEFAULT_METADATA.description}
          </Heading> */}
          <Box>
            <NextLink href={`/lessons`}>
              <Button variant="primary" size="lg" style={{ padding: '0 23px' }}>
                Explore Lessons
              </Button>
            </NextLink>
          </Box>
        </Stack>
      </Center>
      <Box bgColor="#1F2023" p="4" overflow="hidden">
        <Container maxW="container.lg">
          <Box mt="16">
            <Heading as="h2" size="xl">
              Available Lessons
            </Heading>
            <Box>
              {LESSONS.map((lesson, key) => {
                const isPoapClaimed = localStorage.getItem(
                  `poap-${lesson.slug}`
                )
                const isLessonStarted =
                  (localStorage.getItem(lesson.slug) || 0) > 0
                const LessonImage = (
                  <LessonBanner
                    cursor="pointer"
                    // overflow="hidden"
                    style={{
                      aspectRatio: '1.91/1',
                    }}
                    maxW="600px"
                  >
                    <NextLink href={`/lessons/${lesson.slug}`}>
                      <Image
                        // TEMP
                        style={{
                          borderRadius: 10,
                        }}
                        src={lesson.lessonImageLink}
                      />
                    </NextLink>
                  </LessonBanner>
                )
                const LessonDescription = (
                  <Box alignSelf="center" mt="4">
                    <Heading fontSize="2xl">{lesson.name}</Heading>
                    <Text fontSize="lg" my="4">
                      {lesson.marketingDescription}
                    </Text>
                    <NextLink href={`/lessons/${lesson.slug}`}>
                      <Button variant="primary" mt="4">
                        {isPoapClaimed
                          ? 'Review Lesson'
                          : isLessonStarted
                          ? 'Resume Lesson'
                          : 'Start Lesson'}
                      </Button>
                    </NextLink>
                  </Box>
                )
                return (
                  <LessonGrid
                    columns={{ sm: 1, md: 2, lg: 2 }}
                    key={key}
                    gap={6}
                    py="10"
                    mx={isSmallScreen ? '0' : '12'}
                  >
                    {key % 2 === 0 || isSmallScreen ? (
                      <>
                        {LessonImage}
                        {LessonDescription}
                      </>
                    ) : (
                      <>
                        {LessonDescription}
                        {LessonImage}
                      </>
                    )}
                  </LessonGrid>
                )
              })}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default HomePage
