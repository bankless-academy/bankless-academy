/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import * as twitterOAuth from "utils/stamps/platforms/twitter"

export type GenerateTwitterAuthUrlRequestBody = {
  callback?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { address } = req.query
  console.log(address)
  twitterOAuth.initClientAndGetAuthUrl(`${process.env.NEXT_PUBLIC_STAMP_CALLBACK}/twitter?address=${address}`).then((authUrl) => {
    res.redirect(authUrl?.replace('https://twitter.com', 'https://x.com'))
  });
}
