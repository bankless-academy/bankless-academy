import React, { useRef, useState, useEffect } from 'react'
import {
  Box,
  Text,
  Image,
  ButtonGroup,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  useToast,
  Tooltip,
  Link,
} from '@chakra-ui/react'
import axios from 'axios'
import { useHotkeys } from 'react-hotkeys-hook'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser'
import { useMediaQuery } from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Warning, Checks } from 'phosphor-react'

import { LessonType, SlideType } from 'entities/lesson'
import ProgressSteps from 'components/ProgressSteps'
import Card from 'components/Card'
import QuestComponent from 'components/Quest/QuestComponent'
import { useWalletWeb3React } from 'hooks'
import { track } from 'utils'

// transform keywords into Tooltip
function transform(node, index) {
  if (node.type === 'tag' && node.name === 'a') {
    // force links to target _blank
    node.attribs.target = '_blank'
  }
  if (node.type === 'tag' && node.name === 'span') {
    // add Tooltip with definition
    return (
      <Tooltip hasArrow label={node.attribs.definition}>
        {convertNodeToElement(node, index, transform)}
      </Tooltip>
    )
  }
}

const Slide = styled(Card)<{ isSmallScreen?: boolean; slideType: SlideType }>`
  border-radius: 0.5rem;
  ${(props) => props.isSmallScreen && 'display: contents;'};
  h1 {
    margin-top: 1em;
    font-size: var(--chakra-fontSizes-2xl);
  }
  span.tooltip {
    cursor: help;
    border-bottom: 1px dashed grey;
  }
  div.content > div {
    ${(props) =>
      props.slideType === 'LEARN' &&
      (props.isSmallScreen ? 'display: block;' : 'display: flex;')};
  }
  .bloc1,
  .bloc2 {
    flex: 1;
    ${(props) => props.isSmallScreen && 'margin-top: 24px;'};
    img {
      width: 100%;
      max-height: 60vh;
      min-height: 350px;
    }
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
      color: var(--chakra-colors-red-500);
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
    a {
      text-decoration: none;
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
  answerState: AnswerStateType
  isActive: boolean
}>`
  ${(props) => props.isActive && 'cursor: default;'};
  ${(props) =>
    props.answerState === 'UNSELECTED' &&
    props.isActive &&
    'background: #010101 !important;'}
  ${(props) =>
    props.answerState === 'CORRECT' &&
    'background: linear-gradient(95.83deg, #44A991 -9.2%, rgba(68, 169, 145, 0.7) 97.91%) !important;'}
  ${(props) =>
    props.answerState === 'WRONG' &&
    'background: linear-gradient(91.91deg, #A94462 49%, rgba(169, 68, 98, 0.7) 124.09%) !important;'}
`

const SlideNav = styled(Box)<{ isSmallScreen?: boolean }>`
  ${(props) =>
    props.isSmallScreen &&
    `
      position: fixed;
      bottom: 0;
      width: 100%;
      left: 0;
      background-color: black;
      z-index: 10;
      `};
