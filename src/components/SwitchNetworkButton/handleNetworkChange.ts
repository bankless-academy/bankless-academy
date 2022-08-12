import { NETWORKS } from 'constants/networks'
import { Dispatch, SetStateAction } from 'react'

const setActiveNetwork = (chainId, setNetwork) => {
  const children = Object.keys(NETWORKS)
  for (let i = 0; i < children.length; i++) {
    if (NETWORKS[children[i]].chainId === Number(chainId)) {
      return setNetwork(NETWORKS[children[i]])
    }
  }
}

const handleNetworkChange = (
  metamask: { on: any; networkVersion: string },
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
  setActiveNetwork(metamask.networkVersion, setNetwork)
  metamask.on('chainChanged', (chainId) => {
    setActiveNetwork(chainId, setNetwork)
  })
}

export default handleNetworkChange
