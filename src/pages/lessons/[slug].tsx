/* eslint-disable no-console */
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'
import fs from 'fs'

import { MetaData } from 'components/Head'
import LessonDetail from 'components/LessonDetail'
import Article from 'components/Article'
import { DEFAULT_METADATA, LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { useSmallScreen } from 'hooks/index'
import { useEffect } from 'react'
import { markdown } from 'utils/markdown'

const SPLIT = `\`\`\`

---`

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentLesson = LESSONS.find(
    (lesson: LessonType) => lesson.slug === params.slug
  )
  const translations = {}
  // console.log(currentLesson.languages)
  for (const language of currentLesson.languages) {
    // console.log(language)
    try {
      translations[language] = await fs.readFileSync(
        `translation/lesson/${language}/${currentLesson.slug}.md`,
        'utf8'
      )
    } catch (error) {
      currentLesson.languages = currentLesson.languages.filter(
        (l) => l !== language
      )
      console.log('error loading language', language)
    }
  }
  const pageMeta: MetaData = {
    title: currentLesson.name,
    description: currentLesson.description,
    image: currentLesson.socialImageLink || DEFAULT_METADATA.image,
    isLesson: !currentLesson.isArticle,
    translations: translations,
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
let translations = []

const LessonPage = ({ pageMeta }: { pageMeta: MetaData }): JSX.Element => {
  const { asPath } = useRouter()
  const router = useRouter()
  const [path] = asPath.split('?')
  const [isSmallScreen] = useSmallScreen()
  const { lang } = router.query

  const lessons = JSON.parse(JSON.stringify(LESSONS))

  const currentLesson = lessons.find(
    (lesson: LessonType) => `/lessons/${lesson.slug}` === path
  )

  const translationFiles = Object.keys(pageMeta?.translations || {})
  if (translationFiles && currentLesson) {
    for (const language of currentLesson.languages) {
      if (!translationFiles.includes(language)) {
        // console.log('no lang')
        currentLesson.languages = currentLesson.languages.filter(
          (l) => l !== language
        )
      }
    }
  }

  const loadMD = async (md, lang) => {
    console.log('loadMD')
    // console.log('md', md)
    if (md[0] !== '<') {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const [intro, content] = md?.split(SPLIT)
      // console.log(intro)
      const [, infos] = (intro || '').split('---')
      // console.log(infos)
      const [, title, description] = (infos || '').split('\n')
      // console.log(title)
      currentLesson.name = title.replace('TITLE: ', '')
      currentLesson.description = description.replace('DESCRIPTION:', '').trim()
      // console.log(currentLesson.description)
      // console.log(content)
      const slides = content?.split('# ')
      slides.shift()
      // console.log(slides)
      for (let i = 0; i < currentLesson.slides.length - 1; i++) {
        // console.log(i)
        const [slide_title] = (slides[i] || '').split('\n\n')
        const slide_content = slides[i]
          .replace(slide_title, '')
          .replace(/!\[\]\(.*?\)/, ``)
          .trim()
        // console.log(slide_title)
        // console.log(slide_content)
        // console.log(quizzes)
        currentLesson.slides[i].title = slide_title
        if (currentLesson.slides[i].type === 'LEARN' && slide_content) {
          // console.log(slide_content)
          const rendered = await markdown.render(slide_content)
          // console.log(currentLesson.slides[i].content)
          currentLesson.slides[i].content = currentLesson.slides[
            i
          ].content.replace(
            /<div class="bloc1">.*?<\/div><div class="bloc2">/s,
            `<div class="bloc1">${rendered}</div><div class="bloc2">`
          )
        }
        if (currentLesson.slides[i].type === 'QUIZ' && slide_content) {
          // console.log(slide_content)
          const [question] = slide_content.split('\n\n')
          // console.log(question)
          const answers = slide_content
            .replace(question, '')
            .replaceAll('\n>', '>')
            .replaceAll('\n\n-', '\n-')
            .trim()
          // console.log(answers)
          currentLesson.slides[i].quiz.question = question
          let j = 0
          answers.split('\n').map((quiz) => {
            // console.log(quiz)
            if (quiz.length && quiz.startsWith('- [ ] ')) {
              currentLesson.slides[i].quiz.answers[j] = quiz
                .replace('- [ ] ', '')
                .trim()
              j++
            } else if (quiz.length && quiz.startsWith('> ')) {
              currentLesson.slides[i].quiz.feedback[j - 1] = quiz
                .replace('> ', '')
                .trim()
            }
          })
        }
      }
      console.log(`save ${lang}`)
      translations[lang] = JSON.parse(JSON.stringify(currentLesson))
    }
  }

  useEffect((): void => {
    if (!translations['en']?.name) {
      console.log('save en')
      translations['en'] = JSON.parse(JSON.stringify(currentLesson))
    }
    if (
      lang?.length &&
      typeof lang === 'string' &&
      lang in pageMeta.translations
    ) {
      if (currentLesson && currentLesson.languages.includes(lang as any)) {
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
            const md = pageMeta?.translations[lang]
            if (md) loadMD(md, lang)
          } catch (error) {
            console.error(error)
          }
        }
      } else {
        console.log('language unknown')
      }
    } else {
      if (
        lang !== 'en' &&
        typeof lang === 'string' &&
        !(lang in pageMeta.translations)
      ) {
        console.log('redirect', lang)
        router.push(`/lessons/${currentLesson.slug}`)
      }
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

  useEffect(() => {
    translations = []
  }, [])

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
