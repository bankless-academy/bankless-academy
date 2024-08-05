import styled from '@emotion/styled'
import { Text, Image, Button, Box, useToast } from '@chakra-ui/react'
import { ArrowUUpLeft } from '@phosphor-icons/react'
import { useLocalStorage } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'

import { LessonType } from 'entities/lesson'
import Lesson from 'components/Lesson'
import Card from 'components/Card'
import Badge from 'components/Badge'
import QuestComponent from 'components/Quest/QuestComponent'
import MintDatadiskButton from 'components/MintDatadiskButton'
import InternalLink from 'components/InternalLink'
import { useSmallScreen } from 'hooks/index'
import LessonButton from 'components/LessonButton'
import NFT from 'components/NFT'
import ExternalLink from 'components/ExternalLink'
import {
  DOMAIN_URL,
  IS_PROD,
  IS_WALLET_DISABLED,
  IS_WHITELABEL,
  TOKEN_GATING_ENABLED,
} from 'constants/index'
import { useEffect } from 'react'
import { Mixpanel, scrollDown, scrollTop } from 'utils/index'
import OpenLesson from 'components/OpenLesson'
import LanguageSwitch from 'components/LanguageSwitch'

const StyledCard = styled(Card)<{ issmallscreen?: string }>`
  h1 {
  }
`

const StyledBox = styled(Box)`
  width: -webkit-fill-available;
  width: -moz-available;
`

const closeLesson = (
  openedLesson: string,
  lesson: LessonType,
  Quest,
  toast
): string => {
  const openedLessonArray = JSON.parse(openedLesson)
  toast.closeAll()
  if (
    Quest?.isQuestCompleted &&
    quizComplete(lesson) &&
    lesson?.badgeId &&
    !(localStorage.getItem(`isBadgeMinted-${lesson.badgeId}`) === 'true')
  )
    scrollDown()
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
    } else if (slide.type === 'POLL') {
      quizAnswers.push(
        JSON.parse(localStorage.getItem(`quiz-${slide.quiz.id}`) || '[]')
          ?.length > 0
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
  const { t, i18n } = useTranslation()

  const [, isSmallScreen] = useSmallScreen()
  const [lessonsCollectedLS] = useLocalStorage('lessonsCollected', [])
  const [refreshDatadiskLS] = useLocalStorage('refreshDatadisk', false)
  const [badgesMintedLS] = useLocalStorage('badgesMinted', [])
  const toast = useToast()

  const [openLessonLS, setOpenLessonLS] = useLocalStorage(
    `lessonOpen`,
    JSON.stringify([])
  )

  useEffect((): void => {
    Mixpanel.track('lesson_briefing', {
      lesson: lesson?.englishName,
      language: i18n.language,
    })
    scrollTop()
    setOpenLessonLS(closeLesson(openLessonLS, lesson, Quest, toast))
  }, [])

  useEffect((): void => {
    if (refreshDatadiskLS) scrollDown()
  }, [refreshDatadiskLS])

  const isQuizComplete = quizComplete(lesson)

  const Quest =
    // HACK: no quest for Ethereum Basics
    lesson.slug === 'ethereum-basics' && quizComplete(lesson)
      ? { isQuestCompleted: true, questComponent: <></> }
      : QuestComponent(lesson, lesson.badgeId)

  const hasLessonGating =
    TOKEN_GATING_ENABLED && lesson?.nftGating && lesson?.nftGatingRequirements

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
          closeLesson={() =>
            setOpenLessonLS(closeLesson(openLessonLS, lesson, Quest, toast))
          }
          Quest={Quest}
        />
      ) : (
        <>
          {!isSmallScreen && !IS_WHITELABEL && (
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
              <LanguageSwitch lesson={lesson} />
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
                  {t('Lesson Description')}
                </Text>
                <Text as="p" fontSize="medium" py="4">
                  {lesson.description}
                </Text>
                {!IS_PROD &&
                  i18n.language !== 'en' &&
                  lesson.translationDate && (
                    <Box color="orange">
                      Last translation update: {lesson.translationDate}
                    </Box>
                  )}
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
                    {t('Lesson Requirements')}
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
              {lesson?.endOfLessonRedirect &&
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
                        {t('Feedback')}
                      </Text>
                    </Box>
                    <Box>{lesson?.endOfLessonText}</Box>
                    <Box textAlign="center">
                      <InternalLink
                        href={`/feedback?tally=${tallyId}`}
                        alt="Leave feedback"
                      >
                        <Button variant="primaryBig" size="lg">
                          {t('Leave feedback')}
                        </Button>
                      </InternalLink>
                    </Box>
                  </>
                )}
              {!IS_WALLET_DISABLED && (
                <Box
                  minH={
                    isSmallScreen &&
                    Quest?.isQuestCompleted &&
                    badgesMintedLS?.length === 0
                      ? // HACK: make mobile height bigger to show popover under button
                        '570px'
                      : 'unset'
                  }
                >
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
                          Badge
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
                    <MintDatadiskButton lesson={lesson} />
                  ) : null}
                </Box>
              )}
            </Box>
          </StyledCard>
        </>
      )}
    </>
  )
}

export default LessonDetail
