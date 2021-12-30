import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'

import Head, { PageMetaProps } from 'components/Head'
import Quest from 'components/Quest'
import QUESTS from 'constants/quests'

const pageMeta = {
  title: 'Quest',
}

export const getStaticProps: GetStaticProps = async () => {
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

  const currentQuest = QUESTS.find(
    (quest) => `/lessons/${quest.slug}` === asPath
  )

  const pageMeta: PageMetaProps = {
    title: `Quest: ${currentQuest.name}`,
    description: currentQuest.description,
  }

  return (
    <Container maxW="container.xl">
      <Head {...pageMeta} />
      <Quest quest={currentQuest} />
    </Container>
  )
}

export default Page
