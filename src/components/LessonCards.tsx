import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { Box, Text, Tag, Image, TagRightIcon } from '@chakra-ui/react'
import styled from '@emotion/styled'
import axios from 'axios'
import { CircleWavyCheck } from 'phosphor-react'
import ReactHtmlParser from 'react-html-parser'
import { useMediaQuery } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { LESSONS, IS_WHITELABEL } from 'constants/index'
import LessonBanner from 'components/LessonBanner'

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
  const { all } = router.query

  const [stats, setStats]: any = useState(null)
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  const Lessons =
    all !== undefined
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
        const isPoapClaimed = localStorage.getItem(`poap-${lesson.slug}`)
        const lessonCompleted =
          (lesson.quest && stats?.lessonCompleted[lesson.quest]) || 0
        return (
          <LessonCard
            key={`lesson-${index}`}
            p={4}
            pb={8}
            borderBottom={
              isSmallScreen && index + 1 < LESSONS.length
                ? '1px solid #72757b'
                : ''
            }
          >
            <Text fontSize="xl" fontWeight="bold">
              {lesson.name}
            </Text>
            <Text fontSize="lg">{lesson.description}</Text>
            <Box display="flex" justifyContent="space-between" my="4">
              <Tag size="sm" variant={isPoapClaimed ? 'solid' : 'outline'}>
                {isPoapClaimed ? 'Done' : `${lesson.duration} minutes`}
                {isPoapClaimed ? (
                  <TagRightIcon as={CircleWavyCheck} weight="bold" />
                ) : null}
              </Tag>
              <Text fontSize="sm">
                {lessonCompleted > 0 && `${lessonCompleted} Completions`}
              </Text>
            </Box>
            <NextLink href={`/lessons/${lesson.slug}`}>
              <LessonBanner
                iswhitelabel={IS_WHITELABEL}
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
            <Text fontSize="md" mt="4">
              {ReactHtmlParser(lesson.learnings)}
            </Text>
          </LessonCard>
        )
      })}
    </>
  )
}

export default LessonCards
