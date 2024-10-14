import type { NextApiRequest, NextApiResponse } from 'next'
import LESSONS from 'constants/lessons'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug, type } = req.query

  const imageType = type === 'social' ? 'socialImageLink' : type === 'lesson' ? 'lessonImageLink' : null

  if (!imageType) {
    res.status(404).send('Not found')
  }
  const imagePath = LESSONS.find((lesson) => lesson.slug === slug)?.[imageType]

  if (imagePath) {
    res.status(307).redirect(imagePath)
  } else {
    res.status(404).send('Not found')
  }
}
