import { GetStaticProps } from 'next'
import { SimpleGrid, Container, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { MetaData } from 'components/Head'
import LessonCards from 'components/LessonCards'
import MODULES from 'constants/whitelabel_modules'
import { ModuleType } from 'entities/module'

const pageMeta: MetaData = {
  // TODO: add module name
  title: 'Lessons',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const findModuleName = (modules: ModuleType[], moduleSlug) => {
  for (const m of modules) {
    if (m.slug === moduleSlug) return m.name
    else if (
      m.submodules?.length > 0 &&
      findModuleName(m.submodules, moduleSlug) !== ''
    )
      return findModuleName(m.submodules, moduleSlug)
  }
  return ''
}

const Lessons = (): JSX.Element => {
  const router = useRouter()
  const { module } = router.query
  const moduleName = findModuleName(MODULES, module)
  return (
    <Container maxW="container.xl">
      {module !== '' && (
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
