import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { MetaData } from 'components/Head'
import { ANIMATIONS, ANIMATION_IDS } from 'constants/animations'
import dynamic from 'next/dynamic'

const Animation = dynamic(() => import('components/Animation'), {
  ssr: false,
})

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const animation = ANIMATIONS[params.slug as string]
  const pageMeta: MetaData = {
    title: animation.name,
    description: animation.description,
    // image: animation.socialImageLink,
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

const AnimationPage = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query
  const animationId = slug as string
  return <Animation animationId={animationId} isEmbedded />
}

export default AnimationPage
