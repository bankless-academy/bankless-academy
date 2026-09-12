/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

import { LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { isLanguage } from 'constants/languages'

// Serves the raw lesson markdown from this repo, behind the `.md` rewrites:
//   /api/lesson-content?slug=<slug>          -> English
//   /api/lesson-content?slug=<slug>&lang=<l> -> that language
//
// A STATIC route on purpose, and the reason the path forms
// (`/api/lesson-content/<lang>/<slug>`) are gone. Measured in production on
// 16.3.5: a `locale: false` rewrite RESOLVES INTO A STATIC API ROUTE fine
// (`/fr/llms.txt` -> `/api/llms?lang=fr` has never broken) but 404s when the
// destination is a DYNAMIC/catch-all route — `check: true` does not re-enter
// dynamic matching for those. The same dynamic route answered correctly when
// requested directly, and via the automatic-locale rules; only the
// `locale: false` -> dynamic combination failed. See next.config.mjs.
//
// Being static also removes the `nxtP*` hazard entirely: Vercel injects
// `?nxtPslug=` only for dynamic routes, where an empty value silently
// clobbers a query param of the same name.
//
// Exists so `/api/lessons` can advertise our own URLs instead of pointing
// consumers at raw.githubusercontent, which served whatever was on `main`
// rather than what this deployment actually ships.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const one = (v: unknown) =>
    ([] as string[]).concat((v as any) || []).filter(Boolean)[0]
  const queryLang = one(req.query.lang)
  const language = isLanguage(queryLang) ? queryLang : 'en'
  // `.md` is stripped for direct calls; the /lessons/<slug>.md rewrite already
  // removed it. `-datadisk` is the collectible's page for the same lesson.
  const slug = one(req.query.slug)
    ?.replace(/\.md$/, '')
    .replace(/-datadisk$/, '')

  if (!slug || !LESSONS.some((lesson: LessonType) => lesson.slug === slug)) {
    return res.status(404).send('Lesson not found')
  }

  // path traversal guard: both parts are validated above, but resolve and
  // confirm the result is still inside the translation directory
  const root = path.resolve('translation/lesson')
  const filePath = path.resolve(root, language, `${slug}.md`)
  if (!filePath.startsWith(`${root}${path.sep}`) || !fs.existsSync(filePath)) {
    return res.status(404).send('Translation not found')
  }

  res.setHeader('Content-Type', 'text/markdown; charset=utf-8')
  res.setHeader('Cache-Control', 'public, max-age=3600')
  return res.status(200).send(fs.readFileSync(filePath, 'utf8'))
}
