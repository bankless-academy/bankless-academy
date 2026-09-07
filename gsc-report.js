/* eslint-disable no-console */
// Search Console report: where impressions and clicks come from, by page type,
// language, query, country, device and search type, with the previous period
// for trend. Written in 2026-08 to judge the /content mirror pages (retired
// since; their URLs still show up while Google drains them), widened 2026-09-07
// when a page-only view hid the things that mattered: 79% of clicks were the
// brand query, the biggest impression source was a single generic Urdu word,
// and the real demand ("how to create a crypto wallet" in ru/de/bn/ko) landed
// on one handbook whose titles did not match it.
// Companion: gsc-inspect.mjs, which asks Google what it thinks of a URL.
//
//   node gsc-report.js              # last 28 days
//   node gsc-report.js --days 90
//   node gsc-report.js --top 20     # longer lists (default 12)
//   node gsc-report.js --json       # every dataset as JSON, for piping
//
// Auth: a Google Cloud service account granted "Full" on the Search Console
// property. Provide it as either
//   GSC_SERVICE_ACCOUNT_JSON='{"client_email":...,"private_key":...}'   (in .env)
//   GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json
//
// No new dependencies: the service-account JWT flow is ~30 lines of crypto and
// this repo already has peer-dependency conflicts that make adding the
// googleapis package more trouble than it is worth.
import crypto from 'crypto'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const SITE_URL = 'sc-domain:app.banklessacademy.com'
const DOMAIN = 'https://app.banklessacademy.com'
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'
const BRAND = /bankless/i

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const days = Number(args[args.indexOf('--days') + 1]) || 28
const TOP = Number(args[args.indexOf('--top') + 1]) || 12

const loadCredentials = () => {
  const inline = process.env.GSC_SERVICE_ACCOUNT_JSON
  if (inline) return JSON.parse(inline)
  const path = process.env.GOOGLE_APPLICATION_CREDENTIALS
  if (path && fs.existsSync(path))
    return JSON.parse(fs.readFileSync(path, 'utf8'))
  console.error(
    `\n  No Search Console credentials found.\n\n` +
      `  Set one of these:\n` +
      `    GSC_SERVICE_ACCOUNT_JSON='<the whole key JSON on one line>'   (in .env)\n` +
      `    GOOGLE_APPLICATION_CREDENTIALS=/absolute/path/to/key.json\n\n` +
      `  The service account also needs "Full" permission on ${SITE_URL}\n` +
      `  under Search Console -> Settings -> Users and permissions.\n`
  )
  process.exit(1)
}

const b64url = (input) =>
  Buffer.from(input)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

/** Exchange the service-account key for an access token (RS256 JWT bearer). */
const getAccessToken = async ({ client_email, private_key }) => {
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = b64url(
    JSON.stringify({
      iss: client_email,
      scope: SCOPE,
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    })
  )
  const signature = crypto
    .createSign('RSA-SHA256')
    .update(`${header}.${claims}`)
    .sign(private_key.replace(/\\n/g, '\n'))
  const assertion = `${header}.${claims}.${b64url(signature)}`

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  })
  const json = await res.json()
  if (!res.ok)
    throw new Error(
      `token exchange failed (${res.status}): ${
        json.error_description || json.error
      }`
    )
  return json.access_token
}

const query = async (token, body) => {
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
      SITE_URL
    )}/searchAnalytics/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rowLimit: 25000, ...body }),
    }
  )
  const json = await res.json()
  if (!res.ok) {
    const msg = json.error?.message || res.statusText
    if (res.status === 403)
      throw new Error(
        `${msg}\n  -> Add the service account as a user with "Full" permission on ${SITE_URL}.`
      )
    throw new Error(`${res.status}: ${msg}`)
  }
  return json.rows || []
}

const ymd = (d) => d.toISOString().slice(0, 10)
const path = (url) => url.replace(DOMAIN, '') || '/'

