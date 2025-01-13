import React from 'react'
import { Box, Text, Image, Heading, SimpleGrid } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import InternalLink from 'components/InternalLink'
import { LESSONS, IS_WHITELABEL } from 'constants/index'
import LessonBanner from 'components/LessonBanner'
import { useSmallScreen } from 'hooks/index'
import LessonButton from 'components/LessonButton'

const LessonGrid = styled(SimpleGrid)`
  border-bottom: 1px solid #72757b;
  :last-child {
    border-bottom: none;
  }
`

const FeaturedLessons: React.FC = () => {
  const { t } = useTranslation()
  const [isSmallScreen] = useSmallScreen()

  const featuredLessons = [...LESSONS]
    .reverse()
    .filter((lesson) => lesson.featuredOrderOnHomepage)
    .sort((a, b) => a.featuredOrderOnHomepage - b.featuredOrderOnHomepage)

  return (
    <Box mt="16">
      <Heading as="h2" size="xl">
        {t('Featured Content')}
      </Heading>
      <Box>
        {featuredLessons.map((lesson, key) => {
          const isLastFeaturedLesson = key + 1 === featuredLessons.length
          const lessonHasSponsor =
            lesson?.sponsorName?.length && lesson?.sponsorLogo?.length
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
                alt={lesson.englishName}
              >
                <Image src={lesson.lessonImageLink} />
              </InternalLink>
            </LessonBanner>
          )
          const LessonDescription = (
            <Box alignSelf="center" mt="4">
              <Heading fontSize="2xl">
                {t(lesson.name, { ns: 'lesson' })}
              </Heading>
              <Text fontSize="lg" my="4" color="#9E9E9E">
                {t(lesson.description, { ns: 'lesson' })}
              </Text>
              <InternalLink
                href={`/lessons/${lesson.slug}`}
                alt={lesson.englishName}
                margin={lessonHasSponsor ? 'auto' : ''}
                w={lessonHasSponsor ? '100%' : 'inherit'}
              >
                <LessonButton lesson={lesson} />
              </InternalLink>
            </Box>
          )
          return (
            <LessonGrid
              columns={{ sm: 1, md: 2, lg: 2 }}
              key={key}
              gap={6}
              pt="10"
              pb={isLastFeaturedLesson ? '0' : '10'}
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
