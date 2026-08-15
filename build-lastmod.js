/* eslint-disable no-console */
// Emit a real last-modified date per lesson markdown file, for the sitemap.
//
// The sitemap used the lesson's `publicationDate`, so every URL advertised a
// date up to two years stale — `/lessons/intro-to-defi` said 2022-02-11 when
// the file was rewritten 2026-08-08, and translated URLs inherited the ENGLISH
// publication date, so a French file written yesterday claimed 2022. Right
// after a full content rewrite that told crawlers nothing had changed.
//
// Dates come from git (the commit that last touched each file), which is the
// only accurate signal available: a Vercel build clones fresh, so filesystem
// mtimes are all build time and useless.
//
// Runs as part of `yarn build`, before `next build`. The output is committed so
// the value is present even if git is unavailable; the sitemap falls back to
// publicationDate per URL if a date is missing, so a stale or absent manifest
// degrades to today's behaviour rather than breaking.
import { execFileSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const OUT = 'translation/.lastmod.json'
const ROOT = 'translation/lesson'

const gitDate = (file) => {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    return out ? out.slice(0, 10) : null
  } catch {
    return null // no git (or file never committed) -> sitemap falls back
  }
}

const manifest = {}
let missing = 0

for (const lang of fs.readdirSync(ROOT)) {
  const dir = path.join(ROOT, lang)
  if (!fs.statSync(dir).isDirectory()) continue
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue
    const slug = file.replace(/\.md$/, '')
    const date = gitDate(path.join(dir, file))
    if (!date) {
      missing++
      continue
    }
    manifest[`${lang}/${slug}`] = date
  }
}

const existing = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : ''
const next = `${JSON.stringify(manifest, null, 2)}\n`
if (existing !== next) fs.writeFileSync(OUT, next)

const dates = Object.values(manifest).sort()
console.log(
  `lastmod manifest: ${Object.keys(manifest).length} files ` +
    `(${dates[0]} .. ${dates[dates.length - 1]})` +
    (missing ? `, ${missing} without a git date (will fall back)` : '')
)
