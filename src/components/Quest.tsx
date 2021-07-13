import React, { useRef, useState } from 'react'
import {
  Box,
  ButtonGroup,
  Button,
  Progress,
  HStack,
  Kbd,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { useHotkeys } from 'react-hotkeys-hook'
import styled from '@emotion/styled'

import QuestType from 'entities/quest'

const Slide = styled(Box)`
  border-radius: 0.5rem;
  span {
    color: black;
    margin-right: 0.5em;
  }
`

const Quest = ({ quest }: { quest: QuestType }): React.ReactElement => {
  const buttonLeftRef = useRef(null)
  const buttonRightRef = useRef(null)
  const answer1Ref = useRef(null)
  const answer2Ref = useRef(null)
  const answer3Ref = useRef(null)
  const answer4Ref = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const numberOfSlides = quest.slides.length
  const slide = quest.slides[currentSlide]
  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide + 1 === numberOfSlides

  const goToPrevSlide = () => {
    setSelectedAnswer(null)
    if (!isFirstSlide) setCurrentSlide(currentSlide - 1)
  }

  const goToNextSlide = () => {
    setSelectedAnswer(null)
    if (slide.quiz && localStorage.getItem(`quiz-${slide.quiz.id}`) === null) {
      alert('select your answer to the quiz first')
    } else if (!isLastSlide) setCurrentSlide(currentSlide + 1)
  }

  const selectAnswer = (answerNumber) => {
    if (!answerIsCorrect) setSelectedAnswer('' + answerNumber)
    if (slide.quiz.right_answer === answerNumber) {
      // correct answer
      localStorage.setItem(`quiz-${slide.quiz.id}`, answerNumber)
    } else {
      // wrong answer
      // TODO: add error UI
    }
  }

  // shortcuts
  // TODO: add modal with all the shortcuts
  useHotkeys('?,shift+/', () => alert('TODO: add modal with all the shortcuts'))
  useHotkeys('left', () => {
    if (buttonLeftRef && buttonLeftRef.current) buttonLeftRef.current.click()
  })
  useHotkeys('right', () => {
    if (buttonRightRef && buttonRightRef.current) buttonRightRef.current.click()
  })
  useHotkeys('1', () => {
    if (answer1Ref && answer1Ref.current) answer1Ref.current.click()
  })
  useHotkeys('2', () => {
    if (answer2Ref && answer2Ref.current) answer2Ref.current.click()
  })
  useHotkeys('3', () => {
    if (answer3Ref && answer3Ref.current) answer3Ref.current.click()
  })
  useHotkeys('4', () => {
    if (answer4Ref && answer4Ref.current) answer4Ref.current.click()
  })

  const localStorageAnswer = slide.quiz
    ? localStorage.getItem(`quiz-${slide.quiz.id}`)
    : null

  const answerIsCorrect =
    slide.quiz &&
    localStorage.getItem(`quiz-${slide.quiz.id}`) ===
      '' + slide.quiz.right_answer

  return (
    <>
      <Progress value={((currentSlide + 1) / numberOfSlides) * 100} />
      <h1>{slide.title}</h1>
      <Slide minH="600px" bgColor="white" p={8}>
        {slide.type === 'LEARN' && (
          <ReactMarkdown>{slide.content}</ReactMarkdown>
        )}
        {slide.type === 'QUIZ' && (
          <>
            <h2>{slide.quiz.question}</h2>
            <HStack flex="auto">
              <ButtonGroup colorScheme={answerIsCorrect ? 'green' : 'red'}>
                <Button
                  ref={answer1Ref}
                  onClick={() => selectAnswer(1)}
                  isActive={(selectedAnswer || localStorageAnswer) === '1'}
                >
                  <span>
                    <Kbd>1</Kbd>
                  </span>
                  {slide.quiz.answer_1}
                </Button>
                <Button
                  ref={answer2Ref}
                  onClick={() => selectAnswer(2)}
                  isActive={(selectedAnswer || localStorageAnswer) === '2'}
                >
                  <span>
                    <Kbd>2</Kbd>
                  </span>
                  {slide.quiz.answer_2}
                </Button>
                <Button
                  ref={answer3Ref}
                  onClick={() => selectAnswer(3)}
                  isActive={(selectedAnswer || localStorageAnswer) === '3'}
                >
                  <span>
                    <Kbd>3</Kbd>
                  </span>
                  {slide.quiz.answer_3}
                </Button>
                <Button
                  ref={answer4Ref}
                  onClick={() => selectAnswer(4)}
                  isActive={(selectedAnswer || localStorageAnswer) === '4'}
                >
                  <span>
                    <Kbd>4</Kbd>
                  </span>
                  {slide.quiz.answer_4}
                </Button>
              </ButtonGroup>
            </HStack>
          </>
        )}
        {slide.type === 'LEARN' && slide.component}
      </Slide>
      <Box display="flex" p={4}>
        <HStack flex="auto">
          <Button>🗣</Button>
          <Button>🏴</Button>
        </HStack>
        <HStack>
          <Button
            onClick={() => {
              localStorage.clear()
              setCurrentSlide(0)
            }}
          >
            ⚠️ TEMP: reset state
          </Button>
          {!isFirstSlide && (
            <Button ref={buttonLeftRef} onClick={goToPrevSlide}>
              ⬅️
            </Button>
          )}
          <Button
            ref={buttonRightRef}
            disabled={isLastSlide || (slide.quiz && !answerIsCorrect)}
            onClick={goToNextSlide}
          >
            ➡️
          </Button>
        </HStack>
      </Box>
    </>
  )
}

export default Quest
