/* eslint-disable no-console */
import axios from 'axios'
import { readContract } from '@wagmi/core'

import { GENERIC_ERROR_MESSAGE } from 'constants/index'
import { NextApiRequest, NextApiResponse } from 'next'
import UDPolygonABI from 'abis/UDPolygon.json'
import UDABI from 'abis/UD.json'

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
    const balanceOfUDPolygon: any = await readContract({
      address: '0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f',
      chainId: 137,
      abi: UDPolygonABI,
      functionName: 'balanceOf',
      args: [address],
    })
    console.log('balanceOfUDPolygon', parseInt(balanceOfUDPolygon))
    const balanceOfUD: any = await readContract({
      address: '0x049aba7510f45ba5b64ea9e658e342f904db358d',
      chainId: 1,
      abi: UDABI,
      functionName: 'balanceOf',
      args: [address],
    })
    console.log('balanceOfUD', parseInt(balanceOfUD))
    if (parseInt(balanceOfUDPolygon) > 0 || parseInt(balanceOfUD) > 0) {
      console.log('owns a UD')
      const config = {
        headers: {
          Authorization: `Bearer ${process.env.UD_SECRET_API_TOKEN}`,
        },
      }
      const r = await axios.get(
        `https://resolve.unstoppabledomains.com/reverse/${address}`,
        config
      )
      console.log(r)
      if (r?.data?.meta?.domain) domain = r?.data?.meta?.domain
    } else {
      console.log(console.log('NO UD'))
    }
    return res.status(200).json({ domain })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
