/* eslint-disable no-console */
import { GetStaticPaths, GetStaticProps } from 'next'
import { Box, Container, Text, Image, Center } from '@chakra-ui/react'
import fs from 'fs'

import { MetaData } from 'components/Head'
import LessonDetail from 'components/LessonDetail'
import Article from 'components/Article'
import { DEFAULT_METADATA, LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { useSmallScreen } from 'hooks/index'
import { markdown } from 'utils/markdown'
import LessonContent from 'components/LessonContent'
import Layout from 'layout/Layout'
import { useLocalStorage } from 'usehooks-ts'

const SPLIT = `\`\`\`

---`

const processMD = async (md, lang, englishLesson, updatedAt) => {
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
    const newLesson: LessonType = JSON.parse(JSON.stringify(englishLesson))
    newLesson.name = title.replace('TITLE: ', '')
    newLesson.description = description.replace('DESCRIPTION:', '').trim()
    if (updatedAt) newLesson.translationDate = updatedAt
    // console.log(newLesson.description)
    // console.log(content)
    if (newLesson.slides?.length && !newLesson.isArticle) {
      // LESSON
      const slides = content?.split('# ')
      slides.shift()
      // console.log(slides)
      const numberOfSlides = newLesson.slides.filter(
        (s) => s.type !== 'QUEST'
      ).length
      for (let i = 0; i < numberOfSlides; i++) {
        // console.log(i)
        const [slide_title] = (slides[i] || '').split('\n\n')
        const slide_content = slides[i]
          .replace(slide_title, '')
          .replace(/!\[\]\(.*?\)/, ``)
          .trim()
          // TEMP HACK: hide embed
          .replace('[embed]', '[]')
        // console.log(slide_title)
        // console.log(slide_content)
        // console.log(quizzes)
        newLesson.slides[i].title = slide_title
        if (newLesson.slides[i].type === 'LEARN' && slide_content) {
          // console.log(slide_content)
          newLesson.slides[i].md = slide_content
          const rendered = await markdown.render(slide_content)
          // console.log(newLesson.slides[i].content)
          if (newLesson.slides[i].content.includes('<div class="bloc2">')) {
            newLesson.slides[i].content = newLesson.slides[i].content.replace(
              /<div class="bloc1">.*?<\/div><div class="bloc2">/s,
              `<div class="bloc1">${rendered}</div><div class="bloc2">`
            )
          } else {
            newLesson.slides[i].content = newLesson.slides[i].content.replace(
              /<div class="bloc1">.*?<\/div>/s,
              `<div class="bloc1">${rendered}</div>`
            )
          }
        }
        if (
          (newLesson.slides[i].type === 'QUIZ' ||
            newLesson.slides[i].type === 'POLL') &&
          slide_content
        ) {
          // console.log(slide_content)
          newLesson.slides[i].md = slide_content
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
            if (quiz?.length && quiz.startsWith('- [ ] ')) {
              newLesson.slides[i].quiz.answers[j] = quiz
                .replace('- [ ] ', '')
                .trim()
              j++
            } else if (quiz?.length && quiz.startsWith('> ')) {
              newLesson.slides[i].quiz.feedback[j - 1] = quiz
                .replace('> ', '')
                .trim()
            }
          })
        }
      }
    } else if (newLesson.isArticle) {
      // HANDBOOK
      newLesson.articleContent = content
    }
    console.log(`save ${lang}`)
    // console.log(newLesson)
    return newLesson
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('params', params)
  const slug = (
    params.slug[0].length === 2 ? params.slug[1] : params.slug[0]
  )?.replace('-datadisk', '')
  console.log('slug', slug)
  const language: any = params.slug[0].length === 2 ? params.slug[0] : 'en'
  console.log('language', language)
  let currentLesson = LESSONS.find((lesson: LessonType) => lesson.slug === slug)
  if (!currentLesson) {
    // lesson not found
    console.log('lesson not found')
    return {
      props: {},
    }
  }
  // console.log(currentLesson)
  const showContent = params.slug[params.slug?.length - 1] === 'content'
  console.log('showContent', showContent)
  currentLesson.showContent = showContent
  if (currentLesson?.languages) {
    for (const language of currentLesson.languages) {
      if (
        !fs.existsSync(
          `translation/lesson/${language}/${currentLesson.slug}.md`
        )
      ) {
        currentLesson.languages = currentLesson.languages.filter(
          (l) => l !== language
        )
      }
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
      const fileStat = await fs.statSync(
        `translation/lesson/${language}/${currentLesson.slug}.md`
      )
      if (md && md.includes('TITLE:') && currentLesson) {
        console.log('processMD start')
        currentLesson = await processMD(
          md,
          language,
          currentLesson,
          fileStat.mtime.toLocaleString()
        )
        currentLesson.lang = language
      }
    }
  } catch (error) {
    const pageMeta: MetaData = {
      title: currentLesson?.name,
      description: currentLesson?.description,
      image: currentLesson?.socialImageLink || DEFAULT_METADATA.image,
      isLesson: !currentLesson?.isArticle,
      lesson: currentLesson,
    }
    console.log('error loading language', language)
    console.log('error', error)
    return {
      props: { pageMeta },
    }
  }

  const isDatadisk = (params.slug as any).join('/').includes('-datadisk')

  const pageMeta: MetaData = {
    title: currentLesson.name,
    description: currentLesson.description,
    // TODO: import via CMS
    image: isDatadisk
      ? `https://app.banklessacademy.com/images/${currentLesson.slug}/social-datadisk.jpg`
      : currentLesson.socialImageLink || DEFAULT_METADATA.image,
    isLesson: !currentLesson.isArticle,
    lesson: currentLesson,
    isDatadisk,
  }
  return {
    props: { pageMeta },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []
  for (const lesson of LESSONS) {
    paths.push({ params: { slug: [lesson.slug] } })
    paths.push({ params: { slug: [lesson.slug, 'content'] } })
    if (lesson.lessonCollectibleGif)
      paths.push({
        params: { slug: [`${lesson.slug}-datadisk`] },
      })
    if (lesson.languages) {
      for (const lang of lesson.languages) {
        paths.push({ params: { slug: [lang, lesson.slug] } })
        paths.push({ params: { slug: [lang, lesson.slug, 'content'] } })
      }
    }
  }
  // console.log('paths', paths)
  return {
    paths,
    fallback: true,
  }
}

