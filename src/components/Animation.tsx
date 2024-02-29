/* eslint-disable no-console */
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
