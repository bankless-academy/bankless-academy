import { GetStaticProps } from 'next'
import { SimpleGrid, Container, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { MetaData } from 'components/Head'
import LessonCards from 'components/LessonCards'
import MODULES from 'constants/whitelabel_modules'

const pageMeta: MetaData = {
  title: 'Lessons',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const Lessons = (): JSX.Element => {
  const router = useRouter()
  const { module } = router.query
  const moduleName = MODULES.find((m) => m.slug === module)?.name
  return (
    <Container maxW="container.xl">
      {module !== undefined && (
        <Heading as="h1" size="2xl" textAlign="center" m={4}>
          {moduleName}
        </Heading>
      )}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} mt={8}>
        <LessonCards />
      </SimpleGrid>
    </Container>
  )
}

export default Lessons
