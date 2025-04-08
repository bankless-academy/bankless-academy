import { SwitchChainError, fromHex, getAddress, numberToHex } from 'viem'
import { ChainNotConfiguredError, createConnector } from 'wagmi'

frameConnector.type = 'frameConnector' as const

export function frameConnector() {
  let connected = true
  let sdk: any = null

  const loadSdk = async () => {
    // Only load SDK on client side
    if (typeof window === 'undefined') {
      return null
    }

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
        try {
          await sdk.actions.addFrame()
        } catch (error) {
          console.error('Failed to add frame:', error)
        }
        await this.connect({ chainId: config.chains[0].id })
      } catch (error) {
        console.error('Failed to setup Frame connector:', error)
      }
    },

    async connect({ chainId } = {}) {
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

        let currentChainId = await this.getChainId()
        if (chainId && currentChainId !== chainId) {
          const chain = await this.switchChain!({ chainId })
          currentChainId = chain.id
        }

        connected = true

        return {
          accounts: accounts.map((x) => getAddress(x)),
          chainId: currentChainId,
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

      const loadedSdk = await loadSdk()
      if (!loadedSdk?.wallet?.ethProvider) {
        throw new Error('Frame SDK wallet provider not available')
      }

      const provider = loadedSdk.wallet.ethProvider
      const hexChainId = await provider.request({ method: 'eth_chainId' })
      return fromHex(hexChainId, 'number')
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

    async switchChain({ chainId }) {
      if (typeof window === 'undefined') {
        throw new Error('Cannot switch chain on server side')
      }

      const loadedSdk = await loadSdk()
      if (!loadedSdk?.wallet?.ethProvider) {
        throw new Error('Frame SDK wallet provider not available')
      }

      const provider = loadedSdk.wallet.ethProvider
      const chain = config.chains.find((x) => x.id === chainId)
      if (!chain) throw new SwitchChainError(new ChainNotConfiguredError())

      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: numberToHex(chainId) }],
      })
      return chain
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
