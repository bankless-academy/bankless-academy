// Agent-facing text surfaces, generated from the same sources the site ships:
// /llms.txt (index), /llms-full.txt (every lesson inlined), /glossary.md.
// Server-only (fs) — imported by the API routes behind those URLs (the URL
// shapes themselves are next.config rewrites) and nothing client-side.
//
// Directory roots are literal `path.resolve` arguments ON PURPOSE: Vercel's
// file tracer only ships a directory with a function when the path is
// statically analyzable (the pattern /api/lesson-content already relies on).
import fs from 'fs'
import path from 'path'
import type { NextApiResponse } from 'next'

import { DOMAIN_URL_, KEYWORDS, LESSONS, PROJECT_NAME } from 'constants/index'
import { LANGUAGES, LanguageCode, localePath } from 'constants/languages'
import { LessonType } from 'entities/lesson'
import { CONTENT_SPLIT } from 'utils/lessonContent'
import { glossaryEntries } from 'utils/seoContent'

const LESSON_DIR = path.resolve('translation/lesson')
const WEBSITE_DIR = path.resolve('translation/website')

const readNamespace = (lang: string, ns: string): Record<string, string> => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(WEBSITE_DIR, lang, `${ns}.json`), 'utf8')
    )
  } catch {
    return {}
  }
}

const languageDef = (lang: LanguageCode) =>
  LANGUAGES.find((l) => l.code === lang)

/** Published lessons registered for `lang` (English: all published). */
export const activeLessons = (lang: LanguageCode): LessonType[] =>
  LESSONS.filter(
    (l: LessonType) =>
      l.publicationStatus === 'publish' &&
      (lang === 'en' || (l.languages || []).includes(lang as any))
  )

const absolute = (lang: LanguageCode, p: string) =>
  `${DOMAIN_URL_}${localePath(lang, p)}`

const summary = (lessons: number, handbooks: number) =>
  `Free, open-source Web3 education for beginners: ${lessons} interactive lessons and ${handbooks} handbooks on Bitcoin, Ethereum, wallets, security, DeFi and staking, published in ${LANGUAGES.length} languages. English is the canonical version; every translation is derived from it.`

/** /llms.txt per llmstxt.org: H1, blockquote, `##` sections of
 * `- [name](url): description` lines. Titles come from the language's
 * lesson.json so /fr/llms.txt reads in French. */
export const buildLlmsTxt = (lang: LanguageCode): string => {
  const names = lang === 'en' ? {} : readNamespace(lang, 'lesson')
  const tr = (s: string) => names[s] || s
  const active = activeLessons(lang)
  const lessons = active.filter((l) => !l.isArticle)
  const handbooks = active.filter((l) => l.isArticle)
  const item = (l: LessonType) =>
    `- [${tr(l.name)}](${absolute(lang, `/lessons/${l.slug}.md`)}): ${tr(
      l.description || ''
    )}`
  const language = languageDef(lang)
  const glossaryCount = Object.values(
    KEYWORDS as Record<string, { glossary?: boolean }>
  ).filter((k) => k?.glossary).length
  const others = LANGUAGES.filter((l) => l.code !== lang)
  const localizedNote =
    lang === 'en' || !language
      ? ''
      : `\nThis is the ${language.name} (${language.localName}) index: titles and descriptions are in ${language.name}, and the links return the ${language.name} translations. The canonical English index is ${DOMAIN_URL_}/llms.txt.\n`

  return `# ${PROJECT_NAME}

> ${summary(lessons.length, handbooks.length)}

Each lesson is written in Markdown, and every \`.md\` link below returns that source as \`text/markdown\`: frontmatter, slides, knowledge checks with the correct option marked \`[x]\`, and the feedback shown for each option. Drop the \`.md\` for the interactive page. Translations live behind a language prefix (\`/fr/lessons/<slug>.md\`, \`/fr/glossary.md\`, \`/fr/llms.txt\`; codes under Languages). Bankless Academy is an education project, not a protocol, exchange or financial institution, and gives no financial advice.
${localizedNote}
## Lessons

${lessons.map(item).join('\n')}

## Handbooks

${handbooks.map(item).join('\n')}

## Glossary

- [Glossary](${absolute(
    lang,
    '/glossary.md'
  )}): ${glossaryCount} Web3 terms with beginner-friendly definitions

## Full content

- [llms-full.txt](${absolute(
    lang,
    '/llms-full.txt'
  )}): every lesson and handbook above, inlined in one file

## Languages

${others
  .map(
    (l) =>
      `- [${l.localName}](${DOMAIN_URL_}${localePath(l.code, '/llms.txt')}): ${
        l.name
      }`
  )
  .join('\n')}

## API

- [Lessons API](${DOMAIN_URL_}/api/lessons): JSON for every lesson, with slides, quizzes and the page and Markdown URL of each language
- [Sitemap](${DOMAIN_URL_}/sitemap.xml): every page in every language, with hreflang alternates
- [RSS](${DOMAIN_URL_}/rss.xml): lesson feed

## Optional

- [AI content guidelines](${DOMAIN_URL_}/agent.txt): how to describe Bankless Academy accurately, brand voice, do's and don'ts
- [About](${DOMAIN_URL_}/about)
- [FAQ](${DOMAIN_URL_}/faq)
- [Source code](https://github.com/bankless-academy/bankless-academy): MIT-licensed, lessons included
`
}

