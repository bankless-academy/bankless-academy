// Build-time crawlable content for pages whose interactive view is
// client-rendered (glossary body, homepage/listing link blocks). Server-only
// (fs) — import exclusively from getStaticProps so it stays out of the
// client bundle. Rendered by _app.tsx as SeoContentBlock (outside
// <Web3Providers>), which unmounts once the app arrives: the app then shows
// the same content interactively.
import fs from 'fs'

import { LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { localePath } from 'constants/languages'

const esc = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const readJson = (path: string): { [k: string]: any } | null => {
  try {
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  } catch {
    return null
  }
}

/** Website-namespace string for a locale; falls through to the English key
 * (same convention as the runtime: en has no files by design). */
export const uiString = (locale: string, ns: string, key: string): string => {
  if (locale === 'en') return key
  const j = readJson(`translation/website/${locale}/${ns}.json`)
  return (j && j[key]) || key
}

/**
 * The glossary as crawlable HTML: every entry the interactive page shows
 * (same `glossary` flag filter, read from the canonical English file — the
 * translated files carry display forms and definitions, keyed by the English
 * term). Terms get stable anchors derived from the English key, identical
 * across languages. Returns null when the locale has no glossary file.
 */
export const glossarySeoHtml = (locale: string): string | null => {
  const en = readJson('translation/keywords/en/keywords.json')
  if (!en) return null
  const localized =
    locale === 'en'
      ? en
      : readJson(`translation/keywords/${locale}/keywords.json`)
  if (!localized) return null

  const items = Object.keys(en)
    .filter((k) => en[k].glossary && localized[k]?.definition)
    .map((k) => ({
      anchor: k
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, ''),
      term: localized[k].keyword || k,
      definition: localized[k].definition,
    }))
    .sort((a, b) => a.term.localeCompare(b.term, locale))

  if (!items.length) return null
  return (
    '<dl>' +
    items
      .map(
        (i) =>
          `<dt id="${i.anchor}">${esc(i.term)}</dt><dd>${esc(
            i.definition
          )}</dd>`
      )
      .join('') +
    '</dl>'
  )
}

/**
 * Published lessons as a crawlable link list, localized: names/descriptions
 * from translation/website/<locale>/lesson.json (keyed by the English
 * string), hrefs locale-prefixed only where the lesson's translation exists
 * (a localized URL without a translation would 404).
 */
export const lessonListSeoHtml = (
  locale: string,
  kind: 'all' | 'lessons' | 'handbooks'
): string => {
  const names =
    locale === 'en'
      ? {}
      : readJson(`translation/website/${locale}/lesson.json`) || {}
  const published = (LESSONS as LessonType[])
    .filter((l) => l.publicationStatus === 'publish')
    .filter((l) =>
      kind === 'all' ? true : kind === 'handbooks' ? l.isArticle : !l.isArticle
    )
  const items = published.map((l) => {
    const translated =
      locale !== 'en' && ((l.languages || []) as string[]).includes(locale)
    const href = translated
      ? localePath(locale, `/lessons/${l.slug}`)
      : `/lessons/${l.slug}`
    const name = (names as any)[l.name] || l.name
    const description = (names as any)[l.description] || l.description || ''
    return `<li><a href="${href}">${esc(name)}</a>${
      description ? `: ${esc(description)}` : ''
    }</li>`
  })
  return `<ul>${items.join('')}</ul>`
}
