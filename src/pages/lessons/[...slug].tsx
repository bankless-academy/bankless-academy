/* eslint-disable no-console */
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container } from '@chakra-ui/react'
import fs from 'fs'

import { MetaData } from 'components/Head'
import LessonDetail from 'components/LessonDetail'
import Article from 'components/Article'
import { DEFAULT_METADATA, LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { useSmallScreen } from 'hooks/index'
import { markdown } from 'utils/markdown'

const SPLIT = `\`\`\`

---`

const processMD = async (md, lang, englishLesson) => {
  console.log('processMD:', lang)
  // console.log('md', md)
  if (md[0] !== '<') {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const [intro, content] = md?.split(SPLIT)
    // console.log(intro)
    const [, infos] = (intro || '').split('---')
    // console.log(infos)
    const [, title, description] = (infos || '').split('\n')
    // console.log(title)
    const newLesson = JSON.parse(JSON.stringify(englishLesson))
    newLesson.name = title.replace('TITLE: ', '')
    newLesson.description = description.replace('DESCRIPTION:', '').trim()
    // console.log(newLesson.description)
    // console.log(content)
    const slides = content?.split('# ')
    slides.shift()
    // console.log(slides)
    for (let i = 0; i < newLesson.slides.length - 1; i++) {
      // console.log(i)
      const [slide_title] = (slides[i] || '').split('\n\n')
      const slide_content = slides[i]
        .replace(slide_title, '')
        .replace(/!\[\]\(.*?\)/, ``)
        .trim()
      // console.log(slide_title)
      // console.log(slide_content)
      // console.log(quizzes)
      newLesson.slides[i].title = slide_title
      if (newLesson.slides[i].type === 'LEARN' && slide_content) {
        // console.log(slide_content)
        const rendered = await markdown.render(slide_content)
        // console.log(newLesson.slides[i].content)
        newLesson.slides[i].content = newLesson.slides[i].content.replace(
          /<div class="bloc1">.*?<\/div><div class="bloc2">/s,
          `<div class="bloc1">${rendered}</div><div class="bloc2">`
        )
      }
      if (newLesson.slides[i].type === 'QUIZ' && slide_content) {
        // console.log(slide_content)
        const [question] = slide_content.split('\n\n')
        // console.log(question)
        const answers = slide_content
          .replace(question, '')
          .replaceAll('\n>', '>')
          .replaceAll('\n\n-', '\n-')
          .trim()
        // console.log(answers)
        newLesson.slides[i].quiz.question = question
        let j = 0
        answers.split('\n').map((quiz) => {
          // console.log(quiz)
          if (quiz.length && quiz.startsWith('- [ ] ')) {
            newLesson.slides[i].quiz.answers[j] = quiz
              .replace('- [ ] ', '')
              .trim()
            j++
          } else if (quiz.length && quiz.startsWith('> ')) {
            newLesson.slides[i].quiz.feedback[j - 1] = quiz
              .replace('> ', '')
              .trim()
          }
        })
      }
    }
    console.log(`save ${lang}`)
    // console.log(newLesson)
    return newLesson
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.slug.length === 1 ? params.slug[0] : params.slug[1]
  const language: any = params.slug.length === 1 ? 'en' : params.slug[0]
  let currentLesson = LESSONS.find((lesson: LessonType) => lesson.slug === slug)
  console.log(currentLesson)
  for (const language of currentLesson.languages) {
    if (
      !fs.existsSync(`translation/lesson/${language}/${currentLesson.slug}.md`)
    ) {
      currentLesson.languages = currentLesson.languages.filter(
        (l) => l !== language
      )
    }
  }
  try {
    if (
      fs.existsSync(`translation/lesson/${language}/${currentLesson.slug}.md`)
    ) {
      const md = await fs.readFileSync(
        `translation/lesson/${language}/${currentLesson.slug}.md`,
        'utf8'
      )
      if (md && md.includes('TITLE:') && currentLesson) {
        console.log('processMD start')
        currentLesson = await processMD(md, language, currentLesson)
        currentLesson.lang = language
      }
    }
  } catch (error) {
    const pageMeta: MetaData = {
      title: currentLesson.name,
      description: currentLesson.description,
      image: currentLesson.socialImageLink || DEFAULT_METADATA.image,
      isLesson: !currentLesson.isArticle,
      lesson: currentLesson,
    }
    console.log('error loading language', language)
    return {
      props: { pageMeta },
    }
  }

  const pageMeta: MetaData = {
    title: currentLesson.name,
    description: currentLesson.description,
    image: currentLesson.socialImageLink || DEFAULT_METADATA.image,
    isLesson: !currentLesson.isArticle,
    lesson: currentLesson,
  }
  return {
    props: { pageMeta },
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []
  for (const lesson of LESSONS) {
    paths.push({ params: { slug: [lesson.slug] } })
    for (const lang of lesson.languages) {
      paths.push({ params: { slug: [lang, lesson.slug] } })
    }
  }
  // console.log(paths)
  return {
    paths,
    fallback: true,
  }
}

// TODO: move to /lesson/lesson-name + add redirect

const LessonPage = ({ pageMeta }: { pageMeta: MetaData }): JSX.Element => {
  const [isSmallScreen] = useSmallScreen()
  const lesson = pageMeta?.lesson

  if (!lesson) {
    console.log('redirect to lesson select')
    // force redirect to lesson select if lesson is not found
    document.location.href = '/lessons'
    return null
  } else if (
    typeof window !== 'undefined' &&
    window.location.pathname.split('/').length === 4 &&
    lesson?.lang !== 'en' &&
    window.location.pathname.split('/')[2] !== lesson?.lang
  ) {
    console.log('redirect to lesson')
    // force redirect to lesson select if lesson is not found
    document.location.href = `/lessons/${lesson.slug}`
    return null
  } else
    return (
      <>
        {lesson.isArticle ? (
          <Article lesson={lesson} />
        ) : (
          <Container maxW="container.xl" px={isSmallScreen ? '8px' : '16px'}>
            <LessonDetail lesson={lesson} />
          </Container>
        )}
      </>
    )
}

export default LessonPage
