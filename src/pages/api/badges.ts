/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import badges from 'mock/badges.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // const { address } = req.body
  const { address } = req.query
  // console.log(req)
  if (!address) return res.status(400).json({ error: 'Wrong params' })
  console.log('address', address)

  return res.status(200).json(badges)
}
