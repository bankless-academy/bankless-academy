import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import Head, { PageMetaProps } from '../../components/global/Head'
import { Container } from '@chakra-ui/react'
import { QUESTS } from 'src/constants'

const pageMeta = {
  title: 'Quest',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

export async function getStaticPaths() {
  return {
    paths: QUESTS.map((quest) => ({ params: { slug: quest.slug } })),
    fallback: true,
  }
}

const Page = (): JSX.Element => {
  const { asPath } = useRouter()

  const currentQuest = QUESTS.find((quest) => `/quest/${quest.slug}` === asPath)

  const pageMeta: PageMetaProps = {
    title: `Quest: ${currentQuest.name}`,
    description: currentQuest.description,
  }

  return (
    <Container maxW="container.lg">
      <Head {...pageMeta} />
      <h1>Quest page: {asPath}</h1>
    </Container>
  )
}

export default Page
