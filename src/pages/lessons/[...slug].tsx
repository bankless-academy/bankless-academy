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
import Layout from 'layout/Layout'
import { useApp } from 'contexts/AppContext'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {
  isLanguage,
  normalizeLangCode,
  parseLangFromPath,
  readPreferredLanguage,
} from 'constants/languages'

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
            // the correct option is marked `- [x]` in the md source
            if (
              quiz?.length &&
              (quiz.startsWith('- [ ] ') || quiz.startsWith('- [x] '))
            ) {
              newLesson.slides[i].quiz.answers[j] = quiz
                .replace('- [ ] ', '')
                .replace('- [x] ', '')
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
  // /lessons/<lang>/<slug> when the first segment is a registry language code
  // (multi-char codes like pt-br included); otherwise the segment is the slug
  const hasLangSegment =
    params.slug.length > 1 && isLanguage(params.slug[0] as string)
  const slug = (hasLangSegment ? params.slug[1] : params.slug[0])?.replace(
    '-datadisk',
    ''
  )
  console.log('slug', slug)
  const language: any = hasLangSegment ? params.slug[0] : 'en'
  console.log('language', language)

  // Reject anything that is not a shape this route actually serves. Without
  // this the catch-all answered 200 to ANY url under /lessons/ — and because
  // an unknown first segment is treated as a slug, /lessons/bitcoin-basics/
  // contentt rendered the real lesson (title and all) at a junk URL, with
  // `robots: all`. That is an unbounded indexable near-duplicate surface, and
  // every unique URL also became a permanent prerender cache entry.
  //
  // Valid: [slug] | [slug-datadisk] | [lang, slug]
  const segments = params.slug as string[]
  const validShape =
    segments.length === 1 ||
    (segments.length === 2 && isLanguage(segments[0]))
  if (!validShape) return { notFound: true }

  const currentLessonMatch = LESSONS.find(
    (lesson: LessonType) => lesson.slug === slug
  )
  if (!currentLessonMatch) return { notFound: true }

  // `-datadisk` is only a real page for lessons that have a collectible; the
  // other 17 existed purely because `fallback: true` invented them, and served
  // a social image (`/images/<slug>/social-datadisk.jpg`) that does not exist.
  if (
    segments[segments.length - 1].endsWith('-datadisk') &&
    !currentLessonMatch.hasCollectible
  )
    return { notFound: true }

  let currentLesson = currentLessonMatch
  // console.log(currentLesson)
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
    // /content is served by pages/lessons/[slug]/content.tsx (server-rendered);
    // generating it here too would produce the same URL from two routes.
    if (lesson.lessonCollectibleGif)
      paths.push({
        params: { slug: [`${lesson.slug}-datadisk`] },
      })
    if (lesson.languages) {
      for (const lang of lesson.languages) {
        paths.push({ params: { slug: [lang, lesson.slug] } })
      }
    }
  }
  // console.log('paths', paths)
  return {
    paths,
    // 'blocking' (not true): an unknown path must run getStaticProps so it can
    // return notFound. With `true`, Next serves a fallback shell as 200 first
    // and caches it, which is what made every junk URL indexable.
    fallback: 'blocking',
  }
}

// TODO: move to /lesson/lesson-name + add redirect

const LessonPage = ({ pageMeta }: { pageMeta: MetaData }): JSX.Element => {
  const [isSmallScreen, isMediumScreen] = useSmallScreen()
  const lesson = pageMeta?.lesson
  const { openLessons, hideNavBar } = useApp()

  const router = useRouter()
  // router.asPath, not window.location: it is reactive and defined during SSR,
  // so this no longer differs between server and client render.
  const lang = parseLangFromPath(router.asPath)

  const isLessonOpen = lesson?.slug && openLessons.includes(lesson.slug)

  // A corrective redirect must REPLACE, never push. `document.location.href`
  // added a history entry, so Back returned to the bad URL, which redirected
  // forward again: the back button was trapped on any lesson whose translation
  // had been unregistered. Running it in an effect also keeps render pure —
  // assigning to document.location during render is a side effect that React
  // 18 strict mode fires twice.
  const wrongLanguage = !!lesson && lang !== 'en' && lang !== lesson?.lang
  useEffect(() => {
    if (!lesson) {
      router.replace('/lessons')
    } else if (wrongLanguage) {
      router.replace(`/lessons/${lesson.slug}`)
    }
  }, [lesson, wrongLanguage, router])

  // First visit only: send a reader whose browser language has a translation
  // to that translation. Deliberately client-side and `replace`:
  //   - a server/middleware redirect on Accept-Language can stop Google
  //     crawling the other language versions, so the HTML served for
  //     /lessons/<slug> stays English and the alternates are declared via
  //     hreflang instead;
  //   - `replace` adds no history entry, so Back is not trapped;
  //   - it runs only when nothing is stored, so it never overrides a reader
  //     who has actually chosen a language.
  useEffect(() => {
    if (!lesson || wrongLanguage || lang !== 'en') return
    if (typeof window === 'undefined') return
    // the reader's CHOSEN language, not i18next's `i18nextLng` cache — that
    // one records whatever is merely active, so it is set the moment anyone
    // opens a translated URL and would suppress the redirect for real newcomers
    if (readPreferredLanguage()) return
    const browserLang = normalizeLangCode(navigator.language)
    if (browserLang === 'en') return
    if (!lesson.languages?.includes(browserLang)) return
    router.replace(`/lessons/${browserLang}/${lesson.slug}`)
  }, [lesson, wrongLanguage, lang, router])

  if (!lesson || wrongLanguage) return null

  return (
    <>
      {lesson.isArticle ? (
        <Layout page="ARTICLE">
          <Article lesson={lesson} />
        </Layout>
      ) : (
        <Layout page="LESSON-DETAIL" isLessonOpen={isLessonOpen}>
          <Container
            maxW={isSmallScreen && isLessonOpen ? '100vw' : 'container.xl'}
            px={isSmallScreen ? '8px' : isLessonOpen ? '24px' : '0'}
            minH={
              isMediumScreen
                ? `calc(100vh - 146px${hideNavBar ? ' + 65px' : ''})`
                : 'default'
            }
            pb={isSmallScreen ? '0' : isLessonOpen ? '8px' : '0'}
          >
            <LessonDetail key={lesson.slug} lesson={lesson} />
          </Container>
        </Layout>
      )}
    </>
  )
}

export default LessonPage
