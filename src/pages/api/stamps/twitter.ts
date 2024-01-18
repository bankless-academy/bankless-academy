/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import * as twitterOAuth from "utils/stamps/platforms/twitter"
import { DOMAIN_URL } from "constants/index";

export type GenerateTwitterAuthUrlRequestBody = {
  callback?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  twitterOAuth.initClientAndGetAuthUrl(`${DOMAIN_URL}/api/stamps/callback/twitter`).then((authUrl) => {
    res.redirect(authUrl)
  });
}
