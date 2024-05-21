import { NETWORKS } from 'constants/networks'
import { Dispatch, SetStateAction } from 'react'
import { ExternalProvider } from '@ethersproject/providers'

const switchChain = async (
  provider: ExternalProvider,
  networkName: string,
  setNetwork?: Dispatch<
    SetStateAction<{
      name: string
      image: string
      chainId: number
      rpcUrl: string
      blockExplorer: string
    }>
  >
): Promise<any> => {
  try {
    await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${NETWORKS[networkName].chainId.toString(16)}` }],
    })
    return setNetwork && setNetwork(NETWORKS[networkName])
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask| Wallet Connect
    if (error.code === 4902 || error.code === -32000) {
      try {
        const data = [
          {
            chainId: `0x${NETWORKS[networkName].chainId.toString(16)}`,
            chainName: NETWORKS[networkName].networkName,
            nativeCurrency: {
              name: NETWORKS[networkName].currencySymbol,
              symbol: NETWORKS[networkName].currencySymbol,
              decimals: 18,
            },
            rpcUrls: [NETWORKS[networkName].rpcUrlAdd],
            blockExplorerUrls: [NETWORKS[networkName].blockExplorer],
          },
        ]
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: data,
        })
        return setNetwork(NETWORKS[networkName])
      } catch (addError) {
        // handle "add" error
        return console.error(addError)
      }
    }
    // handle other "switch" errors
    return console.error(error)
  }
}

export default switchChain
