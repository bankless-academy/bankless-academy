/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import { LESSONS, QUESTS, GENERIC_ERROR_MESSAGE } from 'constants/index'
import { ONCHAIN_QUESTS } from 'components/Quest/QuestComponent'
import { validateOnchainQuest } from 'utils/index'
import { trackBE } from 'utils/mixpanel'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const DEV_SECRET = process.env.DEV_SECRET
  const param =
    DEV_SECRET && req.query?.dev === DEV_SECRET ? req.query : req.body
  const { address, quest, tx, embed } = param
  if (
    !address ||
    // TODO: replace quest with notionId?
    !quest ||
    typeof address === 'object' ||
    typeof quest === 'object' ||
    !QUESTS.includes(quest)
  )
    return res
      .status(400)
      .json({ isQuestValidated: false, error: 'Wrong params' })

  console.log('address', address)
  console.log('quest', quest)

  // Backend onchain quest verification
  if (ONCHAIN_QUESTS.includes(quest)) {
    if (['DEXAggregators', 'DecentralizedExchanges'].includes(quest)) {
      if (!tx || typeof tx !== 'string') {
        return res
          .status(403)
          .json({ isQuestValidated: false, error: 'Missing transaction' })
      }
      const isOnchainQuestCompleted = await validateOnchainQuest(
        quest,
        address,
        tx
      )
      if (!isOnchainQuestCompleted)
        return res.status(200).json({
          isQuestValidated: false,
          error: 'Onchain quest not completed',
        })
    }
    else if (['Layer2Blockchains', 'OptimismGovernance'].includes(quest)) {
      const isOnchainQuestCompleted = await validateOnchainQuest(quest, address)
      if (!isOnchainQuestCompleted)
        return res.status(200).json({
          isQuestValidated: false,
          error: 'Onchain quest not completed',
        })
    } else {
      return res.status(200).json({
        isQuestValidated: false,
        error: 'Onchain quest not completed',
      })
    }
  }

  try {
    const userId = await getUserId(address, embed)
    console.log(userId)
    if (!(userId && Number.isInteger(userId)))
      return res.status(403).json({ error: 'userId not found' })

    const notionId = LESSONS.find((lesson) => lesson.quest === quest)?.notionId
    if (!notionId) return res.status(403).json({ error: 'notionId not found' })

    const [credential] = await db(TABLES.credentials)
      .select('id')
      .where(TABLE.credentials.notion_id, notionId)
    if (!credential)
      return res.status(403).json({ error: 'credentialId not found' })

    let questStatus = ''
    const [questCompleted] = await db(TABLES.completions)
      .select(TABLE.completions.id)
      .where(TABLE.completions.credential_id, credential.id)
      .where(TABLE.completions.user_id, userId)
    questStatus = 'Quest already completed'
    const lesson = LESSONS.find((lesson) => lesson.quest === quest)?.name
    if (questCompleted?.id) {
      trackBE(address, 'quest_already_completed', { lesson, embed })
      return res
        .status(200)
        .json({ isQuestValidated: true, status: questStatus })
    } else {
      const [createQuestCompleted] = await db(TABLES.completions).insert(
        { credential_id: credential.id, user_id: userId },
        ['id']
      )

      if (createQuestCompleted?.id) {
        questStatus = 'Quest completed'
        trackBE(address, 'quest_completed', { lesson, embed })
      } else {
        questStatus = 'Problem while adding quest'
      }
      return res.status(200).json({
        isQuestValidated: !!createQuestCompleted?.id,
        status: questStatus,
      })
    }
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      isQuestValidated: false,
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
