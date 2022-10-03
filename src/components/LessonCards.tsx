import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import {
  Box,
  Text,
  Tag,
  Image,
  TagRightIcon,
  Button,
  Tooltip,
  Link,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import axios from 'axios'
import { CircleWavyCheck } from 'phosphor-react'
import { useRouter } from 'next/router'

import { LESSONS, IS_WHITELABEL } from 'constants/index'
import LessonBanner from 'components/LessonBanner'
import MODULES from 'constants/whitelabel_modules'

const LessonCard = styled(Box)`
  /* background: linear-gradient(
    152.97deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(38, 38, 38, 0.25) 100%
  ); */
  /* backdrop-filter: blur(42px); */
`

const LessonCards: React.FC = () => {
  const router = useRouter()
  const { all, slug } = router.query

  const [stats, setStats]: any = useState(null)

  const moduleId = MODULES.find((m) => m.slug === slug)?.moduleId

  const Lessons =
    module !== undefined && moduleId
      ? LESSONS.filter(
          (lesson) =>
            lesson.publicationStatus === 'publish' &&
            lesson.moduleId === moduleId
        )
      : all !== undefined
      ? LESSONS
      : LESSONS.filter((lesson) => lesson.publicationStatus === 'publish')

  useEffect(() => {
    axios
      .get(`/api/stats`)
      .then(function (res) {
        setStats(res.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <>
      {Lessons.map((lesson, index) => {
        // lesson not started yet: -1
        // const currentSlide = parseInt(localStorage.getItem(lesson.slug) || '-1')
        // const numberOfSlides = lesson.slides.length
        const isKudosMinted = localStorage.getItem(
          `isKudosMinted-${lesson.kudosId}`
        )
        const isLessonStarted = (localStorage.getItem(lesson.slug) || 0) > 0
        const lessonCompleted =
          (lesson.quest &&
            stats?.lessonCompleted &&
            stats?.lessonCompleted[lesson.notionId]) ||
          0
        return (
          <LessonCard
            key={`lesson-${index}`}
            p={4}
            pb={8}
            border="1px solid #72757b"
            borderRadius="3xl"
          >
            <Text fontSize="xl" fontWeight="bold">
              {lesson.name}
            </Text>
            <Text fontSize="lg">{lesson.description}</Text>
            <Box display="flex" justifyContent="space-between" my="4">
              <Tag size="sm" variant={isKudosMinted ? 'solid' : 'outline'}>
                {isKudosMinted ? 'Done' : `${lesson.duration} minutes`}
                {isKudosMinted ? (
                  <TagRightIcon as={CircleWavyCheck} weight="bold" />
                ) : null}
              </Tag>
              <Text fontSize="sm">
                {lessonCompleted > 0 && `${lessonCompleted} Completions`}
              </Text>
            </Box>
            <NextLink href={`/lessons/${lesson.slug}`}>
              <LessonBanner
                iswhitelabel={IS_WHITELABEL.toString()}
                cursor="pointer"
                // overflow="hidden"
                style={{
                  aspectRatio: '1.91/1',
                }}
                py="4"
              >
                <Image src={lesson.lessonImageLink} />
              </LessonBanner>
            </NextLink>
            <Box display="flex" flexDirection="row-reverse" mt="4">
              <NextLink href={`/lessons/${lesson.slug}`}>
                <Button variant="primary">
                  {isKudosMinted
                    ? 'Review Lesson'
                    : isLessonStarted
                    ? 'Resume Lesson'
                    : 'Start Lesson'}
                </Button>
              </NextLink>
              {isKudosMinted ? (
                <Tooltip
                  hasArrow
                  label="Join other explorers to discuss this lesson."
                >
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href={lesson.communityDiscussionLink}
                    mr="16px"
                  >
                    <Button variant="outline">👨‍🚀 Community</Button>
                  </Link>
                </Tooltip>
              ) : null}
            </Box>
          </LessonCard>
        )
      })}
    </>
  )
}

export default LessonCards
