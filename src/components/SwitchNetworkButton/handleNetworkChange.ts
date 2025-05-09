import { NETWORKS } from 'constants/networks'
import { Dispatch, SetStateAction } from 'react'
import { fromHex } from 'viem'

const setActiveNetwork = (chainId: string | number, setNetwork) => {
  const chainIdNumber = typeof chainId === 'string' ? fromHex(chainId as `0x${string}`, 'number') : chainId
  const children = Object.keys(NETWORKS)
  for (let i = 0; i < children?.length; i++) {
    if (NETWORKS[children[i]].chainId === chainIdNumber) {
      return setNetwork(NETWORKS[children[i]])
    }
  }
}

const handleNetworkChange = (
  provider: { on: any; networkVersion: string },
  setNetwork: Dispatch<
    SetStateAction<{
      name: string
      image: string
      chainId: number
      rpcUrl: string
      blockExplorer: string
    }>
  >
): void => {
  // Handle initial network
  setActiveNetwork(provider.networkVersion, setNetwork)

  // Listen for chain changes
  provider.on('chainChanged', (chainId: string | number) => {
    setActiveNetwork(chainId, setNetwork)
  })
}

export default handleNetworkChange
