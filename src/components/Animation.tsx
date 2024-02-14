import { Box, Button, Image } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { Player } from '@lottiefiles/react-lottie-player'

import { ANIMATIONS, ANIMATION_IDS } from 'constants/animations'
import { useHotkeys } from 'react-hotkeys-hook'

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

  if (!ANIMATION_IDS.includes(animationId)) return null

  const animation = ANIMATIONS[animationId]

  const animationSteps = Object.keys(ANIMATIONS).includes(animationId)
    ? ANIMATIONS[animationId]?.steps?.length
    : null

  const clickLeft = () => {
    if (animationStepLS > 0) {
      setAnimationStepLS(animationStepLS - 1)
    }
  }

  const clickRight = () => {
    if (animationStepLS + 1 < animationSteps) {
      setAnimationStepLS(animationStepLS + 1)
    }
  }

  useHotkeys('left', () => clickLeft(), [animationStepLS])
  useHotkeys('right', () => clickRight(), [animationStepLS])

  const currentStep: string = animation.steps[animationStepLS]

  const isLottie = currentStep?.endsWith('.json')

  return (
    <Box
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
          onClick={() => setAnimationStepLS(animationStepLS - 1)}
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
          onClick={() => setAnimationStepLS(animationStepLS + 1)}
        >
          &gt;
        </Button>
      )}
    </Box>
  )
}

export default Animation
