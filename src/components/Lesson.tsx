import React, { useRef, useState, useEffect } from 'react'
import {
  Box,
  Text,
  Image as ChakraImage,
  ButtonGroup,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react'
import { useHotkeys } from 'react-hotkeys-hook'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import ReactHtmlParser from 'react-html-parser'
import { ArrowBackIcon, ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons'
import { Warning } from 'phosphor-react'
// import { isMobile } from 'react-device-detect'
import { useLocalStorage } from 'usehooks-ts'

import { LessonType, SlideType } from 'entities/lesson'
import ProgressSteps from 'components/ProgressSteps'
import Card from 'components/Card'
import MintKudos from 'components/MintKudos'
import QuestComponent from 'components/Quest/QuestComponent'
import ExternalLink from 'components/ExternalLink'
import InternalLink from 'components/InternalLink'
import { useActiveWeb3React, useSmallScreen } from 'hooks/index'
import { Mixpanel, track } from 'utils'
import { IS_WHITELABEL, KEYWORDS } from 'constants/index'
import { LearnIcon, QuizIcon, QuestIcon, KudosIcon } from 'components/Icons'
import { theme } from 'theme/index'

const Slide = styled(Card)<{ issmallscreen?: string; slidetype: SlideType }>`
  border-radius: 0.5rem;
  ${(props) => props.issmallscreen === 'true' && 'display: contents;'};
  h1 {
    margin-top: 1em;
    font-size: var(--chakra-fontSizes-2xl);
  }
  span.keyword {
    cursor: help;
    border-bottom: 1px dashed grey;
    display: inline-block !important;
  }
  div.content > div {
    ${(props) =>
      props.slidetype === 'LEARN' &&
      (props.issmallscreen === 'true' ? 'display: block;' : 'display: flex;')};
  }
  div.content > div > img {
    margin: auto;
    ${(props) => props.issmallscreen !== 'true' && 'max-height: 60vh;'};
  }
  .bloc-ab {
    flex: 1 1 0;
    margin: 10px;
  }
  .bloc-ab img {
    width: 100%;
  }
  .bloc-b {
    ${(props) =>
      props.issmallscreen === 'true' && 'border-bottom: 1px solid #72757B;'};
  }
  div.content > div > div:last-child .bloc-b {
    border-bottom: none;
  }
  .bloc1,
  .bloc2 {
    flex: 1;
  }
  .bloc2 {
    align-self: center;
    img {
      width: auto;
      margin: auto;
      max-height: 100%;
    }
    ${(props) =>
      props.issmallscreen === 'true'
        ? `
        margin-top: 24px;
        img {
          width: 100%;
          max-width: 800px;
        }
      `
        : 'img {  max-height: 60vh; max-height: 600px; }'};
  }
  div.content div {
    h2,
    p {
      font-size: var(--chakra-fontSizes-xl);
      margin: 1em;
    }
    h2 {
      font-weight: bold;
    }
    a {
      color: #b85ff1;
      text-decoration: none;
    }
    ul,
    ol {
      font-size: var(--chakra-fontSizes-xl);
      margin-left: 2em;
    }
    iframe {
      margin: 20px auto 0;
      width: 640px;
      max-width: 100%;
      height: 360px;
    }
    blockquote {
      font-size: var(--chakra-fontSizes-lg);
      margin: 1em;
      padding-left: 1em;
      border-left: 2px solid white;
    }
  }
`

const Answers = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: black;
    margin-right: 0.5em;
    margin-bottom: 4px;
  }
`

export type AnswerStateType = 'UNSELECTED' | 'CORRECT' | 'WRONG'

const QuizAnswer = styled(Button)<{
  answerstate: AnswerStateType
  isActive: boolean
}>`
  ${(props) => props.isActive && 'cursor: default;'};
  ${(props) =>
    props.answerstate === 'UNSELECTED' &&
    props.isActive &&
    'background: #1C1C1C !important;'}
  ${(props) =>
    props.answerstate === 'CORRECT' &&
    'background: linear-gradient(95.83deg, #44A991 -9.2%, rgba(68, 169, 145, 0.7) 97.91%) !important;'}
  ${(props) =>
    props.answerstate === 'WRONG' &&
    'background: linear-gradient(91.91deg, #A94462 49%, rgba(169, 68, 98, 0.7) 124.09%) !important;'}
`

const SlideNav = styled(Box)<{ issmallscreen?: string }>`
  ${(props) =>
    props.issmallscreen === 'true' &&
    `
      position: fixed;
      bottom: 0;
      width: 100%;
      left: 0;
      background-color: black;
      z-index: 10;
      border-top:1px solid #222222;
      `};
`

const Lesson = ({
  lesson,
  extraKeywords,
}: {
  lesson: LessonType
  extraKeywords?: any
}): React.ReactElement => {
  const numberOfSlides = lesson.slides.length
  // HACK: when reducing the number of slides in a lesson
  if (
    parseInt(localStorage.getItem(lesson.slug) || '0') + 1 >=
    numberOfSlides
  ) {
    localStorage.setItem(lesson.slug, (numberOfSlides - 1).toString())
  }

  const buttonLeftRef = useRef(null)
  const buttonRightRef = useRef(null)
  const answerRef = useRef([])
  const [currentSlide, setCurrentSlide] = useState(
    parseInt(localStorage.getItem(lesson.slug) || '0')
  )
  const [selectedAnswerNumber, setSelectedAnswerNumber] = useState<number>(null)
  const [, isSmallScreen] = useSmallScreen()
  const [, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )
  const [isKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${lesson.kudosId}`,
    false
  )

  const router = useRouter()
  // TODO: track embed origin
  const { embed } = router.query
  const slide = lesson.slides[currentSlide]
  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide + 1 === numberOfSlides
  const isBeforeLastSlide = currentSlide + 2 === numberOfSlides

  const { account } = useActiveWeb3React()
  const walletAddress = account
  // DEV ENV: you can force a specific wallet address here if you want to test the claiming function
  // walletAddress = '0xbd19a3f0a9cace18513a1e2863d648d13975cb44'

  const keywords = { ...KEYWORDS, ...extraKeywords }

  useEffect((): void => {
    localStorage.setItem(lesson.slug, currentSlide.toString())
  }, [currentSlide])

  useEffect((): void => {
    if (account) setConnectWalletPopupLS(false)
    if ((slide.type === 'QUEST' || slide.type === 'END') && !account)
      setConnectWalletPopupLS(true)
  }, [account, slide])

  useEffect(() => {
    Mixpanel.track('open_lesson', { lesson: lesson?.name })
    // preloading all lesson images after 3 seconds for smoother transitions
    setTimeout(() => {
      lesson.imageLinks.forEach((imageLink) => {
        const img = new Image()
        img.src = imageLink
      })
    }, 3000)
  }, [])

  const scrollTop = () => {
    // 0.3 second delay
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 300)
  }

  const goToPrevSlide = () => {
    if (!isFirstSlide) {
      setCurrentSlide(currentSlide - 1)
      scrollTop()
    }
    setSelectedAnswerNumber(null)
  }

  const goToNextSlide = () => {
    if (slide.quiz && localStorage.getItem(`quiz-${slide.quiz.id}`) === null) {
      alert('select your answer to the quiz first')
    } else if (!isLastSlide) {
      setCurrentSlide(currentSlide + 1)
      scrollTop()
    } else if (isLastSlide) {
      scrollTop()
      if (lesson.endOfLessonRedirect) {
        if (lesson.endOfLessonRedirect.includes('https://tally.so/r/')) {
          // redirect to embeded Tally form
          const tallyId = lesson.endOfLessonRedirect.replace(
            'https://tally.so/r/',
            ''
          )
          router.push(`/feedback?tally=${tallyId}`)
        } else {
          // generic redirect
          document.location.href = lesson.endOfLessonRedirect
        }
      } else {
        // defaut: go back to lessons
        if (IS_WHITELABEL) router.push('/')
        else router.push('/lessons')
      }
    }
    setSelectedAnswerNumber(null)
  }

  const selectAnswer = (e, answerNumber: number) => {
    if (slide.type !== 'QUIZ') return
    if (!answerIsCorrect) setSelectedAnswerNumber(answerNumber)
    if (slide.quiz.rightAnswerNumber === answerNumber) {
      track('quiz_answer', {
        id: slide.quiz.id,
        isRightAnswer: true,
        selectedAnswerNumber: answerNumber,
      })
      // correct answer
      localStorage.setItem(`quiz-${slide.quiz.id}`, answerNumber.toString())
    } else if (!answerIsCorrect) {
      track('quiz_answer', {
        id: slide.quiz.id,
        isRightAnswer: false,
        selectedAnswerNumber: answerNumber,
      })
      // wrong answer
    }
  }

  // shortcuts
  // TODO: add modal with all the shortcuts
  useHotkeys('?,shift+/', () =>
    alert(
      'TODO: add a modal with all the shortcuts 👉 previous slide ⬅️ | next slide ➡️ | select quiz answer 1️⃣ / 2️⃣ / 3️⃣ / 4️⃣'
    )
  )
  useHotkeys('left', () => {
    buttonLeftRef?.current?.click()
  })
  useHotkeys('right', () => {
    buttonRightRef?.current?.click()
  })
  useHotkeys('1', () => {
    answerRef?.current[1]?.click()
  })
  useHotkeys('2', () => {
    answerRef?.current[2]?.click()
  })
  useHotkeys('3', () => {
    answerRef?.current[3]?.click()
  })
  useHotkeys('4', () => {
    answerRef?.current[4]?.click()
  })

  // transform keywords into Tooltip
  function transform(node) {
    if (node.type === 'tag' && node.name === 'a') {
      // force links to target _blank
      if (node.attribs?.href?.length)
        return (
          <ExternalLink href={node.attribs?.href}>
            {node.children[0]?.data}
          </ExternalLink>
        )
    }
    if (node.type === 'tag' && node.name === 'code') {
      const keyword = node.children[0]?.data
      const lowerCaseKeyword = node.children[0]?.data?.toLowerCase()
      // Tooltip with definition
      return lowerCaseKeyword?.length && lowerCaseKeyword in keywords ? (
        <Tooltip
          hasArrow
          label={keywords[lowerCaseKeyword]?.definition}
          closeOnClick={false}
        >
          <span className="keyword">{keyword}</span>
        </Tooltip>
      ) : (
        <>{keyword}</>
      )
    }
  }

  const answerIsCorrect =
    slide?.quiz &&
    parseInt(localStorage.getItem(`quiz-${slide.quiz.id}`)) ===
      slide.quiz.rightAnswerNumber

  const Quest = QuestComponent(lesson.quest, lesson.kudosId)

  return (
    <Slide
      p={8}
      pt={4}
      pb={2}
      mt={6}
      issmallscreen={isSmallScreen.toString()}
      key={`slide-${currentSlide}`}
      slidetype={slide.type}
    >
      <Text
        fontSize={isSmallScreen ? 'xl' : '3xl'}
        my={isSmallScreen ? '2' : '4'}
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        fontWeight="bold"
        as="h2"
      >
        <Box display="inline-flex" alignItems="center" mr="4">
          {slide.type === 'LEARN' && <LearnIcon />}
          {slide.type === 'QUIZ' && <QuizIcon />}
          {slide.type === 'QUEST' && <QuestIcon />}
          {slide.type === 'END' && <KudosIcon />}
        </Box>
        <Box color={slide.type === 'END' ? theme.colors.secondary : 'unset'}>
          {slide.type === 'QUIZ' ? (
            <>Knowledge Check</>
          ) : (
            <>{ReactHtmlParser(slide.title, { transform })}</>
          )}
        </Box>
      </Text>
      <ProgressSteps step={currentSlide} total={numberOfSlides} />
      <Box maxH={isSmallScreen ? 'unset' : '600px'}>
        <Box
          className="content"
          minH="calc(100vh - 360px)"
          pb={isSmallScreen ? '6' : 0}
          pt={4}
        >
          {slide.type === 'LEARN' && (
            <Box>{ReactHtmlParser(slide.content, { transform })}</Box>
          )}
          {slide.type === 'QUIZ' && (
            <>
              {slide.quiz?.question && (
                <Box>
                  <h2>
                    {ReactHtmlParser(slide?.quiz?.question, { transform })}
                  </h2>
                </Box>
              )}
              <Answers mt={4} mx={2}>
                <ButtonGroup size="lg" w="100%">
                  <SimpleGrid
                    columns={[null, null, 1]}
                    spacing="40px"
                    w="100%"
                    justifyItems="center"
                  >
                    {[1, 2, 3, 4].map((n) => {
                      const answerState = answerIsCorrect
                        ? slide.quiz.rightAnswerNumber === n
                          ? 'CORRECT'
                          : 'UNSELECTED'
                        : selectedAnswerNumber === n
                        ? 'WRONG'
                        : 'UNSELECTED'
                      if (slide.quiz.answers.length >= n)
                        return (
                          <QuizAnswer
                            ref={(el) => (answerRef.current[n] = el)}
                            key={`answer-${n}`}
                            w="100%"
                            maxW="500px"
                            p="4"
                            h="auto"
                            border={
                              answerState === 'UNSELECTED' &&
                              '1px solid #646587'
                            }
                            whiteSpace="break-spaces"
                            onClick={(e) => selectAnswer(e, n)}
                            answerstate={answerState}
                            justifyContent="space-between"
                            textAlign="left"
                            rightIcon={
                              answerState === 'CORRECT' ? (
                                <CheckIcon color="white" />
                              ) : (
                                answerState === 'WRONG' && (
                                  <Warning weight="bold" color="white" />
                                )
                              )
                            }
                            isActive={answerIsCorrect}
                          >
                            {slide.quiz.answers[n - 1]}
                          </QuizAnswer>
                        )
                    })}
                  </SimpleGrid>
                </ButtonGroup>
              </Answers>
            </>
          )}
          {slide.type === 'QUEST' && (
            <VStack flex="auto" minH="420px" justifyContent="center">
              {Quest?.questComponent}
            </VStack>
          )}
          {slide.type === 'END' && (
            <VStack flex="auto" minH="420px" justifyContent="center">
              {IS_WHITELABEL && !walletAddress ? (
                <>{Quest?.questComponent}</>
              ) : (
                <>
                  {lesson.kudosImageLink && (
                    <>
                      {lesson.kudosImageLink.includes('.mp4') ? (
                        <Box
                          height="250px"
                          width="250px"
                          borderRadius="30px"
                          overflow="hidden"
                          border="2px solid #4b474b"
                        >
                          <video
                            autoPlay
                            loop
                            playsInline
                            muted
                            style={{ borderRadius: '30px', overflow: 'hidden' }}
                          >
                            <source
                              src={lesson.kudosImageLink}
                              type="video/mp4"
                            ></source>
                          </video>
                        </Box>
                      ) : (
                        <ChakraImage
                          src={lesson.kudosImageLink}
                          height="250px"
                          mb="2"
                        />
                      )}
                    </>
                  )}
                  {lesson.kudosId ? (
                    <MintKudos
                      kudosId={lesson.kudosId}
                      isQuestCompleted={Quest?.isQuestCompleted}
                      goToPrevSlide={goToPrevSlide}
                    />
                  ) : (
                    <h2>{`Congrats on finishing our "${lesson.name}" lesson! 🥳`}</h2>
                  )}
                  <p>
                    {!embed && lesson.endOfLessonText && lesson.endOfLessonText}
                  </p>
                </>
              )}
            </VStack>
          )}
        </Box>
      </Box>
      <SlideNav display="flex" p={4} issmallscreen={isSmallScreen.toString()}>
        <HStack flex="auto">
          {!isFirstSlide && (
            <Button
              ref={buttonLeftRef}
              variant="secondaryBig"
              size="lg"
              onClick={goToPrevSlide}
              leftIcon={<ArrowBackIcon />}
            >
              {isLastSlide && isSmallScreen ? '' : 'Prev'}
            </Button>
          )}
          {lesson.isCommentsEnabled && slide.notionId && (
            <Tooltip
              hasArrow
              label="Help us improve the content by commenting this slide on Notion"
            >
              <ExternalLink
                href={`https://www.notion.so/${lesson.notionId}#${slide.notionId}`}
              >
                <Button variant="outline">
                  🐞{isSmallScreen ? '' : ` comment this slide`}
                </Button>
              </ExternalLink>
            </Tooltip>
          )}
        </HStack>
        <HStack>
          {slide.type === 'QUEST' && !Quest?.isQuestCompleted ? (
            <Tooltip
              hasArrow
              label="By skipping this quest you won't be able to claim the lesson badge"
            >
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentSlide(currentSlide + 1)
                }}
              >
                Skip Quest
              </Button>
            </Tooltip>
          ) : null}
          {!embed && isLastSlide && lesson.communityDiscussionLink && (
            <Tooltip
              hasArrow
              label="Join other explorers to discuss this lesson."
            >
              <ExternalLink
                href={lesson.communityDiscussionLink}
                alt={`${lesson.name} community discussion`}
              >
                <Button variant="outline">
                  👨‍🚀{isSmallScreen ? '' : ' Community discussion'}
                </Button>
              </ExternalLink>
            </Tooltip>
          )}
          {!isLastSlide || (lesson.endOfLessonText && !embed) ? (
            <Button
              ref={buttonRightRef}
              variant={isBeforeLastSlide ? 'primaryBigLast' : 'primaryBig'}
              size="lg"
              disabled={
                (slide.quiz && !answerIsCorrect) ||
                (slide.type === 'QUEST' && !Quest?.isQuestCompleted)
              }
              onClick={goToNextSlide}
              rightIcon={<ArrowForwardIcon />}
            >
              {isBeforeLastSlide ? 'Finish' : 'Next'}
            </Button>
          ) : (
            <>
              {embed ? null : (
                <InternalLink href={IS_WHITELABEL ? `/` : `/lessons`}>
                  <Button
                    variant={
                      lesson.kudosId && !isKudosMintedLS ? 'outline' : 'primary'
                    }
                  >
                    Explore more Lessons
                  </Button>
                </InternalLink>
              )}
            </>
          )}
        </HStack>
      </SlideNav>
    </Slide>
  )
}

export default Lesson
