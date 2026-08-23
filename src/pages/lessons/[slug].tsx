/* eslint-disable no-console */
// /lessons/<slug> (en) and /<lang>/lessons/<slug> (localized, via the i18n
// locale prefix). Replaced the old [...slug].tsx catch-all when the language
// moved out of the path segments and into the Next.js locale — the URL shape
// is structural now, so the old validShape machinery is gone with it.
//
// This page is a NORMAL app page (default _app branch, providers and nav stay
// mounted across navigation). Its SEO surface — hero + full quiz-stripped
// article — is carried in pageMeta (articleHtml/headings/jsonLd) and rendered
// by _app.tsx as LessonSeoBlock, OUTSIDE <Web3Providers>, which is what puts
// it in the server HTML.
import { GetStaticPaths, GetStaticProps } from 'next'
import { Container } from '@chakra-ui/react'
import fs from 'fs'

import { MetaData } from 'components/Head'
import LessonDetail from 'components/LessonDetail'
import LessonSeoArticle from 'components/LessonSeoArticle'
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
  isRtlLang,
  localePath,
  normalizeLangCode,
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

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const rawSlug = params.slug as string
  const isDatadisk = rawSlug.endsWith('-datadisk')
  const slug = rawSlug.replace('-datadisk', '')
  const language = locale || 'en'

  const currentLessonMatch = LESSONS.find(
    (lesson: LessonType) => lesson.slug === slug
  )
  if (!currentLessonMatch) return { notFound: true }

  // `-datadisk` is only a real page for lessons that have a collectible, and
  // only in English — the collectible flow itself is not localized.
  if (isDatadisk && (!currentLessonMatch.hasCollectible || language !== 'en'))
    return { notFound: true }

  // A localized URL must serve that translation. When the language is not
  // registered for this lesson (or its file is missing), the URL does not
  // exist — serving the English lesson at /fr/... would give Google the same
  // document at two URLs.
  if (
    language !== 'en' &&
    (!(currentLessonMatch.languages as any)?.includes(language) ||
      !fs.existsSync(`translation/lesson/${language}/${slug}.md`))
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
      language !== 'en' &&
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

  // The full lesson text, server-rendered below the interactive island so the
  // lesson URL itself carries the prose for crawlers (the slideshow mounts
  // only the current slide, client-side). Deprecated lessons stay island-only:
  // server-rendering their prose would newly expose unmaintained material.
  const { buildLessonArticleProps } = await import('utils/lessonContentPage')
  const { articleJsonLd } = await import('utils/lessonContent')
  const article =
    currentLesson.publicationStatus === 'deprecated'
      ? null
      : buildLessonArticleProps(language, slug)
  const jsonLd = articleJsonLd(
    currentLesson,
    `https://app.banklessacademy.com${localePath(
      language,
      `/lessons/${slug}`
    )}`,
    language
  )

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
    // Consumed by _app.tsx (LessonSeoBlock): the server-rendered SEO surface.
    articleHtml: article?.articleHtml || null,
    headings: article?.headings || [],
    lang: language,
    strings: {
      contents: article?.contentsLabel || '',
      startLesson: article?.startLessonLabel || 'Start Lesson',
    },
    jsonLd,
    // Deprecated lessons are excluded from listings, rss and the sitemap, but
    // stay reachable by direct URL; noindex keeps the unmaintained material
    // out of search through any inbound link.
    noindex: currentLesson.publicationStatus === 'deprecated',
  }
  return {
    props: { pageMeta },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = []
  for (const lesson of LESSONS) {
    paths.push({ params: { slug: lesson.slug }, locale: 'en' })
    // /content is served by pages/lessons/[slug]/content.tsx (server-rendered);
    // generating it here too would produce the same URL from two routes.
    if (lesson.lessonCollectibleGif)
      paths.push({
        params: { slug: `${lesson.slug}-datadisk` },
        locale: 'en',
      })
    if (lesson.languages) {
      for (const lang of lesson.languages) {
        if (fs.existsSync(`translation/lesson/${lang}/${lesson.slug}.md`))
          paths.push({ params: { slug: lesson.slug }, locale: lang })
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

const LessonPage = ({ pageMeta }: { pageMeta: MetaData }): JSX.Element => {
  const [isSmallScreen, isMediumScreen] = useSmallScreen()
  const lesson = pageMeta?.lesson
  const { openLessons, hideNavBar } = useApp()

  const router = useRouter()
  // The locale IS the language now — no path parsing.
  const lang = normalizeLangCode(router.locale)

  const isLessonOpen = lesson?.slug && openLessons.includes(lesson.slug)

  // A corrective redirect must REPLACE, never push, so Back is not trapped on
  // the bad URL. Only reachable via the getStaticProps English-fallback path
  // (a registered translation whose md failed to parse).
  const wrongLanguage = !!lesson && lang !== 'en' && lang !== lesson?.lang
  useEffect(() => {
    if (!lesson) {
      router.replace('/lessons')
    } else if (wrongLanguage) {
      router.replace(`/lessons/${lesson.slug}`, undefined, { locale: 'en' })
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
    router.replace(router.asPath, undefined, { locale: browserLang })
  }, [lesson, wrongLanguage, lang, router])

  if (!lesson || wrongLanguage) return null

  // The reading panel lives INSIDE the app layout (below the lesson, above
  // the floating chrome), so the lesson background effect encloses it — as a
  // sibling section it kept cutting the gradient/glow at the layout boundary.
  // Hidden while the slideshow is open; handbooks skip it entirely (the app
  // view IS this content). Crawlers never see this copy — theirs is the
  // pre-mount one in LessonSeoBlock.
  const readingPanel = !lesson.isArticle &&
    pageMeta.articleHtml &&
    !isLessonOpen && (
      <LessonSeoArticle
        articleHtml={pageMeta.articleHtml}
        headings={pageMeta.headings || []}
        lang={lang}
        dir={isRtlLang(lang) ? 'rtl' : 'ltr'}
        contentsLabel={pageMeta.strings?.contents || ''}
        startLessonLabel={pageMeta.strings?.startLesson || 'Start Lesson'}
        lesson={lesson}
        inApp
      />
    )

  return (
    <>
      {lesson.isArticle ? (
        <Layout page="ARTICLE">
          <Article lesson={lesson} />
        </Layout>
      ) : (
        <Layout page="LESSON-DETAIL" isLessonOpen={isLessonOpen}>
          <>
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
            {readingPanel}
          </>
        </Layout>
      )}
    </>
  )
}

export default LessonPage
