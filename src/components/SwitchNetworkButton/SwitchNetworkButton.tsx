import React from 'react'
import { Select } from '@chakra-ui/react'
import networks from 'constants/networks'
import { useState } from 'react'

const SwitchNetworkButton = ({ isMobile }: { isMobile: boolean }): any => {
  const [network, setNetwork] = useState(networks.mainnet)
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
      setNetwork(networks[networkName])
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
          setNetwork(networks[networkName])
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
        bg={network.color}
        borderColor={network.color}
        onChange={handleChange}
        value={network.name}
        color={network.textColor}
      >
        <option value={networks.mainnet.name}>{networks.mainnet.name}</option>
        <option value={networks.kovan.name}>{networks.kovan.name}</option>
        <option value={networks.matic.name}>{networks.matic.name}</option>
        <option value={networks.mumbai.name}>{networks.mumbai.name}</option>
      </Select>
    </>
  )
}

export default SwitchNetworkButton
