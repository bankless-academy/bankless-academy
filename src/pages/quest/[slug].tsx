import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'

import { PageMetaProps } from 'components/HeadMetadata'
import Quest from 'components/Quest'
import QUESTS from 'constants/quests'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentQuest = QUESTS.find(() => `/quest/${params.slug}`)
  const pageMeta: PageMetaProps = {
    title: currentQuest.name,
    description: currentQuest.description,
    image: currentQuest.questImageLink,
  }
  return {
    props: { pageMeta },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: QUESTS.map((quest) => ({ params: { slug: quest.slug } })),
    fallback: true,
  }
}

const Page = (): JSX.Element => {
  const { asPath } = useRouter()

  const currentQuest = QUESTS.find((quest) => `/quest/${quest.slug}` === asPath)

  return (
    <Container maxW="container.xl">
      <Quest quest={currentQuest} />
    </Container>
  )
}

export default Page
