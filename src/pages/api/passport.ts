/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { Passport } from '@gitcoinco/passport-sdk-types'
import { PassportReader } from '@gitcoinco/passport-sdk-reader'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import { CERAMIC_PASSPORT, NUMBER_OF_STAMP_REQUIRED } from 'constants/passport'
import { filterValidStamps } from 'utils/passport'

const reader = new PassportReader(CERAMIC_PASSPORT, '1')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { address } = req.query

  if (!address || typeof address === 'object')
    return res.json({ error: 'Wrong params' })

  console.log('address', address)

  const userId = await getUserId(address)
  console.log(userId)
  if (!(userId && Number.isInteger(userId)))
    return res.json({ error: 'userId not found' })

  // TODO: make this dynamic
  type SybilCheckTypes = 'GITCOIN_PASSPORT' | '35kBANK'
  const SYBIL_CHECK: SybilCheckTypes = 'GITCOIN_PASSPORT'

  if (SYBIL_CHECK === 'GITCOIN_PASSPORT') {
    try {
      const passport: Passport = await reader.getPassport(address)
      // console.log('** passport **', passport)
      const validStamps = filterValidStamps(passport.stamps)
      const requirement = `At least ${NUMBER_OF_STAMP_REQUIRED} Gitcoin Passport stamps`
      // console.log('validStamps', validStamps)
      const stampHashes = {}
      const stampProviders = {}
      if (passport?.stamps) {
        for (const stamp of passport?.stamps) {
          stampHashes[stamp.provider] = stamp.credential.credentialSubject.hash
        }
        for (const stamp of passport?.stamps) {
          stampProviders[stamp.provider] = stamp
        }
        console.log('stampHashes', stampHashes)
        // merge previous data without deleting other keys
        const updated = await db.raw(
          `update "users" set "gitcoin_stamps" = gitcoin_stamps || ? where "users"."id" = ?`,
          [stampHashes, userId]
        )
        // console.log('updated', updated)
        if (updated) console.log('stamps updated:', updated?.rowCount)
        const stampHashesSearch = []
        let whereCondition = 'gitcoin_stamps @> ?'
        Object.keys(stampHashes).map((key, index) => {
          const stampHash = {}
          stampHash[key] = stampHashes[key]
          stampHashesSearch.push(stampHash)
          if (index > 0) whereCondition += ' OR gitcoin_stamps @> ?'
        })
        // console.log('stampHashesSearch', stampHashesSearch)
        const sybil = await db(TABLES.users)
          .select('id', 'address')
          .whereNot(TABLE.users.id, userId)
          .whereNull(TABLE.users.sybil_user_id)
          // query for json instead of jsonb: .where(db.raw('gitcoin_stamps::TEXT LIKE ANY(?)', [stampHashesSearch]))
          .where(db.raw(`(${whereCondition})`, stampHashesSearch))
        console.log('sybil', sybil)
        if (sybil.length) {
          console.log('fraud detected', sybil)
          await db(TABLES.users)
            .where(TABLE.users.id, userId)
            .update({ sybil_user_id: sybil[0]?.id })
          return res.json({
            verified: false,
            requirement,
            fraud: sybil[0]?.address,
            validStampsCount: validStamps?.length,
            stamps: stampProviders,
          })
        }
      }
      if (validStamps?.length >= NUMBER_OF_STAMP_REQUIRED) {
        console.log('verified:', validStamps?.length)
      } else {
        console.log('not verified')
      }
      return res.json({
        verified: validStamps?.length >= NUMBER_OF_STAMP_REQUIRED,
        requirement,
        validStampsCount: validStamps?.length,
        stamps: stampProviders,
      })
    } catch (error) {
      console.error(error)
      res.json({
        error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
      })
    }
  } else if (SYBIL_CHECK === '35kBANK') {
    const NUMBER_OF_BANK_REQUIRED = 35000
    const requirement = `Hold a minimum of ${NUMBER_OF_BANK_REQUIRED} BANK tokens for at least 1 month˝`
    return res.json({ verified: 'TODO', requirement })
  }
}
