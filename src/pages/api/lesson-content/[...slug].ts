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
//
// Exists so `/api/lessons` can advertise our own URLs instead of pointing
// consumers at raw.githubusercontent, which served whatever was on `main`
// rather than what this deployment actually ships.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const segments = ([] as string[]).concat(req.query.slug || [])
  const hasLang = segments.length > 1 && isLanguage(segments[0])
  const language = hasLang ? segments[0] : 'en'
  const slug = (hasLang ? segments[1] : segments[0])?.replace(/\.md$/, '')

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
