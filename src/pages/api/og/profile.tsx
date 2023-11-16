/* eslint-disable no-console */
import { ImageResponse } from '@vercel/og'
import { DOMAIN_URL, LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { NextApiRequest } from 'next'

export const config = {
  runtime: 'edge',
}

function shortenAddress(address: string): string {
  return `${address?.substr(0, 6)}...${address?.substr(38, 4)}`
}

export default async function handler(req: NextApiRequest) {
  const url = new URL(req.url)
  const urlParams = new URLSearchParams(url.search)
  const address = urlParams.get('address')
  // console.log(address)
  const badgeId = urlParams.get('badgeId')
  console.log(badgeId)

  const badgeImageLink = LESSONS.find(
    (lesson: LessonType) => lesson.badgeId?.toString() === badgeId
  )?.badgeImageLink

  // console.log(badgeImageLink)

  let error = ''
  if (!address) error = 'missing address'

  const res = await fetch(`${DOMAIN_URL}/api/user/${address}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const user = await res.json()
  console.log(user)
  const badgeTokenIds = user.badgeTokenIds
  if (user.error) error = user.error
  else {
    if (
      badgeId &&
      (!badgeImageLink || !badgeTokenIds.includes(parseInt(badgeId)))
    )
      error = 'badge not found'
  }
  console.log(error)

  if (error)
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 40,
            color: 'black',
            background: 'white',
            width: '100%',
            height: '100%',
            padding: '50px 200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {error}
        </div>
      ),
      {
        width: 1200,
        height: 628,
      }
    )

  const fontData = await fetch(
    new URL(
      `${DOMAIN_URL}/fonts/clear-sans/TTF/ClearSans-Bold.ttf`,
      import.meta.url
    )
  ).then((res) => res.arrayBuffer())

  // TODO: add badge verification

  return new ImageResponse(
    (
      <>
        <img
          style={{
            display: 'flex',
            position: 'absolute',
            width: '1200px',
            height: '628px',
          }}
          src={`${DOMAIN_URL}/images/social_background_purple.png`}
        />
        <img
          style={{
            display: 'flex',
            position: 'absolute',
            top: '114px',
            left: '114px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
          }}
          src={badgeImageLink ? `${DOMAIN_URL}${badgeImageLink}` : user.avatar}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '180px',
            left: '600px',
            fontSize: 50,
            fontFamily: '"ClearSans"',
            color: 'white',
            width: '500px',
            height: '200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Explorer&apos;s address
        </div>
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '300px',
            left: '600px',
            fontSize: 40,
            fontFamily: '"ClearSans"',
            color: 'white',
            width: '500px',
            height: '200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {user.ensName || shortenAddress(address)}
        </div>
      </>
    ),
    {
      width: 1200,
      height: 628,
      fonts: [
        {
          name: 'ClearSans',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
