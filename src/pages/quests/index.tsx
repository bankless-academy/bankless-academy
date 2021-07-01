import { GetStaticProps } from 'next'
import { PageMetaProps } from '../../components/global/Head'
import { SimpleGrid, Container } from '@chakra-ui/react'
import QuestCards from '../../components/QuestCards'

const pageMeta: PageMetaProps = {
  title: 'Quests',
  description: 'Quests description',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Page = (): JSX.Element => {
  return (
    <Container maxW="container.lg">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={12}>
        <QuestCards />
      </SimpleGrid>
    </Container>
  )
}

export default Page
