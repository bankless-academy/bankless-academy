import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React as useWeb3ReactCore } from '@web3-react/core'
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { useMediaQuery } from '@chakra-ui/react'

import { DefaultProviderName } from 'constants/index'

export function useActiveWeb3React(): Web3ReactContextInterface<Web3Provider> & {
  chainId?
} {
  const walletNetwork = useWeb3ReactCore<Web3Provider>()
  const defaultNetwork = useWeb3ReactCore<Web3Provider>(DefaultProviderName)
  return walletNetwork.active ? walletNetwork : defaultNetwork
}

export function useWalletWeb3React(): Web3ReactContextInterface<Web3Provider> & {
  chainId?
} {
  const walletNetwork = useWeb3ReactCore<Web3Provider>()
  return walletNetwork
}

export function useDefaultWeb3React(): Web3ReactContextInterface<Web3Provider> & {
  chainId?
} {
  const defaultNetwork = useWeb3ReactCore<Web3Provider>(DefaultProviderName)
  return defaultNetwork
}

export function useSmallScreen(): boolean[] {
  return useMediaQuery(['(max-width: 800px)', '(max-width: 1260px)'])
}
