/* eslint-disable no-console */
import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'

import { DOMAIN_URL, GENERIC_ERROR_MESSAGE, LESSONS } from 'constants/index'
import { lessonLink } from 'utils'
import { LANGUAGES, LANGUAGE_CODES } from 'constants/languages'

// Real per-file dates from git, emitted by build-lastmod.js at build time.
// Absent or partial is fine: each URL falls back to the lesson's
// publicationDate, which is what the sitemap used to advertise everywhere.
const LASTMOD: { [key: string]: string } = (() => {
  try {
    return JSON.parse(fs.readFileSync('translation/.lastmod.json', 'utf8'))
  } catch {
    return {}
  }
})()

// Languages that actually have a glossary to show. A language enters the
// registry (LANGUAGES) as soon as we start a translation wave for it, which is
// well before any of its content exists — hi/id/vi were registered with zero
// keywords, and mapping the registry straight into the sitemap submitted
// /glossary/hi|id|vi to Google as three more copies of the English glossary.
// Register a language freely; it reaches the sitemap when its content lands.
const GLOSSARY_LANGUAGES = LANGUAGES.filter(
  (l) =>
    l.code !== 'en' &&
    fs.existsSync(`translation/keywords/${l.code}/keywords.json`)
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    // A sitemap is an <urlset>, not a feed. This endpoint used to return
    // `feed.rss2()` — valid RSS, but Google treats RSS as a degraded sitemap
    // format: no <lastmod>, no hreflang annotations, and robots.txt points
    // here as `Sitemap:`. /api/rss remains the actual feed.
    type Alt = { hreflang: string; href: string }
    type Url = { loc: string; lastmod?: string; alternates?: Alt[] }
    const urls: Url[] = []

    let newest = 0
    const publishedLessons = LESSONS.filter(
      (l) => l.publicationStatus === 'publish'
    ).sort((a, b) => (a.publicationDate > b.publicationDate ? -1 : 1))

    for (const lesson of publishedLessons) {
      const date = new Date(lesson.publicationDate)
      const published = date.toISOString().slice(0, 10)
      // Per LANGUAGE, not per lesson: a translated file has its own edit date,
      // and inheriting the English publication date is what made every
      // localized URL advertise a date up to two years stale.
      const lastmodFor = (language: string) =>
        LASTMOD[`${language}/${lesson.slug}`] || published
      if (date.getTime() > newest) newest = date.getTime()

      // Only languages whose markdown is actually on disk; `languages[]` and
      // the files are kept in sync by validate-content.js, but a sitemap that
      // lists a 404 is worse than one that omits a page.
      const langs = (lesson.languages || []).filter(
        (language) =>
          language !== 'en' &&
          fs.existsSync(`translation/lesson/${language}/${lesson.slug}.md`)
      )

      const enLink = lessonLink(lesson)
      // Locale-prefixed URLs: /<lang>/lessons/<slug>
      const localized = (language: string) =>
        `${DOMAIN_URL}/${language}/lessons/${lesson.slug}`

      // One URL per lesson per language. (The /content mirrors are retired —
      // the lesson URL itself carries the article server-side and the mirrors
      // 301 there.)
      const cluster: Alt[] = [
        { hreflang: 'x-default', href: enLink },
        { hreflang: 'en', href: enLink },
        ...langs.map((language) => ({
          hreflang: language,
          href: localized(language),
        })),
      ]
      urls.push({
        loc: enLink,
        lastmod: lastmodFor('en'),
        alternates: cluster,
      })
      for (const language of langs)
        urls.push({
          loc: localized(language),
          lastmod: lastmodFor(language),
          alternates: cluster,
        })
    }

    // The shell pages (homepage, listings, glossary) change whenever a lesson
    // does, so their <lastmod> is the newest lesson FILE date, not the newest
    // publication date: every lesson was rewritten in 2026-08 while the newest
    // publicationDate stayed 2024-09-10, which is what this used to advertise.
    for (const d of Object.values(LASTMOD)) {
      const t = Date.parse(d as string)
      if (t > newest) newest = t
    }
    const siteLastmod = new Date(newest || Date.now())
      .toISOString()
      .slice(0, 10)
    // Localized copies of the shell pages, each group with its hreflang
    // cluster. Google indexes these per language (URL Inspection, 2026-09-07:
    // 67 of 81 indexed) but had never crawled 10 of them — the language
    // selector that links to them is client-rendered, so the sitemap is their
    // only server-side discovery. UI translations exist for every registry
    // language, so the gate is the namespace file, not the registry.
    const uiLanguages = LANGUAGE_CODES.filter(
      (l) => l !== 'en' && fs.existsSync(`translation/website/${l}/common.json`)
    )
    const clustered = (path: string, langs: string[]) => {
      const cluster: Alt[] = [
        { hreflang: 'x-default', href: `${DOMAIN_URL}${path}` },
        { hreflang: 'en', href: `${DOMAIN_URL}${path}` },
        ...langs.map((l) => ({
          hreflang: l,
          href: `${DOMAIN_URL}/${l}${path === '/' ? '' : path}`,
        })),
      ]
      urls.push({
        loc: `${DOMAIN_URL}${path}`,
        lastmod: siteLastmod,
        alternates: cluster,
      })
      for (const l of langs)
        urls.push({
          loc: `${DOMAIN_URL}/${l}${path === '/' ? '' : path}`,
          lastmod: siteLastmod,
          alternates: cluster,
        })
    }
    clustered('/', uiLanguages)
    clustered('/lessons', uiLanguages)
    clustered('/lessons/handbook', uiLanguages)
    clustered(
      '/glossary',
      GLOSSARY_LANGUAGES.map((l) => l.code)
    )

    const staticPaths = [
      '/faq',
      '/onchain-summer-challenge',
      '/explore',
      // Indexable and self-canonical, but were absent from the sitemap.
      // (/start, /mobile, /newsletter, /mini-apps canonicalize to '/', so
      // their absence is correct and they stay out.)
      '/leaderboard',
      '/feedback',
    ]
    for (const p of staticPaths)
      urls.push({ loc: `${DOMAIN_URL}${p}`, lastmod: siteLastmod })

    const esc = (u: string) =>
      u
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')

    const body = urls
      .map(
        (u) =>
          `  <url>\n    <loc>${esc(u.loc)}</loc>\n` +
          (u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : '') +
          (u.alternates || [])
            .map(
              (a) =>
                `    <xhtml:link rel="alternate" hreflang="${
                  a.hreflang
                }" href="${esc(a.href)}"/>\n`
            )
            .join('') +
          `  </url>`
      )
      .join('\n')

    const xml =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ` +
      `xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`

    res.setHeader('Content-Type', 'application/xml; charset=utf-8')
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400')
    return res.status(200).send(xml)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
