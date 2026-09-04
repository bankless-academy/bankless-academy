import { NextApiRequest, NextApiResponse } from 'next'

import { isLanguage } from 'constants/languages'
import { buildGlossaryMd, sendAgentText } from 'utils/agentContent'

// /glossary.md and /<lang>/glossary.md (next.config rewrites):
//   /api/glossary-content        -> English
//   /api/glossary-content/<lang> -> that language
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const [lang = 'en', ...rest] = ([] as string[]).concat(req.query.lang || [])
  if (rest.length || !isLanguage(lang))
    return void res.status(404).send('Unknown language')
  const md = buildGlossaryMd(lang)
  if (!md) return void res.status(404).send('Glossary not found')
  sendAgentText(res, md, 'text/markdown')
}
