import { NextApiRequest, NextApiResponse } from 'next'

import { isLanguage } from 'constants/languages'
import { buildLlmsFull, sendAgentText } from 'utils/agentContent'

// /llms-full.txt and /<lang>/llms-full.txt: every published lesson of that
// language inlined (~300KB for English), read from the same md the site ships.
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const lang = typeof req.query.lang === 'string' ? req.query.lang : 'en'
  if (!isLanguage(lang)) return void res.status(404).send('Unknown language')
  sendAgentText(res, buildLlmsFull(lang), 'text/plain')
}
