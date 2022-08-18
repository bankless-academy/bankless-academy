/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

import { db, TABLES, getUserId } from 'utils/db'
import { LESSONS, QUESTS, GENERIC_ERROR_MESSAGE } from 'constants/index'
import { MINTKUDOS_API, MINTKUDOS_ENCODED_STRING } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { address, quest, kudosId } = req.query
  if (
    !address ||
    !quest ||
    // TODO: make kudosId mandatory in the future
    // !kudosId ||
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
      // TODO: move lower later
      // TODO: check gitcoin passport requirement before adding to whitelist
      if (kudosId) {
        const notionId = LESSONS.find(
          (lesson) => lesson.kudosId?.toString() === kudosId
        )?.notionId
        if (!notionId) return res.json({ error: 'notionId not found' })

        const [{ signature }] = await db(TABLES.credentials)
          .select('signature')
          .where('notion_id', notionId)
        console.log(signature)

        // TODO: ignore if user already owns the Kudos

        try {
          const bodyParameters = {
            contributors: [address],
            signature: signature,
          }
          const config = {
            headers: {
              Authorization: `Basic ${MINTKUDOS_ENCODED_STRING}`,
            },
          }
          // add address to allowlist
          console.log('add address to allowlist:', bodyParameters)
          const result = await axios.post(
            `${MINTKUDOS_API}/v1/tokens/${kudosId}/addContributors`,
            bodyParameters,
            config
          )
          if (result.headers.status === 202) {
            console.log(result.headers.location)
            // TODO: check header/Location to know when the token has been claimed
            return res.json({ location: result.headers.location })
          }
        } catch (error) {
          // TODO: add error feedback
          console.error(error?.response?.data)
        }
      }
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
          // add address to whitelist
          return res.json({ status: 'Quest completed' })
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
