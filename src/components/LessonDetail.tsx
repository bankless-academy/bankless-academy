import styled from '@emotion/styled'
import {
  Text,
  Image,
  Button,
  Box,
  useToast,
  useDisclosure,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'
import { ShareFat, CaretDown, CaretUp } from '@phosphor-icons/react'
import { useLocalStorage } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useApp } from 'contexts/AppContext'
import { useState } from 'react'

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
  IS_COLLECTIBLE_ACTIVATED,
  IS_PROD,
  IS_WALLET_DISABLED,
  LESSONS,
  // IS_WHITELABEL,
  TOKEN_GATING_ENABLED,
  TWITTER_ACCOUNT,
} from 'constants/index'
import { useEffect } from 'react'
import { Mixpanel, scrollDown, scrollTop } from 'utils/index'
import OpenLesson from 'components/OpenLesson'
import ShareModal from 'components/ShareModal'
import { useAccount, useEnsName } from 'wagmi'
import { PollIcon, RewardsIcon, QuestIcon, QuizIcon } from './Icons'
import { LearnIcon } from 'components/Icons'
import LessonCard from 'components/LessonCard'

const StyledCard = styled(Card)<{ issmallscreen?: string }>`
  h1 {
  }
`

// const StyledBox = styled(Box)`
//   width: -webkit-fill-available;
//   width: -moz-available;
// `

