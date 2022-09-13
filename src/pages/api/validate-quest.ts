/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES, getUserId } from 'utils/db'
import { validateOnchainQuest } from 'utils/index'
import { QUESTS, GENERIC_ERROR_MESSAGE } from 'constants/index'
import { ONCHAIN_QUESTS } from 'components/Quest/QuestComponent'

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
    return res.json({ isQuestValidated: false, error: 'Wrong params' })

  console.log('address', address)
  console.log('quest', quest)

  // Backend onchain quest verification
  if (ONCHAIN_QUESTS.includes(quest)) {
    if (!tx || typeof tx !== 'string') {
      return res.json({ isQuestValidated: false, error: 'Missing transaction' })
    }
    if (quest === 'DEXAggregators') {
      const isOnchainQuestCompleted = await validateOnchainQuest(
        quest,
        address,
        tx
      )
      if (!isOnchainQuestCompleted)
        return res.json({
          isQuestValidated: false,
          error: 'Onchain quest not completed',
        })
    }
  }

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
        return res.json({
          isQuestValidated: true,
          status: 'Quest already completed',
        })
      } else {
        const [createQuestCompleted] = await db(TABLES.quests).insert(
          { quest: quest, user_id: userId },
          ['id']
        )
        if (createQuestCompleted?.id) {
          return res.json({ isQuestValidated: true, status: 'Quest completed' })
        }
      }
    }
    return res.json({
      isQuestValidated: false,
      error: `error 1: ${GENERIC_ERROR_MESSAGE}`,
    })
  } catch (error) {
    console.error(error)
    return res.json({
      isQuestValidated: false,
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
