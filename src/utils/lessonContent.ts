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

// `linkify` is deliberately OFF, matching content-lib.js which compiles the
// real lessons. With it on, this mirror autolinked bare domains written as
// prose — "if you own a website like web3explorer.com" became a live link to
// an unowned domain on 10 pages.
const md = new MarkdownIt({ html: true })

/** Strip the answer key so the content page is not a cheat sheet. */
const hideQuizAnswers = (text: string): string =>
  text
    .split('\n')
    // Per-option feedback ("> ℹ️ Correct! …") names the right answer outright.
    // Match the ℹ️ marker, NOT every blockquote: this filter used to drop any
    // line starting with "> ", which silently deleted the "Key Takeaways"
    // blockquote from all 9 articles in all 10 locales (110 blockquotes across
    // 80 pages) — the very pages the sitemap fix had just made indexable.
    .filter((line) => !line.trim().startsWith('> ℹ️'))
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

// Letters that carry no Unicode decomposition, so NFD cannot reduce them to
// ASCII. Turkish dotless ı is the one that actually bites us; the rest are
// cheap insurance for future languages.
const NON_DECOMPOSABLE: { [ch: string]: string } = {
  ı: 'i',
  ø: 'o',
  ł: 'l',
  ß: 'ss',
  đ: 'd',
  æ: 'ae',
  œ: 'oe',
  ð: 'd',
  þ: 'th',
}

/**
 * A readable anchor where the script allows one, a positional fallback where it
 * does not. Japanese and Chinese headings are entirely non-ASCII, so slugifying
 * them yields an empty string and every anchor would collide.
 *
 * Accents must be folded first. `\p{L}` matches `é`, so it survived into the
 * slug and then failed the ASCII test below — which silently sent most Latin
 * non-English headings to a positional anchor (fr 12/22, tr 13/22, pt-br 10/22
 * on wallet-basics). NFD splits `é` into `e` + a combining mark we can strip;
 * `\p{M}` is the combining-mark class.
 */
const headingId = (text: string, index: number): string => {
  const folded = [...text.toLowerCase()]
    .map((ch) => NON_DECOMPOSABLE[ch] ?? ch)
    .join('')
    .normalize('NFD')
    .replace(/\p{M}+/gu, '')
  const slug = folded
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
  rawMd?: string | null,
  // Translated label for the quiz headings. The md stores them as the English
  // identifier `Knowledge Check <n>` (build-content.js reads it), and the
  // interactive lesson renders its own translated label — but this page prints
  // the raw heading, so every localized content page showed ~8 English
  // headings. Translating here keeps the md identifier untouched.
  knowledgeCheckLabel?: string
): { html: string; headings: ArticleHeading[] } => {
  const empty = { html: '', headings: [] }
  if (!rawMd || rawMd[0] === '<') return empty
  const body = rawMd.split(CONTENT_SPLIT)[1]
  if (!body?.trim()) return empty

  let html = md.render(localizeImages(demoteHeadings(hideQuizAnswers(body))))

  // Anchor every top-level section so the contents nav can link into it, and
  // so other pages can deep-link a single concept.
  //
  // Which tag is "top level" differs by format: lessons author slides as `#`
  // (demoted to h2), articles author sections as `##` (demoted to h3). Keying
  // on h2 alone left all 80 article content pages with no anchors and an empty
  // table of contents.
  const topTag = html.includes('<h2>') ? 'h2' : 'h3'
  const headings: ArticleHeading[] = []
  const headingRe = new RegExp(`<${topTag}>([\\s\\S]*?)</${topTag}>`, 'g')
  html = html.replace(headingRe, (_m, inner) => {
    // Text is harvested from already-rendered HTML, so entities are still
    // encoded; React would escape them a second time and the reader would see
    // a literal "&amp;" in the contents nav.
    let text = String(inner)
      .replace(/<[^>]*>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim()
    if (knowledgeCheckLabel) {
      const localized = text.replace(
        /^Knowledge Check(\s+\d+)?$/,
        (_x, n) => `${knowledgeCheckLabel}${n || ''}`
      )
      if (localized !== text) {
        inner = localized
        text = localized
      }
    }
    const id = headingId(text, headings.length)
    headings.push({ id, text })
    return `<${topTag} id="${id}">${inner}</${topTag}>`
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
