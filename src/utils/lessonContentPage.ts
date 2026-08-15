// Build-time data for the lesson content pages. Server-only (reads from disk);
// imported exclusively from getStaticProps/getStaticPaths so Next drops it from
// the client bundle.
import fs from 'fs'

import { LESSONS, DEFAULT_METADATA } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { LANGUAGE_CODES } from 'constants/languages'
import { buildArticle } from 'utils/lessonContent'

const mdPath = (lang: string, slug: string) =>
  `translation/lesson/${lang}/${slug}.md`

/**
 * The content page renders outside AppProvider and the i18next React context,
 * so UI strings are resolved from the translation files at build time instead.
 * Reuses existing keys: adding new ones would mean nine new translations for
 * two labels. English has no common.json by design and falls through to the key.
 */
const uiString = (lang: string, key: string): string => {
  if (lang === 'en') return key
  const p = `translation/website/${lang}/common.json`
  if (!fs.existsSync(p)) return key
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'))[key] || key
  } catch {
    return key
  }
}

const frontmatterValue = (md: string, key: string): string | undefined =>
  md.match(new RegExp(`^${key}: (.+)$`, 'm'))?.[1]?.trim()

export const lessonBySlug = (slug: string): LessonType | undefined =>
  LESSONS.find((l: LessonType) => l.slug === slug)

/**
 * Props for /lessons/<slug>/content and /lessons/<lang>/<slug>/content.
 *
 * `nolayout` + `ssr` route this through the branch of _app.tsx that renders the
 * page *outside* NonSSRWrapper. That is the entire point of the page: without
 * it the document reaches a crawler with 80 characters of text. Nothing in the
 * rendered tree may read localStorage or matchMedia — see LessonArticle.tsx.
 */
export const getContentPageProps = (lang: string, slug: string) => {
  const lesson = lessonBySlug(slug)
  if (!lesson) return { notFound: true as const }

  // Serve the translation only when the lesson actually registers it, so an
  // unregistered or stale file never becomes an indexable page.
  const isRegistered =
    lang === 'en' || (lesson.languages || []).includes(lang as any)
  const localized = mdPath(lang, slug)
  const usedLang = isRegistered && fs.existsSync(localized) ? lang : 'en'
  const path = mdPath(usedLang, slug)
  if (!fs.existsSync(path)) return { notFound: true as const }

  // A page whose only reason to exist is being crawlable is worse than absent
  // if it renders empty, so fail the build rather than publish a shell.
  const raw = fs.readFileSync(path, 'utf8')
  const { html: articleHtml, headings } = buildArticle(raw)
  if (!articleHtml) {
    throw new Error(
      `lesson content page: ${path} produced no article HTML (missing the \`\`\` + --- separator?)`
    )
  }

  // Prefer the translated frontmatter over the English lesson record, so the
  // localized page gets a localized <h1> and <title>.
  const name = frontmatterValue(raw, 'TITLE') || lesson.name
  const description =
    frontmatterValue(raw, 'DESCRIPTION') || lesson.description || ''

  const url =
    usedLang === 'en'
      ? `/lessons/${slug}/content`
      : `/lessons/${usedLang}/${slug}/content`

  return {
    props: {
      pageMeta: {
        // Distinct from the interactive lesson's metadata. They used to be
        // byte-identical, which left two indexable URLs competing on the same
        // title and description.
        // "Lesson Content:" already ships in all nine languages (it labelled
        // the old raw view), so the title localizes without a new key.
        // ja/zh use the full-width colon U+FF1A, which is a different
        // character from ASCII ':' and survives a naive strip.
        title: `${name} - ${uiString(usedLang, 'Lesson Content:').replace(
          /[\s:\uFF1A]+$/,
          ''
        )}`,
        description,
        image: lesson.socialImageLink || DEFAULT_METADATA.image,
        nolayout: true,
        ssr: true,
        // Deprecated lessons are kept reachable by direct URL but excluded
        // from listings, rss and the sitemap. Server-rendering their prose
        // would newly expose the full text of unmaintained material to search,
        // which the old client-only view never did, so keep them out.
        noindex: lesson.publicationStatus === 'deprecated',
        canonical: url,
        lesson: { ...lesson, name, description },
        articleHtml,
        headings,
        lang: usedLang,
        strings: {
          startLesson: uiString(usedLang, 'Start Lesson'),
          deprecated:
            lesson.publicationStatus === 'deprecated'
              ? uiString(
                  usedLang,
                  'This lesson is no longer maintained and is kept for historical reference. Some of its content may be outdated.'
                )
              : '',
          contents: uiString(usedLang, 'Lesson Content:').replace(
            /[\s:\uFF1A]+$/,
            ''
          ),
        },
      },
    },
  }
}

/** Paths for the English route (`/lessons/<slug>/content`). */
export const englishContentPaths = () =>
  LESSONS.map((lesson: LessonType) => ({ params: { slug: lesson.slug } }))

/** Paths for the localized route (`/lessons/<lang>/<slug>/content`). */
export const localizedContentPaths = () => {
  const paths: { params: { lang: string; slug: string } }[] = []
  for (const lesson of LESSONS as LessonType[]) {
    for (const lang of lesson.languages || []) {
      if (lang === 'en' || !LANGUAGE_CODES.includes(lang as any)) continue
      if (fs.existsSync(mdPath(lang, lesson.slug)))
        paths.push({ params: { lang, slug: lesson.slug } })
    }
  }
  return paths
}
