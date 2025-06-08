/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'
import { mainnet } from 'viem/chains'
import { createPublicClient, http } from 'viem'
import { normalize } from 'viem/ens'

import kudosBadges from 'data/badges.json'
import { ALCHEMY_KEY_BACKEND, DEFAULT_AVATAR, DOMAIN_URL } from 'constants/index'
import { BADGE_TO_KUDOS_IDS, badgePublishedIds } from 'constants/badges'
import { TABLE, TABLES, db } from 'utils/db'
import { UserStatsType, UserType } from 'entities/user'
import { ALLOWED_PROVIDERS } from 'constants/passport'
import { calculateExplorerScore, countCommonElements, fetchExplorerData } from 'utils/index'

// async function getBadgeTokensIds(address: string, isProfile: boolean): Promise<number[]> {
//   try {
//     const badges = await axios.get(
//       `${BADGE_API}${isProfile ? ALCHEMY_KEY_BACKEND : process.env.ALCHEMY_KEY2}/getNFTsForOwner?owner=${address}&contractAddresses[]=${BADGE_ADDRESS}&withMetadata=false&pageSize=${BADGE_IDS?.length}`
//     )
//     console.log(badges.data)
//     const badgeTokenIds = badges.data.ownedNfts
//       .map((token) =>
//         BADGE_IDS.includes(parseInt(token.tokenId))
//           ? parseInt(token.tokenId)
//           : null
//       )
//       .filter((tokenId) => tokenId)
//     console.log(badgeTokenIds)
//     return badgeTokenIds
//   } catch (error) {
//     console.error(error)
//     return []
//   }
// }

