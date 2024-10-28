/* eslint-disable no-console */
import { DOMAIN_PROD } from 'constants/index'
import LESSONS from 'constants/lessons'
import { NextApiRequest, NextApiResponse } from 'next'

const lessonAddress = (lesson) =>
  (lesson.publicationStatus === 'publish') ?
    `https://${DOMAIN_PROD}/lessons/${lesson.slug}` : ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const {
      slug: [slug, tokenId],
    } = req.query

    const cleanTokenId = tokenId?.split('?')[0]

    // TODO: save assets on Arweave

    // Badge contract
    if (slug === 'badge-contrat-uri') {
      // https://app.banklessacademy.com/api/metadata/badge-contrat-uri
      const metadata = {
        name: "Bankless Academy Badges",
        symbol: "BADGE",
        description: "Learn and claim free lesson badges on https://app.banklessacademy.com/",
        image: "https://app.banklessacademy.com/logo.jpg",
      }
      return res.status(200).json(metadata)
    }

    if (!slug || !cleanTokenId) return res.status(400).json({ error: 'Wrong params' })

    if (['badge', 'badgev2'].includes(slug)) {
      // Badges
      const tokenIdNumber = cleanTokenId.length > 5 ? parseInt(cleanTokenId, 16) : parseInt(cleanTokenId, 10)
      const lesson = LESSONS.find(
        (lesson) => lesson.badgeId === tokenIdNumber
      )
      if (!lesson) return res.status(400).json({ error: 'Unknown tokenId' })
      // https://app.banklessacademy.com/api/metadata/badge/{id}
      // https://app.banklessacademy.com/api/metadata/badge/0000000000000000000000000000000000000000000000000000000000000001
      const attributes = [
        { trait_type: 'created_by', value: 'Bankless Academy' }
      ]
      if (lesson.community) {
        attributes.push({ trait_type: 'community', value: lesson.community })
      }
      const metadata = {
        name: `${lesson.name}${slug === 'badgev2' ? ' v2' : ''}`,
        description: `${lesson.description} ${lessonAddress(lesson)}`,
        image: `https://${DOMAIN_PROD}${lesson.badgeImageLink}`,
        attributes,
        external_url: lessonAddress(lesson),
      }
      return res.status(200).json(metadata)
    } else if (['datadisk'].includes(slug)) {
      // DataDisks
      const lesson = LESSONS.find(
        (lesson) => lesson.lessonCollectibleTokenAddress === cleanTokenId
      )
      if (!lesson) return res.status(400).json({ error: 'Unknown tokenId' })
      // https://app.banklessacademy.com/api/metadata/datadisk/{nftContractAddress}
      // https://app.banklessacademy.com/api/metadata/datadisk/0x92B55D5254bC93A4f282224A9C3bD2b7e0eF37fc
      const metadata = {
        name: `${lesson.name}`,
        description: `${lesson.description} ${lessonAddress(lesson)}`,
        image: `https://${DOMAIN_PROD}${lesson.lessonCollectedImageLink}`,
        animation_url: `https://${DOMAIN_PROD}${lesson.lessonCollectibleGif}`,
        attributes: [
          { trait_type: 'created_by', value: 'Bankless Academy' },
        ],
        external_url: lessonAddress(lesson),
      }
      return res.status(200).json(metadata)
    }

    return res.status(400).json({ error: 'Unknown contract' })
  } catch (error) {
    console.error('Error in metadata handler:', error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
