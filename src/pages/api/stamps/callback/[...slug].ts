/* eslint-disable no-console */
import * as base64 from "@ethersproject/base64"
import { createHash } from "crypto"
import { NextApiRequest, NextApiResponse } from 'next'

import * as twitterOAuth from "utils/stamps/platforms/twitter"
import * as google from "utils/stamps/platforms/google"
import * as facebook from "utils/stamps/platforms/facebook"
import * as linkedin from "utils/stamps/platforms/linkedin"
import * as discord from "utils/stamps/platforms/discord"
import * as poh from "utils/stamps/platforms/poh"
import * as ens from "utils/stamps/platforms/ens"
import { RequestPayload } from "utils/stamps/passport-types";
import { ALLOWED_PLATFORMS, STAMP_PLATFORMS } from "constants/passport"
import { TABLE, TABLES, db } from "utils/db"
import { trackBE } from "utils/mixpanel"
import { gql } from "graphql-request"
import { airstackGraphQLClient } from "utils/gql/airstack"
import { DEMO_ACCOUNTS_IDS } from "constants/index"
export const VERSION = "v0.0.0";

export type GenerateTwitterAuthUrlRequestBody = {
  callback?: string;
};

// SOURCE: https://github.com/gitcoinco/passport/blob/main/identity/src/credentials.ts
// Create an ordered array of the given input (of the form [[key:string, value:string], ...])
export const objToSortedArray = (obj: { [k: string]: string }): string[][] => {
  const keys: string[] = Object.keys(obj).sort();
  return keys.reduce((out: string[][], key: string) => {
    out.push([key, obj[key]]);
    return out;
  }, [] as string[][]);
};

// SOURCE: https://github.com/gitcoinco/passport/blob/main/platforms/src/Twitter/Providers/twitterAccountAge.ts
const checkTwitterAccountAge = (numberOfDays: number, createdAt: string): { valid: boolean; errors: string[] } => {
  const creationDate = new Date(createdAt);
  // Get the current date
  const currentDate = new Date();
  // Calculate the difference in milliseconds
  const diffTime = Math.abs(currentDate.getTime() - creationDate.getTime());
  // Convert to days
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays >= numberOfDays) {
    return {
      valid: true,
      errors: undefined,
    };
  } else {
    return {
      valid: false,
      errors: [`Your Twitter account is less than ${numberOfDays} days old (created at ${createdAt?.substring(0, 10)}). Please try another stamp.`],
    };
  }
};

const key = process.env.IAM_JWK

