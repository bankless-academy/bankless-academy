import React, { useEffect, useState } from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Text,
  Box,
  Icon,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

import networks from 'constants/networks'
import switchNetwork from './switchNetwork'
import handleNetworkChange from './handleNetworkChange'

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="green"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

const SwitchNetworkButton = ({
  isSmallScreen,
}: {
  isSmallScreen: boolean
}): any => {
  const [currentNetwork, setCurrentNetwork] = useState(networks.mainnet)

  const handleChange = async (networkName) => {
    await switchNetwork(networkName.toLowerCase(), setCurrentNetwork)
  }

  useEffect(() => {
    const metamask = window.ethereum
    if (metamask) {
      handleNetworkChange(metamask, setCurrentNetwork)
      // MetaMask mobile hack
      setTimeout(() => handleNetworkChange(metamask, setCurrentNetwork), 1000)
    }
  }, [window.ethereum])

  return (
    <div>
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="blackAlpha"
          size={isSmallScreen ? 'sm' : 'md'}
        >
          <Box display="flex" alignItems="center">
            <Image src={currentNetwork.image} height={22} mr="12px" />
            <Box flex="1" isTruncated>
              {currentNetwork.name}
            </Box>
            {isSmallScreen ? (
              <ChevronUpIcon ml="1" />
            ) : (
              <ChevronDownIcon ml="1" />
            )}
          </Box>
        </MenuButton>
        <MenuList>
          <Text ml="4" mb="2" color="gray.500">
            Select a network
          </Text>
          {Object.keys(networks).map((network, index) => (
            <MenuItem
              key={index}
              minH="40px"
              onClick={() => handleChange(network)}
              backgroundColor={
                currentNetwork.chainId === networks[network].chainId
                  ? 'blackAlpha.300'
                  : 'default'
              }
            >
              <Image
                height={25}
                rounded="full"
                src={networks[network].image}
                alt={networks[network].name}
                mr="12px"
              />
              <Box flex="1" isTruncated>
                {networks[network].name}
              </Box>
              {currentNetwork.chainId === networks[network].chainId && (
                <CircleIcon />
              )}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  )
}

export default SwitchNetworkButton
