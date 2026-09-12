import { NextApiRequest, NextApiResponse } from 'next'

import { isLanguage } from 'constants/languages'
import { buildGlossaryMd, sendAgentText } from 'utils/agentContent'

// Serves the glossary as markdown, behind the `.md` rewrites:
//   /api/glossary-content            -> English
//   /api/glossary-content?lang=<l>   -> that language
//
// STATIC on purpose — see the long note in ../lesson-content/index.ts: a
// `locale: false` rewrite resolves into a static API route but 404s into a
// dynamic one, which is why the `[[...lang]]` catch-all form is gone.
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
