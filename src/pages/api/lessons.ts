import { NextApiRequest, NextApiResponse } from 'next'
import LESSONS from 'constants/lessons'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    return res.json(LESSONS)
  } catch (error) {
    res.json({ error })
  }
}
