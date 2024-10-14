import type { NextApiRequest, NextApiResponse } from 'next'
import LESSONS from 'constants/lessons'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug, type } = req.query
  console.log('req.query', req.query)

  if (type === 'social') {
    // https://ba.krux.dev/images/gitcoin-2.0-essentials/social-255bb483.png
    // /api/lesson-image?slug=gitcoin-2.0-essentials&type=social
    console.log('slug', slug)
    const imagePath = LESSONS.find((lesson) => lesson.slug === slug)?.socialImageLink
    // redirect to imagePath
    res.redirect(imagePath)
  }
}
