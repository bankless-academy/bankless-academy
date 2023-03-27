/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import {
  Button,
  useToast,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Heading,
} from '@chakra-ui/react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount, useNetwork } from 'wagmi'
import { switchNetwork, signTypedData } from '@wagmi/core'

import { useSmallScreen } from 'hooks/index'
import Passport from 'components/Passport'
import ExternalLink from 'components/ExternalLink'
import { LESSONS } from 'constants/index'
import {
  MINTKUDOS_API,
  MINTKUDOS_URL,
  MINTKUDOS_DOMAIN_INFO,
  MINTKUDOS_EXPLORER,
  MINTKUDOS_CHAIN_ID,
  MINTKUDOS_COMMUNITY_ID,
} from 'constants/kudos'
import { NETWORKS } from 'constants/networks'
import { EMPTY_PASSPORT } from 'constants/passport'
import { KudosType } from 'entities/kudos'
import { theme } from 'theme/index'
import { api } from 'utils'

const MintKudos = ({ kudosId }: { kudosId: number }): React.ReactElement => {
  const [isKudosMintedLS, setIsKudosMintedLS] = useLocalStorage(
    `isKudosMinted-${kudosId}`,
    false
  )
  const [status, setStatus] = useState('')
  const [isMintingInProgress, setIsMintingInProgress] = useState(false)
  const [passportLS, setPassportLS] = useLocalStorage(
    'passport',
    EMPTY_PASSPORT
  )
  const [, setRefreshKudosLS] = useLocalStorage('refreshKudos', false)

  const { address, connector } = useAccount()
  const { chain } = useNetwork()
  const toast = useToast()
  const [isSmallScreen] = useSmallScreen()

  const { isOpen, onOpen, onClose } = useDisclosure()

  // TODO: update toast https://chakra-ui.com/docs/components/toast/usage#updating-toasts

  async function checkPassport() {
    const result = await api('/api/passport', { address })
    if (result && result.status === 200) {
      console.log('passport', result.data)
      setStatus('')
      setPassportLS(result.data)
    } else {
      // TODO: handle errors
    }
  }

  useEffect(() => {
    if (address) {
      if (!passportLS.verified) checkPassport()
      axios
        .get(
          `${MINTKUDOS_API}/v1/wallets/${address}/tokens?limit=100&communityId=${MINTKUDOS_COMMUNITY_ID}&claimStatus=claimed`
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
  }, [address])

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
              <ExternalLink href={txLink} alt="Transaction in progress">
                {isSmallScreen ? `${txLink.substring(0, 40)}...` : txLink}
              </ExternalLink>
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
    if (status !== '') return
    setStatus('Minting in progress ...')
    // TODO: add 1 min timeout
    if (![1, 10, 137].includes(chain?.id)) {
      const network = Object.values(NETWORKS).find(
        (network) => network.chainId === MINTKUDOS_CHAIN_ID
      )
      toast.closeAll()
      if (connector?.name !== 'MetaMask') {
        toast({
          title: 'Wrong network',
          description: `Switch network to ${network.name} in order to mint your badge.`,
          status: 'warning',
          duration: null,
        })
      }
      try {
        await switchNetwork({ chainId: MINTKUDOS_CHAIN_ID })
      } catch (error) {
        setStatus('')
      }
    }

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
      const domain = MINTKUDOS_DOMAIN_INFO
      domain.chainId = chain?.id
      const signature = await signTypedData({
        domain,
        types: receiverTypes,
        value,
      })
      // console.log('signature', signature)
      const bodyParameters = {
        address,
        kudosId,
        signature,
        chainId: chain?.id,
        message: value,
      }
      setIsMintingInProgress(true)
      const result = await api('/api/mint-kudos', bodyParameters)
      if (result && result.status === 200 && result.data.location) {
        await followOperation(result.data.location)
        setRefreshKudosLS(true)
        setIsKudosMintedLS(true)
        toast.closeAll()
        // TODO: add 🎊
        // TODO: refresh list of Kudos in the wallet
        toast({
          title: 'Badge minted 🎉',
          status: 'success',
          duration: 10000,
        })
        setStatus('')
        setIsMintingInProgress(false)
      } else {
        setStatus('')
        setIsMintingInProgress(false)
        toast.closeAll()
        toast({
          title: '⚠️ problem while minting',
          description: (
            <>
              {`${result.data.status || result.data.error || ''} | `}
              <ExternalLink href="/faq#d1a7f6dda4334a7ba73ee8b3a18a60ad">
                Learn more
              </ExternalLink>
            </>
          ),
          status: 'error',
          duration: 20000,
        })
        checkPassport()
      }
    } catch (error) {
      // TODO: add error feedback
      console.error(error)
      setStatus('')
      checkPassport()
    }
  }

  const ConnectFirst = (
    <>
      <Heading as="h2" size="xl" textAlign="center" pt="8">
        To claim rewards, you must connect your wallet.
      </Heading>
    </>
  )

  const GitcoinModal = (
    <Modal onClose={onClose} size={'xl'} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {
            'Explorers must pass unique authentication in order to collect Bankless Academy rewards. '
          }
          <ExternalLink href="/faq#640071a81daf4aa4b7df00b1eec1c58d">
            Learn more
          </ExternalLink>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Passport displayStamps />
        </ModalBody>
        <ModalFooter>
          <ExternalLink href="/faq#640071a81daf4aa4b7df00b1eec1c58d">
            Help
          </ExternalLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )

  const lesson = LESSONS.find((lesson) => lesson.kudosId === kudosId)

  return (
    <Box>
      {!address ? (
        <>{ConnectFirst}</>
      ) : (
        <>
          <Heading as="h2" size="xl" textAlign="center">
            <span style={{ color: theme.colors.secondary }}>{lesson.name}</span>
            {` badge ${isKudosMintedLS ? 'claimed' : 'available'}!`}
          </Heading>
          <Box display="flex" justifyContent="center" mb={10} mt={-3}>
            <ExternalLink href={`${MINTKUDOS_URL}`} alt="Powered by MintKudos">
              <Image width="120px" src="/images/powered-by-MintKudos.svg" />
            </ExternalLink>
          </Box>
          {isKudosMintedLS ? null : passportLS?.verified && !isOpen ? (
            <Box textAlign="center">
              <Button
                colorScheme={'green'}
                onClick={mintKudos}
                variant="primary"
                isLoading={isMintingInProgress}
                loadingText={status}
              >
                {status !== '' ? status : 'Mint badge 🛠'}
              </Button>
            </Box>
          ) : (
            <>
              <Box>
                <Heading as="h2" size="xl" textAlign="center">
                  {`To claim rewards you need a `}
                  <Button
                    variant="primary"
                    onClick={onOpen}
                    mt={isSmallScreen ? '2' : ''}
                  >
                    {`Gitcoin Passport`}
                  </Button>
                </Heading>
                <p>
                  Authentication takes ~2 minutes, and protects the legitimacy
                  of Academy rewards.
                </p>
              </Box>
              {GitcoinModal}
            </>
          )}
        </>
      )}
    </Box>
  )
}

export default MintKudos
