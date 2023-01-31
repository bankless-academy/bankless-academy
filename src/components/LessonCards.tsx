import React, { useEffect, useState } from 'react'
import {
  Box,
  Text,
  Tag,
  Image,
  TagRightIcon,
  Button,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import axios from 'axios'
import { CircleWavyCheck } from 'phosphor-react'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'usehooks-ts'

import { LESSONS, IS_WHITELABEL } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import InternalLink from 'components/InternalLink'
import LessonBanner from 'components/LessonBanner'
import MODULES from 'constants/whitelabel_modules'
import { getArticlesCollected, IS_DEBUG, Mixpanel } from 'utils/index'
import SubscriptionModal from 'components/SubscriptionModal'
import { LessonType } from 'entities/lesson'
import { useActiveWeb3React } from 'hooks'

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

const StyledTag = styled(Tag)<{ iskudosminted?: string }>`
  ${(props) =>
    props.iskudosminted === 'true' &&
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
  const [articlesCollectedLS, setArticlesCollectedLS] = useLocalStorage(
    'articlesCollected',
    []
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedLesson, setSelectedLesson] = useState<LessonType>()
  const { account } = useActiveWeb3React()

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
      : LESSONS.filter(
          (lesson) =>
            lesson.publicationStatus === 'publish' ||
            lesson.publicationStatus === 'planned'
        )

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

  useEffect(() => {
    const updateArticlesCollected = async () => {
      const articlesCollected = await getArticlesCollected(account)
      if (articlesCollected && Array.isArray(articlesCollected))
        setArticlesCollectedLS(articlesCollected)
    }
    if (!IS_WHITELABEL && account) {
      updateArticlesCollected().catch(console.error)
    }
  }, [account])

  return (
    <>
      {Lessons.map((lesson, index) => {
        // lesson not started yet: -1
        // const currentSlide = parseInt(localStorage.getItem(lesson.slug) || '-1')
        // const numberOfSlides = lesson.slides.length
        const isKudosMinted = kudosMintedLS.includes(lesson.kudosId)
        const isLessonStarted = (localStorage.getItem(lesson.slug) || 0) > 0
        const isNotified =
          lesson.publicationStatus === 'planned'
            ? localStorage.getItem(`${lesson.slug}-notification`)
            : false
        const lessonCompleted =
          (lesson.quest &&
            stats?.lessonCompleted &&
            stats?.lessonCompleted[lesson.notionId]) ||
          0
        const isArticleCollected =
          lesson.mirrorNFTAddress?.length &&
          articlesCollectedLS.includes(lesson.mirrorNFTAddress)
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
                    iskudosminted={isKudosMinted?.toString()}
                  >
                    {isKudosMinted ? 'Done' : `${lesson.duration} minutes`}
                    {isKudosMinted ? (
                      <TagRightIcon as={CircleWavyCheck} weight="bold" />
                    ) : null}
                  </StyledTag>
                ) : (
                  <Tag size="md" backgroundColor="transparent"></Tag>
                )}
                <Text fontSize="md" alignSelf="center">
                  {lessonCompleted > 0 && `${lessonCompleted} Completions`}
                </Text>
              </Box>
              <Text fontSize="lg" minH="54px">
                {lesson.description}
              </Text>
              {lesson.publicationStatus === 'planned' && all === undefined ? (
                <LessonBanner
                  iswhitelabel={IS_WHITELABEL.toString()}
                  isarticle={lesson?.isArticle?.toString()}
                  style={{
                    aspectRatio: '1.91/1',
                  }}
                  py="4"
                >
                  <Image src={lesson.lessonImageLink} />
                </LessonBanner>
              ) : (
                <InternalLink
                  href={`/lessons/${lesson.slug}`}
                  alt={lesson.name}
                >
                  <LessonBanner
                    iswhitelabel={IS_WHITELABEL.toString()}
                    isarticle={lesson?.isArticle?.toString()}
                    cursor="pointer"
                    style={{
                      aspectRatio: '1.91/1',
                    }}
                    py="4"
                  >
                    <Image src={lesson.lessonImageLink} />
                  </LessonBanner>
                </InternalLink>
              )}
              <Box
                display="flex"
                flexDirection="row-reverse"
                mt="4"
                justifyContent="space-between"
              >
                {lesson.publicationStatus === 'planned' && all === undefined ? (
                  <Button
                    variant={isNotified ? 'outline' : 'primary'}
                    onClick={() => {
                      if (isNotified) return
                      setSelectedLesson(lesson)
                      onOpen()
                      Mixpanel.track('click_internal_link', {
                        link: 'modal',
                        name: 'Lesson notification',
                        lesson: lesson.name,
                      })
                    }}
                    cursor={isNotified ? 'default' : 'pointer'}
                  >
                    {isNotified ? 'Subscribed' : 'Notify me'}
                  </Button>
                ) : (
                  <InternalLink
                    href={`/lessons/${lesson.slug}`}
                    alt={lesson.name}
                  >
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
                  </InternalLink>
                )}
                {isKudosMinted && lesson.communityDiscussionLink ? (
                  <ExternalLink
                    href={lesson.communityDiscussionLink}
                    alt={`${lesson.name} community discussion`}
                  >
                    <Tooltip
                      hasArrow
                      label="Join other explorers to discuss this lesson."
                    >
                      <Button variant="secondary">👨‍🚀 Discussion</Button>
                    </Tooltip>
                  </ExternalLink>
                ) : null}
                {lesson.isArticle ? (
                  isArticleCollected ? (
                    <Button variant="secondaryGold">Entry Collected</Button>
                  ) : (
                    <ExternalLink href={lesson.mirrorLink}>
                      <Tooltip hasArrow label="Collect Entry on Mirror.xyz">
                        <Button variant="primaryGold">Collect Entry</Button>
                      </Tooltip>
                    </ExternalLink>
                  )
                ) : null}
              </Box>
            </Box>
          </LessonCard>
        )
      })}
      <SubscriptionModal
        lesson={selectedLesson}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

export default LessonCards
