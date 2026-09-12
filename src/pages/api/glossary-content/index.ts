import { NextApiRequest, NextApiResponse } from 'next'

import { isLanguage } from 'constants/languages'
import { buildGlossaryMd, sendAgentText } from 'utils/agentContent'

// Glossary markdown: /api/glossary-content[?lang=<lang>].
// STATIC on purpose — see next.config.mjs.
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const lang = ([] as string[])
    .concat((req.query.lang as any) || [])
    .filter(Boolean)[0] || 'en'
  if (!isLanguage(lang))
    return void res.status(404).send('Unknown language')
  const md = buildGlossaryMd(lang)
  if (!md) return void res.status(404).send('Glossary not found')
  sendAgentText(res, md, 'text/markdown')
}
