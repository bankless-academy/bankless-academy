import networks from 'constants/networks'
import { Dispatch, SetStateAction } from 'react'

const switchNetwork = async (
  networkName: string,
  setNetwork: Dispatch<
    SetStateAction<{
      name: string
      color: string
      textColor: string
      chainId: number
      rpcUrl: string
      blockExplorer: string
    }>
  >
): Promise<any> => {
  const { ethereum } = window

  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: `0x${networks[networkName].chainId.toString(16)}` }],
    })
    return setNetwork(networks[networkName])
  } catch (error) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (error.code === 4902) {
      try {
        const data = [
          {
            chainId: `0x${networks[networkName].chainId.toString(16)}`,
            chainName: networks[networkName].networkName,
            nativeCurrency: {
              name: networks[networkName].currencySymbol,
              symbol: networks[networkName].currencySymbol,
              decimals: 18,
            },
            rpcUrls: [networks[networkName].rpcUrl],
            blockExplorerUrls: [networks[networkName].blockExplorer],
          },
        ]
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: data,
        })
        return setNetwork(networks[networkName])
      } catch (addError) {
        // handle "add" error
        return console.error(addError)
      }
    }
    // handle other "switch" errors
    return console.error(error)
  }
}

export default switchNetwork
