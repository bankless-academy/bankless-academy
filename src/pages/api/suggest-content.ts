/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { kv } from '@vercel/kv'

// Files lesson content suggestions as GitHub issues (replaces the old Tally
// form embed). Requires GITHUB_TOKEN (fine-grained PAT, Issues read+write on
// the repo) in the environment.
const REPO = 'bankless-academy/bankless-academy'
const MAX_PER_HOUR = 5

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  if (!process.env.GITHUB_TOKEN) {
    console.error('suggest-content: GITHUB_TOKEN not configured')
    return res.status(500).json({ error: 'Suggestions are unavailable right now.' })
  }

  const { lesson, slide, suggestion, comment, wallet, language } = req.body || {}
  if (
    typeof lesson !== 'string' ||
    typeof slide !== 'string' ||
    typeof suggestion !== 'string' ||
    !lesson.trim() ||
    !slide.trim() ||
    !suggestion.trim()
  )
    return res.status(400).json({ error: 'Missing fields.' })
  if (suggestion.length > 8000 || (comment || '').length > 2000)
    return res.status(400).json({ error: 'Suggestion too long.' })

  // basic rate limit per IP
  try {
    const ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.socket.remoteAddress ||
      'unknown'
    const key = `suggest-content-${ip}`
    const count = await kv.incr(key)
    if (count === 1) await kv.expire(key, 3600)
    if (count > MAX_PER_HOUR)
      return res.status(429).json({ error: 'Too many suggestions. Try again later.' })
  } catch (e) {
    // KV unavailable: allow the request rather than failing closed
    console.error('suggest-content rate limit error', e)
  }

  const title = `Content suggestion: ${lesson} > ${slide}`.slice(0, 250)
  const body = [
    `**Lesson:** ${lesson}`,
    `**Slide:** ${slide}`,
    `**Language:** ${language || 'en'}`,
    wallet ? `**Wallet:** ${wallet}` : null,
    '',
    '### Suggested content',
    '```markdown',
    suggestion.replaceAll('```', "'''"),
    '```',
    comment?.trim() ? `### Comment\n${comment.trim()}` : null,
    '',
    '_Submitted via the Suggest Changes form._',
  ]
    .filter((l) => l !== null)
    .join('\n')

  try {
    const r = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body, labels: ['content-suggestion'] }),
    })
    if (!r.ok) {
      console.error('suggest-content GitHub error', r.status, await r.text())
      return res.status(502).json({ error: 'Could not submit suggestion.' })
    }
    const issue = await r.json()
    return res.status(200).json({ ok: true, url: issue.html_url })
  } catch (error) {
    console.error('suggest-content error', error)
    return res.status(500).json({ error: 'Could not submit suggestion.' })
  }
}