const closeLesson = (
  openLessons: string[],
  lesson: LessonType,
  Quest,
  toast,
  setOpenLessons: (lessons: string[]) => void
): void => {
  toast.closeAll()
  if (
    Quest?.isQuestCompleted &&
    quizComplete(lesson) &&
    lesson?.badgeId &&
    !(localStorage.getItem(`isBadgeMinted-${lesson.badgeId}`) === 'true')
  )
    scrollDown()

  setOpenLessons(openLessons.filter((slug) => slug !== lesson.slug))
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
    // POLL answers are not mandatory for now
    // if (slide.type === 'POLL') {
    //   quizAnswers.push(
    //     JSON.parse(localStorage.getItem(`quiz-${slide.quiz.id}`) || '[]')
    //       ?.length > 0
    //   )
    // }
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
  const { openLessons, setOpenLessons } = useApp()
  const [showSlides, setShowSlides] = useState(false)

  const [, isSmallScreen] = useSmallScreen()
  const [lessonsCollectedLS] = useLocalStorage('lessonsCollected', [])
  const [refreshDatadiskLS] = useLocalStorage('refreshDatadisk', false)
  const [badgesMintedLS] = useLocalStorage('badgesMinted', [])
  const [, setCurrentSlide] = useLocalStorage(`${lesson.slug}`, 0)
  const currentSlide = localStorage.getItem(`${lesson.slug}`) || null
  const [maxSlide, setMaxSlide] = useLocalStorage<number | null>(
    `${lesson.slug}-maxSlide`,
    currentSlide ? parseInt(currentSlide) : null
  )
  const router = useRouter()
  const pageEndsWithDatadisk = router?.query?.slug?.[0]?.endsWith('-datadisk')
  const toast = useToast()
  const {
    isOpen: isShareOpen,
    onOpen: onShareOpen,
    onClose: onShareClose,
  } = useDisclosure()

  useEffect((): void => {
    Mixpanel.track('lesson_briefing', {
      lesson: lesson?.englishName,
      language: i18n.language,
    })
    scrollTop()
    closeLesson(openLessons, lesson, Quest, toast, setOpenLessons)
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
    (IS_COLLECTIBLE_ACTIVATED || pageEndsWithDatadisk) &&
    !!lesson.lessonCollectibleTokenAddress?.length &&
    lessonsCollectedLS.includes(
      lesson.lessonCollectibleTokenAddress.toLowerCase()
    )

  useEffect((): void => {
    if (isLessonCollected) {
      setMaxSlide(lesson.slides.length - 1)
    }
  }, [isLessonCollected])

  const tallyId =
    lesson.endOfLessonRedirect?.replace('https://tally.so/r/', '') || ''

  const [currentWallet] = useLocalStorage('current_wallet', '')
  const { address } = useAccount()
  const { data: ensName } = useEnsName({
    address: address,
    chainId: 1,
  })
  const langURL = i18n.language !== 'en' ? `${i18n.language}/` : ''
  const referrer = `${
    typeof ensName === 'string' && ensName?.includes('.')
      ? ensName
      : address || currentWallet
  }`
  const locationOrigin =
    typeof window !== 'undefined' ? `${window.location.origin}` : ''
  const shareLink = `${locationOrigin}/start?lesson=${lesson.slug}${
    langURL ? `&lang=${langURL?.replace('/', '')}` : ''
  }${referrer ? `&referrer=${referrer}` : ''}`

  const shareMessage = `Learn about "${lesson.name}" on @${TWITTER_ACCOUNT} 🎉

Join the journey and level up your #web3 knowledge! 👨‍🚀🚀`

  const LessonSlides = ({
    lesson,
  }: {
    lesson: LessonType
  }): React.ReactElement => {
    return (
      <StyledCard
        p={0}
        mt={6}
        mb={isSmallScreen ? 6 : 2}
        w={isSmallScreen ? 'unset' : '380px'}
        minW={isSmallScreen ? 'unset' : '380px'}
      >
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            cursor={isSmallScreen ? 'pointer' : 'unset'}
            p={4}
            onClick={() => setShowSlides(!showSlides)}
            borderBottom={
              isSmallScreen && !showSlides ? 'none' : '1px solid #989898'
            }
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="100%"
              gap={8}
            >
              <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                Progress
              </Text>
              <Box display="flex" alignItems="center" gap={4}>
                <CircularProgress
                  value={
                    ((maxSlide === null ? 0 : maxSlide + 1) /
                      (lesson.slides.length - 1)) *
                    100
                  }
                  color={'#916AB8'}
                >
                  <CircularProgressLabel fontSize="8px">
                    {maxSlide === null ? 0 : maxSlide + 1} /{' '}
                    {lesson.slides.length}
                  </CircularProgressLabel>
                </CircularProgress>
              </Box>
            </Box>
            {isSmallScreen && (
              <>
                {showSlides ? <CaretUp size={24} /> : <CaretDown size={24} />}
              </>
            )}
          </Box>
          {(!isSmallScreen || showSlides) && (
            <Box p={0} py={2}>
              {lesson.slides.map((slide, index) => {
                const isDone = index === 0 || maxSlide >= index
                return (
                  <OpenLesson
                    lesson={lesson}
                    click
                    key={slide.notionId}
                    onLessonOpen={() => {
                      if (isDone) setCurrentSlide(index)
                      if (maxSlide === null) setMaxSlide(0)
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      gap={2}
                      p={2}
                      cursor={isDone ? 'pointer' : 'not-allowed'}
                      onClick={(e) => {
                        if (!isDone) {
                          e.stopPropagation()
                          return
                        }
                      }}
                    >
                      <Box display="inline-flex" alignItems="center" mx="2">
                        {slide.type === 'LEARN' && (
                          <LearnIcon
                            key={`learn-${slide.notionId}`}
                            iconOnly={true}
                            isDone={isDone}
                          />
                        )}
                        {slide.type === 'QUIZ' && (
                          <QuizIcon
                            key={`quiz-${slide.notionId}`}
                            iconOnly={true}
                            isDone={isDone}
                          />
                        )}
                        {slide.type === 'POLL' && (
                          <PollIcon
                            key={`poll-${slide.notionId}`}
                            iconOnly={true}
                            isDone={isDone}
                          />
                        )}
                        {slide.type === 'QUEST' && (
                          <QuestIcon
                            key={`quest-${slide.notionId}`}
                            iconOnly={true}
                            isDone={isDone}
                          />
                        )}
                        {slide.type === 'END' && (
                          <RewardsIcon
                            key={`rewards-${slide.notionId}`}
                            iconOnly={true}
                            isDone={isDone}
                          />
                        )}
                      </Box>
                      <Text color={isDone ? 'white' : 'gray'}>
                        {slide.type === 'QUIZ'
                          ? t('Knowledge Check')
                          : slide.title}
                      </Text>
                    </Box>
                  </OpenLesson>
                )
              })}
            </Box>
          )}
        </Box>
      </StyledCard>
    )
  }

  const NextLesson = (): React.ReactElement => {
    if (badgesMintedLS?.includes(lesson.badgeId)) {
      // find the next unminted badge in the order of the lessons
      const nextLesson = LESSONS.find(
        (l) => !l.isArticle && !badgesMintedLS?.includes(l.badgeId)
      )
      if (!nextLesson) return null
      return (
        <Box p={2} mt={2} mb={2} w={isSmallScreen ? '100%' : '600px'}>
          <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
            Next Lesson
          </Text>
          <Box w={isSmallScreen ? '100%' : '450px'} maxW="100%" m="auto">
            <LessonCard lesson={nextLesson} isNextLesson={true} />
          </Box>
        </Box>
      )
    }
    return null
  }

  return (
    <>
      {openLessons.includes(lesson.slug) ? (
        <Lesson
          key={lesson.slug}
          lesson={lesson}
          extraKeywords={extraKeywords}
          closeLesson={() =>
            closeLesson(openLessons, lesson, Quest, toast, setOpenLessons)
          }
          Quest={Quest}
          isLessonOpen={openLessons.includes(lesson.slug)}
        />
      ) : (
        <Box justifyItems="center">
          <Box
            display={isSmallScreen ? 'block' : 'flex'}
            gap={4}
            justifyContent="center"
          >
            {/* {!isSmallScreen && !IS_WHITELABEL && (
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
          )} */}
            <StyledCard
              py={4}
              px={12}
              w="100%"
              maxW="600px"
              mt={6}
              mb={2}
              display={isSmallScreen ? 'contents' : 'block'}
              position="relative"
            >
              <Box m="auto" p={isSmallScreen ? '12px' : 'auto'}>
                {/* {!isSmallScreen && (
                <Box h="0">
                  <InternalLink
                    href="/lessons"
                    alt={`Back to Lesson Selection`}
                  >
                    <Button
                      position="relative"
                      top={isSmallScreen ? '-4px' : '-70px'}
                      left={isSmallScreen ? '-10px' : '-72px'}
                      size="lg"
                      iconSpacing="0"
                      variant="secondaryBig"
                      leftIcon={<X width="24px" height="24px" />}
                      p="0"
                      _hover={{ p: '0' }}
                    ></Button>
                  </InternalLink>
                </Box>
              )} */}
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
                {/* <LanguageSwitch lesson={lesson} /> */}
                <Box
                  display="flex"
                  mt="4"
                  justifyContent="space-between"
                  maxW="450px"
                  m="auto"
                  mb="4"
                >
                  <OpenLesson
                    lesson={lesson}
                    click
                    onLessonOpen={() => {
                      if (maxSlide === null) setMaxSlide(0)
                    }}
                  >
                    <Box py="2">
                      <Image
                        src={
                          isLessonCollected
                            ? lesson.lessonCollectedImageLink
                            : lesson.lessonImageLink
                        }
                        alt={lesson.englishName}
                      />
                    </Box>
                  </OpenLesson>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mb="8"
                  flexDirection="column"
                  gap="4"
                >
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
                  {badgesMintedLS?.includes(lesson.badgeId) && (
                    <Box display="flex" justifyContent="center" mt="2" mb="8">
                      <Button
                        variant="secondaryBig"
                        size="lg"
                        leftIcon={<ShareFat width="24px" height="24px" />}
                        onClick={() => {
                          onShareOpen()
                        }}
                      >
                        Share & Refer
                      </Button>
                      <ShareModal
                        isOpen={isShareOpen}
                        onClose={onShareClose}
                        shareTitle="Share Lesson, Earn Points"
                        shareMessage={shareMessage}
                        shareLink={shareLink}
                      />
                    </Box>
                  )}
                  {!IS_PROD &&
                    i18n.language !== 'en' &&
                    lesson.translationDate && (
                      <Box color="orange">
                        Last translation update: {lesson.translationDate}
                      </Box>
                    )}
                </Box>
                {isSmallScreen && <LessonSlides lesson={lesson} />}
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
                    {(IS_COLLECTIBLE_ACTIVATED || pageEndsWithDatadisk) &&
                    lesson.hasCollectible ? (
                      <MintDatadiskButton lesson={lesson} />
                    ) : null}
                  </Box>
                )}
              </Box>
            </StyledCard>
            {isSmallScreen && <NextLesson />}
            {!isSmallScreen && <LessonSlides lesson={lesson} />}
          </Box>
          {!isSmallScreen && (
            <Box w="956px" pr="347px" m="auto">
              <NextLesson />
            </Box>
          )}
        </Box>
      )}
    </>
  )
}

export default LessonDetail
