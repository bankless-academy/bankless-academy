/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import * as ethUtil from 'ethereumjs-util'
import { ethers } from 'ethers'
import { verifyTypedData } from 'ethers/lib/utils'
import { Network } from '@ethersproject/networks'
import queryString from 'query-string'
import mixpanel, { Dict, Query } from 'mixpanel-browser'
import { readContract } from '@wagmi/core'
import axios from 'axios'
import { Network as AlchemyNetwork, Alchemy } from "alchemy-sdk"
import { mainnet, polygon } from 'viem/chains'

import {
  ACTIVATE_MIXPANEL,
  ALCHEMY_KEY,
  ALCHEMY_KEY_BACKEND,
  COLLECTIBLE_ADDRESSES,
  DOMAIN_PROD,
  DOMAIN_URL,
  INFURA_KEY,
  MIRROR_ARTICLE_ADDRESSES,
  TOKEN_GATING_ENABLED,
} from 'constants/index'
import { NETWORKS } from 'constants/networks'
import UDPolygonABI from 'abis/UDPolygon.json'
import UDABI from 'abis/UD.json'
import { LessonType } from 'entities/lesson'
import { UserStatsType } from 'entities/user'
import { gql } from 'graphql-request'
import { lensGraphQLClient } from 'utils/gql/lens'
import { wagmiConfig } from 'utils/wagmi'
import { NFTAddress } from 'constants/nft'
import { TABLES, db } from 'utils/db'
import { ACHIEVEMENTS } from 'constants/achievements'
import { INDEXER_URL, INDEXER_URL_BACKUP, BASE_BADGE_CONTRACT_ADDRESS } from 'constants/badges'

declare global {
  interface Window {
    umami: any
  }
}

// HOW-TO: ?debug=password or ?debug=false to activate/deactivate debug mode
const debugParam =
  typeof window !== 'undefined'
    ? queryString.parse(window.location.search).debug?.toString()
    : undefined
const w = typeof window !== 'undefined' ? localStorage.getItem('debug') : null
export const DEBUG: string = debugParam !== undefined ? debugParam : w
export const IS_DEBUG = debugParam !== undefined && debugParam !== 'false'
if (debugParam !== undefined) localStorage.setItem('debug', DEBUG)
if (debugParam === 'false') localStorage.removeItem('debug')

export const emailRegex =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export function shortenAddress(address: string): string {
  return `${address?.substr(0, 6)}...${address?.substr(38, 4)}`
}

export function getContract(
  address: string,
  ABI: any,
  library: Web3Provider,
  account?: string
): Contract {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(
    address,
    ABI,
    getProviderOrSigner(library, account) as any
  )
}

export function getProviderOrSigner(
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

export function getSigner(
  library: Web3Provider,
  account: string
): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

export const toFixed = function (x) {
  if (Math.abs(x) < 1.0) {
    const e = parseInt(x.toString().split('e-')[1])
    if (e) {
      x *= Math.pow(10, e - 1)
      x = '0.' + new Array(e).join('0') + x.toString().substring(2)
    }
  } else {
    let e = parseInt(x.toString().split('+')[1])
    if (e > 20) {
      e -= 20
      x /= Math.pow(10, e)
      x += new Array(e + 1).join('0')
    }
  }
  return x
}

export const track = (event: string, value?: any): void => {
  if (typeof window !== 'undefined') {
    // TODO: change type of event value to JSON instead of varchar(50)
    // window.umami.trackEvent(typeof value === 'object' ? JSON.stringify(value) : value, event)
    window?.umami?.track(
      event,
      typeof value === 'object' ? Object.values(value).join('|') : value
    )
  }
}

export function hashPersonalMessage(msg: string): string {
  const buffer = Buffer.from(msg)
  const result = ethUtil.hashPersonalMessage(buffer)
  const hash = ethUtil.bufferToHex(result)
  return hash
}

export function recoverPublicKey(sig: string, hash: string): string {
  const sigParams = ethUtil.fromRpcSig(sig)
  const hashBuffer = Buffer.from(hash.replace('0x', ''), 'hex')
  const result = ethUtil.ecrecover(
    hashBuffer,
    sigParams.v,
    sigParams.r,
    sigParams.s
  )
  const signer = ethUtil.bufferToHex(ethUtil.publicToAddress(result))
  return signer
}

export function recoverPersonalSignature(sig: string, msg: string): string {
  const hash = hashPersonalMessage(msg)
  const signer = recoverPublicKey(sig, hash)
  return signer
}

// deprecated, use verifySignature from SignatureUtil.ts

// export function verifySignature(
//   address: string,
//   signature: string,
//   message: string
// ): boolean {
//   try {
//     const signer = recoverPersonalSignature(signature, message)
//     return signer.toLowerCase() === address.toLowerCase()
//   } catch (error) {
//     console.error(error)
//     return false
//   }
// }

export async function getSignature(
  library: Web3Provider,
  address: string,
  message: string
): Promise<string> {
  const signature = await library.send('personal_sign', [
    ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message)),
    address.toLowerCase(),
  ])
  return signature
}

