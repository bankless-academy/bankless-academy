/* eslint-disable no-console */
import { getCsrfToken, signIn, signOut, getSession } from 'next-auth/react'
import type {
  SIWEVerifyMessageArgs,
  SIWECreateMessageArgs,
  SIWESession,
} from '@web3modal/siwe'
import { createSIWEConfig, formatMessage } from '@web3modal/siwe'

import { chains } from 'utils/wagmi'

export const siweConfig = createSIWEConfig({
  getMessageParams: async () => ({
    domain: 'app.banklessacademy.com',
    uri: 'https://app.banklessacademy.com',
    chains: chains.map((chain) => chain.id),
    statement: 'Please sign with your account',
  }),
  createMessage: ({ address, ...args }: SIWECreateMessageArgs) =>
    formatMessage({ ...args, iat: new Date().toISOString() }, address),
  getNonce: async () => {
    const nonce = await getCsrfToken()
    if (!nonce) {
      throw new Error('Failed to get nonce!')
    }

    return nonce
  },
  getSession: async () => {
    try {
      const session = await getSession()
      // console.log(session)
      if (!session) {
        throw new Error('Failed to get session!')
      }

      const { address, chainId } = session as unknown as SIWESession

      return { address, chainId }
    } catch (error) {
      console.log(error)
    }
  },
  verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
    try {
      const success = await signIn('credentials', {
        message,
        redirect: false,
        signature,
        callbackUrl: '/protected',
      })
      // console.log('success', success)

      return Boolean(success?.ok)
    } catch (error) {
      console.log(error)
      return false
    }
  },
  signOut: async () => {
    console.log('signOut')
    try {
      await signOut({
        redirect: false,
      })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  },
  onSignIn: () => {
    console.log('onSignIn')
  },
  signOutOnNetworkChange: false,
})
