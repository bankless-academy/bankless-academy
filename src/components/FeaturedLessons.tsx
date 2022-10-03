import React from 'react'
import NextLink from 'next/link'
import { Box, Text, Image, Heading, Button, SimpleGrid } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { LESSONS, IS_WHITELABEL } from 'constants/index'
import LessonBanner from 'components/LessonBanner'

const LessonGrid = styled(SimpleGrid)`
  border-bottom: 1px solid #72757b;
  :last-child {
    border-bottom: none;
  }
`

const FeaturedLessons: React.FC = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  return (
    <Box mt="16">
      <Heading as="h2" size="xl">
        Featured Lessons
      </Heading>
      <Box>
        {LESSONS.filter((lesson) => lesson.isFeaturedOnHomepage).map(
          (lesson, key) => {
            const isKudosMinted = localStorage.getItem(
              `isKudosMinted-${lesson.kudosId}`
            )
            const isLessonStarted = (localStorage.getItem(lesson.slug) || 0) > 0
            const LessonImage = (
              <LessonBanner
                iswhitelabel={IS_WHITELABEL.toString()}
                cursor="pointer"
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
                    {isKudosMinted
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
  )
}

export default FeaturedLessons