// Page classes for the URL scheme since 2026-08-23 (language as a prefix,
// English un-prefixed), plus the retired shapes Google is still draining.
const PAGE_TYPES = [
  ['homepage', (p) => p === '/'],
  ['homepage (localized)', (p) => /^\/[a-z-]{2,5}$/.test(p)],
  ['retired /content mirror', (p) => /\/content$/.test(p)],
  [
    'retired /lessons/<lang>/ shape',
    (p) => /^\/lessons\/[a-z-]{2,5}\/[a-z0-9-]+$/.test(p),
  ],
  [
    'lesson (localized)',
    (p) =>
      /^\/[a-z-]{2,5}\/lessons\/[a-z0-9-]+$/.test(p) &&
      !/\/lessons\/(handbook|preview)$/.test(p),
  ],
  [
    'lesson (en)',
    (p) =>
      /^\/lessons\/[a-z0-9-]+$/.test(p) &&
      !/\/lessons\/(handbook|preview)$/.test(p),
  ],
  ['glossary', (p) => /(^|\/)glossary$/.test(p)],
  ['listing', (p) => /^(\/[a-z-]{2,5})?\/lessons(\/handbook)?$/.test(p)],
  ['explorer profile', (p) => /^\/explorer\//.test(p)],
  ['other', () => true],
]
const pageType = (url) => PAGE_TYPES.find(([, test]) => test(path(url)))[0]
const lessonLanguage = (url) =>
  path(url).match(/^\/([a-z-]{2,5})\/lessons\/[a-z0-9-]+$/)?.[1]

// Impression-weighted aggregates: the API's `position` is already an average,
// so summing rows needs the weights back.
const agg = (rows) => {
  const a = { rows: rows.length, impressions: 0, clicks: 0, posW: 0 }
  for (const r of rows) {
    a.impressions += r.impressions
    a.clicks += r.clicks
    a.posW += (r.position || 0) * r.impressions
  }
  a.position = a.impressions ? a.posW / a.impressions : 0
  a.ctr = a.impressions ? a.clicks / a.impressions : 0
  return a
}
const groupBy = (rows, keyFn) => {
  const g = new Map()
  for (const r of rows) {
    const k = keyFn(r)
    if (k === undefined) continue
    if (!g.has(k)) g.set(k, [])
    g.get(k).push(r)
  }
  return [...g.entries()]
    .map(([key, rs]) => ({ key, ...agg(rs) }))
    .sort((a, b) => b.impressions - a.impressions)
}

const n = (x, w = 6) => String(Math.round(x)).padStart(w)
const pct = (x) => `${(100 * x).toFixed(1)}%`.padStart(6)
const pos = (x) => (x ? x.toFixed(1) : '-').padStart(5)
const rowLine = (r, label) =>
  `    ${n(r.impressions)} imp ${n(r.clicks, 4)} clk  ctr ${pct(
    r.ctr ?? (r.impressions ? r.clicks / r.impressions : 0)
  )}  pos ${pos(r.position)}  ${label}`
const delta = (now, before) => {
  if (!before) return ''
  const d = ((now - before) / before) * 100
  return ` (${d >= 0 ? '+' : ''}${d.toFixed(0)}% vs previous ${days}d)`
}

;(async () => {
  const creds = loadCredentials()
  const token = await getAccessToken(creds)

  // Search Console data lags ~2-3 days; asking for today returns nothing.
  const end = new Date(Date.now() - 3 * 86400_000)
  const start = new Date(end.getTime() - days * 86400_000)
  const prevEnd = new Date(start.getTime() - 86400_000)
  const prevStart = new Date(prevEnd.getTime() - days * 86400_000)
  const range = { startDate: ymd(start), endDate: ymd(end) }

  const [
    pages,
    previous,
    queries,
    pageQueries,
    countries,
    devices,
    imageTotals,
  ] = await Promise.all([
    query(token, { ...range, dimensions: ['page'] }),
    query(token, {
      startDate: ymd(prevStart),
      endDate: ymd(prevEnd),
      dimensions: ['page'],
    }),
    query(token, { ...range, dimensions: ['query'] }),
    query(token, { ...range, dimensions: ['page', 'query'] }),
    query(token, { ...range, dimensions: ['country'] }),
    query(token, { ...range, dimensions: ['device'] }),
    query(token, { ...range, dimensions: [], type: 'image' }),
  ])

  if (asJson) {
    console.log(
      JSON.stringify(
        {
          range,
          previousRange: { startDate: ymd(prevStart), endDate: ymd(prevEnd) },
          pages,
          previous,
          queries,
          pageQueries,
          countries,
          devices,
          image: imageTotals[0] || null,
        },
        null,
        2
      )
    )
    return
  }

  const total = agg(pages)
  const prev = agg(previous)
  console.log(`\n  ${range.startDate} -> ${range.endDate}  (${days} days)`)
  console.log(
    `  impressions ${total.impressions}${delta(
      total.impressions,
      prev.impressions
    )}   ` +
      `clicks ${total.clicks}${delta(total.clicks, prev.clicks)}   ctr ${pct(
        total.ctr
      ).trim()}   avg position ${total.position.toFixed(1)}`
  )
  // A URL with zero impressions is ABSENT from the response, never returned as
  // 0 - so "not listed" is the finding, not an error.
  console.log(
    `  ${pages.length} pages and ${queries.length} queries with at least one impression.\n`
  )

  console.log('  By page type')
  for (const g of groupBy(pages, (r) => pageType(r.keys[0])))
    console.log(rowLine(g, `${g.key}  (${g.rows} pages)`))

  const byLang = groupBy(pages, (r) => lessonLanguage(r.keys[0]))
  if (byLang.length) {
    console.log('\n  Localized lessons by language  (impressions/clicks/pages)')
    console.log(
      '    ' +
        byLang
          .map((g) => `${g.key} ${g.impressions}/${g.clicks}/${g.rows}`)
          .join('  ')
    )
  }

  console.log('\n  CTR by position')
  const bucket = (p) =>
    p < 5 ? '1-5' : p < 10 ? '5-10' : p < 20 ? '10-20' : '20+'
  for (const b of ['1-5', '5-10', '10-20', '20+']) {
    const rs = pages.filter((r) => bucket(r.position) === b)
    if (rs.length) console.log(rowLine(agg(rs), `positions ${b}`))
  }

  const branded = agg(queries.filter((r) => BRAND.test(r.keys[0])))
  const qTotal = agg(queries)
  console.log(
    `\n  Queries: brand ("bankless") = ${pct(
      qTotal.impressions ? branded.impressions / qTotal.impressions : 0
    ).trim()} of impressions, ` +
      `${pct(
        qTotal.clicks ? branded.clicks / qTotal.clicks : 0
      ).trim()} of clicks (${branded.clicks}/${qTotal.clicks})`
  )
  console.log('\n  Top non-brand queries by impressions')
  for (const r of queries
    .filter((r) => !BRAND.test(r.keys[0]))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, TOP))
    console.log(rowLine(r, r.keys[0]))
  const clicked = queries
    .filter((r) => r.clicks > 0 && !BRAND.test(r.keys[0]))
    .sort((a, b) => b.clicks - a.clicks)
  console.log(`\n  Non-brand queries that got clicks (${clicked.length})`)
  for (const r of clicked.slice(0, TOP)) console.log(rowLine(r, r.keys[0]))

  // Top pages, each with the queries that surface it: the fastest way to see
  // whether a page's title matches what people type.
  const topQueriesFor = (url) =>
    pageQueries
      .filter((r) => r.keys[0] === url)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 2)
      .map((r) => `"${r.keys[1]}" ${r.impressions}i@${r.position.toFixed(0)}`)
      .join(', ')
  console.log('\n  Top pages by impressions, with their top queries')
  for (const r of [...pages]
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, TOP))
    console.log(
      rowLine(
        r,
        `${path(r.keys[0])}\n${' '.repeat(52)}${topQueriesFor(r.keys[0])}`
      )
    )

  console.log('\n  Countries')
  for (const r of countries
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 10))
    console.log(rowLine(r, r.keys[0]))
  console.log('\n  Devices')
  for (const r of devices.sort((a, b) => b.impressions - a.impressions))
    console.log(rowLine(r, r.keys[0].toLowerCase()))
  if (imageTotals[0])
    console.log(
      `\n  Image search: ${imageTotals[0].impressions} impressions, ${imageTotals[0].clicks} clicks (web totals above exclude these)`
    )
  console.log()
})().catch((e) => {
  console.error(`\n  ${e.message}\n`)
  process.exit(1)
})
