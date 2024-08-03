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
    position: relative; /* Ensure the element has a relative position */
  }
  #lottie .actionNext:hover,
  #lottie .actionPrev:hover {
    path {
      fill-opacity: 0.2;
      fill: black;
    }
  }
`

const Tooltip = styled.div`
  width: 120px;
  background-color: #d5d5d5;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  transition: opacity 0.3s;
  pointer-events: none; /* Ensure the tooltip does not interfere with pointer events */
  visibility: hidden;
  opacity: 0;
  ::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #d5d5d5 transparent;
  }

  &.visible {
    visibility: visible;
    opacity: 1;
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

  const nextTooltipRef = useRef()
  const prevTooltipRef = useRef()

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

  useEffect(() => {
    const positionTooltip = (tooltip, target) => {
      const rect = target.getBoundingClientRect()
      tooltip.style.left = `${
        rect.left + window.scrollX + rect.width / 2 - 60
      }px`
      tooltip.style.top = `${rect.bottom + window.scrollY + 5}px` // Positioned below the element
      tooltip.classList.add('visible')
    }
    const hideTooltip = (tooltip) => {
      tooltip.classList.remove('visible')
    }

    const displayTooltip = (retry) => {
      const nextElement = document.querySelector('.actionNext')
      const prevElement = document.querySelector('.actionPrev')

      if (nextTooltipRef.current && nextElement) {
        positionTooltip(nextTooltipRef.current, nextElement)
      } else if (retry === 1 && nextTooltipRef.current) {
        hideTooltip(nextTooltipRef.current)
        setTimeout(() => {
          console.log('retry displayTooltip')
          displayTooltip(0)
        }, 1000)
      } else if (nextTooltipRef.current) {
        hideTooltip(nextTooltipRef.current)
      }
      if (prevTooltipRef.current && prevElement) {
        positionTooltip(prevTooltipRef.current, prevElement)
      } else if (prevTooltipRef.current) {
        hideTooltip(prevTooltipRef.current)
      }
    }

    setTimeout(() => {
      displayTooltip(1)
    }, 200)
  }, [animationStepLS])

  useEffect(() => {
    // Reset animationStepLS when animationId changes
    setAnimationStepLS(
      parseInt(localStorage.getItem(`animation-${animationId}`) || '0')
    )
  }, [animationId, setAnimationStepLS])

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
      position="initial"
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
      {animationStepLS === 0 && (
        <Tooltip ref={nextTooltipRef}>Click here!</Tooltip>
      )}
      <Tooltip ref={prevTooltipRef}>Click here to go back</Tooltip>
    </StyledBox>
  )
}

export default Animation
