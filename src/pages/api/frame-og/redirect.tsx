import { NextApiRequest, NextApiResponse } from 'next'

import { DOMAIN_URL } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, platform } = req.query
  const redirect = `${DOMAIN_URL}/lessons/${id}?referral=quiz_${platform}`
  return res
    .status(302)
    .setHeader('Location', redirect)
    .send('Redirecting to lesson.')
}
