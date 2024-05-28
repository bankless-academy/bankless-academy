/* eslint-disable no-console */
import { ImageResponse } from '@vercel/og'
import OgSocial from 'components/OgSocial'
import { DEFAULT_AVATAR, DOMAIN_URL, LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { NextApiRequest } from 'next'

export const fetchWithTimeout = async (resource, options = {}) => {
  const { timeout = 8000 } = options as any

  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    })
    clearTimeout(id)
    return response
  } catch (error) {
    return { status: 408 }
  }
}

export const fileIsLoading = async (resource) => {
  // 2 sec timeout
  try {
    const response = await fetchWithTimeout(resource, { timeout: 2000 })
    const status = await response.status
    console.log(status)
    return status ? status === 200 : false
  } catch (error) {
    return false
  }
}

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
  // const badgeTokenIds = user.badgeTokenIds
  if (user.error) error = user.error
  else {
    if (
      badgeId &&
      !badgeImageLink
      // || !badgeTokenIds?.includes(parseInt(badgeId))
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

  let ensData: any = {}
  try {
    ensData = await fetch(`https://ensdata.net/${user.address}`).then((res) =>
      res.json()
    )
  } catch (error) {
    console.log(error)
  }

  console.log(ensData)
  if (ensData?.avatar_small?.length > 0) {
    // convert to v1 to return png instead of webp
    const avatar = ensData.avatar_small
    // .replace('api.center.dev/v2/', 'api.center.dev/v1/')
    // .replace('/nft/', '/')
    // .replace('/render/', '/')
    // .replace('render/medium', 'render/small.png')
    // .split('?')
    console.log('avatar', avatar)
    user.avatar = avatar
    //HACK: manually upload broken avatars
    // if (ensData.address === '0xd1ffda9c225ddee34f0837bf4d4a441bdd54c473') {
    //   user.avatar =
    //     'https://app.banklessacademy.com/images/avatars/d0wnlore.jpg'
    // }
    // if (ensData.address === '0xe8c77e0eabd6d8b2f54343152a8b213d3a42e54e') {
    //   user.avatar = 'https://app.banklessacademy.com/images/avatars/doubleb.png'
    // }
  }
  if (user?.avatar) {
    if ((await fileIsLoading(user.avatar)) === false) {
      user.avatar = DEFAULT_AVATAR
    }
  }

  const explorerName =
    user.ensName || address?.includes('.') ? address : shortenAddress(address)

  return new ImageResponse(
    (
      <>
        {badgeId ? (
          <OgSocial
            explorerAvatar={user.avatar}
            explorerName={explorerName}
            community={user.community}
            badgeImageLink={`${DOMAIN_URL}${badgeImageLink}`}
          />
        ) : (
          <OgSocial
            explorerAvatar={user.avatar}
            explorerName={explorerName}
            community={user.community}
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
