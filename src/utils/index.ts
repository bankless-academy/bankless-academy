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

import { NETWORKS, SUPPORTED_NETWORKS_IDS } from 'constants/networks'
import ONEINCH_SWAP_ABI from 'abis/1inch.json'

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
  return `${address.substr(0, 6)}...${address.substr(38, 4)}`
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
  rpc: { 1: NETWORKS.mainnet.rpcUrl },
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
          new providers.JsonRpcProvider(NETWORKS['matic'].rpcUrl),
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
          if (
            txDetails.to.toLowerCase() ===
            // 1inch v4 Router contract
            '0x1111111254fb6c44bac0bed2854e76f90643097d'.toLowerCase()
          ) {
            check.push(true)
            console.log('OK contract')
            const iface = new ethers.utils.Interface(ONEINCH_SWAP_ABI)
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
