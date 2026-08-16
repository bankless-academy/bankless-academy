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
//
// IMPORTANT — why this refuses to write on Vercel: Vercel checks out a SHALLOW
// clone (depth 1). `git log -1 -- <file>` then finds exactly one commit for
// every file, so all 204 files came back with the deploy date and the sitemap
// told crawlers all 380 lesson URLs changed on every single deploy. That is
// worse than having no manifest, because git SUCCEEDS — the per-URL fallback to
// publicationDate never fires, it just reports a confident wrong answer, and a
// <lastmod> that always equals build time is what makes Google stop trusting
// <lastmod> site-wide. The committed manifest is the source of truth in any
// checkout that cannot do better; this script only refreshes it where the full
// history is actually present.
import { execFileSync } from 'child_process'
import fs from 'fs'
import path from 'path'

const OUT = 'translation/.lastmod.json'
const ROOT = 'translation/lesson'

const git = (args) => {
  try {
    return execFileSync('git', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
  } catch {
    return null
  }
}

// Bail out before touching the file if this checkout cannot produce real dates.
const inRepo = git(['rev-parse', '--is-inside-work-tree']) === 'true'
const isShallow = git(['rev-parse', '--is-shallow-repository']) === 'true'
if (!inRepo || isShallow) {
  const n = fs.existsSync(OUT)
    ? Object.keys(JSON.parse(fs.readFileSync(OUT, 'utf8'))).length
    : 0
  console.log(
    `lastmod manifest: keeping the committed ${n} entries ` +
      `(${isShallow ? 'shallow clone' : 'no git repo'} cannot date files)`
  )
  process.exit(0)
}

const gitDate = (file) => {
  // null = git has never seen this file (new, uncommitted)
  const out = git(['log', '-1', '--format=%cI', '--', file])
  return out ? out.slice(0, 10) : null
}

// A file git cannot date is one being ADDED in the commit about to be made, so
// the honest answer is "today", not "unknown".
//
// This used to `continue`, dropping the file from the manifest entirely. That
// looked harmless — the sitemap falls back to publicationDate per URL — but for
// a TRANSLATED file that fallback is the ENGLISH lesson's publication date,
// which is routinely years stale, and the omission was permanent: nothing ever
// revisited a file once it had been skipped. Because `git log` cannot see a
// staged file, the only way to fill the gap was to re-run this script AFTER
// committing and amend, which is a ritual nobody remembers. It was missed on
// two consecutive language waves, leaving 171 files across 9 languages with no
// <lastmod> at all.
//
// Dating them "today" instead makes the manifest complete at generation time,
// so adding lessons is a single ordinary commit: write the files, build, commit
// everything together. The next run after that commit resolves the entry to the
// real commit date.
const TODAY = new Date().toISOString().slice(0, 10)

const manifest = {}
let added = 0

for (const lang of fs.readdirSync(ROOT)) {
  const dir = path.join(ROOT, lang)
  if (!fs.statSync(dir).isDirectory()) continue
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.md')) continue
    const slug = file.replace(/\.md$/, '')
    const date = gitDate(path.join(dir, file))
    if (!date) added++
    manifest[`${lang}/${slug}`] = date || TODAY
  }
}

const existing = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : ''
const prevCount = existing ? Object.keys(JSON.parse(existing)).length : 0
const dates = Object.values(manifest).sort()

// Never trade a good manifest for a worse one. A checkout that is a repo and
// not shallow can still be missing history (a grafted/filtered clone, a fresh
// `git init`), which would silently replace real dates with an empty object.
if (Object.keys(manifest).length < prevCount) {
  console.log(
    `lastmod manifest: keeping the committed ${prevCount} entries ` +
      `(this checkout could only date ${Object.keys(manifest).length})`
  )
  process.exit(0)
}

const next = `${JSON.stringify(manifest, null, 2)}\n`
if (existing !== next) fs.writeFileSync(OUT, next)

console.log(
  `lastmod manifest: ${Object.keys(manifest).length} files ` +
    `(${dates[0]} .. ${dates[dates.length - 1]})` +
    (added ? `, ${added} not yet committed (dated ${TODAY})` : '')
)
