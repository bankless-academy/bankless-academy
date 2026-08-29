// Build-time crawlable content for the GLOSSARY, whose interactive view is
// client-rendered. Server-only (fs) — import exclusively from getStaticProps
// so it stays out of the client bundle. Rendered by _app.tsx as
// SeoContentBlock (outside <Web3Providers>), which unmounts once the app
// arrives: the app then shows the same content interactively.
//
// This module also built crawlable lesson-link lists for the homepage and the
// two listings until 2026-08-29. They were removed, and the helpers with them:
// the block is VISIBLE until the app mounts (~1s on a fast connection, ~7s on
// Fast 3G), which is a poor first impression for a list of links that the
// sitemap already gives Google. The glossary keeps its block because there the
// block IS the page's content, not a duplicate of it.
import fs from 'fs'


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
