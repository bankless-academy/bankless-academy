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
import axios from 'axios'
import ENSName from 'components/ENSName'
import { useWalletWeb3React } from 'hooks'
import { walletConnect, injected, trimCurrencyForWhales } from 'utils'
import { useTokenBalance } from 'hooks/token/useTokenBalance'
import { INFURA_ID } from 'constants/'
import { PoapType } from 'entities/poap'

let web3Modal: Web3Modal

const ConnectWalletButton = ({
  isMobile,
}: {
  isMobile: boolean
}): React.ReactElement => {
  const [web3Provider, setWeb3Provider] = useState()
  const walletWeb3ReactContext = useWalletWeb3React()
  const isConnected = walletWeb3ReactContext.active
  const walletAddress = walletWeb3ReactContext.account
  const [connectClick, setConnectClick] = useState(false)
  const [walletIsLoading, setWalletIsLoading] = useState(false)
  const [poaps, setPoaps] = useState<PoapType[]>([])

  useEffect(() => {
    if (connectClick) {
      setWalletIsLoading(true)
      if (!web3Modal) {
        alert(`WEB 3 MODAL FOUND`)
        web3Modal = new Web3Modal({
          cacheProvider: false,
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
        })
      }
      alert('CONNECTING WEB 3 MODAL')
      web3Modal
        .connect()
        .then((provider) => {
          setWeb3Provider(provider)
          alert(`WEB 3 MODAL CONNECTED`)
          alert(provider)
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
                  poap.event.name.toLowerCase().includes('bankless') ||
                  poap.event.description.toLowerCase().includes('bankless') ||
                  poap.event.name.toLowerCase().includes('onboard') ||
                  poap.event.description.toLowerCase().includes('onboard')
              )
            )
          }
        })
    }
  }, [walletAddress])

  const rawBalance = useTokenBalance(walletWeb3ReactContext.account) ?? 0
  const balance = trimCurrencyForWhales(rawBalance)

  return (
    <>
      {isConnected ? (
        <Popover trigger={isMobile ? 'click' : 'hover'}>
          <PopoverTrigger>
            <Button
              variant="outline"
              paddingRight="1"
              paddingLeft="4"
              size={isMobile ? 'sm' : 'md'}
            >
              {balance} BANK
              <Button size={isMobile ? 'xs' : 'sm'} marginLeft="2">
                <Text maxW="200px" isTruncated>
                  <ENSName provider={web3Provider} address={walletAddress} />
                </Text>
              </Button>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverBody>
              <Box textAlign="center" m="2">
                <Button
                  isFullWidth
                  size={isMobile ? 'sm' : 'md'}
                  onClick={() => {
                    walletWeb3ReactContext.deactivate()
                    setWalletIsLoading(false)
                    setPoaps([])
                  }}
                >
                  Disconnect wallet
                </Button>
              </Box>
              {/* TODO: move to dedicated component? */}
              {poaps?.length > 0 && (
                <>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="red"
                    textAlign="center"
                  >
                    My Bankless POAPs
                  </Text>
                  <Box
                    maxHeight="320px"
                    overflow="scroll"
                    backgroundColor="blackAlpha.200"
                    borderRadius="10px"
                  >
                    <SimpleGrid columns={3} spacing={3} p={3}>
                      {poaps?.map((poap, index) => (
                        <Box
                          key={`poap-${index}`}
                          justifySelf="center"
                          boxShadow="0px 0px 4px 2px #00000060"
                          borderRadius="3px"
                          backgroundColor="white"
                          p={1}
                        >
                          <Link
                            href={`https://app.poap.xyz/token/${poap.tokenId}`}
                            target="_blank"
                          >
                            <Image
                              src={poap.event.image_url}
                              width="70px"
                              height="70px"
                              borderRadius="50%"
                            />
                          </Link>
                        </Box>
                      ))}
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
          size={isMobile ? 'sm' : 'md'}
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
