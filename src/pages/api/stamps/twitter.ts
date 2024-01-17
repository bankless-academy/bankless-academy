/* eslint-disable no-console */
import * as twitterOAuth from "utils/stamps/platforms/twitter"
import { NextApiRequest, NextApiResponse } from 'next'

export type GenerateTwitterAuthUrlRequestBody = {
  callback?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { callback: callbackOverride } = req.body as GenerateTwitterAuthUrlRequestBody;
  twitterOAuth.initClientAndGetAuthUrl(callbackOverride).then((authUrl) => {
    res.redirect(authUrl)
  });
}
