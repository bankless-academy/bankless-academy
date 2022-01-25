/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES, getUserId } from 'utils/db'
import { QUESTS, GENERIC_ERROR_MESSAGE } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { address, quest } = req.query
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
        // TODO: add backend quest verification
        const [createQuestCompleted] = await db(TABLES.quests).insert(
          { quest: quest, user_id: userId },
          ['id']
        )
        if (createQuestCompleted?.id) {
          return res.json({ status: 'Quest completed' })
        }
      }
    }
    res.json({
      error: GENERIC_ERROR_MESSAGE,
    })
  } catch (error) {
    console.error(error)
    res.json({
      error: GENERIC_ERROR_MESSAGE,
    })
  }
}
