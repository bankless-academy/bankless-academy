/* eslint-disable no-console */
import axios from 'axios'

import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const DEV_SECRET = process.env.DEV_SECRET
  const param =
    DEV_SECRET && req.query?.dev === DEV_SECRET ? req.query : req.body
  const { address } = param
  if (!address)
    return res
      .status(400)
      .json({ isQuestValidated: false, error: 'Wrong params' })

  console.log('address', address)

  try {
    let domain = null
    const config = {
      headers: {
        Authorization: `Bearer ${process.env.UD_SECRET_API_TOKEN}`,
      },
    }
    const r = await axios.get(
      `https://api.unstoppabledomains.com/resolve/reverse/${address}`,
      config
    )
    console.log(r)
    if (r?.data?.meta?.domain) domain = r?.data?.meta?.domain
    return res.status(200).json({ domain })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
