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
  Kbd,
  useToast,
  Tooltip,
  Link,
} from '@chakra-ui/react'
import axios from 'axios'
import { useHotkeys } from 'react-hotkeys-hook'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@chakra-ui/react'
import { Player } from '@lottiefiles/react-lottie-player'
import { isMobile } from 'react-device-detect'

import { QuestType } from 'entities/quest'
import ProgressSteps from 'components/ProgressSteps'
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

const Slide = styled(Box)`
  border-radius: 0.5rem;
  h1 {
    margin-top: 1em;
    font-size: var(--chakra-fontSizes-2xl);
  }
  span.tooltip {
    cursor: help;
    border-bottom: 1px dashed grey;
  }
  div {
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

const Quest = ({ quest }: { quest: QuestType }): React.ReactElement => {
  const buttonLeftRef = useRef(null)
  const buttonRightRef = useRef(null)
  const answer1Ref = useRef(null)
  const answer2Ref = useRef(null)
  const answer3Ref = useRef(null)
  const answer4Ref = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(
    parseInt(localStorage.getItem(quest.slug) || '0')
  )
  const [selectedAnswerNumber, setSelectedAnswerNumber] = useState<number>(null)
  const [isClaimingPoap, setIsClaimingPoap] = useState(false)
  const [isPoapClaimed, setIsPoapClaimed] = useState(
    !!localStorage.getItem(`poap-${quest.slug}`)
  )
  const [swiper, setSwiper] = useState(null)
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  const router = useRouter()
  const toast = useToast()
  const numberOfSlides = quest.slides.length
  const slide = quest.slides[currentSlide]
  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide + 1 === numberOfSlides

  const walletWeb3ReactContext = useWalletWeb3React()
  const walletAddress = walletWeb3ReactContext.account
  // DEV ENV: you can force a specific wallet address here if you want to test the claiming function
  // const walletAddress = '0xbd19a3f0a9cace18513a1e2863d648d13975cb42'

  useEffect((): void => {
    localStorage.setItem(quest.slug, currentSlide.toString())
  }, [currentSlide])

  const goToPrevSlide = (e) => {
    track('prev-slide', e?.nativeEvent?.isTrusted ? 'click' : 'shortcut')
    if (!isFirstSlide) {
      swiper?.slidePrev()
    }
  }

  const goToNextSlide = (e) => {
    track('next-slide', e?.nativeEvent?.isTrusted ? 'click' : 'shortcut')
    if (slide.quiz && localStorage.getItem(`quiz-${slide.quiz.id}`) === null) {
      alert('select your answer to the quiz first')
    } else if (!isLastSlide) {
      swiper?.slideNext()
    }
    // TODO LATER: use router.push('/quests')
    else if (isLastSlide && isPoapClaimed) {
      if (quest.slug === 'wallet-basics') router.push('/feedback')
      else router.push('/')
    }
  }

  const selectAnswer = (answerNumber: number) => {
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
      toast.closeAll()
    } else if (!answerIsCorrect) {
      track('quiz_answer', {
        id: slide.quiz.id,
        isRightAnswer: false,
        selectedAnswerNumber: answerNumber,
      })
      // wrong answer
      toast({
        title: 'Wrong answer ... try again!',
        position: 'top',
        status: 'warning',
        duration: 5000,
      })
    }
  }

  const claimPoap = () => {
    setIsClaimingPoap(true)
    axios
      .get(
        `/api/claim-poap?address=${walletAddress}&poapEventId=${quest.poapEventId}`
      )
      .then(function (res) {
        // eslint-disable-next-line no-console
        console.log(res.data)
        setIsPoapClaimed(true)
        setIsClaimingPoap(false)
        localStorage.setItem(`poap-${quest.slug}`, 'true')
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
    answer1Ref?.current?.click()
  })
  useHotkeys('2', () => {
    answer2Ref?.current?.click()
  })
  useHotkeys('3', () => {
    answer3Ref?.current?.click()
  })
  useHotkeys('4', () => {
    answer4Ref?.current?.click()
  })

  const answerIsCorrect =
    slide.quiz &&
    parseInt(localStorage.getItem(`quiz-${slide.quiz.id}`)) ===
      slide.quiz.rightAnswerNumber

  const questComponentName = quest.slides.filter((s) => s.component)[0]
    ?.component
  const Quest = QuestComponent(questComponentName)
  // TODO: store quest verification state in local storage

  return (
    <>
      <ProgressSteps step={currentSlide} total={numberOfSlides} />
      <Swiper
        initialSlide={currentSlide}
        autoHeight={true}
        onSlideChange={(s) => {
          setCurrentSlide(s.activeIndex)
          setSelectedAnswerNumber(null)
        }}
        allowSlideNext={
          !((isLastSlide && !isPoapClaimed) || (slide.quiz && !answerIsCorrect))
        }
        onInit={() => {
          const s: any = document.querySelector('.swiper-container')
          setSwiper(s.swiper)
        }}
        // no touch simulation for desktop
        simulateTouch={false}
      >
        {quest.slides.map((slide, index) => {
          const quizAnswer =
            slide.type === 'QUIZ'
              ? parseInt(localStorage.getItem(`quiz-${slide.quiz.id}`))
              : null
          return (
            <SwiperSlide key={`slide-${index}`}>
              <Slide
                minH="620px"
                bgColor="white"
                p={8}
                mt={4}
                overflow="hidden"
              >
                {slide.type === 'LEARN' && (
                  <>
                    <Text fontSize="3xl" mb="8">
                      📚 {ReactHtmlParser(slide.title, { transform })}
                    </Text>
                    <Box>{ReactHtmlParser(slide.content, { transform })}</Box>
                  </>
                )}
                {slide.type === 'QUIZ' && (
                  <>
                    <Text fontSize="3xl" mb="8">
                      ❓ {ReactHtmlParser(slide.title)}
                    </Text>
                    <Answers minHeight={isSmallScreen ? '400px' : '320px'}>
                      <ButtonGroup size="lg">
                        <SimpleGrid columns={[null, null, 2]} spacing="40px">
                          <Button
                            ref={answer1Ref}
                            whiteSpace="break-spaces"
                            onClick={() => selectAnswer(1)}
                            colorScheme={
                              quizAnswer === slide.quiz.rightAnswerNumber
                                ? slide.quiz.rightAnswerNumber === 1
                                  ? 'green'
                                  : 'blackAlpha'
                                : 'red'
                            }
                            isActive={
                              (selectedAnswerNumber || quizAnswer) === 1
                            }
                          >
                            <span>
                              <Kbd>1</Kbd>
                            </span>
                            {slide.quiz.answer_1}
                          </Button>
                          <Button
                            ref={answer2Ref}
                            whiteSpace="break-spaces"
                            onClick={() => selectAnswer(2)}
                            colorScheme={
                              quizAnswer === slide.quiz.rightAnswerNumber
                                ? slide.quiz.rightAnswerNumber === 2
                                  ? 'green'
                                  : 'blackAlpha'
                                : 'red'
                            }
                            isActive={
                              (selectedAnswerNumber || quizAnswer) === 2
                            }
                          >
                            <span>
                              <Kbd>2</Kbd>
                            </span>
                            {slide.quiz.answer_2}
                          </Button>
                          {slide.quiz.answer_3 && (
                            <Button
                              ref={answer3Ref}
                              whiteSpace="break-spaces"
                              onClick={() => selectAnswer(3)}
                              colorScheme={
                                quizAnswer === slide.quiz.rightAnswerNumber
                                  ? slide.quiz.rightAnswerNumber === 3
                                    ? 'green'
                                    : 'blackAlpha'
                                  : 'red'
                              }
                              isActive={
                                (selectedAnswerNumber || quizAnswer) === 3
                              }
                            >
                              <span>
                                <Kbd>3</Kbd>
                              </span>
                              {slide.quiz.answer_3}
                            </Button>
                          )}
                          {slide.quiz.answer_4 && (
                            <Button
                              ref={answer4Ref}
                              whiteSpace="break-spaces"
                              onClick={() => selectAnswer(4)}
                              colorScheme={
                                quizAnswer === slide.quiz.rightAnswerNumber
                                  ? slide.quiz.rightAnswerNumber === 4
                                    ? 'green'
                                    : 'blackAlpha'
                                  : 'red'
                              }
                              isActive={
                                (selectedAnswerNumber ||
                                  parseInt(
                                    localStorage.getItem(
                                      `quiz-${slide.quiz.id}`
                                    )
                                  )) === 4
                              }
                            >
                              <span>
                                <Kbd>4</Kbd>
                              </span>
                              {slide.quiz.answer_4}
                            </Button>
                          )}
                        </SimpleGrid>
                      </ButtonGroup>
                    </Answers>
                    {answerIsCorrect && (
                      <Player
                        autoplay={true}
                        loop={false}
                        keepLastFrame={true}
                        controls={false}
                        src="https://assets7.lottiefiles.com/temp/lf20_PRvG5R.json"
                        style={{
                          height: '180px',
                          width: '180px',
                          marginTop: '-50px',
                        }}
                      />
                    )}
                  </>
                )}
                {slide.type === 'QUEST' && (
                  <>
                    <Text fontSize="3xl" mb="8">
                      ⚡️ {ReactHtmlParser(slide.title)}
                    </Text>
                    <VStack flex="auto" minH="420px" justifyContent="center">
                      {Quest?.questComponent}
                    </VStack>
                  </>
                )}
                {slide.type === 'POAP' && (
                  <>
                    <Text fontSize="3xl" mb="8">
                      🎖 {ReactHtmlParser(slide.title)}
                    </Text>
                    <VStack flex="auto" minH="420px" justifyContent="center">
                      {walletAddress ? (
                        <>
                          <Image
                            src={quest.poapImageLink}
                            width="250px"
                            opacity={isPoapClaimed ? 1 : 0.7}
                          />
                          {!isPoapClaimed ? (
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
                                {`Congrats for finishing the "${quest.name}" quest! 🥳`}
                              </h2>
                              {quest.slug === 'wallet-basics' && (
                                <Button
                                  mt="4"
                                  onClick={() => router.push('/feedback')}
                                >
                                  Feedback form
                                </Button>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <h2>⚠️ Connect your wallet first!</h2>
                      )}
                    </VStack>
                  </>
                )}
              </Slide>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Box display="flex" p={4}>
        <HStack flex="auto">
          <Tooltip
            hasArrow
            label="Help us improve the content by commenting this slide on Notion"
          >
            <Link
              target="_blank"
              rel="noreferrer"
              href={`https://www.notion.so/${quest.notionId}`}
            >
              <Button variant="outline">🐞 comment this slide</Button>
            </Link>
          </Tooltip>
        </HStack>
        {/* hide buttons on mobile */}
        {!isMobile && (
          <HStack>
            {!isFirstSlide && (
              <Tooltip
                hasArrow
                label="Use the 'left' arrow key on your keyboard to navigate back"
              >
                <Button ref={buttonLeftRef} onClick={goToPrevSlide}>
                  ⬅️
                </Button>
              </Tooltip>
            )}
            <Tooltip
              hasArrow
              label="Use the 'right' arrow key on your keyboard to continue"
            >
              <Button
                ref={buttonRightRef}
                disabled={
                  (isLastSlide && !isPoapClaimed) ||
                  (slide.quiz && !answerIsCorrect) ||
                  (slide.type === 'QUEST' && !Quest?.isQuestCompleted)
                }
                onClick={goToNextSlide}
              >
                ➡️
              </Button>
            </Tooltip>
          </HStack>
        )}
      </Box>
    </>
  )
}

export default Quest