// TODO: move to /lesson/lesson-name + add redirect

const LessonPage = ({ pageMeta }: { pageMeta: MetaData }): JSX.Element => {
  const [isSmallScreen, isMediumScreen] = useSmallScreen()
  const lesson = pageMeta?.lesson
  const [openLessonLS] = useLocalStorage(`lessonOpen`, JSON.stringify([]))

  const lang =
    typeof window !== 'undefined' &&
    window.location.pathname.split('/')[2].length === 2
      ? window.location.pathname.split('/')[2]
      : 'en'

  const isLessonOpen =
    lesson?.slug && JSON.parse(openLessonLS)?.includes(lesson.slug)

  if (!lesson) {
    console.log('redirect to lesson select')
    // redirect to lesson select if lesson is not found
    document.location.href = '/lessons'
    return null
  } else if (lang !== 'en' && lang !== lesson?.lang) {
    console.log('redirect to lesson')
    // redirect to english lesson if translation is not found
    document.location.href = `/lessons/${lesson.slug}`
    return null
  } else
    return (
      <>
        {lesson.isArticle ? (
          <Layout page="ARTICLE">
            <Article lesson={lesson} />
          </Layout>
        ) : (
          <Layout page="LESSON-DETAIL" isLessonOpen={isLessonOpen}>
            {lesson?.showContent ? (
              <>
                <Center
                  height="58vh"
                  bgImage="/images/homepage_background_v4_half.png"
                  bgSize="cover"
                  bgPosition="bottom"
                  pb="16px"
                >
                  <Box
                    width="100%"
                    maxW="800px"
                    textAlign="center"
                    alignItems="center"
                    height="100%"
                    alignContent="end"
                  >
                    <Box w="100%" maxW="90%">
                      <Image
                        style={{
                          filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))',
                        }}
                        maxW="90%"
                        src="/images/BanklessAcademy.svg"
                        alt="Bankless Academy"
                        m="auto"
                      />
                      <Box ml="25%" w="73%">
                        <Text
                          fontSize={isSmallScreen ? '20px' : '25px'}
                          mt="-15px"
                          w="100%"
                        >
                          {`Your platform for building digital independence.`}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Center>
                <Container
                  maxW={
                    isSmallScreen && isLessonOpen ? '100vw' : 'container.xl'
                  }
                  px={isSmallScreen ? '8px' : '16px'}
                >
                  <LessonContent lesson={lesson} />
                </Container>
              </>
            ) : (
              <Container
                maxW={isSmallScreen && isLessonOpen ? '100vw' : 'container.xl'}
                px={isSmallScreen ? '8px' : '16px'}
                minH={isMediumScreen ? 'calc(100vh - 146px)' : 'default'}
              >
                <LessonDetail lesson={lesson} />
              </Container>
            )}
          </Layout>
        )}
      </>
    )
}

export default LessonPage
