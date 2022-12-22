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
import { useLocalStorage } from 'usehooks-ts'

import { LESSONS, IS_WHITELABEL } from 'constants/index'
import LessonBanner from 'components/LessonBanner'
import MODULES from 'constants/whitelabel_modules'
import { IS_DEBUG } from 'utils/index'

const LessonCard = styled(Box)`
  position: relative;
  ::after {
    background: linear-gradient(
      107.1deg,
      rgba(46, 33, 33, 0.3) -3.13%,
      rgba(80, 73, 84, 0.3) 16.16%,
      rgba(94, 89, 104, 0.3) 29.38%,
      rgba(86, 81, 94, 0.3) 41.5%,
      rgba(23, 21, 21, 0.3) 102.65%
    );
    opacity: 0.6;
    border-radius: var(--chakra-radii-3xl);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  ::before {
    background: radial-gradient(#353535, #3d3333);
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: var(--chakra-radii-3xl);
    padding: 1px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: source-out;
    mask-composite: exclude;
  }
`

const StyledTag = styled(Tag)<{ isKudosMinted?: string }>`
  ${(props) =>
    props.isKudosMinted === 'true' &&
    `
    ::before {
      background: #F1B15A;
    }
    color: #F1B15A;
  `};
`

const LessonCards: React.FC = () => {
  const router = useRouter()
  const { all, slug } = router.query

  const [stats, setStats]: any = useState(null)
  const [kudosMintedLS] = useLocalStorage('kudosMinted', [])

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
    if (IS_DEBUG) {
      axios
        .get(`/api/stats`)
        .then(function (res) {
          setStats(res.data)
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }, [])

  return (
    <>
      {Lessons.map((lesson, index) => {
        // lesson not started yet: -1
        // const currentSlide = parseInt(localStorage.getItem(lesson.slug) || '-1')
        // const numberOfSlides = lesson.slides.length
        const isKudosMinted = kudosMintedLS.includes(lesson.kudosId)
        const isLessonStarted = (localStorage.getItem(lesson.slug) || 0) > 0
        const lessonCompleted =
          (lesson.quest &&
            stats?.lessonCompleted &&
            stats?.lessonCompleted[lesson.notionId]) ||
          0
        return (
          <LessonCard key={`lesson-${index}`} p={6} pb={8} borderRadius="3xl">
            <Box position="relative" zIndex="1">
              <Text fontSize="xl" fontWeight="bold">
                {lesson.name}
              </Text>
              <Box display="flex" justifyContent="space-between" my="4">
                {isKudosMinted || lesson.duration ? (
                  <StyledTag
                    size="md"
                    variant="outline"
                    isKudosMinted={isKudosMinted?.toString()}
                  >
                    {isKudosMinted ? 'Done' : `${lesson.duration} minutes`}
                    {isKudosMinted ? (
                      <TagRightIcon as={CircleWavyCheck} weight="bold" />
                    ) : null}
                  </StyledTag>
                ) : (
                  <Tag size="md" backgroundColor="transparent"></Tag>
                )}

                <Text fontSize="md">
                  {lessonCompleted > 0 && `${lessonCompleted} Completions`}
                </Text>
              </Box>
              <Text fontSize="lg" minH="54px">
                {lesson.description}
              </Text>
              <NextLink href={`/lessons/${lesson.slug}`}>
                <LessonBanner
                  iswhitelabel={IS_WHITELABEL.toString()}
                  isArticle={lesson?.isArticle?.toString()}
                  cursor="pointer"
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
                  <Button
                    variant={
                      isKudosMinted || lesson?.isArticle
                        ? 'secondary'
                        : 'primary'
                    }
                  >
                    {lesson?.isArticle
                      ? 'Read Entry'
                      : isKudosMinted
                      ? 'Revisit Lesson'
                      : isLessonStarted
                      ? 'Resume Lesson'
                      : 'Start Lesson'}
                  </Button>
                </NextLink>
                {isKudosMinted && lesson.communityDiscussionLink ? (
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
                      <Button variant="outline">👨‍🚀 Discussion</Button>
                    </Link>
                  </Tooltip>
                ) : null}
              </Box>
            </Box>
          </LessonCard>
        )
      })}
    </>
  )
}

export default LessonCards
