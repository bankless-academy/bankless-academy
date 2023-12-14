/* eslint-disable no-console */
import { ImageResponse } from '@vercel/og'
import OgSocial from 'components/OgSocial'
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
  const badgeId = urlParams.get('badge')
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
      (!badgeImageLink || !badgeTokenIds?.includes(parseInt(badgeId)))
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

  const ensData = await fetch(`https://ensdata.net/${user.address}`).then(
    (res) => res.json()
  )

  console.log(ensData)
  if (ensData.avatar_url?.includes('api.center.dev/v2')) {
    // convert to v1 to return png instead of webp
    const [avatar] = ensData.avatar_url
      .replace('api.center.dev/v2/', 'api.center.dev/v1/')
      .replace('/nft/', '/')
      .replace('/render/', '/')
      .replace('/medium', '/medium/media')
      .split('?')
    console.log(avatar)
    user.avatar = avatar
  }

  const explorerName = user.ensName || shortenAddress(address)

  return new ImageResponse(
    (
      <>
        {badgeId ? (
          <OgSocial
            explorerAvatar={user.avatar}
            explorerName={explorerName}
            badgeImageLink={`${DOMAIN_URL}${badgeImageLink}`}
          />
        ) : (
          <OgSocial
            explorerAvatar={user.avatar}
            explorerName={explorerName}
            score={user.stats.score || 0}
            stats={user.stats}
          />
        )}
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
