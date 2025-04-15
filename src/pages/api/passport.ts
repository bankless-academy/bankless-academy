/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLE, TABLES, getUserId } from 'utils/db'
import { DEMO_ACCOUNTS_IDS, GENERIC_ERROR_MESSAGE } from 'constants/index'
import { ALLOWED_PROVIDERS, NUMBER_OF_STAMP_REQUIRED, PASSPORT_COMMUNITY_ID, PASSPORT_VERSION, REQUIRED_PASSPORT_SCORE } from 'constants/passport'
import { trackBE } from 'utils/mixpanel'
import { PassportResponseSchema, fetchPassport } from 'utils/passport_lib'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const DEV_SECRET = process.env.DEV_SECRET
  const version = PASSPORT_VERSION
  const param =
    DEV_SECRET && req.query?.dev === DEV_SECRET ? req.query : req.body
  const { address, embed, isProfile, reset } = param

  if (!address || typeof address === 'object')
    return res.status(400).json({ error: 'Wrong params' })

  console.log('address', address)

  const isBot =
    req.headers['user-agent'].includes('python') ||
    req.headers['user-agent'].includes('curl') ||
    // req.headers['user-agent'].includes('Mozilla') && req.headers['user-agent'].includes('Chrome') ||
    false
  console.log('isBot', isBot)

  const userId = await getUserId(address, embed, isBot)
  console.log(userId)
  if (!(userId && Number.isInteger(userId))) {
    trackBE(address, 'issue_user_not_found', { context: 'passport' })
    return res.status(403).json({ error: 'userId not found' })
  }

  const isDemoAccount = DEMO_ACCOUNTS_IDS.includes(userId)

  // Allow to reset stamps for demo
  if (reset && isDemoAccount) {
    console.log(`Reset stamps for ${address}`)
    await db(TABLES.users)
      .where(TABLE.users.id, userId)
      .update({ ba_stamps: {} })
    return res.status(200).json({})
  }

  const [user] = await db(TABLES.users)
    .select(TABLE.users.sybil_user_id, TABLE.users.ba_stamps)
    .where('address', 'ilike', `%${address}%`)

  const initial_stamps = Object.keys(user.ba_stamps)
  console.log('initial_stamps', initial_stamps)
  if (!initial_stamps?.includes('preloaded') && !isDemoAccount) {
    // pre-load farcaster & ens
    try {
      await fetch(
        `${req.headers.origin}/api/stamps/callback/farcaster?json=true&address=${address}`
      )
      await fetch(
        `${req.headers.origin}/api/stamps/callback/ens?json=true&address=${address}`
      )
      // await fetch(
      //   `${req.headers.origin}/api/stamps/callback/poh?json=true&address=${address}`
      // )
      await db.raw(
        `update "users" set "ba_stamps" = ba_stamps || ? where "users"."id" = ?`,
        [{ preloaded: true }, userId]
      )
      console.log('stamp_preloaded')
    } catch (error) {
      console.error('Error preloading stamps:', error)
    }
  }

  // TODO: make this dynamic
  type SybilCheckTypes = 'GITCOIN_PASSPORT' | '35kBANK'
  const SYBIL_CHECK: SybilCheckTypes = 'GITCOIN_PASSPORT'

  const requirement = `At least ${NUMBER_OF_STAMP_REQUIRED} Human Passport stamps`
  let score = 0
  // TEMP: bypass passport check (accounts having issues with Ceramic API)
  // const TEMP_PASSPORT_WHITELIST = [
  // '0xda1d8a345Fc6934Da60E81b392F485cbfd350eaE'.toLowerCase(),
  // '0x1EC1CcEF3e1735bdA3F4BA698e8a524AA7c93274'.toLowerCase(),
  // '0x5B1899D88b4Ff0Cf5A34651e7CE7164398211C66'.toLowerCase(),
  // '0xd9c1570148E36FF9657b67AcE540052341DDF7de'.toLowerCase(),
  // '0xBDe4CB8d858adFaDDc5517bd54479a066559E575'.toLowerCase(),
  // '0xda1d8a345Fc6934Da60E81b392F485cbfd350eaE'.toLowerCase(),
  // '0xB30dD1198Feed1e22EC969f61EEd04cB75937adf'.toLowerCase(),
  // '0xb749A586080436e616f097f193Ba9CB6A25E7Ea6'.toLowerCase(),
  // ]
  // if (TEMP_PASSPORT_WHITELIST.includes(address.toLowerCase())) {
  //   return res.status(200).json({
  //     version,
  //     verified: true,
  //     score: 99,
  //     requirement,
  //     validStampsCount: 99,
  //   })
  // }

  if (SYBIL_CHECK === 'GITCOIN_PASSPORT') {
    try {
      if (!isProfile && !isDemoAccount) {
        try {
          // const submit = await submitPassport(address, PASSPORT_COMMUNITY_ID)
          // console.log(submit)
          // if (submit.status === 200) {
            const fetchScore = await fetchPassport(address, PASSPORT_COMMUNITY_ID)
            if (fetchScore.ok) {
              const res = PassportResponseSchema.parse(await fetchScore.json())
              console.log('Passport score: ', res)
              if (res?.score) {
                score = parseInt(res.score)
              }
            } else {
              console.log('score not found ...')
            }
          // }
        } catch (error) {
          console.error('Error fetching passport score:', error)
        }
      }
      const [{ ba_stamps: stampHashes }] = await db(TABLES.users)
        .select('ba_stamps')
        .where(TABLE.users.id, userId)
      console.log('stampHashes', stampHashes)
      delete stampHashes?.preloaded
      const validStamps = Object.keys(stampHashes).filter(stamp => ALLOWED_PROVIDERS.includes(stamp))
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
      if (validStampsCount >= NUMBER_OF_STAMP_REQUIRED) {
        console.log('verified:', { validStampsCount, score })
      } else {
        console.log('not verified:', validStampsCount)
        // check if user has a farcaster account
        const farcasterUsers = await fetch(`https://api.neynar.com/v2/farcaster/user/bulk-by-address?addresses=${address}`, {
          headers: {
            accept: 'application/json',
            api_key: process.env.NEYNAR_API_KEY
          }
        })
        const farcasterUsersData = await farcasterUsers.json()
        console.log('farcasterUsersData', farcasterUsersData)
        if (farcasterUsersData[address.toLowerCase()]?.length) {
          console.log('user has a farcaster account')

          // Check if the address is in the list of verified_addresses
          const farcasterUser = farcasterUsersData[address.toLowerCase()][0]
          const verifiedAddresses = farcasterUser.verified_addresses?.eth_addresses || []
          const isAddressVerified = verifiedAddresses.includes(address.toLowerCase())

          console.log('isAddressVerified', isAddressVerified)
          if (isAddressVerified) {
            return res.status(200).json({
              version,
              verified: isAddressVerified,
              score: 20,
              requirement,
              validStampsCount: 1,
              stamps: {
                Farcaster: farcasterUser.fid
              },
            })
          }
        }
      }
      return res.status(200).json({
        version,
        verified: validStampsCount >= NUMBER_OF_STAMP_REQUIRED || score >= REQUIRED_PASSPORT_SCORE,
        score,
        fraud:
          user?.sybil_user_id === 12
            ? '0x0000000000000000000000000000000000000000'
            : null,
        requirement,
        validStampsCount: validStampsCount,
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
