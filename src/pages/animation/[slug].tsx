import { GetStaticPaths, GetStaticProps } from 'next'
import { Box, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'usehooks-ts'
import { Player } from '@lottiefiles/react-lottie-player'

import { MetaData } from 'components/Head'

const ANIMATIONS = {
  bitcoin: {
    name: 'Bitcoin animation',
    description: 'Animation description',
    socialImageLink: null,
    steps: [
      '/lotties/bitcoin_step1.json',
      '/lotties/bitcoin_step2.json',
      '/lotties/bitcoin_step3.json',
    ],
  },
}

const ANIMATION_IDS = Object.keys(ANIMATIONS)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const animation = ANIMATIONS[params.slug as string]
  const pageMeta: MetaData = {
    title: animation.name,
    description: animation.description,
    image: animation.socialImageLink,
    noindex: true,
    nolayout: true,
  }
  return {
    props: { pageMeta },
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ANIMATION_IDS.map((animationSlug) => ({
      params: { slug: animationSlug },
    })),
    fallback: true,
  }
}

const Animation = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query
  const animationId = slug as string
  const [animationStepLS, setAnimationStepLS] = useLocalStorage(
    `animation-${animationId}`,
    0
  )

  if (!ANIMATION_IDS.includes(animationId)) return null

  const animation = ANIMATIONS[animationId]

  return (
    <Box
      background="blackAlpha.400"
      maxW="600px"
      maxH="600px"
      position="relative"
      aspectRatio="1"
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
          onClick={() => setAnimationStepLS(animationStepLS - 1)}
          position="absolute"
          top="50%"
          left="0"
        >
          &lt;
        </Button>
      )}
      {animationStepLS + 1 < animation.steps.length && (
        <Button
          position="absolute"
          top="50%"
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
