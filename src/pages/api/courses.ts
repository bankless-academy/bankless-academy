/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import db from 'utils/db'
import QUESTS from 'constants/quests'

const POAP_IDS = QUESTS.map((quest) => quest.poapEventId.toString())

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
