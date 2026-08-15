// Lesson "content" pages: /lessons/<slug>/content and /lessons/<lang>/<slug>/content.
//
// These exist for one reason: the interactive lesson is a client-rendered
// slideshow, so a crawler sees nothing. The content page is meant to be the
// readable, indexable mirror of the same material.
//
// It was not doing that job. The markdown was fetched into state in a
// useEffect and then passed through `hljs.highlight(md, 'markdown')`, so the
// page shipped a syntax-highlighted *source dump* with no headings, and only
// after JS ran. Measured against production, the whole document carried 80
// characters of crawlable text: "You need to enable JavaScript to run this
// app." Google indexed the URLs and none of the prose.
//
// So the markdown is rendered to semantic HTML here, at build time, and the
// page opts out of the app-wide NonSSRWrapper via `nolayout` + `ssr` (the same
// escape hatch /onchain-summer-challenge and /quiz/[id] already use).
import MarkdownIt from 'markdown-it'

import { LessonType } from 'entities/lesson'
import { LANGUAGES } from 'constants/languages'

// Frontmatter + the ASCII banner sit above this marker. Everything above it is
// metadata and decoration; none of it belongs in an article.
export const CONTENT_SPLIT = '```\n\n---'

const md = new MarkdownIt({ html: true, linkify: true })

/** Strip the answer key so the content page is not a cheat sheet. */
const hideQuizAnswers = (text: string): string =>
  text
    .split('\n')
    // per-option feedback ("> ℹ️ Correct! …") names the right answer outright
    .filter((line) => !line.trim().startsWith('> '))
    .join('\n')
    // and the checkbox marks it
    .replaceAll('- [x] ', '- [ ] ')
    .replace(/\n{3,}/g, '\n\n')

/**
 * Slides are authored as `# Slide Title`, i.e. an h1 each. A document with
 * twenty h1s has no heading structure at all, so every level is pushed down
 * one and the page supplies the single h1 (the lesson name) itself.
 */
const demoteHeadings = (text: string): string =>
  text.replace(/^(#{1,5}) /gm, '$1# ')

/** Author-facing absolute URLs compile to site-relative ones, as in build-content.js. */
const localizeImages = (text: string): string =>
  text.replaceAll('https://app.banklessacademy.com/images/', '/images/')

export interface ArticleHeading {
  id: string
  text: string
}

/**
 * A readable anchor where the script allows one, a positional fallback where it
 * does not. Japanese and Chinese headings are entirely non-ASCII, so slugifying
 * them yields an empty string and every anchor would collide.
 */
const headingId = (text: string, index: number): string => {
  const slug = text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '')
  return /^[a-z0-9-]+$/.test(slug) && slug ? slug : `section-${index + 1}`
}

/**
 * Raw lesson markdown -> semantic HTML plus the heading list for a contents
 * nav. Returns empty html when there is no usable markdown, so callers can
 * fail loudly rather than publish a shell.
 */
export const buildArticle = (
  rawMd?: string | null
): { html: string; headings: ArticleHeading[] } => {
  const empty = { html: '', headings: [] }
  if (!rawMd || rawMd[0] === '<') return empty
  const body = rawMd.split(CONTENT_SPLIT)[1]
  if (!body?.trim()) return empty

  let html = md.render(localizeImages(demoteHeadings(hideQuizAnswers(body))))

  // Anchor every top-level section so the contents nav can link into it, and
  // so other pages can deep-link a single concept.
  const headings: ArticleHeading[] = []
  html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner) => {
    const text = String(inner).replace(/<[^>]*>/g, '').trim()
    const id = headingId(text, headings.length)
    headings.push({ id, text })
    return `<h2 id="${id}">${inner}</h2>`
  })
  return { html, headings }
}

/**
 * The lesson's own languages, as links to the *content* variant.
 * The site-wide hreflang builder in Head.tsx points at `/lessons/<lang>/<slug>`,
 * which on a content page is a different page type that does not reciprocate —
 * hreflang requires both ends to agree, so those annotations are discarded.
 */
export const contentAlternates = (
  lesson: LessonType
): { hreflang: string; href: string; label: string }[] => {
  const slug = lesson.slug
  const langs = (lesson.languages || []).filter((l) => l !== 'en')
  return [
    { hreflang: 'en', href: `/lessons/${slug}/content`, label: 'English' },
    ...langs.map((l) => ({
      hreflang: l,
      href: `/lessons/${l}/${slug}/content`,
      label: LANGUAGES.find((x) => x.code === l)?.localName || l,
    })),
  ]
}

/** JSON-LD so the page is understood as an article, not an app screen. */
export const articleJsonLd = (
  lesson: LessonType,
  url: string,
  lang: string
): string =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: lesson.name,
    description: lesson.description,
    inLanguage: lang,
    url,
    learningResourceType: lesson.isArticle ? 'Handbook' : 'Lesson',
    educationalLevel: 'Beginner',
    isAccessibleForFree: true,
    provider: {
      '@type': 'Organization',
      name: 'Bankless Academy',
      url: 'https://app.banklessacademy.com',
    },
  })
