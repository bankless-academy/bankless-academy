import { NextApiRequest, NextApiResponse } from 'next'

import { isLanguage } from 'constants/languages'
import { buildLlmsTxt, sendAgentText } from 'utils/agentContent'

// /llms.txt and /<lang>/llms.txt (next.config rewrites): the llmstxt.org index,
// generated from LESSONS so it cannot drift from what ships. The README that
// used to be served here stays at /agent.txt (brand voice, AI guidelines).
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const lang = typeof req.query.lang === 'string' ? req.query.lang : 'en'
  if (!isLanguage(lang)) return void res.status(404).send('Unknown language')
  sendAgentText(res, buildLlmsTxt(lang), 'text/plain')
}
