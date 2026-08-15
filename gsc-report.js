/* eslint-disable no-console */
// Search Console report: is the /content mirror actually earning traffic?
//
// The lesson pages are a client-rendered slideshow and serve ~80 characters of
// crawlable text, so /lessons/<slug>/content exists as the indexable mirror.
// Whether that mirror is worth keeping — and whether the SSR migration in
// docs/ssr-migration.md is necessary — is an empirical question this answers.
//
//   node gsc-report.js              # last 28 days
//   node gsc-report.js --days 90
//   node gsc-report.js --json       # raw rows, for piping
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
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'

const args = process.argv.slice(2)
const asJson = args.includes('--json')
const days = Number(args[args.indexOf('--days') + 1]) || 28

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
  Buffer.from(input).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

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
      `token exchange failed (${res.status}): ${json.error_description || json.error}`
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
      body: JSON.stringify(body),
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

;(async () => {
  const creds = loadCredentials()
  const token = await getAccessToken(creds)

  // Search Console data lags ~2-3 days; asking for today returns nothing.
  const end = new Date(Date.now() - 3 * 86400_000)
  const start = new Date(end.getTime() - days * 86400_000)

  const rows = await query(token, {
    startDate: ymd(start),
    endDate: ymd(end),
    dimensions: ['page'],
    rowLimit: 25000,
  })

  if (asJson) {
    console.log(JSON.stringify(rows, null, 2))
    return
  }

  const sum = (rs, k) => rs.reduce((a, r) => a + (r[k] || 0), 0)
  const content = rows.filter((r) => r.keys[0].includes('/content'))
  const lessons = rows.filter(
    (r) => r.keys[0].includes('/lessons/') && !r.keys[0].includes('/content')
  )

  console.log(`\n  ${ymd(start)} -> ${ymd(end)}  (${days} days)\n`)
  const line = (label, rs) =>
    console.log(
      `  ${label.padEnd(22)} urls ${String(rs.length).padStart(4)}   ` +
        `impressions ${String(sum(rs, 'impressions')).padStart(7)}   ` +
        `clicks ${String(sum(rs, 'clicks')).padStart(5)}`
    )
  line('/content pages', content)
  line('lesson pages', lessons)
  line('everything', rows)

  // A URL with zero impressions is ABSENT from the response, never returned as
  // 0 — so "not listed" is the finding, not an error.
  console.log(
    `\n  Note: ${203 - content.length} of the 203 /content URLs had zero impressions ` +
      `(absent from the API response).\n`
  )

  const top = content.sort((a, b) => b.impressions - a.impressions).slice(0, 10)
  if (top.length) {
    console.log('  Top /content pages by impressions:')
    for (const r of top)
      console.log(
        `    ${String(Math.round(r.impressions)).padStart(6)} imp  ` +
          `${String(Math.round(r.clicks)).padStart(4)} clk  ` +
          `pos ${r.position.toFixed(1).padStart(5)}  ` +
          r.keys[0].replace('https://app.banklessacademy.com', '')
      )
  }
  console.log()
})().catch((e) => {
  console.error(`\n  ${e.message}\n`)
  process.exit(1)
})
