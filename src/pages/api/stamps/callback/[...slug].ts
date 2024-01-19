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
    address,
  } = req.query
  console.log(req.query)

  let record = {}

  if (platform === 'google') {
    const googleProvider = new google.GoogleProvider();
    const result = await googleProvider.verify({
      proofs: {
        code,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.email) {
      record = {
        "type": "Google",
        "version": "0.0.0",
        "email": result.record.email
      }
    } else res.status(200).send(`Problem with stamp (${JSON.stringify(result)}): close the window and try again.`)
  } else if (platform === 'twitter') {
    const context = {}
    const sessionKey = state
    const twitterClient = await twitterOAuth.getAuthClient(sessionKey as string, code as string, context);
    const data = await twitterOAuth.getTwitterUserData(context, twitterClient);
    console.log('data', data)

    const numberOfDays = 180

    const checkAge = checkTwitterAccountAge(numberOfDays, data.createdAt)
    if (!checkAge.valid) {
      res.status(200).send(checkAge.errors)
    }

    record = {
      "type": "twitterAccountAgeGte#180",
      "version": "0.0.0",
      "id": data.id
    }
  } else if (platform === 'facebook') {
    const FacebookProvider = new facebook.FacebookProvider();
    const result = await FacebookProvider.verify({
      proofs: {
        accessToken,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.user_id) {
      record = {
        "type": "Facebook",
        "version": "0.0.0",
        "user_id": result.record.user_id
      }
    } else res.status(200).send(`Problem with stamp (${JSON.stringify(result)}): close the window and try again.`)
  } else if (platform === 'linkedin') {
    const LinkedinProvider = new linkedin.LinkedinProvider();
    const result = await LinkedinProvider.verify({
      proofs: {
        code,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.id) {
      // TODO: understand why user id is different for gitcoin passport
      record = {
        "type": "Linkedin",
        "version": "0.0.0",
        "id": result.record.id
      }
    } else res.status(200).send(`Problem with stamp (${JSON.stringify(result)}): close the window and try again.`)
  } else if (platform === 'discord') {
    const DiscordProvider = new discord.DiscordProvider();
    const result = await DiscordProvider.verify({
      proofs: {
        code,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.id) {
      record = {
        "type": "Discord",
        "version": "0.0.0",
        "id": result.record.id
      }
    } else res.status(200).send(`Problem with stamp (${JSON.stringify(result)}): close the window and try again.`)
  } else if (platform === 'brightid') {
    const BrightidProvider = new brightid.BrightIdProvider();
    const result = await BrightidProvider.verify({
      proofs: {
        did: userDid,
      },
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.id) {
      record = {
        "type": "Brightid",
        "version": "0.0.0",
        contextId: result.record.id,
        meets: "true"
      }
    } else res.status(200).send(`Problem with stamp (${JSON.stringify(result)}): close the window and try again.`)
  } else if (platform === 'poh') {
    // TODO: add signature verification? (Ed25519 / EIP712)
    const PohProvider = new poh.PohProvider();
    const result = await PohProvider.verify({
      address
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.address) {
      record = {
        "type": "Poh",
        "version": "0.0.0",
        address: result.record.address,
      }
    } else res.status(200).send(`Problem with stamp (${JSON.stringify(result)}): close the window and try again.`)
  } else if (platform === 'ens') {
    // TODO: add signature verification? (Ed25519 / EIP712)
    const EnsProvider = new ens.EnsProvider();
    const result = await EnsProvider.verify({
      address
    } as unknown as RequestPayload)
    console.log(result)
    if (result.valid && result.record?.ens) {
      record = {
        "type": "Ens",
        "version": "0.0.0",
        ens: result.record.ens,
      }
    } else res.status(200).send(`Problem with stamp (${JSON.stringify(result)}): close the window and try again.`)
  }
  console.log(record)
  if (JSON.stringify(record) === '{}') {
    res.status(200).send(`Problem with stamp (empty record): close the window and try again.`)
  }
  const hash = `${VERSION}:${generateHash(record)}`
  console.log(hash)
  if (hash?.length !== 51)
    res.status(200).send(`Problem with stamp (${hash}): close the window and try again.`)
  else {
    // TODO: add to DB
    res.status(200).send(`Stamp OK: ${hash} You can close the window.`)
  }

  return res.status(200).json(req.query)
}