// async function getUserCollectibles(address: string): Promise<{ datadisks: string[], handbooks: string[] }> {
//   try {
//     const ownerNFTs = await axios.get(
//       `https://opt-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY_BACKEND}/getNFTs?owner=${address}&pageSize=100${COLLECTIBLE_ADDRESSES.map(
//         (collectibleAddress) => `&contractAddresses[]=${collectibleAddress}`
//       ).join('')}${MIRROR_ARTICLE_ADDRESSES.map(
//         (articleAddress) => `&contractAddresses[]=${articleAddress}`
//       ).join('')}&withMetadata=false`
//     )
//     const datadisks = []
//     const handbooks = []
//     if (ownerNFTs.data) {
//       // console.log(ownerNFTs.data.ownedNfts)
//       for (const nft of ownerNFTs.data.ownedNfts) {
//         const datadisk = (LESSONS.find(lesson => lesson.lessonCollectibleTokenAddress?.toLowerCase() === nft.contract.address?.toLowerCase()))?.collectibleId || ''
//         if (datadisk) datadisks.push(datadisk)
//       }
//       for (const nft of ownerNFTs.data.ownedNfts) {
//         const handbook = (LESSONS.find(lesson => lesson.mirrorNFTAddress?.toLowerCase() === nft.contract.address?.toLowerCase()))?.collectibleId || ''
//         if (handbook) handbooks.push(handbook)
//       }
//     }
//     return { datadisks, handbooks }
//   } catch (error) {
//     console.error(error)
//     return { datadisks: [], handbooks: [] }
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const {
    slug: [address],
    profile,
    badges,
  } = req.query
  let addressLowerCase = address.toLowerCase()
  const ensNameTemp = addressLowerCase?.endsWith('.eth') ? addressLowerCase : null
  // console.log('address', address)

  if (!address) return res.status(400).json({ error: 'Wrong params' })

  let userExist = null
  if (address?.includes('.')) {
    // check in DB first
    const [userExist] = await db(TABLES.users)
      .select(
        TABLE.users.id,
        TABLE.users.address,
        TABLE.users.ens_name,
        TABLE.users.ens_avatar,
        TABLE.users.achievements,
        TABLE.users.ba_stamps,
        TABLE.users.community,
        TABLE.users.newsletter_email,
      )
      .whereILike('ens_name', addressLowerCase)
    // console.log('userExist', userExist)
    if (userExist) {
      addressLowerCase = userExist.address?.toLowerCase()
    } else {
      const transport = http(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`)
      const client = createPublicClient({
        chain: mainnet,
        transport,
      })
      const fullAddress = await client.getEnsAddress({ name: normalize(addressLowerCase) })
      if (fullAddress) {
        addressLowerCase = fullAddress.toLowerCase()
      } else {
        res.status(400).json({ error: 'Wrong params' })
      }
    }
  }

  if (!userExist) {
    if (addressLowerCase?.length !== 42) {
      return res.status(200).json({ error: 'Profile not found.' })
    }
    [userExist] = await db(TABLES.users)
      .select(
        TABLE.users.id,
        TABLE.users.address,
        TABLE.users.ens_name,
        TABLE.users.ens_avatar,
        TABLE.users.achievements,
        TABLE.users.ba_stamps,
        TABLE.users.community,
        TABLE.users.newsletter_email,
        TABLE.users.referrer,
      )
      .whereILike('address', addressLowerCase)
    console.log('user', userExist)
    if (!userExist) {
      const emptyUser: UserType = {
        address: addressLowerCase,
        emailLinked: false,
        ensName: ensNameTemp,
        avatar: DEFAULT_AVATAR,
        stats: {},
        badgeTokenIds: [],
        kudosTokenIds: [],
      }
      return res.status(200).json(emptyUser)
    }
  }

  // referrals
  interface ReferralAddress {
    address: string
    ens_name: string | null
    first_completion: string | null
  }

  const referralsAddresses = (await db(TABLES.users)
    .select([
      TABLE.users.address,
      TABLE.users.ens_name,
      db.raw('(SELECT MIN(transaction_at) FROM completions WHERE user_id = users.id) as first_completion')
    ])
    .where(TABLE.users.referrer, '=', userExist.id)
    // ignore referrals via smart_nft
    .whereNull(TABLE.users.smart_nft_start_at)) as unknown as ReferralAddress[]

  const referrals = referralsAddresses.map(r => {
    return {
      profile_address: r.ens_name || r.address,
      created_at: r.first_completion
    }
  })
  console.log('referrals', referrals)

  // Get referrer info if user has a referrer
  let referrerInfo = null
  if (userExist?.referrer) {
    const [referrer] = await db(TABLES.users)
      .select(
        TABLE.users.address,
        TABLE.users.ens_name,
      )
      .where(TABLE.users.id, '=', userExist.referrer)

    if (referrer) {
      referrerInfo = {
        address: referrer.address,
        ens_name: referrer.ens_name
      }
    }
  }

  const explorerData = await fetchExplorerData(addressLowerCase)
  const badgeTokenIds = [...new Set([
    // DEV: comment line when testing
    ...explorerData.badges
  ])]

  const kudosTokenIds = addressLowerCase in kudosBadges ? kudosBadges[addressLowerCase].map(token => BADGE_TO_KUDOS_IDS[token.toString()]).filter(token => token) : []
  console.log(kudosTokenIds)

  if (badges === 'true') {
    // only return badge details
    const data = {
      address: addressLowerCase,
      badgeTokenIds,
      kudosTokenIds,
    }

    return res.status(200).json(data)
  }

  const ensName = userExist?.ens_name
  // console.log(ensName)

  const avatar = userExist?.ens_avatar || DEFAULT_AVATAR

  if (profile === 'true') {
    // async update ENS (available on next call)
    fetch(`${DOMAIN_URL}/api/updateENS/${addressLowerCase}`)
      .catch(error => console.log('Error updating ENS:', error))
  }

  let stats: UserStatsType = {}
  // const { datadisks, handbooks } = await getUserCollectibles(addressLowerCase)
  const { datadisks, handbooks } = { datadisks: explorerData.datadisks, handbooks: explorerData.handbooks }
  // datadisks
  stats.datadisks = datadisks
  // handbooks
  stats.handbooks = handbooks
  // badges
  stats.badges = countCommonElements(badgeTokenIds, badgePublishedIds)
  // valid_stamps
  const stamps = Object.keys(userExist.ba_stamps)
  console.log(stamps)
  stats.valid_stamps = ALLOWED_PROVIDERS.filter(value => stamps.includes(value)) || []
  // achievements
  stats.achievements = (userExist && typeof userExist?.achievements === 'object' && userExist?.achievements !== null) ? Object.keys(userExist?.achievements) : []
  // TEMP: disable gitcoin-donation achievement (API deprecated)
  // if (!stats.achievements?.includes('gitcoin-donation')) {
  //   // async call: result available on next call
  //   fetch(`${DOMAIN_URL}/api/achievements/gitcoin-donation`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     method: 'POST',
  //     body: JSON.stringify({ address: addressLowerCase })
  //   })
  //     .catch(error => console.log('Error calling gitcoin-donation achievement:', error))
  // }
  if (!stats.achievements?.includes('giveth-donation')) {
    // async call: result available on next call
    fetch(`${DOMAIN_URL}/api/achievements/giveth-donation`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ address: addressLowerCase })
    })
      .catch(error => console.log('Error calling giveth-donation achievement:', error))
  }
  if (!stats.achievements?.includes('octant-donation')) {
    // async call: result available on next call
    fetch(`${DOMAIN_URL}/api/achievements/octant-donation`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ address: addressLowerCase })
    })
      .catch(error => console.log('Error calling octant-donation achievement:', error))
  }
  if (userExist?.ens_name?.length > 0) {
    stats.achievements.push('ens-name')
  }
  // donations (deprecated)
  // stats.donations = userExist.donations
  if (addressLowerCase === '0xb00e26e79352882391604e24b371a3f3c8658e8c') {
    stats =
    {
      "datadisks": [
        "D001",
        "D001",
        "D002",
        "D002"
      ],
      "handbooks": [
        "H001",
        "H002",
        "H003",
        "H004",
        "H005",
        "H006",
        "H007"
      ],
      "badges": 10,
      "valid_stamps": [
        "Google",
        "twitterAccountAgeGte#180",
        "Facebook",
        "Linkedin",
        "Discord",
        "Ens",
        "Farcaster",
        "Poh"
      ],
      achievements: ['gitcoin-donation', 'giveth-donation'],
      // "donations": {
      //   "GCR1": {
      //     "amountUSD": "N/A"
      //   },
      //   "GR11": {
      //     "amountUSD": "N/A"
      //   },
      //   "GR12": {
      //     "amountUSD": "N/A"
      //   },
      //   "GR13": {
      //     "amountUSD": "N/A"
      //   },
      //   "GR14": {
      //     "amountUSD": "N/A"
      //   },
      //   "GR15": {
      //     "amountUSD": "N/A"
      //   },
      //   "GR16": {
      //     "amountUSD": "N/A"
      //   },
      //   "GR18": {
      //     "amountUSD": 1.13241802
      //   },
      //   "GR19": {
      //     "amountUSD": 1.40381813
      //   },
      // },
      referrals: [
        {
          profile_address: 'web3explorer.eth',
          created_at: '2022-01-25T20:50:41.027Z',
        },
        {
          profile_address: 'didierkrux.eth',
          created_at: '2023-02-04T01:05:27.555Z',
        },
      ],
      "score": 37
    }
  }
  if (referrals?.length) {
    stats.referrals = referrals
  }
  // Add referrer info to stats if available
  if (referrerInfo) {
    stats.referrer = referrerInfo
  }
  stats.score = calculateExplorerScore(stats)


  console.log(stats)

  const data: UserType = {
    address: addressLowerCase,
    emailLinked: userExist.newsletter_email?.length > 0,
    ensName,
    avatar: avatar || DEFAULT_AVATAR,
    stats,
    badgeTokenIds,
    kudosTokenIds,
    community: userExist.community
  }

  return res.status(200).json(data)
}
