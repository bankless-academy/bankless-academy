import styled from '@emotion/styled'
import { Text, Image, Button, Box } from '@chakra-ui/react'
import { ArrowUUpLeft } from '@phosphor-icons/react'
import { useLocalStorage } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'

import { LessonType } from 'entities/lesson'
import Lesson from 'components/Lesson'
import Card from 'components/Card'
import Badge from 'components/Badge'
import QuestComponent from 'components/Quest/QuestComponent'
import CollectLessonButton from 'components/CollectLessonButton'
import InternalLink from 'components/InternalLink'
import { useSmallScreen } from 'hooks'
import LessonButton from 'components/LessonButton'
import NFT from 'components/NFT'
import ExternalLink from './ExternalLink'
import { DOMAIN_URL, TOKEN_GATING_ENABLED } from 'constants/index'
import { useEffect } from 'react'
import { scrollTop } from 'utils'
import OpenLesson from 'components/OpenLesson'
import { useRouter } from 'next/router'

const StyledCard = styled(Card)<{ issmallscreen?: string }>`
  h1 {
  }
`

const StyledBox = styled(Box)`
  width: -webkit-fill-available;
  width: -moz-available;
`

const closeLesson = (openedLesson: string, lesson: LessonType): string => {
  const openedLessonArray = JSON.parse(openedLesson)
  return JSON.stringify(
    [...openedLessonArray, lesson.slug].filter((value) => value !== lesson.slug)
  )
}

const quizComplete = (lesson: LessonType): boolean => {
  const quizAnswers = []
  for (const slide of lesson.slides) {
    if (slide.type === 'QUIZ') {
      quizAnswers.push(
        parseInt(localStorage.getItem(`quiz-${slide.quiz.id}`)) ===
          slide.quiz.rightAnswerNumber
      )
    }
  }
  return !quizAnswers.includes(false)
}