export const verifyTypedSignature = (
  signature,
  message,
  address,
  types,
  domain
): boolean => {
  return (
    verifyTypedData(domain, types, message, signature).toLowerCase() ===
    address.toLowerCase()
  )
}

export async function validateOnchainQuest(
  quest: string,
  address: string,
  tx?: string
): Promise<boolean> {
  try {
    if (quest === 'DEXAggregators') {
      const check = []
      const base: Network = {
        name: 'base',
        chainId: NETWORKS['base'].chainId,
        _defaultProvider: (providers) =>
          new providers.JsonRpcProvider(
            `https://base-mainnet.infura.io/v3/${INFURA_KEY}`
          ),
      }
      const provider = ethers.getDefaultProvider(base)
      const receipt = await provider.waitForTransaction(tx, 2)
      // console.log('receipt', receipt.status)
      if (receipt?.status) {
        check.push(true)
        console.log('1/3 OK tx status confirmed')
        const txDetails = await provider.getTransaction(tx)
        // console.log('txDetails', txDetails)
        const logs = JSON.stringify((await provider.getTransactionReceipt(tx)).logs)
        // console.log('logs', logs)
        if (txDetails) {
          if (txDetails.data.toLowerCase().includes(address.toLowerCase().substring(2)) ||
            logs.toLowerCase().includes(address.toLowerCase().substring(2))
          ) {
            check.push(true)
            console.log('2/3 OK wallet interaction')
          }
          // 1inch v4 router contract
          const address1inchV4 =
            '0x1111111254fb6c44bac0bed2854e76f90643097d'.toLowerCase()
          // 1inch v5 router contract
          const address1inchV5 =
            '0x1111111254EEB25477B68fb85Ed929f73A960582'.toLowerCase()
          // 1inch v6 router contract
          const address1inchV6 =
            '0x111111125421cA6dc452d289314280a0f8842A65'.toLowerCase()
          // 1inch Liquidity Pool
          const address1inchLP =
            '0x8Acdb3bcC5101b1Ba8a5070F003a77A2da376fe8'.toLowerCase()
          if (
            [address1inchV4, address1inchV5, address1inchV6, address1inchLP].includes(
              txDetails.to.toLowerCase()
            ) ||
            txDetails.data.includes(address1inchV4.substring(2)) ||
            txDetails.data.includes(address1inchV5.substring(2)) ||
            txDetails.data.includes(address1inchV6.substring(2)) ||
            txDetails.data.includes(address1inchLP.substring(2)) ||
            logs.includes(address1inchV5.substring(2)) ||
            logs.includes(address1inchV6.substring(2)) ||
            logs.includes(address1inchLP.substring(2))
          ) {
            const isTokenApproval = txDetails.data?.startsWith('0x095ea7b3')
            if (!isTokenApproval) {
              check.push(true)
              console.log('3/3 OK 1inch router contract interaction')
            }
          }
        }
      }
      console.log('checks validated (3)', check?.length)
      return check?.length === 3
    }
    else if (quest === 'DecentralizedExchanges') {
      const check = []
      const optimism: Network = {
        name: 'optimism',
        chainId: NETWORKS['optimism'].chainId,
        _defaultProvider: (providers) =>
          new providers.JsonRpcProvider(
            `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`
          ),
      }
      const provider = ethers.getDefaultProvider(optimism)
      const receipt = await provider.waitForTransaction(tx, 2)
      // console.log('receipt', receipt.status)
      if (receipt?.status) {
        check.push(true)
        console.log('OK tx status confirmed')
        const txDetails = await provider.getTransaction(tx)
        // console.log('txDetails', txDetails)
        if (txDetails) {
          if (txDetails.data.includes(address.toLowerCase().substring(2))) {
            check.push(true)
            console.log('OK wallet interaction')
          }
          // Velodrome v1 router contract
          const velodromeRouterV1 =
            '0x9c12939390052919af3155f41bf4160fd3666a6f'.toLowerCase()
          // Velodrome v2 router contract
          const velodromeRouterV2 =
            '0xa062ae8a9c5e11aaa026fc2670b0d65ccc8b2858'.toLowerCase()
          // Velodrome Universal Router 1
          const velodromeUR1 =
            '0xF132bdb9573867cD72f2585C338B923F973EB817'.toLowerCase()
          // Velodrome Universal Router 2
          const velodromeUR2 =
            '0x4bF3E32de155359D1D75e8B474b66848221142fc'.toLowerCase()
          if (
            [velodromeRouterV1, velodromeRouterV2, velodromeUR1, velodromeUR2].includes(
              txDetails.to.toLowerCase()
            ) ||
            txDetails.data.includes(velodromeRouterV1.substring(2)) ||
            txDetails.data.includes(velodromeRouterV2.substring(2)) ||
            txDetails.data.includes(velodromeUR1.substring(2)) ||
            txDetails.data.includes(velodromeUR2.substring(2))
          ) {
            const isTokenApproval = txDetails.data?.startsWith('0x095ea7b3')
            if (!isTokenApproval) {
              check.push(true)
              console.log('OK Velodrome router contract interaction')
            }
          }
        }
      }
      console.log('checks validated (3)', check?.length)
      return check?.length === 3
    }
    else if (quest === 'Layer2Blockchains') {
      const baseBalance = await getBalance(AlchemyNetwork.BASE_MAINNET, address)
      const optimismBalance = await getBalance(AlchemyNetwork.OPT_MAINNET, address)
      try {
        const balance = optimismBalance + baseBalance
        console.log('balance: ', balance)
        return balance >= 0.0002
      } catch (e) {
        console.error(e)
        return false
      }
    }
    else if (quest === 'StakingOnEthereum') {
      const arbitrumBalance = await getTokenBalance(AlchemyNetwork.ARB_MAINNET, address, ['0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8'])
      console.log('arbitrumBalance: ', arbitrumBalance)
      const optimismBalance = await getTokenBalance(AlchemyNetwork.OPT_MAINNET, address, ['0x9bcef72be871e61ed4fbbc7630889bee758eb81d'])
      console.log('optimismBalance: ', optimismBalance)
      const polygonBalance = await getTokenBalance(AlchemyNetwork.MATIC_MAINNET, address, ['0x0266f4f08d82372cf0fcbccc0ff74309089c74d1'])
      console.log('polygonBalance: ', polygonBalance)
      const ethereumBalance = await getTokenBalance(AlchemyNetwork.ETH_MAINNET, address, ['0xae78736cd615f374d3085123a210448e74fc6393'])
      console.log('ethereumBalance: ', ethereumBalance)
      const baseBalance = await getTokenBalance(AlchemyNetwork.BASE_MAINNET, address, ['0xb6fe221fe9eef5aba221c348ba20a1bf5e73624c'])
      console.log('baseBalance: ', baseBalance)
      try {
        const balance = arbitrumBalance + optimismBalance + polygonBalance + ethereumBalance + baseBalance
        console.log(balance)
        // allow a bit less than 0.0002 rETH in case someone only buys for 0.0002 ETH worth of rETH
        return balance >= 0.00016
      } catch (e) {
        console.error(e)
        return false
      }
    }
    else if (quest === 'OptimismGovernance') {
      const optimism: Network = {
        name: 'optimism',
        chainId: NETWORKS['optimism'].chainId,
        _defaultProvider: (providers) =>
          new providers.JsonRpcProvider(
            `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY_BACKEND}`
          ),
      }
      const provider = ethers.getDefaultProvider(optimism)
      const contract = new ethers.Contract('0x4200000000000000000000000000000000000042', [
        {
          "inputs": [
            { "internalType": "address", "name": "account", "type": "address" }
          ],
          "name": "delegates",
          "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
          "stateMutability": "view",
          "type": "function"
        },
      ], provider)
      const delegate = await contract['delegates(address)'](address.toLowerCase())
      console.log('delegate', delegate)
      return delegate?.length === 42 && delegate !== '0x0000000000000000000000000000000000000000'
    }
    return false
  } catch (error) {
    console.error(error)
    return false
  }
}

