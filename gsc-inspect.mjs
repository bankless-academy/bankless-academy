/* eslint-disable no-console */
// URL Inspection sweep for app.banklessacademy.com.
// Usage: node gsc-inspect.mjs sitemaps            -> sitemap status Google holds
//        node gsc-inspect.mjs sample              -> stratified sample inspection
//        node gsc-inspect.mjs urls <file>         -> inspect URLs listed in a file
// URL Inspection sweep against Search Console. Companion to gsc-report.js
// (same auth); used 2026-08-23 to diagnose the "Crawled - currently not
// indexed" validation failure — baseline results in
// docs/gsc-inspection-baseline-2026-08-23.json. Re-run after the locale-URL
// migration deploy and compare.
import crypto from 'crypto'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config()

const raw = process.env.GSC_SERVICE_ACCOUNT_JSON
if (!raw) {
  console.error('GSC_SERVICE_ACCOUNT_JSON missing from .env (see gsc-report.js)')
  process.exit(1)
}

const SITE_URL = 'sc-domain:app.banklessacademy.com'
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'

const creds = JSON.parse(raw)
const b64url = (i) =>
  Buffer.from(i).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

const getToken = async () => {
  const now = Math.floor(Date.now() / 1000)
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = b64url(
    JSON.stringify({
      iss: creds.client_email,
      scope: SCOPE,
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: now + 3600,
    })
  )
  const sig = crypto
    .createSign('RSA-SHA256')
    .update(`${header}.${claims}`)
    .sign(creds.private_key.replace(/\\n/g, '\n'))
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${header}.${claims}.${b64url(sig)}`,
    }),
  })
  const json = await res.json()
  if (!res.ok) throw new Error(`token: ${json.error_description || json.error}`)
  return json.access_token
}

const mode = process.argv[2] || 'sample'

const listSitemaps = async (token) => {
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/sitemaps`,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  const json = await res.json()
  if (!res.ok) throw new Error(`sitemaps: ${json.error?.message || res.statusText}`)
  for (const s of json.sitemap || []) {
    console.log(
      `${s.path}\n  lastSubmitted=${s.lastSubmitted} lastDownloaded=${s.lastDownloaded} errors=${s.errors} warnings=${s.warnings} pending=${s.isPending}`
    )
    for (const c of s.contents || [])
      console.log(`  type=${c.type} submitted=${c.submitted} indexed=${c.indexed}`)
  }
}

const inspect = async (token, url) => {
  const res = await fetch(
    'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE_URL }),
    }
  )
  const json = await res.json()
  if (!res.ok)
    return { url, error: `${res.status} ${json.error?.message || res.statusText}` }
  const r = json.inspectionResult?.indexStatusResult || {}
  return {
    url,
    verdict: r.verdict,
    coverageState: r.coverageState,
    lastCrawlTime: r.lastCrawlTime,
    pageFetchState: r.pageFetchState,
    robotsTxtState: r.robotsTxtState,
    indexingState: r.indexingState,
    googleCanonical: r.googleCanonical,
    userCanonical: r.userCanonical,
    sitemap: r.sitemap,
    referringUrls: (r.referringUrls || []).length,
  }
}

const buildSample = async () => {
  const xml = await (await fetch('https://app.banklessacademy.com/sitemap.xml')).text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  // URL shapes since the locale-URL migration (2026-08-23): the language is a
  // PREFIX (/fr/lessons/x, /fr/glossary), English is un-prefixed, and the
  // /content mirrors are gone. Pre-migration shapes (/lessons/fr/x,
  // /glossary/fr, .../content) still group, for inspecting old URLs.
  const groups = {
    root: (u) => /banklessacademy\.com\/($|lessons$|lessons\/handbook$|glossary$|explore$|[a-z-]+$)/.test(u),
    lesson_en: (u) => /banklessacademy\.com\/lessons\/[a-z0-9-]+$/.test(u) && !/\/lessons\/(handbook|preview)$/.test(u),
    lesson_loc: (u) => /banklessacademy\.com\/[a-z-]{2,5}\/lessons\/[a-z0-9-]+$/.test(u) || /\/lessons\/[a-z-]{2,5}\/[a-z0-9-]+$/.test(u),
    content_en: (u) => /\/lessons\/[a-z0-9-]+\/content$/.test(u),
    content_loc: (u) => /\/lessons\/[a-z-]{2,5}\/[a-z0-9-]+\/content$/.test(u),
    glossary_loc: (u) => /banklessacademy\.com\/[a-z-]{2,5}\/glossary$/.test(u) || /\/glossary\/[a-z-]{2,5}$/.test(u),
  }
  const byGroup = {}
  for (const u of urls) {
    for (const [g, test] of Object.entries(groups)) {
      if (test(u)) {
        ;(byGroup[g] ||= []).push(u)
        break
      }
    }
  }
  // Spread localized picks across languages: take every Nth
  const pick = (arr, n) => {
    if (!arr || arr.length <= n) return arr || []
    const step = Math.floor(arr.length / n)
    return Array.from({ length: n }, (_, i) => arr[i * step])
  }
  const sample = [
    ...pick(byGroup.root, 6),
    ...pick(byGroup.lesson_en, 8),
    ...pick(byGroup.lesson_loc, 14),
    ...pick(byGroup.content_en, 8),
    ...pick(byGroup.content_loc, 14),
    ...pick(byGroup.glossary_loc, 8),
  ]
  console.log(
    `sitemap: ${urls.length} urls; groups: ` +
      Object.entries(byGroup)
        .map(([g, a]) => `${g}=${a.length}`)
        .join(' ') +
      `; sampling ${sample.length}`
  )
  return sample
}

const run = async () => {
  const token = await getToken()
  if (mode === 'sitemaps') return listSitemaps(token)

  let urls
  if (mode === 'urls') urls = fs.readFileSync(process.argv[3], 'utf8').trim().split('\n')
  else urls = await buildSample()

  const results = []
  const CONC = 5
  let i = 0
  await Promise.all(
    Array.from({ length: CONC }, async () => {
      while (i < urls.length) {
        const u = urls[i++]
        results.push(await inspect(token, u))
      }
    })
  )

  // Findings-only output: tally by coverageState, list URLs per non-indexed state.
  const tally = {}
  for (const r of results) {
    const key = r.error ? `ERROR: ${r.error}` : r.coverageState || r.verdict
    ;(tally[key] ||= []).push(r)
  }
  for (const [state, rs] of Object.entries(tally).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`\n== ${state} (${rs.length}) ==`)
    for (const r of rs) {
      const path = r.url.replace('https://app.banklessacademy.com', '') || '/'
      const extra = r.error
        ? ''
        : ` crawl=${(r.lastCrawlTime || 'never').slice(0, 10)} fetch=${r.pageFetchState || '-'} sitemap=${r.sitemap ? 'y' : 'n'} canon=${
            r.googleCanonical ? (r.googleCanonical === r.userCanonical || r.googleCanonical === r.url ? 'self' : r.googleCanonical) : '-'
          }`
      console.log(`  ${path}${extra}`)
    }
  }
  fs.writeFileSync(
    'gsc-inspect-results.json',
    JSON.stringify(results, null, 2)
  )
}

run().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
