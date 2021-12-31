import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'

import { MetaData } from 'components/Head'
import Quest from 'components/Quest'
import QUESTS from 'constants/quests'
import { QuestType } from 'entities/quest'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentQuest = QUESTS.find(
    (quest: QuestType) => quest.slug === params.slug
  )
  const pageMeta: MetaData = {
    title: `Lesson: ${currentQuest.name}`,
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

const Lesson = (): JSX.Element => {
  const { asPath } = useRouter()

  const currentQuest = QUESTS.find(
    (quest: QuestType) => `/lessons/${quest.slug}` === asPath
  )

  return (
    <Container maxW="container.xl">
      <Quest quest={currentQuest} />
    </Container>
  )
}

export default Lesson
