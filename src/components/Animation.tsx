/* eslint-disable no-console */
import React, { useRef, useEffect } from 'react'
import { Box, Button, Image } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { Player } from '@lottiefiles/react-lottie-player'
import styled from '@emotion/styled'

import { ANIMATIONS, ANIMATION_IDS } from 'constants/animations'
import { useHotkeys } from 'react-hotkeys-hook'
import { useState } from 'react'
import { scrollDown } from 'utils/index'

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
      /* fill-opacity: 0.2;
      fill: black; */
      /* opacity: 0.6; */
      filter: brightness(60%);
    }
  }
`

export const Simulation = styled.div<{ title: string }>`
  width: 100%;
  height: 100%;
  ${({ title }) =>
    `
      border: 1px dashed #916ab8;
      border-width: 1px;
      border-radius: 10px;
      position: relative;
      ::before {
        content: '${title}';
        width: 96%;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        display: block;
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        background-color: transparent;
        color: #916ab8;
        padding: 8px 0;
      }
    `}
`

const Tooltip = styled.div`
  width: 120px;
  background-color: #d5d5d5;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: fixed; /* Changed from absolute to fixed */
  z-index: 1000; /* Increased z-index */
  transition: opacity 0.3s, transform 0.5s ease-in-out;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
  animation: floatAnimation 2s infinite;

  @keyframes floatAnimation {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }

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
  const playerRef = useRef<Player>(null)

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
      if (!tooltip || !target) return

      const rect = target.getBoundingClientRect()
      const tooltipWidth = 120 // Width of tooltip

      // Center horizontally relative to target
      const left = rect.left + rect.width / 2 - tooltipWidth / 2

      // Position below the target with some padding
      const top = rect.bottom + 5

      tooltip.style.left = `${left}px`
      tooltip.style.top = `${top}px`
      tooltip.classList.add('visible')
    }

    const hideTooltip = (tooltip) => {
      if (tooltip) {
        tooltip.classList.remove('visible')
      }
    }

    const displayTooltip = (retry = 1) => {
      const nextElement = document.querySelector('.actionNext')
      const prevElement = document.querySelector('.actionPrev')

      if (nextTooltipRef.current && nextElement) {
        positionTooltip(nextTooltipRef.current, nextElement)
      } else if (retry > 0 && nextTooltipRef.current) {
        hideTooltip(nextTooltipRef.current)
        setTimeout(() => {
          displayTooltip(retry - 1)
        }, 500)
      } else {
        hideTooltip(nextTooltipRef.current)
      }

      if (prevTooltipRef.current && prevElement) {
        positionTooltip(prevTooltipRef.current, prevElement)
      } else {
        hideTooltip(prevTooltipRef.current)
      }
    }

    // Initial positioning
    displayTooltip()

    // Update positions on scroll and resize
    const handleReposition = () => displayTooltip(0)
    window.addEventListener('scroll', handleReposition)
    window.addEventListener('resize', handleReposition)

    return () => {
      window.removeEventListener('scroll', handleReposition)
      window.removeEventListener('resize', handleReposition)
    }
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
        scrollDown()
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
        scrollDown()
      }
      setTimeout(() => {
        setIsDisabled(false)
      }, 200)
    } else {
      console.log('clicking too fast')
    }
  }

  const reloadAnimation = () => {
    if (playerRef.current) {
      // Cast playerRef.current to Player type to access setSeeker method
      const player = playerRef.current as Player
      player.stop() // Stop the animation first
      player.play() // Then restart it from beginning
    }
  }

  useHotkeys('left', () => clickLeft(), [isDisabled, animationStepLS])
  useHotkeys('right', () => clickRight(), [isDisabled, animationStepLS])

  const currentStep: string = animation.steps[animationStepLS]

  const isLottie = currentStep?.endsWith('.json')

  return (
    <Box m="10px">
      <StyledBox
        background="transparent"
        maxW="600px"
        maxH="600px"
        position="initial"
        aspectRatio="1"
        m="auto"
        ref={containerRef}
      >
        <Simulation
          title={`${animation.type}: ${animation.name} - ${
            animationStepLS + 1
          } / ${animationLength}`}
        >
          {isLottie ? (
            <Player
              ref={playerRef}
              autoplay={true}
              loop={false}
              keepLastFrame={true}
              controls={false}
              src={currentStep}
              style={{ height: '100%', width: '100%' }}
            />
          ) : (
            <Image
              src={currentStep}
              style={{ height: '100%', width: '100%' }}
            />
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
          {animation.type === 'Animation' && (
            <Button
              position="absolute"
              variant="secondary"
              bottom="10px"
              right="10px"
              size="sm"
              padding="12px !important"
              border="1px solid transparent"
              title="Reload animation"
              onClick={reloadAnimation}
            >
              ↺
            </Button>
          )}
          {animationStepLS >= 0 && (
            <Tooltip ref={nextTooltipRef}>Click here!</Tooltip>
          )}
          <Tooltip ref={prevTooltipRef}>Click here to go back</Tooltip>
        </Simulation>
      </StyledBox>
    </Box>
  )
}

export default Animation
