/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { Passport } from '@gitcoinco/passport-sdk-types'
import { PassportReader } from '@gitcoinco/passport-sdk-reader'

import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import {
  CERAMIC_PASSPORT,
  NUMBER_OF_STAMP_REQUIRED,
  filterValidStamps,
} from 'pages/passport'

const reader = new PassportReader(CERAMIC_PASSPORT, '1')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { address } = req.query

  if (!address || typeof address === 'object')
    return res.json({ error: 'Wrong params' })

  console.log('address', address)

  // TODO: make this dynamic
  type SybilCheckTypes = 'GITCOIN_PASSPORT' | '35kBANK'
  const SYBIL_CHECK: SybilCheckTypes = 'GITCOIN_PASSPORT'

  if (SYBIL_CHECK === 'GITCOIN_PASSPORT') {
    try {
      const passport: Passport = await reader.getPassport(address)
      // console.log('** passport **', passport)
      const validStamps = filterValidStamps(passport.stamps)
      // TODO: check that credentialSubject hash is not already used by another address
      const requirement = `At least ${NUMBER_OF_STAMP_REQUIRED} Gitcoin Passport stamps`
      if (validStamps.length >= NUMBER_OF_STAMP_REQUIRED) {
        console.log('verified:', validStamps.length)
      } else {
        console.log('not verified')
      }
      return res.json({
        verified: validStamps.length >= NUMBER_OF_STAMP_REQUIRED,
        requirement,
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
