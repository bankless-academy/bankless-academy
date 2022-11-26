/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import * as ethUtil from 'ethereumjs-util'
import { ethers } from 'ethers'
import { verifyTypedData } from 'ethers/lib/utils'
import { Network } from '@ethersproject/networks'
import queryString from 'query-string'
import mixpanel, { Dict, Query } from 'mixpanel-browser'

import { DOMAIN_PROD, INFURA_ID } from 'constants/index'
import { NETWORKS, SUPPORTED_NETWORKS_IDS, RPCS } from 'constants/networks'
import ONEINCH_V4_ABI from 'abis/1inch_v4.json'
import ONEINCH_V5_ABI from 'abis/1inch_v5.json'

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
export const DEBUG: string =
  debugParam !== undefined
    ? debugParam
    : typeof window !== 'undefined'
    ? localStorage.getItem('debug')
    : null
export const IS_DEBUG = debugParam !== undefined && debugParam !== 'false'
if (debugParam !== undefined) localStorage.setItem('debug', DEBUG)
if (debugParam === 'false') localStorage.removeItem('debug')

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

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_NETWORKS_IDS,
})

export const walletConnect = new WalletConnectConnector({
  infuraId: INFURA_ID,
  rpc: RPCS,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})

export const network = new NetworkConnector({
  urls: { 1: NETWORKS.mainnet.rpcUrl },
  defaultChainId: 1,
})

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

export const trimCurrencyForWhales = (labelValue: number): string | number => {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + 'B'
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
    : Math.abs(Number(labelValue))
}

export const track = (event: string, value?: any): void => {
  if (typeof window !== 'undefined') {
    // TODO: change type of event value to JSON instead of varchar(50)
    // window.umami.trackEvent(typeof value === 'object' ? JSON.stringify(value) : value, event)
    window?.umami?.trackEvent(
      typeof value === 'object' ? Object.values(value).join('|') : value,
      event
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

export function verifySignature(
  address: string,
  signature: string,
  message: string
): boolean {
  const signer = recoverPersonalSignature(signature, message)
  return signer.toLowerCase() === address.toLowerCase()
}

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
  tx: string
): Promise<boolean> {
  try {
    if (quest === 'DEXAggregators') {
      const check = []
      const matic: Network = {
        name: 'matic',
        chainId: NETWORKS['matic'].chainId,
        _defaultProvider: (providers) =>
          new providers.JsonRpcProvider(
            `https://polygon-mainnet.infura.io/v3/${INFURA_ID}`
          ),
      }
      const provider = ethers.getDefaultProvider(matic)
      const receipt = await provider.waitForTransaction(tx, 2)
      // console.log('receipt', receipt.status)
      if (receipt?.status) {
        check.push(true)
        console.log('OK tx status confirmed')
        const txDetails = await provider.getTransaction(tx)
        // console.log('txDetails', txDetails)
        if (txDetails) {
          if (txDetails.from.toLowerCase() === address.toLowerCase()) {
            check.push(true)
            console.log('OK from')
          }
          // 1inch v4 Router contract
          const is1inchV4 =
            txDetails.to.toLowerCase() ===
            '0x1111111254fb6c44bac0bed2854e76f90643097d'.toLowerCase()
          // 1inch v5 Router contract
          const is1inchV5 =
            txDetails.to.toLowerCase() ===
            '0x1111111254EEB25477B68fb85Ed929f73A960582'.toLowerCase()
          if (is1inchV4 || is1inchV5) {
            check.push(true)
            console.log('OK contract')
            const iface = new ethers.utils.Interface(
              is1inchV4 ? ONEINCH_V4_ABI : ONEINCH_V5_ABI
            )
            const decodedData = iface.parseTransaction({
              data: txDetails.data,
              value: txDetails.value,
            })
            // console.log('decodedData', decodedData)
            if (decodedData.name === 'swap') {
              check.push(true)
              console.log('OK swap')
            }
            if (
              decodedData.args[1].includes(
                '0xDB7Cb471dd0b49b29CAB4a1C14d070f27216a0Ab'
              )
            ) {
              check.push(true)
              console.log('OK BANK swap')
            }
          }
        }
      }
      console.log('checks validated (5)', check.length)
      return check.length === 5
    }
    return false
  } catch (error) {
    console.error(error)
    return false
  }
}

// TODO: remove debug
mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_ID, {
  api_host: '/mp',
  debug: true,
})
export const mixpanel_distinct_id = mixpanel.get_distinct_id()

export const Mixpanel = {
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
    const current_wallet = localStorage.getItem('current_wallet')
    if (current_wallet) {
      const mp_current_wallet = localStorage.getItem(`mp_${current_wallet}`)
      if (!mp_current_wallet?.length) {
        mixpanel.alias(current_wallet)
        mixpanel.people.set({ name: current_wallet, wallets })
        localStorage.setItem(`mp_${current_wallet}`, mixpanel_distinct_id)
      }
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
