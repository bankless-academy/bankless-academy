import Web3Modal from 'web3modal'
import React, { useState, useEffect } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { Button, Text } from '@chakra-ui/react'

import ENSName from 'components/ENSName'
import { useWalletWeb3React } from 'hooks'
import { walletConnect, injected, trimCurrencyForWhales } from 'utils'
import { useTokenBalance } from 'hooks/token/useTokenBalance'
import { INFURA_ID } from 'constants/'

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

  useEffect(() => {
    if (connectClick) {
      setWalletIsLoading(true)
      if (!web3Modal) {
        web3Modal = new Web3Modal({
          network: 'mainnet',
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
        .catch(() => {
          setWalletIsLoading(false)
          setConnectClick(false)
        })
    }
  }, [connectClick])

  const rawBalance = useTokenBalance(walletWeb3ReactContext.account) ?? 0
  const balance = trimCurrencyForWhales(rawBalance)

  return (
    <>
      {isConnected ? (
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
