/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES, getUserId } from 'utils/db'
import { validateOnchainQuest } from 'utils/index'
import { QUESTS, GENERIC_ERROR_MESSAGE } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { address, quest, tx } = req.query
  if (
    !address ||
    !quest ||
    typeof address === 'object' ||
    typeof quest === 'object' ||
    !QUESTS.includes(quest)
  )
    return res.json({ error: 'Wrong params' })

  console.log('address', address)
  console.log('quest', quest)

  try {
    const userId = await getUserId(address)
    if (userId) {
      console.log(userId)
      const [questCompleted] = await db(TABLES.quests)
        .select('id')
        .where('quest', quest)
        .where('user_id', userId)
      console.log('quest', quest)
      if (questCompleted?.id) {
        return res.json({ status: 'Quest already completed' })
      } else {
        if (quest === 'DEXAggregators') {
          if (!tx || typeof tx !== 'string') {
            return res.json({ error: 'Missing transaction' })
          }
          const isOnchainQuestCompleted = await validateOnchainQuest(
            quest,
            address,
            tx
          )
          return res.json({ quest: isOnchainQuestCompleted })
        }
      }
    }
    return res.json({
      error: `error 1: ${GENERIC_ERROR_MESSAGE}`,
    })
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
