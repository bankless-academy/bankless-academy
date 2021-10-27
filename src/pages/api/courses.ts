/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import QUESTS from 'constants/quests'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    return res.json(QUESTS)
  } catch (error) {
    res.json({ error })
  }
}
