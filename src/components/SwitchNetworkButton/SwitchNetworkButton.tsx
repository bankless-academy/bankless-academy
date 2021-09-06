import React, { useEffect, useState } from 'react'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import networks from 'constants/networks'
import switchNetwork from './switchNetwork'
import handleNetworkChange from './handleNetworkChange'

const SwitchNetworkButton = (): any => {
  const [network, setNetwork] = useState(networks.mainnet)

  const handleChange = async (networkName) => {
    await switchNetwork(networkName.toLowerCase(), setNetwork)
  }

  useEffect(() => {
    const metamask = window.ethereum
    if (metamask) {
      handleNetworkChange(metamask, setNetwork)
    }
  }, [])

  return (
    <div>
      <Menu>
        <MenuButton as={Button}>
          <Grid templateColumns="repeat(4, 1fr)">
            <GridItem colSpan={1}>
              <Image src={network.image} height={22} mr="12px" />
            </GridItem>
            <GridItem colSpan={2}>{network.name}</GridItem>
            <GridItem colSpan={1}>
              <ChevronDownIcon />
            </GridItem>
          </Grid>
        </MenuButton>
        <MenuList>
          {Object.keys(networks).map((network, index) => (
            <MenuItem
              key={index}
              minH="40px"
              onClick={() => handleChange(networks[network].name)}
            >
              <Image
                height={25}
                width={25}
                rounded="full"
                src={networks[network].image}
                alt={networks[network].name}
                mr="12px"
              />
              <span>{networks[network].name}</span>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  )
}

export default SwitchNetworkButton
