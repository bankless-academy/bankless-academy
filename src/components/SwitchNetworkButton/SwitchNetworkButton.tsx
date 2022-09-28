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
  useToast,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

import { NETWORKS, SUPPORTED_NETWORKS_IDS } from 'constants/networks'
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
  const toast = useToast()
  const [currentNetwork, setCurrentNetwork] = useState(NETWORKS.mainnet)

  const handleChange = async (networkName) => {
    await switchNetwork(networkName.toLowerCase(), setCurrentNetwork)
  }

  useEffect(() => {
    const metamask = window.ethereum
    metamask?.on('networkChanged', function (networkId) {
      if (!SUPPORTED_NETWORKS_IDS.includes(parseInt(networkId))) {
        // wrong network
        toast.closeAll()
        toast({
          title: 'Wrong network detected',
          description: 'Please switch back to Ethereum Mainnet',
          status: 'warning',
          duration: null,
        })
      } else {
        // correct network
        toast.closeAll()
      }
    })
    if (metamask) {
      handleNetworkChange(metamask, setCurrentNetwork)
      // MetaMask mobile hack
      setTimeout(() => handleNetworkChange(metamask, setCurrentNetwork), 1000)
    } else {
      console.error('no ethereum detected')
    }
  }, [window.ethereum])

  return (
    <div>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              variant="primary"
              size={isSmallScreen ? 'sm' : 'md'}
            >
              <Box display="flex" alignItems="center">
                <Image
                  src={currentNetwork.image}
                  height={22}
                  mr={isSmallScreen ? '0' : '12px'}
                />
                <Box
                  flex="1"
                  isTruncated
                  display={isSmallScreen ? 'none' : 'inherit'}
                >
                  {currentNetwork.name}
                </Box>
                {isOpen ? <ChevronUpIcon ml="1" /> : <ChevronDownIcon ml="1" />}
              </Box>
            </MenuButton>
            <MenuList>
              <Text ml="4" mb="2" color="gray.500">
                Select a network
              </Text>
              {Object.keys(NETWORKS).map((network, index) => (
                <MenuItem
                  key={index}
                  minH="40px"
                  onClick={() => handleChange(network)}
                  backgroundColor={
                    currentNetwork.chainId === NETWORKS[network].chainId
                      ? 'blackAlpha.300'
                      : 'default'
                  }
                >
                  <Image
                    height={25}
                    rounded="full"
                    src={NETWORKS[network].image}
                    alt={NETWORKS[network].name}
                    mr="12px"
                  />
                  <Box flex="1" isTruncated>
                    {NETWORKS[network].name}
                  </Box>
                  {currentNetwork.chainId === NETWORKS[network].chainId && (
                    <CircleIcon />
                  )}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </div>
  )
}

export default SwitchNetworkButton
