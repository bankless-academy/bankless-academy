import React from 'react'
import { Box, Text, Image, Heading, Button, SimpleGrid } from '@chakra-ui/react'
import styled from '@emotion/styled'

import InternalLink from 'components/InternalLink'
import { LESSONS, IS_WHITELABEL } from 'constants/index'
import LessonBanner from 'components/LessonBanner'
import { useSmallScreen } from 'hooks/index'

const LessonGrid = styled(SimpleGrid)`
  border-bottom: 1px solid #72757b;
  :last-child {
    border-bottom: none;
  }
`

const FeaturedLessons: React.FC = () => {
  const [isSmallScreen] = useSmallScreen()

  return (
    <Box mt="16">
      <Heading as="h2" size="xl">
        Featured Content
      </Heading>
      <Box>
        {[...LESSONS]
          .reverse()
          .filter((lesson) => lesson.featuredOrderOnHomepage)
          .sort((a, b) => a.featuredOrderOnHomepage - b.featuredOrderOnHomepage)
          .map((lesson, key) => {
            const isKudosMinted = localStorage.getItem(
              `isKudosMinted-${lesson.kudosId}`
            )
            const isLessonStarted = (localStorage.getItem(lesson.slug) || 0) > 0
            const LessonImage = (
              <LessonBanner
                iswhitelabel={(IS_WHITELABEL || lesson?.isArticle)?.toString()}
                cursor="pointer"
                style={{
                  aspectRatio: '1.91/1',
                }}
                maxW="600px"
              >
                <InternalLink
                  href={`/lessons/${lesson.slug}`}
                  alt={lesson.name}
                >
                  <Image src={lesson.lessonImageLink} />
                </InternalLink>
              </LessonBanner>
            )
            const LessonDescription = (
              <Box alignSelf="center" mt="4">
                <Heading fontSize="2xl">{lesson.name}</Heading>
                <Text fontSize="lg" my="4">
                  {lesson.marketingDescription}
                </Text>
                <InternalLink
                  href={`/lessons/${lesson.slug}`}
                  alt={lesson.name}
                >
                  <Button
                    variant={isKudosMinted ? 'secondary' : 'primary'}
                    mt="4"
                  >
                    {lesson?.isArticle
                      ? 'Read Entry'
                      : isKudosMinted
                      ? 'Revisit Lesson'
                      : isLessonStarted
                      ? 'Resume Lesson'
                      : 'Start Lesson'}
                  </Button>
                </InternalLink>
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
  )
}

export default FeaturedLessons
