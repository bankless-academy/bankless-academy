/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
// import { mainnet } from 'viem/chains'
// import { createPublicClient, http } from 'viem'

import { DEFAULT_AVATAR, DEFAULT_ENS } from 'constants/index'
import { TABLE, TABLES, db } from 'utils/db'
import { getBasename, getBasenameAvatar } from 'utils/basenames'

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    slug: [address],
  } = req.query
  const addressLowerCase = address.toLowerCase()
  // console.log('address', address)

  if (!address || address.length !== 42 || address?.includes('.')) return res.status(400).json({ error: 'Wrong params' })
  // const transport = http(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`)
  // const client = createPublicClient({
  //   chain: mainnet,
  //   transport,
  // })

  const [userExist] = await db(TABLES.users)
    .select(
      TABLE.users.id,
      TABLE.users.ens_name,
      TABLE.users.ens_avatar,
      TABLE.users.ba_stamps
    )
    .whereILike('address', addressLowerCase)
  console.log('user', userExist)
  if (!userExist) res.status(200).json({ error: 'Profile not found.' })

  try {
    let ensData: any = {}
    try {
      ensData = await fetch(`https://ensdata.net/${addressLowerCase}`).then(
        (res) => res.json()
      )
    } catch (error) {
      console.log(error)
    }
    const ensName = addressLowerCase === '0xb00e26e79352882391604e24b371a3f3c8658e8c' ? DEFAULT_ENS : ensData?.ens
    console.log('ensName', ensName)

    let avatar = null
    if (ensData?.avatar_small?.length > 0) {
      const avatar_small = `${ensData.avatar_small}?cache=ba`
      if (await fileIsLoading(avatar_small) === true) {
        avatar = avatar_small
      } else if (userExist.ens_avatar?.length > 0 && await fileIsLoading(userExist.ens_avatar) === false) {
        console.log('check if old link is loading')
        avatar = DEFAULT_AVATAR
      }
    }
    console.log('avatar', avatar)

    // const avatar = (ensData?.avatar_small?.length > 0) ? await client.getEnsAvatar({ name: ensName }) : DEFAULT_AVATAR

    if (
      (ensName && userExist.ens_name !== ensName) ||
      (avatar && userExist.ens_avatar !== avatar)
    ) {
      // update ens_name + ens_avatar in user DB
      console.log('update ENS details', { ensName, avatar })
      await db(TABLES.users)
        .where(TABLE.users.id, userExist.id)
        .update({ ens_name: ensName, ens_avatar: avatar?.length < 255 && avatar !== DEFAULT_AVATAR ? avatar : null })
    }

    // Check for basename if no ENS
    let basename = null
    let basenameAvatar = null
    if (!ensName) {
      console.log('get basename')
      basename = await getBasename(`0x${addressLowerCase.substring(2)}` as `0x${string}`)
      if (basename) {
        basenameAvatar = await getBasenameAvatar(basename)
        // update ens_name + ens_avatar in user DB with basename data
        console.log('update basename details', { basename, basenameAvatar })
        await db(TABLES.users)
          .where(TABLE.users.id, userExist.id)
          .update({
            ens_name: basename,
            ens_avatar: basenameAvatar?.length < 255 && basenameAvatar !== DEFAULT_AVATAR ? basenameAvatar : null
          })
      }
    }

    const data: any = {
      address: addressLowerCase,
      ensName: ensName || basename || null,
      avatar: avatar || basenameAvatar || DEFAULT_AVATAR,
    }

    return res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500)
  }

}
