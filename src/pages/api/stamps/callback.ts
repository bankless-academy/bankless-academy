/* eslint-disable no-console */
import * as base64 from "@ethersproject/base64"
import { createHash } from "crypto"
import { NextApiRequest, NextApiResponse } from 'next'

import * as twitterOAuth from "utils/stamps/platforms/twitter"

export const VERSION = "v0.0.0";

export type GenerateTwitterAuthUrlRequestBody = {
  callback?: string;
};

// Create an ordered array of the given input (of the form [[key:string, value:string], ...])
export const objToSortedArray = (obj: { [k: string]: string }): string[][] => {
  const keys: string[] = Object.keys(obj).sort();
  return keys.reduce((out: string[][], key: string) => {
    out.push([key, obj[key]]);
    return out;
  }, [] as string[][]);
};

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

  const { state, code } = req.query

  const context = {}
  const sessionKey = state
  const twitterClient = await twitterOAuth.getAuthClient(sessionKey as string, code as string, context);
  console.log('twitterClient', twitterClient)
  const data = await twitterOAuth.getTwitterUserData(context, twitterClient);
  console.log('data', data)

  const numberOfDays = 180

  const checkAge = checkTwitterAccountAge(numberOfDays, data.createdAt)
  if (!checkAge.valid) {
    res.status(200).send(checkAge.errors)
  }

  const record = {
    "type": "twitterAccountAgeGte#180",
    "version": "0.0.0",
    "id": data.id
  }

  const hash = generateHash(record)
  console.log(hash)
  // TODO: add to DB
  const twitterHash = `${VERSION}:${hash}`
  res.status(200).send(twitterHash);

}
