/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { DOMAIN_URL_ } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    lesson_slug,
    platform,
    provenance,
    explorerAddress,
    referralAddress,
  } = req.query
  // TODO: track referralAddress
  console.log('referralAddress', referralAddress)
  const redirect =
    provenance === 'datadisk'
      ? `https://highlight.xyz/mint/64b810dda23ab034b49a1340?referral=${provenance}_${platform}`
      : explorerAddress
      ? `${DOMAIN_URL_}/explorer/${explorerAddress}`
      : `${DOMAIN_URL_}/lessons/${lesson_slug}?referral=${provenance}_${platform}`
  return res
    .status(302)
    .setHeader('Location', redirect)
    .send('Redirecting to lesson.')
}
