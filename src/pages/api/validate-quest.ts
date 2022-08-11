/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
const btoa = function (str) {
  return Buffer.from(str).toString('base64')
}

import { db, TABLES, getUserId } from 'utils/db'
import { QUESTS, GENERIC_ERROR_MESSAGE } from 'constants/index'

const MINTKUDOS_API = process.env.NEXT_PUBLIC_MINTKUDOS_API
const MINTKUDOS_COMMUNITY_ID = process.env.NEXT_PUBLIC_MINTKUDOS_COMMUNITY_ID
const MINTKUDOS_KEY = process.env.MINTKUDOS_KEY
// TODO: save this in DB
const MINTKUDOS_SIGNATURE = process.env.MINTKUDOS_SIGNATURE
const encodedString = btoa(MINTKUDOS_COMMUNITY_ID + ':' + MINTKUDOS_KEY)

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
      // TODO: move lower later
      try {
        const bodyParameters = {
          contributors: [address],
          signature: MINTKUDOS_SIGNATURE,
        }
        const config = {
          headers: {
            Authorization: `Basic ${encodedString}`,
          },
        }
        // TODO: make this dynamic
        const kudosTokenId = 628
        // add address to allowlist
        const result = await axios.post(
          `${MINTKUDOS_API}/v1/tokens/${kudosTokenId}/addContributors`,
          bodyParameters,
          config
        )
        // console.log(result)
        if (result.headers.status === 202) {
          console.log(result.headers.location)
          // TODO: check header/Location to know when the token has been claimed
          return res.json({ location: result.headers.location })
        }
      } catch (error) {
        // TODO: add error feedback
        console.error(error?.response?.data)
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
