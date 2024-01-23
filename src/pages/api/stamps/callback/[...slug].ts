/* eslint-disable no-console */
import * as base64 from "@ethersproject/base64"
import { createHash } from "crypto"
import { NextApiRequest, NextApiResponse } from 'next'

import * as twitterOAuth from "utils/stamps/platforms/twitter"
import * as google from "utils/stamps/platforms/google"
import * as facebook from "utils/stamps/platforms/facebook"
import * as linkedin from "utils/stamps/platforms/linkedin"
import * as discord from "utils/stamps/platforms/discord"
import * as brightid from "utils/stamps/platforms/brightid"
import * as poh from "utils/stamps/platforms/poh"
import * as ens from "utils/stamps/platforms/ens"
import { RequestPayload } from "utils/stamps/passport-types";
import { ALLOWED_PROVIDERS } from "constants/passport"
import { TABLES, db } from "utils/db"

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
      errors: [`Twitter account age is less than ${numberOfDays} days (created at ${createdAt})`],
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
  const {
    slug: [platform],
    state,
    code,
    accessToken,
    userDid,
    json,
    address
  } = req.query
  console.log(req.query)
  const userAddress = address || state
  console.log(userAddress)

  let record: any = {}
  let result: any = {}
  let isStampValidated = false
  let status = ''
  const version = "0.0.0"

  if (!ALLOWED_PROVIDERS.map(provider => provider?.toLowerCase()).includes(platform?.toLowerCase())) return res.status(200).send(`Unknown platform.`)

  const [user] = await db(TABLES.users)
    .select('id')
    .where('address', 'ilike', `%${userAddress as string}%`)
  const userId = user?.id
  console.log(userId)
  if (!(userId && Number.isInteger(userId)))
    return res.status(403).json({ error: 'userId not found' })

  if (platform === 'google') {
    const googleProvider = new google.GoogleProvider();
    result = await googleProvider.verify({
      proofs: {
        code,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.email) {
      record = {
        "type": "Google",
        version,
        "email": result.record.email
      }
    } else result.valid = false
  } else if (platform === 'twitter') {
    const context = {}
    const sessionKey = state
    const twitterClient = await twitterOAuth.getAuthClient(sessionKey as string, code as string, context);
    const data = await twitterOAuth.getTwitterUserData(context, twitterClient);
    console.log('data', data)
    const numberOfDays = 180
    const checkAge = checkTwitterAccountAge(numberOfDays, data.createdAt)
    if (!checkAge.valid) {
      return res.status(200).send(checkAge.errors)
    }
    result.valid = true
    if (result.valid && data.id) {
      record = {
        "type": "twitterAccountAgeGte#180",
        version,
        "id": data.id
      }
    } else result.valid = false
  } else if (platform === 'facebook') {
    const FacebookProvider = new facebook.FacebookProvider();
    result = await FacebookProvider.verify({
      proofs: {
        accessToken,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.user_id) {
      record = {
        "type": "Facebook",
        version,
        "user_id": result.record.user_id
      }
    } else result.valid = false
  } else if (platform === 'linkedin') {
    const LinkedinProvider = new linkedin.LinkedinProvider();
    result = await LinkedinProvider.verify({
      proofs: {
        code,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.id) {
      // TODO: understand why user id is different for gitcoin passport
      record = {
        "type": "Linkedin",
        version,
        "id": result.record.id
      }
    } else result.valid = false
  } else if (platform === 'discord') {
    const DiscordProvider = new discord.DiscordProvider();
    result = await DiscordProvider.verify({
      proofs: {
        code,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.id) {
      record = {
        "type": "Discord",
        version,
        "id": result.record.id
      }
    } else result.valid = false
  } else if (platform === 'brightid') {
    const BrightidProvider = new brightid.BrightIdProvider();
    result = await BrightidProvider.verify({
      proofs: {
        did: userDid,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.id) {
      record = {
        "type": "Brightid",
        version,
        contextId: result.record.id,
        meets: "true"
      }
    } else result.valid = false
  } else if (platform === 'poh') {
    // TODO: add signature verification? (Ed25519 / EIP712)
    const PohProvider = new poh.PohProvider();
    result = await PohProvider.verify({
      address
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.address) {
      record = {
        "type": "Poh",
        version,
        address: result.record.address,
      }
    } else result.valid = false
  } else if (platform === 'ens') {
    // TODO: add signature verification? (Ed25519 / EIP712)
    const EnsProvider = new ens.EnsProvider();
    result = await EnsProvider.verify({
      address
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.ens) {
      record = {
        "type": "Ens",
        version,
        ens: result.record.ens,
      }
    } else result.valid = false
  }
  console.log(record)
  const hash = `${VERSION}:${generateHash(record)}`
  console.log(hash)
  if (!result?.valid) {
    isStampValidated = false
    status = `Problem with stamp (${JSON.stringify(result)}): close the window and try again.`
  }
  else if (hash?.length !== 51) {
    console.log(hash)
    console.log(hash?.length)
    isStampValidated = false
    status = `Problem with stamp (${hash}): close the window and try again.`
  } else {
    // TODO: add to DB
    const stampHashes: any = {}
    stampHashes[record.type] = hash
    console.log('stampHashes', stampHashes)
    const updated = await db.raw(
      `update "users" set "ba_stamps" = ba_stamps || ? where "users"."id" = ?`,
      [stampHashes, userId]
    )
    console.log('updated', updated)
    if (updated) console.log('stamps updated:', updated?.rowCount)
    isStampValidated = true
    status = `Stamp OK: ${hash} You can close the window.`
  }
  if (json) {
    return res.status(200).send({ isStampValidated, status })
  } else {
    res.redirect(`/stamp_confirmation.html?isStampValidated=${isStampValidated}&status=${status}&platform=${platform}`)
  }
}
