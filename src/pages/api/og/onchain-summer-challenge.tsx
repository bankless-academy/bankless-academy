/* eslint-disable no-console */
import { ImageResponse } from '@vercel/og'
import OgOnchainSummerChallenge from 'components/OgOnchainSummerChallenge'
import { NextApiRequest } from 'next'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextApiRequest) {
  const url = new URL(req.url)
  const urlParams = new URLSearchParams(url.search)
  const time = urlParams.get('time')
  console.log(time)

  return new ImageResponse(<OgOnchainSummerChallenge time={time} />, {
    width: 1200,
    height: 628,
  })
}
