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
import { useAccount, useWalletClient } from 'wagmi'
import { useTranslation } from 'react-i18next'
import { switchChain } from '@wagmi/core'

import { NETWORKS, SUPPORTED_NETWORKS_IDS } from 'constants/networks'
import { IS_WALLET_DISABLED } from 'constants/index'
import { wagmiConfig } from 'utils/wagmi'

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <path
      fill="green"
      d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
    />
  </Icon>
)

const switchChainButton = ({
  isSmallScreen,
}: {
  isSmallScreen: boolean
}): any => {
  const { t } = useTranslation()
  const toast = useToast()
  const [currentNetwork, setCurrentNetwork] = useState(NETWORKS.mainnet)
  const [isNetworkUnknown, setIsNetworkUnknown] = useState(false)
  const { isConnected, chain } = useAccount()
  const { data: walletClient } = useWalletClient()
  useEffect(() => {
    if (chain?.id) {
      if (!(SUPPORTED_NETWORKS_IDS as number[]).includes(chain?.id)) {
        // wrong network
        toast.closeAll()
        toast({
          title: t('Wrong network detected'),
          description: t('Please switch back to Ethereum Mainnet'),
          status: 'warning',
          duration: null,
          isClosable: true,
        })
        setIsNetworkUnknown(true)
      } else {
        // correct network
        setIsNetworkUnknown(false)
        toast.closeAll()
        const networkName = Object.keys(NETWORKS).find(
          (network) => NETWORKS[network]?.chainId === chain?.id
        )
        setCurrentNetwork(NETWORKS[networkName])
      }
    } else {
      // wrong network
      toast.closeAll()
      toast({
        title: t('Wrong network detected'),
        description: t('Please switch back to Ethereum Mainnet'),
        status: 'warning',
        duration: null,
        isClosable: true,
      })
      setIsNetworkUnknown(true)
    }
  }, [chain?.id])

  if (IS_WALLET_DISABLED) return null

  return (
    <div>
      <Menu autoSelect={false}>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              variant="secondary"
              size={isSmallScreen ? 'sm' : 'md'}
            >
              <Box display="flex" alignItems="center">
                <Image
                  src={
                    isNetworkUnknown
                      ? '/images/unknown-network.png'
                      : currentNetwork.image
                  }
                  height={22}
                  mr={isSmallScreen ? '0' : '12px'}
                />
                <Box
                  flex="1"
                  isTruncated
                  display={isSmallScreen ? 'none' : 'inherit'}
                >
                  {isNetworkUnknown ? 'Unknown network' : currentNetwork.name}
                </Box>
                {isOpen ? <ChevronUpIcon ml="1" /> : <ChevronDownIcon ml="1" />}
              </Box>
            </MenuButton>
            <MenuList zIndex="10">
              <Text
                mt="-10px"
                pt="10px"
                pl="4"
                pb="2"
                bg="var(
                    --chakra-colors-whiteAlpha-200
                  )"
                color="lightgrey"
              >
                {t('Select a network')}
              </Text>
              {Object.keys(NETWORKS).map((network, index) => (
                <MenuItem
                  key={index}
                  minH="40px"
                  onClick={async () => {
                    if (isConnected) {
                      try {
                        if (walletClient?.type === 'walletConnect') {
                          await walletClient.switchChain({
                            id: NETWORKS[network].chainId,
                          })
                        } else {
                          await switchChain(wagmiConfig, {
                            chainId: NETWORKS[network].chainId,
                          })
                        }
                        if (
                          (await walletClient?.getChainId()) !==
                          NETWORKS[network].chainId
                        ) {
                          throw new Error(
                            'Error while trying to change the network.'
                          )
                        }
                      } catch (error) {
                        toast.closeAll()
                        toast({
                          title: `Error while trying to change the network.`,
                          description: `Try changing the network to '${NETWORKS[network].name}' manually from your wallet.`,
                          status: 'warning',
                          duration: 20000,
                          isClosable: true,
                        })
                      }
                    }
                  }}
                  backgroundColor={
                    currentNetwork.chainId === NETWORKS[network].chainId
                      ? 'blackAlpha.300'
                      : 'default'
                  }
                >
                  <Image
                    height={25}
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

export default switchChainButton