const frontmatter = (raw: string, key: string): string | undefined =>
  raw.match(new RegExp(`^${key}: (.+)$`, 'm'))?.[1]?.trim()

/** The lesson body without frontmatter and the ASCII banner, with every
 * heading demoted one level so the per-lesson H1 added by the caller stays
 * the only top-level heading. */
const lessonBody = (raw: string): string => {
  const idx = raw.indexOf(CONTENT_SPLIT)
  const body = idx >= 0 ? raw.slice(idx + CONTENT_SPLIT.length) : raw
  return body.trim().replace(/^(#{1,5}) /gm, '#$1 ')
}

/** /llms-full.txt: the index's documents inlined, in their source Markdown. */
export const buildLlmsFull = (lang: LanguageCode): string => {
  const active = activeLessons(lang)
  const language = languageDef(lang)
  const docs = active.flatMap((l) => {
    const file = path.join(LESSON_DIR, lang, `${l.slug}.md`)
    if (!fs.existsSync(file)) return []
    const raw = fs.readFileSync(file, 'utf8')
    const meta = [
      `- Page: ${absolute(lang, `/lessons/${l.slug}`)}`,
      `- Markdown: ${absolute(lang, `/lessons/${l.slug}.md`)}`,
      `- Format: ${l.isArticle ? 'Handbook' : 'Lesson'}`,
      l.duration ? `- Duration: ${l.duration} minutes` : null,
      l.lessonWriters ? `- Writers: ${l.lessonWriters}` : null,
    ].filter(Boolean)
    return [
      `# ${frontmatter(raw, 'TITLE') || l.name}\n\n${
        frontmatter(raw, 'DESCRIPTION') || l.description || ''
      }\n\n${meta.join('\n')}\n\n${lessonBody(raw)}`,
    ]
  })
  const lessons = active.filter((l) => !l.isArticle).length
  const handbooks = active.length - lessons
  return `# ${PROJECT_NAME}: full content (${language?.name || lang})

> ${summary(lessons, handbooks)}

Index: ${absolute(lang, '/llms.txt')}. This file inlines the ${
    docs.length
  } documents listed there (${lessons} lessons, ${handbooks} handbooks) in their source Markdown. Knowledge-check options are \`- [ ]\` / \`- [x]\` (correct); the \`> ℹ️\` line under each option is the feedback learners see for it.

---

${docs.join('\n\n---\n\n')}
`
}

/** /glossary.md: the same entries the glossary page shows, one `##` per term.
 * Non-English files show the English key in parentheses where it differs,
 * so an agent can ground a translated term against the canonical one. */
export const buildGlossaryMd = (lang: LanguageCode): string | null => {
  const entries = glossaryEntries(lang)
  if (!entries) return null
  const language = languageDef(lang)
  const title =
    lang === 'en'
      ? 'Glossary'
      : readNamespace(lang, 'common')['Glossary'] ||
        `Glossary (${language?.localName || lang})`
  const pageUrl = absolute(lang, '/glossary')
  const canonicalNote =
    lang === 'en'
      ? ''
      : ` The English key follows each term in parentheses where it differs; the canonical English glossary is ${DOMAIN_URL_}/glossary.md.`
  return `# ${title}${lang === 'en' || !language ? '' : ` (${language.name})`}

> ${
    entries.length
  } Web3 terms with beginner-friendly definitions, from ${PROJECT_NAME}. Page: ${pageUrl} (each term is anchored at #<anchor>).${canonicalNote}

${entries
  .map(
    (e) =>
      `## ${e.term}${
        lang !== 'en' && e.key.toLowerCase() !== e.term.toLowerCase()
          ? ` (${e.key})`
          : ''
      }\n\n${e.definition}`
  )
  .join('\n\n')}
`
}

/** Text response with the caching every one of these surfaces wants: content
 * changes only on deploy, which invalidates the CDN. `X-Markdown-Tokens` is
 * the rough estimate agents use to budget a fetch. */
export const sendAgentText = (
  res: NextApiResponse,
  body: string,
  contentType: 'text/plain' | 'text/markdown'
): void => {
  res.setHeader('Content-Type', `${contentType}; charset=utf-8`)
  res.setHeader(
    'Cache-Control',
    'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
  )
  res.setHeader(
    'X-Markdown-Tokens',
    String(Math.ceil(Buffer.byteLength(body, 'utf8') / 4))
  )
  res.status(200).send(body)
}