const LessonDetail = ({
  lesson,
  extraKeywords,
}: {
  lesson: LessonType
  extraKeywords?: any
}): React.ReactElement => {
  const { i18n } = useTranslation()
  const router = useRouter()
  const [, isSmallScreen] = useSmallScreen()
  const [lessonsCollectedLS] = useLocalStorage('lessonsCollected', [])

  const [openLessonLS, setOpenLessonLS] = useLocalStorage(
    `lessonOpen`,
    JSON.stringify([])
  )

  useEffect((): void => {
    scrollTop()
    setOpenLessonLS(closeLesson(openLessonLS, lesson))
  }, [])

  const isQuizComplete = quizComplete(lesson)

  const Quest = QuestComponent(lesson.quest, lesson.badgeId)

  const hasLessonGating =
    TOKEN_GATING_ENABLED && lesson?.nftGating && lesson?.nftGatingRequirements

  const lang =
    typeof window !== 'undefined' && window.location.search.length
      ? window.location.search.replace('?lang=', '')
      : 'en'

  const isLessonCollected =
    !!lesson.lessonCollectibleTokenAddress?.length &&
    lessonsCollectedLS.includes(
      lesson.lessonCollectibleTokenAddress.toLowerCase()
    )

  const tallyId =
    lesson.endOfLessonRedirect?.replace('https://tally.so/r/', '') || ''

  return (
    <>
      {JSON.parse(openLessonLS)?.includes(lesson.slug) ? (
        <Lesson
          lesson={lesson}
          extraKeywords={extraKeywords}
          closeLesson={() => setOpenLessonLS(closeLesson(openLessonLS, lesson))}
          Quest={Quest}
        />
      ) : (
        <>
          {!isSmallScreen && (
            <StyledBox
              w="-webkit-fill-available"
              position="absolute"
              h="calc( 100vh - 97px)"
              minH="calc( 100% - 97px)"
              overflow="hidden"
            >
              <Image
                position="relative"
                top="0"
                right="-500px"
                h="100%"
                zIndex="1"
                src="/images/bankless-instructor.png"
              />
            </StyledBox>
          )}
          <StyledCard
            p={12}
            maxW="600px"
            mt={6}
            display={isSmallScreen ? 'contents' : 'block'}
            position="relative"
          >
            <Box m="auto" p={isSmallScreen ? '12px' : 'auto'}>
              <Box h="0">
                <InternalLink href="/lessons" alt={`Back to Lesson Selection`}>
                  <Button
                    position="relative"
                    top={isSmallScreen ? '-4px' : '-70px'}
                    left={isSmallScreen ? '-10px' : '-83px'}
                    size={isSmallScreen ? 'md' : 'lg'}
                    iconSpacing="0"
                    variant="secondaryBig"
                    leftIcon={<ArrowUUpLeft width="24px" height="24px" />}
                    p={isSmallScreen ? '0' : 'auto'}
                  ></Button>
                </InternalLink>
              </Box>
              <Text
                as="h1"
                fontSize="3xl"
                fontWeight="bold"
                textAlign="center"
                m="auto"
                borderBottom="1px solid #989898"
                w="fit-content"
                maxW="calc(100vw - 100px)"
                mb="8"
                mt={isSmallScreen ? '-10px' : 'auto'}
              >
                {lesson.name}
              </Text>
              {lesson.languages?.length ? (
                <Box textAlign="center">
                  <Button
                    variant={lang === 'en' ? 'solid' : 'outline'}
                    ml={3}
                    onClick={() => {
                      i18n.changeLanguage('en', () =>
                        router.push(`/lessons/${lesson.slug}?lang=en`)
                      )
                    }}
                  >
                    🇺🇸
                  </Button>
                  {lesson.languages.map((l) => (
                    <Button
                      variant={lang === l ? 'solid' : 'outline'}
                      key={lang}
                      onClick={() => {
                        i18n.changeLanguage(l, () =>
                          router.push(`/lessons/${lesson.slug}?lang=${l}`)
                        )
                      }}
                      ml={3}
                    >
                      {l === 'es' && '🇪🇸'}
                      {l === 'fr' && '🇫🇷'}
                      {l === 'de' && '🇩🇪'}
                      {l === 'jp' && '🇯🇵'}
                      {l === 'cn' && '🇨🇳'}
                    </Button>
                  ))}
                </Box>
              ) : null}
              <Box
                display="flex"
                mt="4"
                justifyContent="space-between"
                maxW="450px"
                m="auto"
                mb="8"
              >
                <OpenLesson lesson={lesson} click>
                  <Box py="2">
                    <Image
                      src={
                        isLessonCollected
                          ? lesson.lessonCollectedImageLink
                          : lesson.lessonImageLink
                      }
                    />
                  </Box>
                </OpenLesson>
              </Box>
              <Box display="flex" justifyContent="center" mb="8">
                <LessonButton lesson={lesson} click />
              </Box>
              <Box>
                <Text
                  as="h2"
                  fontSize="2xl"
                  fontWeight="bold"
                  borderBottom="1px solid #989898"
                  pb="2"
                >
                  Lesson Description
                </Text>
                <Text as="p" fontSize="medium" py="4">
                  {lesson.description}
                </Text>
              </Box>
              {hasLessonGating && (
                <Box my="4">
                  <Text
                    as="h2"
                    fontSize="2xl"
                    fontWeight="bold"
                    borderBottom="1px solid #989898"
                    pb="2"
                  >
                    Lesson Requirements
                  </Text>
                  <Box textAlign="center">
                    <NFT nftLink={lesson.nftGatingImageLink} />
                    <Text as="p" fontSize="medium" py="4">
                      {lesson.nftGatingRequirements}
                    </Text>
                    <ExternalLink
                      href={lesson.nftGatingLink.replace(DOMAIN_URL, '')}
                    >
                      <Button size="lg" variant="primaryBig">
                        {lesson.nftGatingCTA}
                      </Button>
                    </ExternalLink>
                  </Box>
                </Box>
              )}
              {lesson.endOfLessonRedirect &&
                isQuizComplete &&
                Quest?.isQuestCompleted && (
                  <>
                    <Box pb="8">
                      <Text
                        as="h2"
                        fontSize="2xl"
                        fontWeight="bold"
                        borderBottom="1px solid #989898"
                        pb="2"
                      >
                        Feedback
                      </Text>
                    </Box>
                    <Box>{lesson.endOfLessonText}</Box>
                    <Box textAlign="center">
                      <InternalLink href={`/feedback?tally=${tallyId}`}>
                        <Button variant="primaryBig" size="lg">
                          Leave feedback
                        </Button>
                      </InternalLink>
                    </Box>
                  </>
                )}
              {lesson.badgeId && (
                <>
                  <Box pb="8">
                    <Text
                      as="h2"
                      fontSize="2xl"
                      fontWeight="bold"
                      borderBottom="1px solid #989898"
                      pb="2"
                    >
                      Rewards
                    </Text>
                  </Box>
                  <Box textAlign="center">
                    <Badge
                      lesson={lesson}
                      isQuestCompleted={
                        isQuizComplete && Quest?.isQuestCompleted
                      }
                    />
                  </Box>
                </>
              )}
              {lesson.hasCollectible ? (
                <CollectLessonButton lesson={lesson} />
              ) : null}
            </Box>
          </StyledCard>
        </>
      )}
    </>
  )
}

export default LessonDetail
