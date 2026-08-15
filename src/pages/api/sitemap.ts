/* eslint-disable no-console */
import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'

import { DOMAIN_URL, GENERIC_ERROR_MESSAGE, LESSONS } from 'constants/index'
import { lessonLink } from 'utils'
import { LANGUAGES } from 'constants/languages'

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
      const localized = (language: string) =>
        enLink.replace('/lessons/', `/lessons/${language}/`)

      // The content page exists for articles too. It used to be skipped with
      // `if (!lesson?.isArticle)`, which left all 8 published articles x 10
      // locales — 80 indexable URLs — out of the sitemap entirely.
      for (const suffix of ['', '/content']) {
        const cluster: Alt[] = [
          { hreflang: 'x-default', href: `${enLink}${suffix}` },
          { hreflang: 'en', href: `${enLink}${suffix}` },
          ...langs.map((language) => ({
            hreflang: language,
            href: `${localized(language)}${suffix}`,
          })),
        ]
        urls.push({
          loc: `${enLink}${suffix}`,
          lastmod: lastmodFor('en'),
          alternates: cluster,
        })
        for (const language of langs)
          urls.push({
            loc: `${localized(language)}${suffix}`,
            lastmod: lastmodFor(language),
            alternates: cluster,
          })
      }
    }

    const siteLastmod = new Date(newest || Date.now())
      .toISOString()
      .slice(0, 10)
    const staticPaths = [
      '/',
      '/lessons',
      '/faq',
      '/glossary',
      ...LANGUAGES.filter((l) => l.code !== 'en').map(
        (l) => `/glossary/${l.code}`
      ),
      '/onchain-summer-challenge',
      '/explore',
      // Indexable and self-canonical, but were absent from the sitemap.
      // (/start, /mobile, /newsletter, /mini-apps canonicalize to '/', so
      // their absence is correct and they stay out.)
      '/lessons/handbook',
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
