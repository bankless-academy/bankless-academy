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
  Text,
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
import { Gear, SealCheck } from '@phosphor-icons/react'

import { useSmallScreen } from 'hooks/index'
import Passport from 'components/Passport'
import ExternalLink from 'components/ExternalLink'
import { BADGE_ADDRESS, LESSONS } from 'constants/index'
import { BADGE_DOMAIN_INFO, MINTKUDOS_CHAIN_ID } from 'constants/badges'
import { NETWORKS } from 'constants/networks'
import { EMPTY_PASSPORT } from 'constants/passport'
import { BadgeType } from 'entities/badge'
import { theme } from 'theme/index'
import { api } from 'utils'
import { useContract } from '@thirdweb-dev/react'
import { Mumbai } from '@thirdweb-dev/chains'

const MintBadge = ({ badgeId }: { badgeId: number }): React.ReactElement => {
  const [isBadgeMintedLS, setIsKudosMintedLS] = useLocalStorage(
    `isBadgeMinted-${badgeId}`,
    false
  )
  const [status, setStatus] = useState('')
  const [isMintingInProgress, setIsMintingInProgress] = useState(false)
  const [passportLS, setPassportLS] = useLocalStorage(
    'passport',
    EMPTY_PASSPORT
  )
  const [, setRefreshBadgesLS] = useLocalStorage('refreshBadges', false)

  const { address, connector } = useAccount()
  const { chain } = useNetwork()
  const toast = useToast()
  const [isSmallScreen] = useSmallScreen()
  const { contract } = useContract(BADGE_ADDRESS)

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
        .get(`/api/badges?address=${address}`)
        .then(function (res) {
          const claimedKudos: BadgeType = res.data?.data?.find(
            (badge: BadgeType) => badge?.badgeTokenId === badgeId
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
          isClosable: true,
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
      tokenId: badgeId,
    }

    try {
      const domain = BADGE_DOMAIN_INFO
      domain.chainId = chain?.id
      const signature = await signTypedData({
        domain,
        types: receiverTypes,
        value,
      })
      // console.log('signature', signature)
      const bodyParameters = {
        address,
        badgeId,
        signature,
        chainId: chain?.id,
        message: value,
      }
      setIsMintingInProgress(true)

      // Contact API to check eligibility and get signature
      const result = await api('/api/mint-badge', bodyParameters)
      if (result && result.status === 200 && result.data.signature) {
        console.log(result.data.signature)
        const res = await contract.erc1155.signature.mint(result.data.signature)
        toast.closeAll()
        toast({
          description: (
            <>
              <Box>
                <Box display="flex">
                  <Box mr="4">
                    <Gear width="40px" height="auto" />
                  </Box>
                  <Box flexDirection="column">
                    <Box>Minting in progress</Box>
                  </Box>
                </Box>
              </Box>
            </>
          ),
          status: 'warning',
          duration: null,
          isClosable: true,
        })
        console.log(res)
        const txLink = `${Mumbai.explorers[0].url}/tx/${res.receipt.transactionHash}`
        // await followOperation(result.data.location)
        setRefreshBadgesLS(true)
        setIsKudosMintedLS(true)
        toast.closeAll()
        // TODO: add 🎊
        // TODO: refresh list of Kudos in the wallet
        toast({
          description: (
            <>
              <Box>
                <Box display="flex">
                  <Box mr="4">
                    <SealCheck width="40px" height="auto" />
                  </Box>
                  <Box flexDirection="column" alignSelf="center">
                    <Box>Badge successfully minted!</Box>
                    <ExternalLink href={txLink} alt="Transaction in progress">
                      {`${txLink.substring(0, 40)}...`}
                    </ExternalLink>
                  </Box>
                </Box>
              </Box>
            </>
          ),
          status: 'success',
          duration: 10000,
          isClosable: true,
        })
        setStatus('')
        setIsMintingInProgress(false)
      } else {
        setStatus('')
        setIsMintingInProgress(false)
        toast.closeAll()
        toast({
          title: '⚠️ Problem while minting, try again tomorrow.',
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
          isClosable: true,
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

  // const ConnectFirst = (
  //   <>
  //     <Heading as="h2" size="xl" textAlign="center" pt="8">
  //       To claim rewards, you must connect your wallet.
  //     </Heading>
  //   </>
  // )

  const GitcoinModal = (
    <Modal
      onClose={() => {
        if (passportLS?.verified) {
          toast.closeAll()
          toast({
            description: (
              <>
                <Box>
                  <Box display="flex">
                    <Box mr="4">
                      <Image
                        src="/images/gitcoin-passport.svg"
                        alt="Gitcoin Passport"
                      />
                    </Box>
                    <Box flexDirection="column" alignSelf="center">
                      <Box fontWeight="bold">
                        Gitcoin Passport successfully set up.
                      </Box>
                      <Box mt="4">Try to mint your badge again.</Box>
                    </Box>
                  </Box>
                </Box>
              </>
            ),
            status: 'success',
            duration: 10000,
            isClosable: true,
          })
        } else {
          toast.closeAll()
          toast({
            description: (
              <>
                <Box>
                  <Box display="flex">
                    <Box mr="4">
                      <Image
                        src="/images/gitcoin-passport.svg"
                        alt="Gitcoin Passport"
                      />
                    </Box>
                    <Box flexDirection="column" alignSelf="center">
                      <Box fontWeight="bold">Gitcoin Passport not set up.</Box>
                      <Box mt="4">
                        <ExternalLink href="/faq#ea6ae6bd9ca645498c15cc611bc181c0">
                          Follow these steps and try again
                        </ExternalLink>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </>
            ),
            status: 'warning',
            duration: 20000,
            isClosable: true,
          })
        }
        onClose()
      }}
      size={'xl'}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        bg="linear-gradient(180deg, #a379bdcc 0%, #5a5198cc 100%)"
        border="2px solid #B68BCC"
        borderRadius="3xl"
        backdropFilter="blur(10px)"
      >
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="xl">
            {!passportLS?.verified && (
              <Box mt="4" mr="4">
                {`You haven’t set up Gitcoin Passport, or your stamps are out of date.`}
              </Box>
            )}
            <Box my="4">
              {`Explorers must have a valid Gitcoin Passport in order to collect Bankless Academy rewards. `}
              <ExternalLink
                underline="true"
                href="/faq#640071a81daf4aa4b7df00b1eec1c58d"
              >
                Learn more
              </ExternalLink>
            </Box>
          </Text>
          <Passport displayStamps />
        </ModalBody>
        <ModalFooter>
          <ExternalLink
            underline="true"
            href="/faq#640071a81daf4aa4b7df00b1eec1c58d"
          >
            Help
          </ExternalLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )

  const lesson = LESSONS.find((lesson) => lesson.badgeId === badgeId)
  return (
    <>
      <Button
        variant={'primary'}
        w="100%"
        borderBottomRadius="0"
        isLoading={isMintingInProgress}
        loadingText="Minting Badge ..."
        cursor={isBadgeMintedLS ? 'auto' : 'pointer'}
        onClick={() => {
          passportLS?.verified ? mintKudos() : onOpen()
        }}
      >
        Mint Badge
      </Button>
      {GitcoinModal}
    </>
  )

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center">
        <span style={{ color: theme.colors.secondary }}>{lesson.name}</span>
        {` badge ${isBadgeMintedLS ? 'claimed' : 'available'}!`}
      </Heading>
      {isBadgeMintedLS ? null : passportLS?.verified && !isOpen ? (
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
              Authentication takes ~2 minutes, and protects the legitimacy of
              Academy rewards.
            </p>
          </Box>
          {GitcoinModal}
        </>
      )}
    </Box>
  )
}

export default MintBadge
