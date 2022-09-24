/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import {
  Button,
  Link,
  useToast,
  Spinner,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'

import { useActiveWeb3React } from 'hooks'
import switchNetwork from 'components/SwitchNetworkButton/switchNetwork'
import Passport from 'components/Passport'
import { PROJECT_NAME } from 'constants/index'
import {
  MINTKUDOS_API,
  MINTKUDOS_DOMAIN_INFO,
  MINTKUDOS_EXPLORER,
  MINTKUDOS_CHAIN_ID,
  MINTKUDOS_OPENSEA_URL,
  MINTKUDOS_RARIBLE_URL,
  MINTKUDOS_COMMUNITY_ID,
} from 'constants/kudos'
import { NETWORKS } from 'constants/networks'
import { EMPTY_PASSPORT } from 'constants/passport'
import { KudosType } from 'entities/kudos'

const MintKudos = ({ kudosId }: { kudosId: number }): React.ReactElement => {
  const [isKudosMintedLS, setIsKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${kudosId}`,
    false
  )
  const [status, setStatus] = useState('')
  const [passportLS, setPassportLS] = useLocalStorage(
    'passport',
    EMPTY_PASSPORT
  )

  const { account, library, chainId } = useActiveWeb3React()
  const toast = useToast()

  const { isOpen, onOpen, onClose } = useDisclosure()

  // TODO: update toast https://chakra-ui.com/docs/components/toast/usage#updating-toasts

  async function checkPassport() {
    axios
      .get(`/api/passport?address=${account}`)
      .then(function (res) {
        console.log('passport', res.data)
        setStatus('')
        setPassportLS(res.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  useEffect(() => {
    if (account) {
      axios
        .get(
          `${MINTKUDOS_API}/v1/wallets/${account}/tokens?limit=100&communityId=${MINTKUDOS_COMMUNITY_ID}&status=claimed`
        )
        .then(function (res) {
          const claimedKudos: KudosType = res.data?.data?.find(
            (kudos: KudosType) => kudos?.kudosTokenId === kudosId
          )
          if (claimedKudos) {
            setIsKudosMintedLS(true)
          } else {
            setIsKudosMintedLS(false)
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }, [account])

  const networkKey = Object.keys(NETWORKS).find(
    (network) => NETWORKS[network].chainId === MINTKUDOS_CHAIN_ID
  )

  const followOperation = async (location: string, iteration = 0) => {
    try {
      const result = await axios.get(location)
      if (result.data?.status !== 'success') {
        if (iteration === 0) {
          toast.closeAll()
          const txLink = `${MINTKUDOS_EXPLORER}tx/${result.data.txHash}`
          toast({
            title: `Transaction in progress`,
            description: (
              <Link href={txLink} target="_blank">
                {txLink}
              </Link>
            ),
            status: 'warning',
            duration: null,
          })
        }
        // wait 1 sec
        await new Promise((resolve) => setTimeout(resolve, 1000))
        await followOperation(location, iteration + 1)
      } else {
        console.log('done!')
      }
      console.log(result.data?.status)
    } catch (error) {
      // TODO: add error feedback
      console.error(error)
    }
  }

  const mintKudos = async () => {
    if (status) return
    if (chainId !== MINTKUDOS_CHAIN_ID) {
      await switchNetwork(networkKey)
    }

    setStatus('🙌 claiming in progress ...')
    const receiverTypes = {
      CommunityAdminAirdropReceiverConsent: [
        { name: 'tokenId', type: 'uint256' },
      ],
    }

    // The data to sign
    const value = {
      tokenId: kudosId,
    }

    try {
      const signer = library.getSigner(account)
      const signature = await signer._signTypedData(
        MINTKUDOS_DOMAIN_INFO,
        receiverTypes,
        value
      )
      console.log('signature', signature)
      const bodyParameters = {
        address: account,
        kudosId,
        signature,
        message: value,
      }
      const result = await axios.post(`/api/mint-kudos`, bodyParameters)
      console.log(result.data)
      if (result.data.location) {
        await followOperation(result.data.location)
        setIsKudosMintedLS(true)
        toast.closeAll()
        // TODO: add 🎊
        // TODO: refresh list of Kudos in the wallet
        toast({
          title: 'Credential claimed 🎉',
          status: 'success',
          duration: 10000,
        })
        setStatus('')
      } else {
        setStatus('')
        toast.closeAll()
        toast({
          title: '⚠️ problem while claiming',
          description: result.data.status || result.data.error,
          status: 'error',
          duration: 10000,
        })
        checkPassport()
      }
    } catch (error) {
      // TODO: add error feedback
      console.error(error)
      checkPassport()
    }
  }

  const ConnectFirstButton = (
    <>
      <Button
        variant="outlined"
        leftIcon={<Spinner speed="1s" />}
        color={'orange'}
        cursor="default"
        boxShadow="none !important"
      >
        {'Waiting to detect your wallet ...'}
      </Button>
      <p>
        {`To collect your lesson credential, click the "Connect wallet" button in the top-right corner`}
      </p>
    </>
  )

  const GitcoinModal = (
    <Modal onClose={onClose} size={'lg'} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Passport</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Passport />
        </ModalBody>
      </ModalContent>
    </Modal>
  )

  return (
    <Box py="4">
      {!account ? (
        <>{ConnectFirstButton}</>
      ) : (
        <>
          {isKudosMintedLS ? (
            <Box>
              <Link
                href={`${MINTKUDOS_OPENSEA_URL}${kudosId}`}
                target="_blank"
                mr="2"
              >
                <Button
                  leftIcon={<Image width="24px" src="/images/OpenSea.svg" />}
                >
                  OpenSea
                </Button>
              </Link>
              <Link href={`${MINTKUDOS_RARIBLE_URL}${kudosId}`} target="_blank">
                <Button
                  leftIcon={<Image width="24px" src="/images/Rarible.svg" />}
                >
                  Rarible
                </Button>
              </Link>
            </Box>
          ) : passportLS?.verified ? (
            <Button colorScheme={'green'} onClick={mintKudos} variant="primary">
              {status !== '' ? status : 'Claim your Credential 🙌'}
            </Button>
          ) : (
            <p>
              {`Get a `}
              <Button variant="primary" onClick={onOpen}>
                {`${PROJECT_NAME} Passport`}
              </Button>
              {` in order to claim this credential`}
              {GitcoinModal}
            </p>
          )}
        </>
      )}
    </Box>
  )
}

export default MintKudos
