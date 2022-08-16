import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import * as ethUtil from 'ethereumjs-util'
import { ethers } from 'ethers'

import { NETWORKS, SUPPORTED_NETWORKS_IDS } from 'constants/networks'

declare global {
  interface Window {
    umami: any
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

export function shortenAddress(address: string): string {
  return `${address.substr(0, 6)}...${address.substr(38, 4)}`
}

export function getContract(
  address: string,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
  rpc: { 1: NETWORKS.mainnet.rpcUrl },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
})

export const network = new NetworkConnector({
  urls: { 1: NETWORKS.mainnet.rpcUrl },
  defaultChainId: 1,
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
