/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { Passport } from '@gitcoinco/passport-sdk-types'
import { PassportReader } from '@gitcoinco/passport-sdk-reader'

import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import {
  CERAMIC_PASSPORT,
  NUMBER_OF_STAMP_REQUIRED,
  getValidStamps,
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

  try {
    const passport: Passport = await reader.getPassport(address)
    console.log('** passport **', passport)
    const validStamps = getValidStamps(passport)
    if (validStamps.length >= NUMBER_OF_STAMP_REQUIRED) {
      console.log('verified')
    } else {
      console.log('not verified')
    }
    return res.json(passport)
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
