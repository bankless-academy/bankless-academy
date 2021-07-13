import React, { useRef, useState } from 'react'
import { Box, Button, Progress, HStack } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { useHotkeys } from 'react-hotkeys-hook'
import styled from '@emotion/styled'

import QuestType from 'entities/quest'

const Slide = styled(Box)`
  border-radius: 0.5rem;
`

const Quest = ({ quest }: { quest: QuestType }): React.ReactElement => {
  const buttonLeftRef = useRef(null)
  const buttonRightRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const numberOfSlides = quest.slides.length
  const slide = quest.slides[currentSlide]
  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide + 1 === numberOfSlides

  const goToPrevSlide = () => {
    if (!isFirstSlide) setCurrentSlide(currentSlide - 1)
  }

  const goToNextSlide = () => {
    if (!isLastSlide) setCurrentSlide(currentSlide + 1)
  }

  // TODO: add modal with all the shortcuts
  useHotkeys('?,shift+/', () => alert('TODO: add modal with all the shortcuts'))
  useHotkeys('left', () => {
    if (buttonLeftRef && buttonLeftRef.current) buttonLeftRef.current.click()
  })
  useHotkeys('right', () => {
    if (buttonRightRef && buttonRightRef.current) buttonRightRef.current.click()
  })

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
            <ul>
              <li>{slide.quiz.answer_1}</li>
              <li>{slide.quiz.answer_2}</li>
              <li>{slide.quiz.answer_3}</li>
              <li>{slide.quiz.answer_4}</li>
            </ul>
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
          {!isFirstSlide && (
            <Button ref={buttonLeftRef} onClick={goToPrevSlide}>
              ⬅️
            </Button>
          )}
          <Button
            ref={buttonRightRef}
            disabled={isLastSlide}
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
