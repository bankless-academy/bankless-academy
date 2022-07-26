import {
  Box,
  Text,
  Heading,
  Button,
  Container,
  SimpleGrid,
  Image,
  useMediaQuery,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

import Footer from 'layout/Footer'
import LessonBanner from 'components/LessonBanner'
import { LESSONS, HOMEPAGE_BACKGROUND, IS_WHITELABEL } from 'constants/index'

const StyledImage = styled(Image)`
  width: 100%;
  max-height: 85vh;
  object-fit: cover;
`

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
      <StyledImage src={HOMEPAGE_BACKGROUND} />
      <Box bgColor="#1F2023" p="4" overflow="hidden">
        <Container maxW="container.lg">
          <Box mt="16">
            <Heading as="h2" size="xl">
              Available Lessons
            </Heading>
            <Box>
              {LESSONS.filter((lesson) => lesson.isFeaturedOnHomepage).map(
                (lesson, key) => {
                  const isPoapClaimed = localStorage.getItem(
                    `poap-${lesson.slug}`
                  )
                  const isLessonStarted =
                    (localStorage.getItem(lesson.slug) || 0) > 0
                  const LessonImage = (
                    <LessonBanner
                      iswhitelabel={IS_WHITELABEL}
                      cursor="pointer"
                      // overflow="hidden"
                      style={{
                        aspectRatio: '1.91/1',
                      }}
                      maxW="600px"
                    >
                      <NextLink href={`/lessons/${lesson.slug}`}>
                        <Image src={lesson.lessonImageLink} />
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
                }
              )}
            </Box>
          </Box>
          <Footer />
        </Container>
      </Box>
    </>
  )
}

export default HomePage
