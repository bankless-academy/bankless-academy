import { GetStaticPaths, GetStaticProps } from 'next'
import { Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { MetaData } from 'components/Head'
import Modules from 'components/Modules'
import MODULES from 'constants/whitelabel_modules'
import { ModuleType } from 'entities/module'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentLesson = MODULES.find(
    (module: ModuleType) => module.slug === params.slug
  )
  const pageMeta: MetaData = {
    title: `Module: ${currentLesson.name}`,
    description: currentLesson.description,
    image: currentLesson.moduleImageLink,
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

  const submodules = MODULES.find((m) => m.slug === slug)?.submodules
  const moduleName = MODULES.find((m) => m.slug === slug)?.name

  if (submodules && moduleName)
    return (
      <Container maxW="container.xl">
        <Modules modules={submodules} title={moduleName} />
      </Container>
    )
  else return null
}

export default ModulesPage
