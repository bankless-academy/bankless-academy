/* eslint-disable no-console */
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'

import { MetaData } from 'components/Head'
import LessonDetail from 'components/LessonDetail'
import Article from 'components/Article'
import { DEFAULT_METADATA, LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { useSmallScreen } from 'hooks/index'
import { useEffect } from 'react'
import { markdown } from 'utils/markdown'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentLesson = LESSONS.find(
    (lesson: LessonType) => lesson.slug === params.slug
  )
  const pageMeta: MetaData = {
    title: currentLesson.name,
    description: currentLesson.description,
    image: currentLesson.socialImageLink || DEFAULT_METADATA.image,
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

const translations = []

// TODO: move to /lesson/lesson-name + add redirect

const LessonPage = (): JSX.Element => {
  const { asPath } = useRouter()
  const router = useRouter()
  const [path] = asPath.split('?')
  const [isSmallScreen] = useSmallScreen()
  const { lang } = router.query

  const currentLesson = LESSONS.find(
    (lesson: LessonType) => `/lessons/${lesson.slug}` === path
  )

  const SPLIT = `\`\`\`
<< LESSON START >>
\`\`\``

  useEffect((): void => {
    if (!translations['en']?.name) {
      console.log('save en')
      translations['en'] = JSON.parse(JSON.stringify(currentLesson))
    }
    if (lang?.length && typeof lang === 'string') {
      if (currentLesson.languages.includes(lang as any)) {
        if (
          translations[lang]?.name &&
          translations[lang]?.name !== currentLesson.name
        ) {
          console.log(lang)
          currentLesson.name = translations[lang].name
          currentLesson.description = translations[lang].description
          currentLesson.slides = JSON.parse(
            JSON.stringify(translations[lang].slides)
          )
        } else {
          try {
            fetch(
              `https://bankless-academy-git-l10nmain-bankless-academy.vercel.app/lesson/${lang}/${currentLesson.slug}.md`
            )
              .then((response) => response.text())
              .then(async (md) => {
                // console.log('md', md)
                if (md[0] !== '<') {
                  // eslint-disable-next-line no-unsafe-optional-chaining
                  const [intro, content] = md?.split(SPLIT)
                  // console.log(intro)
                  const [, infos] = intro.split('---')
                  // console.log(infos)
                  const [, title] = infos.split('\n')
                  // console.log(title)
                  currentLesson.name = title.replace('LESSON TITLE: ', '')
                  currentLesson.description =
                    'Aprende sobre la arquitectura fundamental de la tecnología de cadena de bloques (blockchain).'
                  // console.log(content)
                  const slides = content.split('# ')
                  slides.shift()
                  // console.log(slides)
                  for (let i = 0; i < currentLesson.slides.length - 1; i++) {
                    // console.log(i)
                    const [slide_title, slide_content, quizzes] = slides[
                      i
                    ].split('\n\n', 3)
                    // console.log(slide_title)
                    // console.log(slide_content)
                    // console.log(quizzes)
                    currentLesson.slides[i].title = slide_title
                    if (currentLesson.slides[i].type === 'LEARN') {
                      const rendered = await markdown.render(slide_content)
                      currentLesson.slides[i].content = currentLesson.slides[
                        i
                      ].content.replace(
                        /<div class="bloc1">.*?<\/div>/s,
                        `<div class="bloc1">${rendered}</div>`
                      )
                    }
                    if (currentLesson.slides[i].type === 'QUIZ') {
                      currentLesson.slides[i].quiz.question = slide_content
                      quizzes.split('\n').map((quiz, j) => {
                        const q = quiz.replace('- [ ] ', '').trim()
                        if (q.length)
                          currentLesson.slides[i].quiz.answers[j] = q
                      })
                    }
                  }
                  console.log(`save ${lang}`)
                  translations[lang] = JSON.parse(JSON.stringify(currentLesson))
                }
              })
          } catch (error) {
            console.error(error)
          }
        }
      } else {
        console.log('language unknown')
      }
    } else {
      if (
        translations['en']?.name &&
        translations['en']?.name !== currentLesson.name
      ) {
        console.log('en')
        currentLesson.name = translations['en'].name
        currentLesson.description = translations['en'].description
        currentLesson.slides = JSON.parse(
          JSON.stringify(translations['en'].slides)
        )
      }
    }
  }, [lang])

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
            <LessonDetail lesson={currentLesson} />
          </Container>
        )}
      </>
    )
}

export default LessonPage
