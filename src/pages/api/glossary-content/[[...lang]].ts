import { NextApiRequest, NextApiResponse } from 'next'

import { isLanguage } from 'constants/languages'
import { buildGlossaryMd, sendAgentText } from 'utils/agentContent'

// /glossary.md and /<lang>/glossary.md (next.config rewrites):
//   /api/glossary-content        -> English
//   /api/glossary-content/<lang> -> that language
//   /api/glossary-content?mdLang= -> what the `.md` rewrite uses
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  // `mdLang` (not `lang`): Vercel rewrites this route with `?nxtPlang=`, empty
  // when the `.md` rewrite sent us here with no path segments, and Next maps
  // that onto `lang` — a `?lang=` of our own would be clobbered and the page
  // would silently serve ENGLISH. Same reason for `.filter(Boolean)`.
  const fromPath = ([] as string[]).concat(req.query.lang || []).filter(Boolean)
  const fromQuery = ([] as string[]).concat(req.query.mdLang || []).filter(Boolean)
  const [lang = 'en', ...rest] = fromQuery.length ? fromQuery : fromPath
  if (rest.length || !isLanguage(lang))
    return void res.status(404).send('Unknown language')
  const md = buildGlossaryMd(lang)
  if (!md) return void res.status(404).send('Glossary not found')
  sendAgentText(res, md, 'text/markdown')
}
