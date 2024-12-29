/* eslint-disable no-console */
import { ImageResponse } from '@vercel/og'
import OgOnchainSummerChallenge from 'components/OgOnchainSummerChallenge'
import { DOMAIN_URL_ } from 'constants/index'
import { NextApiRequest } from 'next'

export const config = {
  runtime: 'edge',
}

export default async function handler(req: NextApiRequest) {
  const url = new URL(req.url)
  const urlParams = new URLSearchParams(url.search)
  const time = urlParams.get('time')
  console.log(time)

  const fontData = await fetch(
    new URL(
      `${DOMAIN_URL_}/fonts/clear-sans/TTF/ClearSans-Bold.ttf`,
      import.meta.url
    )
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(<OgOnchainSummerChallenge time={time} />, {
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
