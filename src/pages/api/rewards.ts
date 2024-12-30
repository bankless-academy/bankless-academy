import { NextApiRequest, NextApiResponse } from 'next'

import { countExplorerBadges } from 'utils'
import { IS_REWARDS_ACTIVATED } from 'constants/index'

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
    const rewards = `${maxRewards - count > 0 && IS_REWARDS_ACTIVATED
      ? `${maxRewards - count} USDGLO remaining`
      : 'All rewards claimed.'
      }`
    return res.status(200).json({ rewards })
  } catch (error) {
    res.status(500).json({ error })
  }
}