// TODO: remove debug
if (ACTIVATE_MIXPANEL) {
  mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID, {
    api_host: '/mp',
    debug: true,
  })
}

export const mixpanel_distinct_id = ACTIVATE_MIXPANEL
  ? mixpanel.get_distinct_id()
  : null

const withMixpanel = {
  identify: (id: string) => {
    mixpanel.identify(id)
  },
  alias: (id: string) => {
    mixpanel.alias(id)
  },
  track: (event_name: string, props?: Dict) => {
    const wallets = {
      wallets: localStorage.getItem('wallets')
        ? JSON.parse(localStorage.getItem('wallets'))
        : [],
    }
    const current_wallet: any =
      localStorage.getItem('current_wallet')?.replaceAll('"', '') || ''
    if (current_wallet) {
      const mp_current_wallet = localStorage.getItem(`mp_${current_wallet}`)
      if (!mp_current_wallet?.length) {
        mixpanel.alias(current_wallet)
        mixpanel.people.set({ name: current_wallet, wallets })
        localStorage.setItem(`mp_${current_wallet}`, mixpanel_distinct_id)
      }
    }
    const embed = localStorage.getItem('embed')
    if (embed && embed?.length) {
      props.embed = embed
    }
    const i18nextLng = localStorage.getItem('i18nextLng')
    if (!props.language && i18nextLng?.length) {
      props.language = i18nextLng
    }
    mixpanel.track(event_name, { domain: DOMAIN_PROD, ...props })
  },
  track_links: (query: Query, name: string) => {
    mixpanel.track_links(query, name, {
      referrer: document.referrer,
    })
  },
  people: {
    set: (props: Dict) => {
      mixpanel.people.set(props)
    },
  },
}

