/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'
import { NextApiRequest, NextApiResponse } from 'next'

import { LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { isLanguage } from 'constants/languages'

// Raw lesson markdown, behind the `.md` rewrites:
//   /api/lesson-content?slug=<slug>[&lang=<lang>]
// STATIC on purpose, and why there is no path form — see next.config.mjs.
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
