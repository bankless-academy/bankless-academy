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
} from '@chakra-ui/react'
import axios from 'axios'
import { useHotkeys } from 'react-hotkeys-hook'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import ReactHtmlParser from 'react-html-parser'
import { Swiper, SwiperSlide } from 'swiper/react'

import { QuestType } from 'entities/quest'
import ProgressSteps from 'components/ProgressSteps'
import QuestComponent from 'components/Quest/QuestComponent'
import { useWalletWeb3React } from 'hooks'

const Slide = styled(Box)`
  border-radius: 0.5rem;
  h1 {
    margin-top: 1em;
    font-size: var(--chakra-fontSizes-2xl);
  }
  h2 {
    font-size: var(--chakra-fontSizes-xl);
    margin: 1em;
  }
  ul,
  ol {
    font-size: var(--chakra-fontSizes-xl);
    margin-left: 2em;
  }
`

const Answers = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 420px;
  span {
    color: black;
    margin-right: 0.5em;
    margin-bottom: 4px;
  }
`

// TODO: move to utils?
const youtubeLink2Iframe = (html) =>
  html.replace(
    /(?:https:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?.*v=)?(\w+)/g,
    '<iframe width="640" height="360" src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen></iframe>'
  )

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
  const supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints

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

  const goToPrevSlide = () => {
    if (!isFirstSlide) {
      setCurrentSlide(currentSlide - 1)
      swiper?.slidePrev()
    }
  }

  const goToNextSlide = () => {
    if (slide.quiz && localStorage.getItem(`quiz-${slide.quiz.id}`) === null) {
      alert('select your answer to the quiz first')
    } else if (!isLastSlide) {
      setCurrentSlide(currentSlide + 1)
      swiper?.slideNext()
    }
    // TODO LATER: use router.push('/quests')
    else if (isLastSlide && isPoapClaimed) router.push('/')
  }

  const selectAnswer = (answerNumber: number) => {
    if (!answerIsCorrect) setSelectedAnswerNumber(answerNumber)
    if (slide.quiz.rightAnswerNumber === answerNumber) {
      // correct answer
      localStorage.setItem(`quiz-${slide.quiz.id}`, answerNumber.toString())
      toast.closeAll()
    } else if (!answerIsCorrect) {
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
        // eslint-disable-next-line no-console
        console.log(error)
        toast({
          title: 'Something went wrong',
          description: 'Refresh and try again ...',
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
    localStorage.getItem(`quiz-${slide.quiz.id}`) ===
      '' + slide.quiz.rightAnswerNumber

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
        {quest.slides.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <Slide minH="620px" bgColor="white" p={8} mt={4} overflow="hidden">
              {slide.type === 'LEARN' && (
                <>
                  <Text fontSize="3xl" mb="8">
                    📚 {slide.title}
                  </Text>
                  {slide.content && (
                    <Box>
                      {ReactHtmlParser(youtubeLink2Iframe(slide.content))}
                    </Box>
                  )}
                </>
              )}
              {slide.type === 'QUIZ' && (
                <>
                  <Text fontSize="3xl" mb="8">
                    ❓ {slide.title}
                  </Text>
                  <Answers>
                    <ButtonGroup
                      colorScheme={
                        localStorage.getItem(`quiz-${slide.quiz.id}`) ===
                        '' + slide.quiz.rightAnswerNumber
                          ? 'green'
                          : 'red'
                      }
                      size="lg"
                    >
                      <SimpleGrid columns={[null, null, 2]} spacing="40px">
                        <Button
                          ref={answer1Ref}
                          whiteSpace="break-spaces"
                          onClick={() => selectAnswer(1)}
                          isActive={
                            (selectedAnswerNumber ||
                              parseInt(
                                localStorage.getItem(`quiz-${slide.quiz.id}`)
                              )) === 1
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
                          isActive={
                            (selectedAnswerNumber ||
                              parseInt(
                                localStorage.getItem(`quiz-${slide.quiz.id}`)
                              )) === 2
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
                            isActive={
                              (selectedAnswerNumber ||
                                parseInt(
                                  localStorage.getItem(`quiz-${slide.quiz.id}`)
                                )) === 3
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
                            isActive={
                              (selectedAnswerNumber ||
                                parseInt(
                                  localStorage.getItem(`quiz-${slide.quiz.id}`)
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
                </>
              )}
              {slide.type === 'QUEST' && (
                <>
                  <Text fontSize="3xl" mb="8">
                    ⚡️ {slide.title}
                  </Text>
                  {slide.content && (
                    <Box>
                      {ReactHtmlParser(youtubeLink2Iframe(slide.content))}
                    </Box>
                  )}
                  {slide.component && (
                    <QuestComponent component={slide.component} />
                  )}
                </>
              )}
              {slide.type === 'POAP' && (
                <>
                  <Text fontSize="3xl" mb="8">
                    🎖 {slide.title}
                  </Text>
                  <VStack flex="auto">
                    {walletAddress ? (
                      <>
                        <Image
                          src={quest.poapImageLink}
                          width="250px"
                          mt="100px"
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
                          <h2>
                            {`Congrats for finishing the "${quest.name}" quest! 🥳`}
                          </h2>
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
        ))}
      </Swiper>
      <Box display="flex" p={4}>
        <HStack flex="auto">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.notion.so/${quest.notionId}`}
          >
            <Button variant="outline">🐞 comment this slide</Button>
          </a>
        </HStack>
        {/* hide buttons on touch screens */}
        {!supportsTouch && (
          <HStack>
            {!isFirstSlide && (
              <Button ref={buttonLeftRef} onClick={goToPrevSlide}>
                ⬅️
              </Button>
            )}
            <Button
              ref={buttonRightRef}
              disabled={
                (isLastSlide && !isPoapClaimed) ||
                (slide.quiz && !answerIsCorrect)
              }
              onClick={goToNextSlide}
            >
              ➡️
            </Button>
          </HStack>
        )}
      </Box>
    </>
  )
}

export default Quest
