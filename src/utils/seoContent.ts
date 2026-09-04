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
import path from 'path'

import { DOMAIN_URL_, PROJECT_NAME } from 'constants/index'
import { LANGUAGE_CODES } from 'constants/languages'
import {
  ORGANIZATION_ID,
  organizationJsonLd,
  organizationRef,
  serializeJsonLd,
} from 'utils/jsonLd'

// Literal argument on purpose: Vercel's file tracer ships the directory with
// a function only when the path is statically analyzable, and this module is
// now also read at RUNTIME by /api/glossary-content (the /glossary.md mirror).
const KEYWORDS_DIR = path.resolve('translation/keywords')

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
export type GlossaryEntry = {
  /** English key: the stable id shared by every language's file. */
  key: string
  anchor: string
  term: string
  definition: string
}

/** Every glossary entry for a locale, sorted for display in that locale, or
 * null when the locale has no glossary file. Shared by the HTML body, the
 * DefinedTermSet JSON-LD and the /glossary.md mirror so they can never list
 * different terms. */
export const glossaryEntries = (locale: string): GlossaryEntry[] | null => {
  const en = readJson(path.join(KEYWORDS_DIR, 'en', 'keywords.json'))
  if (!en) return null
  const localized =
    locale === 'en'
      ? en
      : readJson(path.join(KEYWORDS_DIR, locale, 'keywords.json'))
  if (!localized) return null

  const items = Object.keys(en)
    .filter((k) => en[k].glossary && localized[k]?.definition)
    .map((k) => ({
      key: k,
      anchor: k
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, ''),
      term: localized[k].keyword || k,
      definition: localized[k].definition,
    }))
    .sort((a, b) => a.term.localeCompare(b.term, locale))
  return items.length ? items : null
}

export const glossarySeoHtml = (locale: string): string | null => {
  const items = glossaryEntries(locale)
  if (!items) return null
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

/** The glossary as a schema.org DefinedTermSet: one DefinedTerm per entry,
 * each pointing at its anchor on the page. The definitions ride along (that
 * is what an answer engine wants from a glossary): measured 69KB of JSON-LD,
 * 12KB gzipped, on a static CDN-cached page. */
export const glossaryJsonLd = (
  locale: string,
  pageUrl: string,
  title: string
): string | undefined => {
  const items = glossaryEntries(locale)
  if (!items) return undefined
  return serializeJsonLd({
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': pageUrl,
    name: title,
    url: pageUrl,
    inLanguage: locale,
    publisher: organizationRef(),
    hasDefinedTerm: items.map((i) => ({
      '@type': 'DefinedTerm',
      name: i.term,
      description: i.definition,
      url: `${pageUrl}#${i.anchor}`,
      inDefinedTermSet: pageUrl,
    })),
  })
}

/** Homepage graph: the Organization node everything else references by @id,
 * plus the WebSite. Emitted once, on / and its locale-prefixed copies. */
export const siteJsonLd = (lang: string): string =>
  serializeJsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      organizationJsonLd(),
      {
        '@type': 'WebSite',
        '@id': `${DOMAIN_URL_}/#website`,
        url: `${DOMAIN_URL_}${lang === 'en' ? '/' : `/${lang}`}`,
        name: PROJECT_NAME,
        description:
          'Free, open-source Web3 education for beginners, in 28 languages.',
        inLanguage: LANGUAGE_CODES,
        publisher: { '@id': ORGANIZATION_ID },
      },
    ],
  })