const withoutMixpanel = {
  identify: (id: string) => {
    console.log(id)
  },
  alias: (id: string) => {
    console.log(id)
  },
  track: (event_name: string, props?: Dict) => {
    console.log(event_name)
    console.log(props)
  },
  track_links: (query: Query, name: string) => {
    console.log(query)
    console.log(name)
  },
  people: {
    set: (props: Dict) => {
      console.log(props)
    },
  },
}

export const Mixpanel = ACTIVATE_MIXPANEL ? withMixpanel : withoutMixpanel

export const getNodeText = (node) => {
  if (['string', 'number'].includes(typeof node)) return node
  if (node instanceof Array) return node.map(getNodeText).join('')
  if (typeof node === 'object' && node) return getNodeText(node.props.children)
}

export async function api(
  url: string,
  data: any
): Promise<{ data: any; status: number }> {
  const wrong = {
    data: {},
    status: 500,
  }
  const embed =
    typeof localStorage !== 'undefined' ? localStorage.getItem('embed') : null
  if (embed && embed?.length) {
    data.embed = embed
  }
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = `An error occurred: ${response.status}`
    console.error(error)
    if (response.status !== 500) {
      const d = await response.json()
      wrong.data = d
      wrong.status = response.status
    } else {
      const d = await response.json()
      wrong.data = { status: d?.status || 'API error' }
    }
    return wrong
  }
  const d = await response.json()
  const r = { status: response.status, data: d }
  console.log('API OK', r)
  return r
}