const generateHash = (record) => base64.encode(
  createHash("sha256")
    .update(key, "utf-8")
    .update(JSON.stringify(objToSortedArray(record)))
    .digest()
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const {
      slug: [platform],
      state,
      code,
      json,
      address: userAddress,
    } = req.query
    console.log(req.query)
    const address = (userAddress as string)?.split('?')[0] || state as string
    console.log(address)

    const socialId: any = {}
    let record: any = {}
    let result: any = {}
    let isStampValidated = false
    let status = ''
    const version = "0.0.0"

    if (!ALLOWED_PLATFORMS.includes(platform)) return res.status(200).send(`Unknown platform.`)

    const type = STAMP_PLATFORMS[platform].provider

    const [user] = await db(TABLES.users)
      .select('id')
      .where('address', 'ilike', `%${address}%`)
    const userId = user?.id
    console.log(userId)
    if (!(userId && Number.isInteger(userId))) {
      // trackBE(address, 'issue_user_not_found', { context: 'callback' })
      return res.status(403).json({ error: 'userId not found' })
    }

    const isDemoAccount = DEMO_ACCOUNTS_IDS.includes(userId)

    if (platform === 'google') {
      const googleProvider = new google.GoogleProvider();
      result = await googleProvider.verify({
        proofs: {
          code,
        },
      } as unknown as RequestPayload)
      console.log(result)
      if (result?.valid && result.record?.email) {
        socialId[platform] = result.record.email
        record = {
          type,
          version,
          "email": result.record.email
        }
      } else result = { valid: false, errors: result?.errors }
    } else if (platform === 'twitter') {
      const context = {}
      const sessionKey = state
      try {
        const twitterClient = await twitterOAuth.getAuthClient(sessionKey as string, code as string, context);
        const data = await twitterOAuth.getTwitterUserData(context, twitterClient);
        console.log('data', data)
        const numberOfDays = 180
        const checkAge = checkTwitterAccountAge(numberOfDays, data.createdAt)
        if (!checkAge.valid) {
          const status = checkAge.errors
          console.log('twitter age', status)
          res.redirect(`/confirmation?isStampValidated=${isStampValidated}&status=${status}&platform=${platform}`)
          return
        } else {
          result.valid = true
        }
        if (result?.valid && data.id) {
          socialId[platform] = data.id
          record = {
            type,
            version,
            "id": data.id
          }
        } else result = { valid: false }

      } catch (error) {
        console.log('twitter error', error)
        res.redirect(`/confirmation?isStampValidated=${isStampValidated}&status=${error}&platform=${platform}`)
        return
      }
    } else if (platform === 'facebook') {
      const FacebookProvider = new facebook.FacebookProvider();
      result = await FacebookProvider.verify({
        proofs: {
          accessToken: code,
        },
      } as unknown as RequestPayload)
      console.log(result)
      if (result?.valid && result.record?.user_id) {
        socialId[platform] = result.record.user_id
        record = {
          type,
          version,
          "user_id": result.record.user_id
        }
      } else result = { valid: false, errors: result?.errors }
    } else if (platform === 'linkedin') {
      const LinkedinProvider = new linkedin.LinkedinProvider();
      result = await LinkedinProvider.verify({
        proofs: {
          code,
        },
      } as unknown as RequestPayload)
      console.log(result)
      if (result?.valid && result.record?.id) {
        socialId[platform] = result.record.id
        record = {
          type,
          version,
          "id": result.record.id
        }
      } else result = { valid: false, errors: result?.errors }
    } else if (platform === 'discord') {
      const DiscordProvider = new discord.DiscordProvider();
      result = await DiscordProvider.verify({
        proofs: {
          code,
        },
      } as unknown as RequestPayload)
      console.log(result)
      if (result?.valid && result.record?.id) {
        socialId[platform] = result.record.id
        record = {
          type,
          version,
          "id": result.record.id
        }
      } else result = { valid: false, errors: result?.errors }
    } else if (platform === 'farcaster') {
      const query = gql`
      query GetWeb3SocialsOfFarcasters {
        Socials(input: {filter: {identity: {_in: ["${address}"]}, dappName: { _eq: farcaster }}, blockchain: ethereum}) {
          Social {
            dappName
            profileName
            userId
          }
        }
      }`
      try {
        const data: any = await airstackGraphQLClient.request(query)
        console.log(data)
        if (data?.Socials?.Social?.length) {
          const fid = data?.Socials?.Social[0].userId
          console.log('fid', fid)
          socialId[platform] = fid
          record = {
            type,
            version,
            id: fid
          }
          result.valid = true
        } else {
          result.valid = false
          result.errors = ["No Farcaster account associated to this address."]
        }
      } catch (e) {
        console.error(e)
        result.valid = false
      }
      // } else if (platform === 'brightid') {
      //   const BrightidProvider = new brightid.BrightIdProvider();
      //   result = await BrightidProvider.verify({
      //     proofs: {
      //       did: userDid,
      //     },
      //   } as unknown as RequestPayload)
      //   console.log(result)
      //   if (result?.valid && result.record?.id) {
      //     socialId[platform] = result.record.id
      //     record = {
      //       type,
      //       version,
      //       contextId: result.record.id,
      //       meets: "true"
      //     }
      //   } else result = {valid:false}
    } else if (platform === 'poh') {
      const PohProvider = new poh.PohProvider();
      result = await PohProvider.verify({
        address
      } as unknown as RequestPayload)
      console.log(result)
      if (result?.valid && result.record?.address) {
        socialId[platform] = result.record.address
        record = {
          type,
          version,
          address: result.record.address
        }
      } else result = { valid: false, errors: result?.errors }
    } else if (platform === 'ens') {
      const EnsProvider = new ens.EnsProvider();
      result = await EnsProvider.verify({
        address
      } as unknown as RequestPayload)
      console.log(result)
      if (result?.valid && result.record?.ens) {
        socialId[platform] = result.record.ens
        record = {
          type,
          version,
          ens: result.record.ens
        }
      } else result = { valid: false, errors: result?.errors }
    }
    console.log(record)
    const hash = `${VERSION}:${generateHash(record)}`
    console.log(hash)
    if (!result?.valid) {
      isStampValidated = false
      status = `${result?.errors || result?.errors?.length ? result?.errors?.[0] : 'error'}`
    }
    else if (hash?.length !== 51) {
      console.log(hash)
      console.log(hash?.length)
      isStampValidated = false
      status = `Problem with stamp (${hash}): close the window and try again.`
    } else {
      let sybil = []
      const stampHash: any = {}
      stampHash[record.type] = hash
      // check for sybils
      const sybilQuery = db(TABLES.users)
        .select('id', 'address')
        .whereNot(TABLE.users.id, userId)
        .whereNull(TABLE.users.sybil_user_id)
        // query for json instead of jsonb: .where(db.raw('ba_stamps::TEXT LIKE ANY(?)', [stampHashesSearch]))
        .where(db.raw(`(ba_stamps @> ?)`, [stampHash]))
        .orWhereNot(TABLE.users.id, userId)
        .where(TABLE.users.sybil_user_id, '=', 12)
        .where(db.raw(`(ba_stamps @> ?)`, [stampHash]))
      // console.log(sybilQuery.toString())
      sybil = await sybilQuery
      console.log('sybil', sybil)
      if (sybil?.length && !isDemoAccount) {
        // mark this user as a sybil attacker
        console.log('fraud detected:', sybil)
        trackBE(address, 'duplicate_stamps_ba', {
          sybil_id: sybil[0]?.id,
          sybil_address: sybil[0]?.address,
          // embed,
        })
        await db(TABLES.users)
          .where(TABLE.users.id, userId)
          .update({ sybil_user_id: sybil[0]?.id })
        isStampValidated = false
        status = 'Duplicate stamp detected.'
        const fraud = sybil[0]?.address
        if (json) {
          return res.status(200).json({
            isStampValidated,
            status,
            fraud,
            platform
          })
        } else {
          res.redirect(`/confirmation?isStampValidated=${isStampValidated}&status=${status}&platform=${platform}&fraud=${fraud}`)
          return
        }
      }
      // add stamps to ba_stamps
      console.log('stampHash', stampHash)
      const updated = await db.raw(
        `update "users" set "ba_stamps" = ba_stamps || ?, "socials" = socials || ? where "users"."id" = ?`,
        [stampHash, socialId, userId]
      )
      console.log('updated', updated)
      trackBE(address, 'stamp_added', {
        platform,
      })
      if (updated) console.log('stamps updated:', updated?.rowCount)
      isStampValidated = true
      status = `Stamp OK: ${hash} You can close the window.`
    }
    if (json) {
      return res.status(200).send({ isStampValidated, status, platform })
    } else {
      res.redirect(`/confirmation?isStampValidated=${isStampValidated}&status=${status}&platform=${platform}`)
    }
  } catch (error) {
    console.error('tc error', error)
    return res.status(200).send('ok')
  }
}
