import { GetStaticProps } from 'next'
import { SimpleGrid, Container, Heading } from '@chakra-ui/react'

import { MetaData } from 'components/Head'
import LessonCards from 'components/LessonCards'

const pageMeta: MetaData = {
  // TODO: add module name
  title: 'Lessons',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

function Lessons(): JSX.Element {
  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="2xl" textAlign="center" m={4}>
        Explore Lessons
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} mt={8}>
        <LessonCards />
      </SimpleGrid>
    </Container>
  )
}

export default Lessons
