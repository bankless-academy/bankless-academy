import React from 'react'
import { Select } from '@chakra-ui/react'
import networks from '../constants/networks'

const SwitchNetworkButton = ({ isMobile }: { isMobile: boolean }): any => {
  const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const networkName = event.target.value
    await switchNetwork(networkName.toLowerCase())
  }

  const switchNetwork = async (networkName) => {
    const { ethereum } = window

    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [
          { chainId: `0x${networks[networkName].chainId.toString(16)}` },
        ],
      })
    } catch (error) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (error.code === 4902) {
        try {
          const data = [
            {
              chainId: `0x2A`,
              chainName: 'kovan',
              nativeCurrency: {
                name: 'kovan',
                symbol: 'eth',
                decimals: 18,
              },
              rpcUrls: [networks.kovan.rpcUrl],
              blockExplorerUrls: [networks.kovan.blockExplorer],
            },
          ]
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: data,
          })
        } catch (addError) {
          // handle "add" error
          console.error(addError)
        }
      }
      // handle other "switch" errors
      console.error(error)
    }
  }

  return (
    <>
      <Select
        size={isMobile ? 'sm' : 'md'}
        bg={'#58aedf'}
        borderColor={'#58aedf'}
        onChange={handleChange}
        defaultValue={networks.mainnet.name}
      >
        <option value={networks.mainnet.name}>{networks.mainnet.name}</option>
        <option value={networks.kovan.name}>{networks.kovan.name}</option>
      </Select>
    </>
  )
}

export default SwitchNetworkButton
