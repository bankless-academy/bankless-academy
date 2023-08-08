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
    slug: [contractAddress, tokenId],
  } = req.query
  if (!contractAddress || !tokenId)
    return res.status(400).json({ error: 'Wrong params' })
  // TODO: uncomment when pushing to prod
  // if (contractAddress !== BADGE_ADDRESS)
  //   return res.status(400).json({ error: 'Unknown contract' })
  const lesson = LESSONS.find((lesson) => lesson.badgeId === parseInt(tokenId))
  if (!lesson) return res.status(400).json({ error: 'Unknown tokenId' })

  const metadata = {
    name: lesson.name,
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
