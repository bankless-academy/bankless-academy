/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import badges from 'data/badges.json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // const { address } = req.body
  let { address } = req.query

  if (typeof address === 'string') {
    address = address.toLowerCase()
    // console.log(req)
    if (!address) return res.status(400).json({ error: 'Wrong params' })
    // console.log('address', address)

    const badgeTokenIds = address in badges ? badges[address] : []

    return res.status(200).json({ badgeTokenIds })
  }
}
