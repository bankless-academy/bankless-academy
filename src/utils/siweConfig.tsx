/* eslint-disable no-console */
import { getCsrfToken, signIn, signOut, getSession } from 'next-auth/react'
import type {
  SIWEVerifyMessageArgs,
  SIWECreateMessageArgs,
  SIWESession,
} from '@web3modal/siwe'
import { createSIWEConfig, formatMessage } from '@web3modal/siwe'
import { mainnet } from 'viem/chains'

export const siweConfig = createSIWEConfig({
  getMessageParams: async () => ({
    domain: typeof window !== 'undefined' ? window.location.host : '',
    uri: typeof window !== 'undefined' ? window.location.origin : '',
    chains: [mainnet.id],
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

      return Boolean(success?.ok)
    } catch (error) {
      return false
    }
  },
  signOut: async () => {
    try {
      await signOut({
        redirect: false,
      })
      console.log('signOut')
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
