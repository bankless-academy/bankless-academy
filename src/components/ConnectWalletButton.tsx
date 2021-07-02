import Web3Modal from 'web3modal'
import React, { useState, useEffect, useRef } from 'react'
import WalletConnectProvider from '@walletconnect/web3-provider'

import ENSName from '../components/ENSName'
import { useWalletWeb3React } from '../hooks'
import { walletConnect, injected, trimCurrencyForWhales } from '../utils'
import {
  Button,
  Text,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { useTokenBalance } from '../hooks/token/useTokenBalance'
import { useUserClaimData } from '../hooks/useClaim'
import { useTokenSupply } from '../hooks/token/useTokenSupply'

import { INFURA_ID } from '../constants'

let web3Modal: Web3Modal

const ConnectWalletButton = ({ isMobile }: { isMobile: boolean }) => {
  const [web3Provider, setWeb3Provider] = useState()
  const walletWeb3ReactContext = useWalletWeb3React()
  const isConnected = walletWeb3ReactContext.active
  const walletAddress = walletWeb3ReactContext.account
  const [connectClick, setConnectClick] = useState(false)
  const [walletIsLoading, setWalletIsLoading] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const modalRef = useRef(null)

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
  const commaBalance = Number(rawBalance).toLocaleString('en')
  const balance = trimCurrencyForWhales(rawBalance)

  const claimData = useUserClaimData(walletWeb3ReactContext.account ?? '')
  let total = 0
  claimData.forEach((individualClaimData) => {
    if (individualClaimData && !(individualClaimData as any).claimed)
      total += Number(individualClaimData.amount)
  })
  const commaClaim = claimData
    ? Number(Number(total) / 10 ** 18).toLocaleString('en')
    : 0

  const rawSupply = useTokenSupply()
  const commaSupply = Number(rawSupply).toLocaleString('en')

  return (
    <>
      {isConnected ? (
        <Button
          variant="outline"
          paddingRight="1"
          paddingLeft="4"
          size={isMobile ? 'sm' : 'md'}
          onClick={onOpen}
        >
          {balance} BANK
          <Button size={isMobile ? 'xs' : 'sm'} marginLeft="2">
            <Text maxW="150px" isTruncated>
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
      <Modal
        finalFocusRef={modalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your BANK Breakdown</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img
              src="/images/token-3d.png"
              height="90px"
              width="90px"
              alt="3d token icon"
            />
            <Text>
              <strong>{balance}</strong>
            </Text>
            <Divider />
            <Text>
              Balance: <span>{commaBalance} BANK</span>
            </Text>
            <Text>
              Unclaimed: <span>{commaClaim} BANK</span>
            </Text>
            <Divider />
            <Text>
              Total supply: <span>{commaSupply} BANK</span>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConnectWalletButton
