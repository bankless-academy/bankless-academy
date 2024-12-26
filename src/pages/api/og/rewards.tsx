/* eslint-disable no-console */
import { ImageResponse } from '@vercel/og'
import { NextApiRequest } from 'next'

import OGRewards from 'components/OGRewards'
import { DOMAIN_URL_ } from 'constants/index'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextApiRequest) {
  console.log('req', req)

  const rewards = await fetch(`${DOMAIN_URL_}/api/rewards?badge=14`)
  const rewardsData = await rewards.json()
  console.log(rewardsData)
  // const url = new URL(req.url)
  // const urlParams = new URLSearchParams(url.search)
  // const time = urlParams.get('time')
  // console.log(time)

  const fontData = await fetch(
    new URL(
      `${DOMAIN_URL_}/fonts/clear-sans/TTF/ClearSans-Bold.ttf`,
      import.meta.url
    )
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(<OGRewards rewards={rewardsData.rewards} />, {
    width: 1200,
    height: 628,
    fonts: [
      {
        name: 'ClearSans',
        data: fontData,
        style: 'normal',
      },
    ],
  })
}
