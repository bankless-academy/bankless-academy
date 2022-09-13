import { GetStaticPaths, GetStaticProps } from 'next'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { MetaData } from 'components/Head'
import Modules from 'components/Modules'
import LessonCards from 'components/LessonCards'
import MODULES from 'constants/whitelabel_modules'
import { ModuleType } from 'entities/module'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentLesson = MODULES.find(
    (module: ModuleType) => module.slug === params.slug
  )
  const pageMeta: MetaData = {
    title: `Module: ${currentLesson.name}`,
    description: currentLesson.description,
    image: currentLesson.socialImageLink || currentLesson.moduleImageLink,
    isLesson: true,
  }
  return {
    props: { pageMeta },
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: MODULES.map((module) => ({ params: { slug: module.slug } })),
    fallback: true,
  }
}

const ModulesPage = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query

  const module = MODULES.find((m) => m.slug === slug)

  if (!module) return null

  const hasSubmodules = module.subModules?.length > 0

  return (
    <Container maxW="container.xl">
      {hasSubmodules ? (
        <Modules
          modules={MODULES.filter((m) => m.parentModule === module.moduleId)}
          parentModule={module}
        />
      ) : (
        <>
          <Heading as="h1" size="2xl" textAlign="center" m={4}>
            {module.parentModule &&
              `${
                MODULES.find((m) => m.moduleId === module.parentModule)?.name
              } - `}
            {module.name}
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} mt={8}>
            <LessonCards />
          </SimpleGrid>
        </>
      )}
    </Container>
  )
}

export default ModulesPage
