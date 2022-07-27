import Web3Modal from 'web3modal'
import React, { useState, useEffect } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import {
  Button,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  SimpleGrid,
  Box,
  Image,
  Link,
} from '@chakra-ui/react'
import { Wallet } from 'phosphor-react'
import axios from 'axios'
import Davatar from '@davatar/react'

import ENSName from 'components/ENSName'
import { useWalletWeb3React } from 'hooks'
import { walletConnect, injected } from 'utils'
import {
  INFURA_ID,
  POAP_EVENT_IDS,
  OLD_POAP_EVENT_IDS,
  IS_WHITELABEL,
} from 'constants/index'
import { PoapType } from 'entities/poap'

let web3Modal: Web3Modal

const ConnectWalletButton = ({
  isSmallScreen,
}: {
  isSmallScreen: boolean
}): React.ReactElement => {
  const [web3Provider, setWeb3Provider] = useState()
  const walletWeb3ReactContext = useWalletWeb3React()
  const isConnected = walletWeb3ReactContext.active
  const walletAddress = walletWeb3ReactContext.account
  const [connectClick, setConnectClick] = useState(false)
  const [walletIsLoading, setWalletIsLoading] = useState(false)
  const [poaps, setPoaps] = useState<PoapType[]>([])
  const web3ModalFrame = {
    cacheProvider: true,
    theme: {
      background: '#010101',
      main: 'white',
      secondary: 'white',
      border: '#252525',
      hover: '#363636',
    },
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: INFURA_ID,
        },
        connector: async () => {
          return 'walletconnect'
        },
      },
      injected: {
        package: null,
        connector: async () => {
          return 'injected'
        },
      },
    },
  }

  function web3ModalConnect(web3Modal) {
    web3Modal
      .connect()
      .then((provider) => {
        setWeb3Provider(provider)
        if (provider.isMetaMask) {
          return walletWeb3ReactContext.activate(injected)
        } else {
          return walletWeb3ReactContext.activate(walletConnect)
        }
      })
      .then(() => {
        setConnectClick(false)
      })
      .catch((e) => {
        setWalletIsLoading(false)
        setConnectClick(false)
        console.error(e)
      })
  }

  useEffect(() => {
    if (
      localStorage.getItem('WEB3_CONNECT_CACHED_PROVIDER') &&
      // don't prompt MetaMask popup if wallet isn't unlocked
      !(window?.ethereum?.isMetaMask && !window?.ethereum?.selectedAddress)
    ) {
      web3Modal = new Web3Modal(web3ModalFrame)
      web3ModalConnect(web3Modal)
    }
  }, [])

  useEffect(() => {
    if (connectClick) {
      setWalletIsLoading(true)
      web3Modal = new Web3Modal(web3ModalFrame)
      web3ModalConnect(web3Modal)
    }
  }, [connectClick])

  useEffect(() => {
    if (walletAddress) {
      axios
        .get(`https://api.poap.xyz/actions/scan/${walletAddress}`)
        .then((res) => {
          if (Array.isArray(res.data)) {
            setPoaps(
              res.data.filter(
                (poap: PoapType) =>
                  POAP_EVENT_IDS.includes(poap.event.id.toString()) ||
                  OLD_POAP_EVENT_IDS.includes(poap.event.id.toString())
              )
            )
          }
        })
    }
  }, [walletAddress])

  return (
    <>
      {isConnected ? (
        <Popover trigger={isSmallScreen ? 'click' : 'hover'}>
          <PopoverTrigger>
            <Button
              variant="secondary"
              size={isSmallScreen ? 'sm' : 'md'}
              // TODO: fix bug when switching wallets
              leftIcon={<Davatar address={walletAddress} size={25} />}
            >
              <Text maxW="200px" display="flex" alignItems="center" isTruncated>
                <ENSName provider={web3Provider} address={walletAddress} />
              </Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Box textAlign="center" m="2">
                <Button
                  isFullWidth
                  size={isSmallScreen ? 'sm' : 'md'}
                  leftIcon={<Wallet weight="bold" />}
                  onClick={() => {
                    walletWeb3ReactContext.deactivate()
                    web3Modal.clearCachedProvider()
                    localStorage.removeItem('walletconnect')
                    setWalletIsLoading(false)
                    setPoaps([])
                  }}
                >
                  Disconnect wallet
                </Button>
              </Box>
              {/* TODO: move to dedicated component? */}
              {!IS_WHITELABEL && poaps?.length > 0 && (
                <>
                  <Text fontSize="xl" fontWeight="bold" textAlign="center">
                    My Academy POAPs
                  </Text>
                  <Box
                    maxHeight="320px"
                    overflow="scroll"
                    backgroundColor="blackAlpha.200"
                    borderRadius="10px"
                  >
                    <SimpleGrid columns={3} spacing={3} p={3}>
                      {poaps?.map((poap, index) => {
                        const twitterLink = `https://twitter.com/intent/tweet?url=https%3A%2F%2Fapp.poap.xyz%2Ftoken%2F${poap.tokenId}&text=Look%20at%20my%20@BanklessAcademy%20POAP%20NFT!%20👀%0AGo%20to%20https%3A%2F%2Fapp.banklessacademy.com%2F%20to%20learn%20about%20%23Web3%20and%20%23DeFi%20and%20claim%20your%20free%20POAP!%20🔥`
                        return (
                          <Box
                            key={`poap-${index}`}
                            justifySelf="center"
                            boxShadow="0px 0px 4px 2px #00000060"
                            borderRadius="3px"
                            backgroundColor="blackAlpha.300"
                            p={1}
                          >
                            <Link href={twitterLink} target="_blank">
                              <Image
                                src={poap.event.image_url}
                                width="70px"
                                height="70px"
                                borderRadius="50%"
                              />
                            </Link>
                          </Box>
                        )
                      })}
                    </SimpleGrid>
                  </Box>
                </>
              )}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      ) : (
        <Button
          onClick={() => {
            setConnectClick(true)
          }}
          size={isSmallScreen ? 'sm' : 'md'}
          leftIcon={<Wallet weight="bold" />}
          isLoading={walletIsLoading}
          loadingText="Connecting wallet"
        >
          Connect wallet
        </Button>
      )}
    </>
  )
}

export default ConnectWalletButton
