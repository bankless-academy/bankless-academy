/* eslint-disable no-console */
import { DOMAIN_PROD } from 'constants/index'
import LESSONS from 'constants/lessons'
import { NextApiRequest, NextApiResponse } from 'next'

const lessonAddress = (lesson) =>
  `https://${DOMAIN_PROD}/lessons/${lesson.slug}`

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    slug: [slug, tokenId],
  } = req.query

  if (slug === 'badge-contrat-uri') {
    const metadata = {
      "name": "Bankless Academy Badges",
      "symbol": "BADGE",
      "description": "Bankless Academy lesson badges https://app.banklessacademy.com/",
      "image": "https://app.banklessacademy.com/logo.jpg",
    }
    return res.status(200).json(metadata)
  }

  if (!slug || !tokenId) return res.status(400).json({ error: 'Wrong params' })

  if (!['badge', 'badgev2'].includes(slug))
    return res.status(400).json({ error: 'Unknown contract' })
  const lesson = LESSONS.find(
    (lesson) => lesson.badgeId === parseInt(tokenId, 10)
  )

  if (!lesson) return res.status(400).json({ error: 'Unknown tokenId' })

  const metadata = {
    name: `${lesson.name}${slug === 'badgev2' ? ' v2' : ''}`,
    description: `${lesson.description} ${lessonAddress(lesson)}`,
    external_url: lessonAddress(lesson),
    image: `https://${DOMAIN_PROD}${lesson.badgeImageLink}`,
    attributes: [
      { trait_type: 'created_by', value: 'banklessacademy.eth' },
      { trait_type: 'links', value: [lessonAddress(lesson)] },
    ],
  }
  return res.status(200).json(metadata)
}
