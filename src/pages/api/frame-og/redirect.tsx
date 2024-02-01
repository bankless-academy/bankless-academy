import { NextApiRequest, NextApiResponse } from 'next'

import { DOMAIN_URL } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query
  const redirect = `${DOMAIN_URL}/lessons/${id}`
  return res
    .status(302)
    .setHeader('Location', redirect)
    .send('Redirecting to lesson.')
}
