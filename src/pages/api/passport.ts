/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
// import { Passport } from '@gitcoinco/passport-sdk-types'
// import { PassportReader } from '@gitcoinco/passport-sdk-reader'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import { NUMBER_OF_STAMP_REQUIRED, PASSPORT_COMMUNITY_ID, PASSPORT_VERSION } from 'constants/passport'
// import { filterValidStamps } from 'utils/passport'
import { trackBE } from 'utils/mixpanel'
// import axios from 'axios'
import { PassportResponseSchema, fetchPassport, submitPassport } from 'utils/passport_lib'

// const reader = new PassportReader(CERAMIC_PASSPORT, '1')

// TEMP: update back to 20
const REQUIRED_PASSPORT_SCORE = 100

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const DEV_SECRET = process.env.DEV_SECRET
  const version = PASSPORT_VERSION
  const param =
    DEV_SECRET && req.query?.dev === DEV_SECRET ? req.query : req.body
  const { address, embed, isProfile } = param

  if (!address || typeof address === 'object')
    return res.status(400).json({ error: 'Wrong params' })

  console.log('address', address)

  const isBot =
    req.headers['user-agent'].includes('python') ||
    req.headers['user-agent'].includes('curl') ||
    false
  console.log('isBot', isBot)

  const userId = await getUserId(address, embed, isBot)
  console.log(userId)
  if (!(userId && Number.isInteger(userId)))
    return res.status(403).json({ error: 'userId not found' })

  const [user] = await db(TABLES.users)
    .select('sybil_user_id')
    .where('address', 'ilike', `%${address}%`)

  // TODO: make this dynamic
  type SybilCheckTypes = 'GITCOIN_PASSPORT' | '35kBANK'
  const SYBIL_CHECK: SybilCheckTypes = 'GITCOIN_PASSPORT'

  const requirement = `At least ${NUMBER_OF_STAMP_REQUIRED} Gitcoin Passport stamps`
  let score = 0
  // TEMP: bypass passport check (accounts having issues with Ceramic API)
  const TEMP_PASSPORT_WHITELIST = [
    // '0xda1d8a345Fc6934Da60E81b392F485cbfd350eaE'.toLowerCase(),
    '0x1EC1CcEF3e1735bdA3F4BA698e8a524AA7c93274'.toLowerCase(),
    '0x5B1899D88b4Ff0Cf5A34651e7CE7164398211C66'.toLowerCase(),
    '0xd9c1570148E36FF9657b67AcE540052341DDF7de'.toLowerCase(),
    '0xBDe4CB8d858adFaDDc5517bd54479a066559E575'.toLowerCase(),
    // '0xda1d8a345Fc6934Da60E81b392F485cbfd350eaE'.toLowerCase(),
    '0xB30dD1198Feed1e22EC969f61EEd04cB75937adf'.toLowerCase(),
    '0xb749A586080436e616f097f193Ba9CB6A25E7Ea6'.toLowerCase(),
  ]
  if (TEMP_PASSPORT_WHITELIST.includes(address.toLowerCase())) {
    return res.status(200).json({
      version,
      verified: true,
      score: 99,
      requirement,
      validStampsCount: 99,
    })
  }

  if (SYBIL_CHECK === 'GITCOIN_PASSPORT') {
    try {
      if (!isProfile) {
        const submit = await submitPassport(address, PASSPORT_COMMUNITY_ID)
        // console.log(submit)
        if (submit.status === 200) {
          const fetchScore = await fetchPassport(address, PASSPORT_COMMUNITY_ID)
          if (fetchScore.ok) {
            const res = PassportResponseSchema.parse(await fetchScore.json())
            console.log(res)
            if (res?.score) {
              score = parseInt(res.score)
            }
          } else {
            console.log('score not found ...')
          }
        }
      }
      const [{ ba_stamps: stampHashes }] = await db(TABLES.users)
        .select('ba_stamps')
        .where(TABLE.users.id, userId)
      console.log('stampHashes', stampHashes)
      const validStamps = Object.keys(stampHashes)
      console.log('validStamps', validStamps)
      const sybilQuery = db(TABLES.users)
        .select('id', 'address')
        .where(TABLE.users.id, '=', db(TABLES.users)
          .select('sybil_user_id')
          .where(TABLE.users.id, userId)
          .whereNotNull(TABLE.users.sybil_user_id)
        )
      const sybil = await sybilQuery
      console.log('sybil', sybil)
      if (isBot) {
        // HACK: bot
        console.log('bot detected:', address)
        trackBE(address, 'bot_detected', {
          ua: req.headers['user-agent'],
          embed,
        })
        await db(TABLES.users)
          .where(TABLE.users.id, userId)
          .update({ sybil_user_id: 12 })
        res.status(403).json({
          version,
          verified: false,
          score,
          requirement,
          validStampsCount: 0,
        })
      }

      const validStampsCount = validStamps?.length
      if (sybil?.length) {
        return res.status(200).json({
          version,
          verified: false,
          score,
          requirement,
          fraud: sybil[0]?.address,
          validStampsCount,
          stamps: stampHashes,
        })
      }
      if (validStamps?.length >= NUMBER_OF_STAMP_REQUIRED) {
        console.log('verified:', { validStampsCount, score })
      } else {
        console.log('not verified:', validStamps?.length)
      }
      return res.status(200).json({
        version,
        verified: validStamps?.length >= NUMBER_OF_STAMP_REQUIRED || score >= REQUIRED_PASSPORT_SCORE,
        score,
        fraud:
          user?.sybil_user_id === 12
            ? '0x0000000000000000000000000000000000000000'
            : null,
        requirement,
        validStampsCount: validStamps?.length,
        stamps: stampHashes,
      })
    } catch (error) {
      console.error(error)
      res.status(500).json({
        version,
        verified: false,
        score,
        requirement,
        validStampsCount: 0,
        error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
      })
    }
  } else if (SYBIL_CHECK === '35kBANK') {
    // not implemented yet
    const NUMBER_OF_BANK_REQUIRED = 35000
    const requirement = `Hold a minimum of ${NUMBER_OF_BANK_REQUIRED} BANK tokens for at least 1 month˝`
    return res.status(200).json({ verified: 'TODO', requirement })
  }
}
