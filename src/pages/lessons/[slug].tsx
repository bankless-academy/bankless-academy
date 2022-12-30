import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'

import { MetaData } from 'components/Head'
import Lesson from 'components/Lesson'
import Article from 'components/Article'
import { LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { useSmallScreen } from 'hooks/index'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentLesson = LESSONS.find(
    (lesson: LessonType) => lesson.slug === params.slug
  )
  const pageMeta: MetaData = {
    title: currentLesson.name,
    description: currentLesson.description,
    image: currentLesson.socialImageLink,
    isLesson: !currentLesson.isArticle,
  }
  return {
    props: { pageMeta },
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: LESSONS.map((lesson) => ({ params: { slug: lesson.slug } })),
    fallback: true,
  }
}

// TODO: move to /lesson/lesson-name + add redirect

const LessonPage = (): JSX.Element => {
  const { asPath } = useRouter()
  const [path] = asPath.split('?')
  const [isSmallScreen] = useSmallScreen()

  const currentLesson = LESSONS.find(
    (lesson: LessonType) => `/lessons/${lesson.slug}` === path
  )

  if (!currentLesson) {
    // force redirect to lesson select if lesson is not found
    document.location.href = '/lessons'
    return null
  } else
    return (
      <>
        {currentLesson.isArticle ? (
          <Article lesson={currentLesson} />
        ) : (
          <Container maxW="container.xl" px={isSmallScreen ? '8px' : '16px'}>
            <Lesson lesson={currentLesson} />
          </Container>
        )}
      </>
    )
}

export default LessonPage
