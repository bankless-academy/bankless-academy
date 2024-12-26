import { NextApiRequest, NextApiResponse } from 'next'
import { countExplorerBadges } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { badge } = req.query
    if (!badge || typeof badge !== 'string')
      return res.status(400).json({ error: 'Badge is required' })

    const count = await countExplorerBadges(Number(badge))
    const maxRewards = 250
    const rewards = `${maxRewards - count > 0
      ? `${maxRewards - count} USDGLO remaining`
      : 'No more rewards left'
      }`
    return res.status(200).json({ rewards })
  } catch (error) {
    res.status(500).json({ error })
  }
}