`

const Lesson = ({ lesson }: { lesson: LessonType }): React.ReactElement => {
  // HACK: fix bug when someone has already claimed the POAP
  if (localStorage.getItem(`poap-${lesson.slug}`) === 'true')
    localStorage.removeItem(`poap-${lesson.slug}`)

  const buttonLeftRef = useRef(null)
  const buttonRightRef = useRef(null)
  const answerRef = useRef([])
  const [currentSlide, setCurrentSlide] = useState(
    parseInt(localStorage.getItem(lesson.slug) || '0')
  )
  const [selectedAnswerNumber, setSelectedAnswerNumber] = useState<number>(null)
  const [isClaimingPoap, setIsClaimingPoap] = useState(false)
  const [isPoapMinted, setIsPoapMinted] = useState(false)
  const [poapData, setPoapData] = useState<{ code?: string; error?: string }>(
    {}
  )
  const [isPoapClaimed, setIsPoapClaimed] = useState(
    !!localStorage.getItem(`poap-${lesson.slug}`)
  )
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  const router = useRouter()
  const toast = useToast()
  const numberOfSlides = lesson.slides.length
  const slide = lesson.slides[currentSlide]
  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide + 1 === numberOfSlides

  const walletWeb3ReactContext = useWalletWeb3React()
  const walletAddress = walletWeb3ReactContext.account
  // DEV ENV: you can force a specific wallet address here if you want to test the claiming function
  // walletAddress = '0xbd19a3f0a9cace18513a1e2863d648d13975cb44'

  useEffect((): void => {
    localStorage.setItem(lesson.slug, currentSlide.toString())
  }, [currentSlide])

  const goToPrevSlide = (e) => {
    e.target.blur()
    track('prev-slide', e?.nativeEvent?.isTrusted ? 'click' : 'shortcut')
    if (!isFirstSlide) {
      setCurrentSlide(currentSlide - 1)
    }
    setSelectedAnswerNumber(null)
  }

  const goToNextSlide = (e) => {
    e.target.blur()
    track('next-slide', e?.nativeEvent?.isTrusted ? 'click' : 'shortcut')
    if (slide.quiz && localStorage.getItem(`quiz-${slide.quiz.id}`) === null) {
      alert('select your answer to the quiz first')
    } else if (!isLastSlide) {
      setCurrentSlide(currentSlide + 1)
    }
    // TODO LATER: use router.push('/lessons')
    else if (isLastSlide && isPoapClaimed) {
      if (lesson.slug === 'wallet-basics') router.push('/feedback')
      else router.push('/')
    }
    setSelectedAnswerNumber(null)
  }

  const selectAnswer = (e, answerNumber: number) => {
    e.target.blur()
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

  const claimPoap = () => {
    setIsClaimingPoap(true)
    axios
      .get(
        `/api/claim-poap?address=${walletAddress}&poapEventId=${lesson.poapEventId}`
      )
      .then(function (res) {
        // eslint-disable-next-line no-console
        console.log(res.data)
        setPoapData(res.data)
        setIsClaimingPoap(false)
        if (res.data.code) {
          setIsPoapClaimed(true)
          localStorage.setItem(`poap-${lesson.slug}`, res.data.code)
        }
      })
      .catch(function (error) {
        console.error(error)
        toast({
          title: 'Something went wrong',
          description: 'Refresh and try again ...',
          // TODO: claim code manually + improve error handling
          status: 'error',
          duration: 5000,
        })
      })
  }

  // shortcuts
  // TODO: add modal with all the shortcuts
  useHotkeys('?,shift+/', () => alert('TODO: add modal with all the shortcuts'))
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

  const answerIsCorrect =
    slide.quiz &&
    parseInt(localStorage.getItem(`quiz-${slide.quiz.id}`)) ===
      slide.quiz.rightAnswerNumber

  const questComponentName = lesson.slides.filter((s) => s.component)[0]
    ?.component
  const Quest = QuestComponent(questComponentName)
  // TODO: store quest verification state in local storage

  const poapCode = localStorage.getItem(`poap-${lesson.slug}`) || poapData.code

  return (
    <>
      <Slide
        p={8}
        pt={4}
        pb={2}
        mt={6}
        isSmallScreen={isSmallScreen}
        slideType={slide.type}
      >
        <Text
          fontSize={isSmallScreen ? 'xl' : '3xl'}
          mt="4"
          mb="8"
          textAlign="center"
          fontWeight="bold"
        >
          {ReactHtmlParser(slide.title, { transform })}
        </Text>
        <ProgressSteps step={currentSlide} total={numberOfSlides} />
        <Box
          className="content"
          minH="500px"
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
              <Answers mt={4}>
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
                            answerState={answerState}
                            justifyContent="space-between"
                            rightIcon={
                              answerState === 'CORRECT' ? (
                                <Checks weight="bold" color="white" />
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
            <>
              <VStack flex="auto" minH="420px" justifyContent="center">
                {Quest?.questComponent}
              </VStack>
            </>
          )}
          {slide.type === 'POAP' && (
            <>
              <VStack flex="auto" minH="420px" justifyContent="center">
                {walletAddress ? (
                  <>
                    <Image
                      src={lesson.poapImageLink}
                      width="250px"
                      height="250px"
                      opacity={isPoapClaimed ? 1 : 0.7}
                      mb="2"
                    />
                    {!isPoapClaimed && !poapData.error ? (
                      <Button
                        variant="outline"
                        onClick={claimPoap}
                        isLoading={isClaimingPoap}
                      >
                        Claim POAP
                      </Button>
                    ) : (
                      <>
                        <h2>
                          {`Congrats for finishing the "${lesson.name}" lesson! 🥳`}
                        </h2>
                        {poapCode && (
                          <>
                            {isPoapMinted ? (
                              <>
                                <Button
                                  mt="4"
                                  onClick={() => router.push('/feedback')}
                                >
                                  Feedback form
                                </Button>
                              </>
                            ) : (
                              <Link
                                href={`https://app.poap.xyz/claim/${poapCode}?address=${walletAddress}`}
                                target="_blank"
                                onClick={() => setIsPoapMinted(true)}
                              >
                                <Button variant="outline" mt="4">
                                  Mint POAP
                                </Button>
                              </Link>
                            )}
                          </>
                        )}
                      </>
                    )}
                    {poapData.error && (
                      <Button variant="outline" mt="4" leftIcon={<Warning />}>
                        {poapData.error}
                      </Button>
                    )}
                  </>
                ) : (
                  <h2>⚠️ Connect your wallet first!</h2>
                )}
              </VStack>
            </>
          )}
        </Box>
        <SlideNav display="flex" p={4} isSmallScreen={isSmallScreen}>
          <HStack flex="auto">
            {!isFirstSlide && (
              <Tooltip
                hasArrow
                label="Use the 'left' arrow key on your keyboard to navigate back"
              >
                <Button
                  ref={buttonLeftRef}
                  variant="secondaryBig"
                  size="lg"
                  onClick={goToPrevSlide}
                  leftIcon={<ArrowBackIcon />}
                >
                  Prev
                </Button>
              </Tooltip>
            )}
            {!isSmallScreen && slide.notionId && (
              <Tooltip
                hasArrow
                label="Help us improve the content by commenting this slide on Notion"
              >
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.notion.so/${lesson.notionId}#${slide.notionId}`}
                >
                  <Button variant="outline">🐞 comment this slide</Button>
                </Link>
              </Tooltip>
            )}
          </HStack>
          <HStack>
            <Tooltip
              hasArrow
              label="Use the 'right' arrow key on your keyboard to continue"
            >
              <Button
                ref={buttonRightRef}
                variant="primaryBig"
                size="lg"
                disabled={
                  (isLastSlide && !isPoapClaimed) ||
                  (slide.quiz && !answerIsCorrect) ||
                  (slide.type === 'QUEST' && !Quest?.isQuestCompleted)
                }
                onClick={goToNextSlide}
                rightIcon={<ArrowForwardIcon />}
              >
                Next
              </Button>
            </Tooltip>
          </HStack>
        </SlideNav>
      </Slide>
    </>
  )
}

export default Lesson