export async function getArticlesCollected(address: string): Promise<string[]> {
  try {
    const ownerNFTs = await axios.get(
      `https://opt-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY}/getNFTs?owner=${address}&pageSize=100${MIRROR_ARTICLE_ADDRESSES.map(
        (articleAddress) => `&contractAddresses[]=${articleAddress}`
      ).join('')}&withMetadata=false`
    )
    if (ownerNFTs.data) {
      // console.log(ownerNFTs.data?.ownedNfts)
      const articlesCollected = ownerNFTs.data?.ownedNfts.map(
        (nft) => nft.contract.address
      )
      // console.log(articlesCollected)
      return articlesCollected
    } else {
      return []
    }
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getLessonsCollected(address: string): Promise<string[]> {
  try {
    const ownerNFTs = await axios.get(
      `https://opt-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY}/getNFTs?owner=${address}&pageSize=100${COLLECTIBLE_ADDRESSES.map(
        (collectibleAddress) => `&contractAddresses[]=${collectibleAddress}`
      ).join('')}&withMetadata=false`
    )
    if (ownerNFTs.data) {
      // console.log(ownerNFTs.data?.ownedNfts)
      const lessonsCollected = ownerNFTs.data?.ownedNfts.map(
        (nft) => nft.contract.address
      )
      // console.log(articlesCollected)
      return lessonsCollected
    } else {
      return []
    }
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getLessonsCollectors(
  collectibleAddress: string
): Promise<any[]> {
  try {
    const NFTCollectors = await axios.get(
      `https://opt-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY}/getOwnersForCollection?contractAddress=${collectibleAddress}&withTokenBalances=true`
    )
    // console.log(NFTCollectors.data)
    return NFTCollectors.data?.ownerAddresses || []
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function getArticlesCollectors(
  articleAddress: string
): Promise<any[]> {
  try {
    const NFTCollectors = await axios.get(
      `https://opt-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY}/getOwnersForCollection?contractAddress=${articleAddress}&withTokenBalances=true`
    )
    // console.log(NFTCollectors.data)
    return NFTCollectors.data?.ownerAddresses || []
  } catch (error) {
    console.error(error)
    return []
  }
}

// getNFTInfo from either tokenId or address
export async function getNFTInfo(
  address: string,
  tokenId: string
): Promise<{ time?: string, tokenIds?: number[] }> {
  const res = {
    time: '--:--,--',
    tokenIds: []
  }
  const ERC721_ABI = [
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "name": "ownerOf",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "name": "tokensOfOwner",
      "outputs": [
        { "internalType": "uint256[]", "name": "", "type": "uint256[]" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)"
  ];
  const provider = new ethers.providers.JsonRpcProvider(`https://base-mainnet.infura.io/v3/${INFURA_KEY}`);

  const contract = new ethers.Contract(NFTAddress, ERC721_ABI, provider);

  try {
    const owner = tokenId ? await contract.ownerOf(tokenId) : address
    res.tokenIds = address ? (await contract.tokensOfOwner(address)).map(bigNum => bigNum.toNumber()) : [tokenId]
    console.log(res.tokenIds)
    const latestTokenId = res.tokenIds.at(-1)

    console.log('latestTokenId', latestTokenId)

    if (latestTokenId) {
      // Get the Transfer event for the mint
      const filter = contract.filters.Transfer(null, null, latestTokenId);
      const events = await contract.queryFilter(filter, 0, 'latest');

      // The first Transfer event for this token ID should be the mint
      const mintEvent = events[0];
      const mintBlock = await provider.getBlock(mintEvent.blockNumber);
      const mintTimestamp = new Date(mintBlock.timestamp * 1000).toISOString();

      console.log(`Owner: ${owner}`);
      console.log(`Mint Timestamp: ${mintTimestamp}`);
      console.log(`tokenIds: ${res.tokenIds}`);

      const smart_nft_mint_at = new Date(mintTimestamp).getTime()
      const [user] = await db(TABLES.users)
        .select('smart_nft_start_at')
        .where('address', 'ilike', `%${owner}%`)
      if (user?.smart_nft_start_at) {
        const smart_nft_start_at = user.smart_nft_start_at.getTime();
        console.log('smart_nft_start_at', smart_nft_start_at)
        if (smart_nft_mint_at > smart_nft_start_at)
          res.time = formatTime(smart_nft_mint_at - smart_nft_start_at)
      }
    }
    return res

  } catch (error) {
    console.error('Error fetching NFT data:', error);
    return res
  }
}

export async function getNFTsCollectors(
  nftAddress: string
): Promise<any[]> {
  try {
    const NFTCollectors = await axios.get(
      `https://base-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY}/getOwnersForCollection?contractAddress=${nftAddress}&withTokenBalances=true`
    )
    // console.log(NFTCollectors.data)
    return NFTCollectors.data?.ownerAddresses || []
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function isHolderOfNFT(
  address: string,
  openSeaLink: string
): Promise<boolean> {
  try {
    const nftAddress = openSeaLink.replace(
      'https://opensea.io/assets/matic/',
      ''
    )
    const [contractAddress, tokenId] = nftAddress.split('/')
    // console.log(contractAddress)
    // console.log(tokenId)
    const ownerNFTs = await axios.get(
      `https://polygon-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY}/getNFTs?owner=${address}&pageSize=100&contractAddresses[]=${contractAddress}&withMetadata=false`
    )
    if (ownerNFTs.data) {
      return (
        ownerNFTs.data?.ownedNfts.filter(
          (nft) => parseInt(nft.id.tokenId, 16).toString() === tokenId
        ).length > 0
      )
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function isHolderOfBadge(
  address: string,
  badgeId: number
): Promise<boolean> {
  try {
    const ownerNFTs = await axios.get(
      `https://base-mainnet.g.alchemy.com/nft/v2/${ALCHEMY_KEY_BACKEND}/getNFTs?owner=${address}&pageSize=100&contractAddresses[]=${BASE_BADGE_CONTRACT_ADDRESS}&withMetadata=false`
    )
    if (ownerNFTs.data) {
      // console.log('ownerNFTs', ownerNFTs.data)
      // console.log('badgeId', ownerNFTs.data?.ownedNfts[0]?.id?.tokenId)
      return ownerNFTs.data?.ownedNfts.some(nft => {
        const tokenId = parseInt(nft.id.tokenId, 16).toString()
        console.log('comparing tokenId', tokenId, 'with badgeId', badgeId)
        return tokenId === badgeId.toString()
      })
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function getLensProfile(address: string): Promise<{
  name: string | null
  avatar: string | null
}> {
  const res = {
    name: null,
    avatar: null,
  }
  try {
    const query = gql`
    query GetLensHandle($request: ProfilesManagedRequest!) {
      profilesManaged(request: $request) {
        items {
          handle {
            localName
          }
          metadata {
            picture {
              ... on ImageSet {
                optimized {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `
    const variables = {
      request: {
        for: address
      }
    }
    const r: any = await lensGraphQLClient.request(query, variables)
    const items = r.profilesManaged.items
    if (!items || items.length === 0) {
      // No profiles found for this address
      return res
    }
    const lastProfile = items[items.length - 1]
    const name = lastProfile.handle.localName.split('.')[0] + '.lens'
    const avatar =
      lastProfile.metadata?.picture?.optimized?.uri || null
    return { name, avatar }
  } catch (error) {
    console.error(error)
    return res
  }
}

export async function getUD(address: string): Promise<string | null> {
  let res = null
  try {
    const balanceOfUDPolygon: any = await readContract(wagmiConfig, {
      address: '0xa9a6a3626993d487d2dbda3173cf58ca1a9d9e9f',
      chainId: polygon.id,
      abi: UDPolygonABI,
      functionName: 'balanceOf',
      args: [address],
    })
    // console.log('balanceOfUDPolygon', parseInt(balanceOfUDPolygon))
    const balanceOfUD: any = await readContract(wagmiConfig, {
      address: '0x049aba7510f45ba5b64ea9e658e342f904db358d',
      chainId: mainnet.id,
      abi: UDABI,
      functionName: 'balanceOf',
      args: [address],
    })
    // console.log('balanceOfUD', parseInt(balanceOfUD))
    if (parseInt(balanceOfUDPolygon) > 0 || parseInt(balanceOfUD) > 0) {
      // console.log('owns a UD')
      const {
        data: { domain },
      }: any = await api('/api/ud', { address })
      if (domain?.length) {
        // console.log(domain)
        res = domain
      }
    } else {
      // console.log(console.log('NO UD'))
    }
    return res
  } catch (error) {
    console.error(error)
    return res
  }
}

export const scrollTop = () => {
  // 0.3 second delay
  setTimeout(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, 300)
}

export const scrollDown = () => {
  // 0.3 second delay
  setTimeout(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }
  }, 300)
}

export const lessonLink = (lesson: LessonType) => {
  return `${DOMAIN_URL}/lessons/${lesson.slug}`
}

export function calculateExplorerAchievements(achievements: string[]) {
  return achievements
    .map((a) => ACHIEVEMENTS[a]?.points)
    .reduce((acc, points) => (acc += points), 0)

}

export function calculateExplorerScore(stats: UserStatsType) {
  return 3 * (stats?.datadisks?.length || 0) +
    (stats?.handbooks?.length || 0) +
    (stats?.badges || 0) +
    (stats?.referrals?.length || 0) +
    calculateExplorerAchievements(stats?.achievements || []) +
    (stats?.valid_stamps?.length || 0)

}

export const getTokenBalance = async (network: AlchemyNetwork, ownerAddress: string, tokenContractAddresses: string[]) => {
  const settings = {
    apiKey: ALCHEMY_KEY_BACKEND,
    network,
  };
  const alchemy = new Alchemy(settings);

  const res = await alchemy.core.getTokenBalances(
    ownerAddress,
    tokenContractAddresses
  );

  // TEMP: hardcode 18 decimals for token
  return parseInt(res?.tokenBalances[0]?.tokenBalance, 16) / Math.pow(10, 18)
}

export const getBalance = async (network: AlchemyNetwork, ownerAddress: string) => {
  const settings = {
    apiKey: ALCHEMY_KEY_BACKEND,
    network,
  };
  const alchemy = new Alchemy(settings);

  const res = await alchemy.core.getBalance(
    ownerAddress,
  );

  const balance = ethers.BigNumber.from(res).toString();
  // console.log(`balance: ${balance}`);
  return parseFloat(balance) / Math.pow(10, 18);
}

export const generateTwitterLink = (text: string, link: string) => {
  return `https://x.com/intent/tweet?text=${encodeURIComponent(
    `${text}
`
  )}&url=${encodeURIComponent(link)}`
}

export const generateFarcasterText = (text: string) => {
  return text?.replace('@BanklessAcademy', '@banklessacademy')?.replace('@Gitcoin', '@gitcoin')?.replace('@PublicNouns', '@publicnouns')
}

export const generateFarcasterLink = (text: string, link: string) => {
  return `https://warpcast.com/~/compose?text=${encodeURIComponent(
    generateFarcasterText(text)
  )}&embeds%5B%5D=${encodeURIComponent(link)}`
}

export const generateHeyLink = (text: string, link: string) => {
  return `https://hey.xyz/?text=${encodeURIComponent(
    text?.replace('@BanklessAcademy', '@banklessacademy')?.replace('@Gitcoin', '@gitcoin')
  )}&url=${encodeURIComponent(link)}`
}

export const generateTelegramLink = (text: string, link: string) => {
  return `https://t.me/share/url?text=${encodeURIComponent(
    text?.replace('@BanklessAcademy', 'Bankless Academy')?.replace('@Gitcoin', 'Gitcoin')
  )}&url=${encodeURIComponent(link)}`
}

export const generateLinkedinLink = (text: string, link: string) => {
  return `https://www.linkedin.com/feed/?shareActive&mini=true&text=${encodeURIComponent(text?.replace('@BanklessAcademy', 'Bankless Academy')?.replace('@Gitcoin', 'Gitcoin'))}%0A%0A${encodeURIComponent(link)}`
}

export const generateFacebookLink = (text: string, link: string) => {
  // quote not supported
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}&quote=${encodeURIComponent(text?.replace('@BanklessAcademy', 'Bankless Academy')?.replace('@Gitcoin', 'Gitcoin'))}`
}

export const generateWhatsappLink = (text: string, link: string) => {
  return `https://wa.me/?text=${encodeURIComponent(text?.replace(` 🎉`, '.')?.replace(`👨‍🚀`, '')?.replace(`🚀`, '')?.replace('@BanklessAcademy', 'Bankless Academy')?.replace('@Gitcoin', 'Gitcoin') + ' ' + link)}`
}

export const openLesson = async (
  openedLesson: string,
  lesson: LessonType,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toast: any,
  address?: string
): Promise<string> => {
  if (TOKEN_GATING_ENABLED && lesson.nftGating) {
    if (!address) {
      toast.closeAll()
      toast({
        title: 'This is a token gated lesson',
        description: 'Connect your wallet to access the lesson.',
        status: 'warning',
        duration: 20000,
        isClosable: true,
      })
      return openedLesson
    }
    const hasNFT = await isHolderOfNFT(address, lesson.nftGating)
    if (!hasNFT) {
      toast.closeAll()
      toast({
        title: "You don't own the required NFT",
        description: lesson?.nftGatingRequirements,
        status: 'warning',
        duration: 20000,
        isClosable: true,
      })
      return openedLesson
    }
  }
  const openedLessonArray = JSON.parse(openedLesson)
  return JSON.stringify(
    [...openedLessonArray, lesson.slug].filter(
      (value, index, array) => array.indexOf(value) === index
    )
  )
}

export const formatTime = (ms: number) => {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  const milliseconds = ms % 1000

  return `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')},${milliseconds.toString().padStart(3, '0').substring(0, 2)}`
}

export const fetchGitcoinDonations = async (address: string): Promise<number> => {
  const query = `
    query MyQuery {
      donations(
        condition: {donorAddress: "${address}"}
      ) {
        id
      }
    }
  `;

  try {
    const response = await fetch('https://grants-stack-indexer-v2.gitcoin.co/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    // console.log(result.data);
    return result.data?.donations?.length || 0
  } catch (error) {
    console.error('Error fetching data:', error);
    return 0
  }
};

export const fetchGivethDonations = async (address: string): Promise<number> => {
  const query = `
    query {
  userByAddress(address: "${address}") {
    donationsCount
  }
}
  `;

  try {
    const response = await fetch('https://mainnet.serve.giveth.io/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    // console.log(result.data);
    return result.data?.userByAddress?.donationsCount || 0
  } catch (error) {
    console.error('Error fetching data:', error);
    return 0
  }
};

export const fetchFromUrl = async <T = any>(
  url: string,
  query?: string,
  variables?: Record<string, any>
): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: query ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(query && {
        body: JSON.stringify({
          query,
          ...(variables && { variables }),
        }),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.data || result;
  } catch (error) {
    console.error(`Failed to fetch from ${url}:`, error);
    throw error;
  }
};

export const fetchExplorerData = async (address: string): Promise<{
  handbooks: string[]
  datadisks: string[]
  badges: number[]
  polBadges: number[]
  baseBadges: number[]
  kudosBadges: number[]
  failed?: boolean
}> => {
  const OwnerAssets = {
    handbooks: [],
    datadisks: [],
    badges: [],
    polBadges: [],
    baseBadges: [],
    kudosBadges: []
  }
  const query = `
    query MyQuery {
      OwnerAssets(where: {address: {_ilike: "${address}"}}) {
        address
        handbooks
        datadisks
        badges
        polBadges
        baseBadges
        kudosBadges
      }
    }
  `;

  try {
    try {
      const result = await fetchFromUrl(INDEXER_URL, query);
      const ownerAssets = result?.OwnerAssets?.[0] || {};
      return {
        handbooks: ownerAssets?.handbooks || [],
        datadisks: ownerAssets?.datadisks || [],
        badges: ownerAssets?.badges || [],
        polBadges: ownerAssets?.polBadges || [],
        baseBadges: ownerAssets?.baseBadges || [],
        kudosBadges: ownerAssets?.kudosBadges || []
      };
    } catch (error) {
      console.error('Primary indexer failed, trying backup:', error);
      const result = await fetchFromUrl(INDEXER_URL_BACKUP, query);
      const ownerAssets = result?.OwnerAssets?.[0] || {};
      return {
        handbooks: ownerAssets?.handbooks || [],
        datadisks: ownerAssets?.datadisks || [],
        badges: ownerAssets?.badges || [],
        polBadges: ownerAssets?.polBadges || [],
        baseBadges: ownerAssets?.baseBadges || [],
        kudosBadges: ownerAssets?.kudosBadges || []
      };
    }
  } catch (error) {
    console.error('Both indexers failed:', error);
    return { ...OwnerAssets, failed: true };
  }
};

export const countExplorerBadges = async (badgeId: number): Promise<number | null> => {
  const query = `
    query Count {
      OwnerAssets(where: {badges: {_contains: [${badgeId}]}}) {
        address
      }
    }
  `;

  try {
    try {
      const result = await fetchFromUrl(INDEXER_URL, query);
      return result?.OwnerAssets?.length || null;
    } catch (error) {
      console.error('Primary indexer failed, trying backup:', error);
      const result = await fetchFromUrl(INDEXER_URL_BACKUP, query);
      return result?.OwnerAssets?.length || null;
    }
  } catch (error) {
    console.error('Both indexers failed:', error);
    return null;
  }
};

export const countCommonElements = (arr1, arr2) => arr2.filter(item => new Set(arr1).has(item)).length;
