import { fromHex, getAddress } from 'viem'
import { createConnector } from 'wagmi'

type EthereumProvider = {
  on: (event: string, callback: (chainId: string) => void) => void
  request: (args: { method: string; params?: any[] }) => Promise<any>
}

declare global {
  interface Window {
    ethereum?: Record<string, unknown>
  }
}

frameConnector.type = 'frameConnector' as const

export function frameConnector() {
  let connected = true
  let sdk: any = null

  const loadSdk = async () => {
    if (typeof window === 'undefined') return null
    if (!sdk) {
      try {
        const frameSdk = await import('@farcaster/frame-sdk')
        sdk = frameSdk.default
        return sdk
      } catch (error) {
        console.error('Failed to load Frame SDK:', error)
        throw error
      }
    }
    return sdk
  }

  return createConnector<any>((config) => ({
    id: 'farcaster',
    name: 'Parent Window Provider / Farcaster',
    type: frameConnector.type,

    async setup() {
      if (typeof window === 'undefined') return

      try {
        await loadSdk()
        const provider = await this.getProvider()

        provider.on('chainChanged', (chainId: string) => {
          const newChainId = fromHex(chainId as `0x${string}`, 'number')
          config.emitter.emit('change', { chainId: newChainId })
        })

        if (window.ethereum) {
          (window.ethereum as EthereumProvider).on('chainChanged', (chainId: string) => {
            const newChainId = fromHex(chainId as `0x${string}`, 'number')
            config.emitter.emit('change', { chainId: newChainId })
          })
        }
      } catch (error) {
        console.error('Failed to setup Frame connector:', error)
      }
    },

    async connect() {
      if (typeof window === 'undefined') {
        throw new Error('Cannot connect on server side')
      }

      try {
        const loadedSdk = await loadSdk()
        if (!loadedSdk?.wallet?.ethProvider) {
          throw new Error('Frame SDK wallet provider not available')
        }

        const provider = loadedSdk.wallet.ethProvider
        const accounts = await provider.request({
          method: 'eth_requestAccounts',
        })

        const hexChainId = await provider.request({ method: 'eth_chainId' })
        const chainId = fromHex(hexChainId, 'number')

        connected = true
        return {
          accounts: accounts.map((x) => getAddress(x)),
          chainId,
        }
      } catch (error) {
        console.error('Failed to connect Frame wallet:', error)
        throw error
      }
    },

    async disconnect() {
      connected = false
    },

    async getAccounts() {
      if (typeof window === 'undefined') return []
      if (!connected) throw new Error('Not connected')

      const loadedSdk = await loadSdk()
      if (!loadedSdk?.wallet?.ethProvider) {
        throw new Error('Frame SDK wallet provider not available')
      }

      const provider = loadedSdk.wallet.ethProvider
      const accounts = await provider.request({
        method: 'eth_requestAccounts',
      })
      return accounts.map((x) => getAddress(x))
    },

    async getChainId() {
      if (typeof window === 'undefined') return config.chains[0].id
      if (!connected) return config.chains[0].id

      try {
        const loadedSdk = await loadSdk()
        if (!loadedSdk?.wallet?.ethProvider) {
          throw new Error('Frame SDK wallet provider not available')
        }

        const provider = loadedSdk.wallet.ethProvider
        const hexChainId = await provider.request({ method: 'eth_chainId' })
        return fromHex(hexChainId, 'number')
      } catch (error) {
        console.error('Failed to get chain ID:', error)
        return config.chains[0].id
      }
    },

    async isAuthorized() {
      if (typeof window === 'undefined') return false
      if (!connected) return false

      try {
        const accounts = await this.getAccounts()
        return !!accounts.length
      } catch {
        return false
      }
    },

    onAccountsChanged(accounts) {
      if (accounts.length === 0) this.onDisconnect()
      else
        config.emitter.emit('change', {
          accounts: accounts.map((x) => getAddress(x)),
        })
    },

    onChainChanged(chain) {
      const chainId = Number(chain)
      config.emitter.emit('change', { chainId })
    },

    async onDisconnect() {
      config.emitter.emit('disconnect')
      connected = false
    },

    async getProvider() {
      if (typeof window === 'undefined') {
        throw new Error('Cannot get provider on server side')
      }

      const loadedSdk = await loadSdk()
      if (!loadedSdk?.wallet?.ethProvider) {
        throw new Error('Frame SDK wallet provider not available')
      }
      return loadedSdk.wallet.ethProvider
    },
  }))
} 
