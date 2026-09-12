/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

import { LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { isLanguage } from 'constants/languages'

// Serves the raw lesson markdown from this repo:
//   /api/lesson-content/<slug>          -> English
//   /api/lesson-content/<lang>/<slug>   -> that language
//   /api/lesson-content?mdSlug=&mdLang= -> what the `.md` rewrites use
//
// The query form exists because a `locale: false` rewrite whose DESTINATION
// interpolates a param into the path stopped resolving on Vercel in Next 16.2
// (see next.config.mjs). An optional catch-all so the bare path still matches.
//
// Exists so `/api/lessons` can advertise our own URLs instead of pointing
// consumers at raw.githubusercontent, which served whatever was on `main`
// rather than what this deployment actually ships.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // `.filter(Boolean)`: Vercel rewrites this route with `?nxtPslug=`, which is
  // EMPTY when the `.md` rewrite sent us here with no path segments, and Next
  // turns that into `slug: ['']`.
  const one = (v: unknown) => ([] as string[]).concat((v as any) || []).filter(Boolean)[0]
  const segments = ([] as string[]).concat(req.query.slug || []).filter(Boolean)
  const querySlug = one(req.query.mdSlug)
  const queryLang = one(req.query.mdLang)
  const hasLang = segments.length > 1 && isLanguage(segments[0])
  const language = querySlug
    ? isLanguage(queryLang)
      ? queryLang
      : 'en'
    : hasLang
      ? segments[0]
      : 'en'
  // `.md` is stripped for direct calls; the /lessons/<slug>.md rewrite already
  // removed it. `-datadisk` is the collectible's page for the same lesson.
  const slug = (querySlug ?? (hasLang ? segments[1] : segments[0]))
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
