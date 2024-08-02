/* eslint-disable no-console */
import React, { useRef, useEffect } from 'react'
import { Box, Button, Image } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { Player } from '@lottiefiles/react-lottie-player'
import styled from '@emotion/styled'

import { ANIMATIONS, ANIMATION_IDS } from 'constants/animations'
import { useHotkeys } from 'react-hotkeys-hook'
import { useState } from 'react'

const StyledBox = styled(Box)`
  #lottie svg {
    display: none;
  }
  #lottie svg:last-child {
    display: block;
  }
  #lottie .actionNext,
  #lottie .actionPrev {
    cursor: pointer;
  }
  #lottie .actionNext:hover,
  #lottie .actionPrev:hover {
    path {
      fill-opacity: 0.2;
      fill: black;
    }
  }
`

const Animation = ({
  animationId,
  isEmbedded,
}: {
  animationId: string
  isEmbedded?: boolean
}): React.ReactElement => {
  const [animationStepLS, setAnimationStepLS] = useLocalStorage(
    `animation-${animationId}`,
    0
  )
  const [isDisabled, setIsDisabled] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (
        target.classList.contains('actionNext') ||
        target.closest('.actionNext')
      ) {
        clickRight()
      }
      if (
        target.classList.contains('actionPrev') ||
        target.closest('.actionPrev')
      ) {
        clickLeft()
      }
    }

    const currentContainer = containerRef.current
    if (currentContainer) {
      currentContainer.addEventListener('click', handleClick)
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener('click', handleClick)
      }
    }
  }, [animationStepLS, isDisabled])

  if (!ANIMATION_IDS.includes(animationId)) return null

  const animation = ANIMATIONS[animationId]

  const animationLength = Object.keys(ANIMATIONS).includes(animationId)
    ? ANIMATIONS[animationId]?.steps?.length
    : null

  const clickLeft = () => {
    if (!isDisabled) {
      setIsDisabled(true)
      if (animationStepLS > 0) {
        setAnimationStepLS(animationStepLS - 1)
      }
      setTimeout(() => {
        setIsDisabled(false)
      }, 200)
    } else {
      console.log('clicking too fast')
    }
  }

  const clickRight = () => {
    if (!isDisabled) {
      setIsDisabled(true)
      if (animationStepLS + 1 < animationLength) {
        setAnimationStepLS(animationStepLS + 1)
      }
      setTimeout(() => {
        setIsDisabled(false)
      }, 200)
    } else {
      console.log('clicking too fast')
    }
  }

  useHotkeys('left', () => clickLeft(), [isDisabled, animationStepLS])
  useHotkeys('right', () => clickRight(), [isDisabled, animationStepLS])

  const currentStep: string = animation.steps[animationStepLS]

  const isLottie = currentStep?.endsWith('.json')

  return (
    <StyledBox
      // background="blackAlpha.400"
      background="transparent"
      maxW="600px"
      maxH="600px"
      position="relative"
      aspectRatio="1"
      m="auto"
      ref={containerRef}
    >
      {isLottie ? (
        <Player
          autoplay={true}
          loop={false}
          keepLastFrame={true}
          controls={false}
          src={currentStep}
          style={{ height: '100%', width: '100%' }}
        />
      ) : (
        <Image src={currentStep} style={{ height: '100%', width: '100%' }} />
      )}
      {isEmbedded && animationStepLS > 0 && (
        <Button
          variant="secondary"
          onClick={() => clickLeft()}
          position="absolute"
          top="calc(50% - 20px)"
          left="0"
        >
          &lt;
        </Button>
      )}
      {isEmbedded && animationStepLS + 1 < animation.steps.length && (
        <Button
          position="absolute"
          variant="primary"
          top="calc(50% - 20px)"
          right="0"
          onClick={() => clickRight()}
        >
          &gt;
        </Button>
      )}
    </StyledBox>
  )
}

export default Animation
