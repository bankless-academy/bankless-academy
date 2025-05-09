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

  const handleChainSwitch = async (targetChainId: number) => {
    if (!isConnected) return

    try {
      // Try to switch chain
      if (walletClient?.type === 'walletConnect') {
        await walletClient.switchChain({
          id: targetChainId,
        })
      } else {
        await switchChain(wagmiConfig, {
          chainId: targetChainId,
        })
      }

      // Wait a bit for the chain change to be reflected
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Verify the chain change
      const currentChainId = await walletClient?.getChainId()
      if (currentChainId !== targetChainId) {
        throw new Error('Chain switch verification failed')
      }
    } catch (error) {
      console.error('Chain switch error:', error)
      toast.closeAll()
      toast({
        title: `Error while trying to change the network.`,
        description: `Try changing the network to '${
          NETWORKS[
            Object.keys(NETWORKS).find(
              (n) => NETWORKS[n].chainId === targetChainId
            )
          ]?.name
        }' manually from your wallet.`,
        status: 'warning',
        duration: 20000,
        isClosable: true,
      })
    }
  }

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
              border={isSmallScreen ? '1px solid transparent' : 'default'}
              px={isSmallScreen ? '11px !important' : '16px'}
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
                bg="var(--chakra-colors-whiteAlpha-200)"
                color="lightgrey"
              >
                {t('Select a network')}
              </Text>
              {Object.keys(NETWORKS).map((network, index) => (
                <MenuItem
                  key={index}
                  minH="40px"
                  onClick={() => handleChainSwitch(NETWORKS[network].chainId)}
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
