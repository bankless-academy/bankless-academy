import { Box, Button } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { Player } from '@lottiefiles/react-lottie-player'

import { ANIMATIONS, ANIMATION_IDS } from 'constants/animations'

const Animation = ({
  animationId,
}: {
  animationId: string
}): React.ReactElement => {
  const [animationStepLS, setAnimationStepLS] = useLocalStorage(
    `animation-${animationId}`,
    0
  )

  if (!ANIMATION_IDS.includes(animationId)) return null

  const animation = ANIMATIONS[animationId]

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
      <Player
        autoplay={true}
        loop={false}
        keepLastFrame={true}
        controls={false}
        src={animation.steps[animationStepLS]}
        style={{ height: '100%', width: '100%' }}
      />
      {animationStepLS > 0 && (
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
      {animationStepLS + 1 < animation.steps.length && (
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
