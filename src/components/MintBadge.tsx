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
} from '@chakra-ui/react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'
import { signMessage, waitForTransaction } from '@wagmi/core'
import { Gear, SealCheck } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import Passport from 'components/Passport'
import ExternalLink from 'components/ExternalLink'
import { WALLET_SIGNATURE_MESSAGE } from 'constants/index'
import {
  BADGE_OPENSEA_URL,
  BADGE_CHAIN_ID,
  BADGE_EXPLORER,
} from 'constants/badges'
import { EMPTY_PASSPORT } from 'constants/passport'
import { api } from 'utils'

const MintBadge = ({ badgeId }: { badgeId: number }): React.ReactElement => {
  const { t } = useTranslation()
  const [isBadgeMintedLS, setIsBadgeMintedLS] = useLocalStorage(
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

  const { address } = useAccount()
  const toast = useToast()

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
        .get(`/api/badges/${address}`)
        .then(function (userBadges) {
          const badgeAlreadyClaimed: boolean =
            userBadges?.data?.badgeTokenIds.find(
              (badge: number) => badge === badgeId
            ) || false
          if (badgeAlreadyClaimed) {
            setIsBadgeMintedLS(true)
          } else {
            setIsBadgeMintedLS(false)
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }, [address])

  const mintBadge = async () => {
    if (status !== '') return
    setStatus(t('Minting in progress ...'))
    // TODO: add 1 min timeout

    try {
      const signature = await signMessage({
        message: WALLET_SIGNATURE_MESSAGE,
      })
      const bodyParameters = {
        address,
        badgeId,
        signature: signature,
      }
      setIsMintingInProgress(true)
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
                  <Box>{t('Generating lesson badge ...')}</Box>
                </Box>
              </Box>
            </Box>
          </>
        ),
        status: 'warning',
        duration: null,
        isClosable: true,
      })
      const result = await api('/api/mint-badge', bodyParameters)
      let transactionComfirmed
      if (result && result.status === 200 && result.data.transactionHash) {
        console.log(result.data.transactionHash)
        const txLink = `${BADGE_EXPLORER}tx/${result.data.transactionHash}`
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
                    <Box>{t('Minting in progress ...')}</Box>
                    <ExternalLink
                      underline="true"
                      href={txLink}
                      alt="Minting in progress"
                    >
                      {`${txLink.substring(0, 50)}...`}
                    </ExternalLink>
                  </Box>
                </Box>
              </Box>
            </>
          ),
          status: 'warning',
          duration: null,
          isClosable: true,
        })
        transactionComfirmed = await waitForTransaction({
          chainId: BADGE_CHAIN_ID,
          hash: result.data.transactionHash,
          timeout: 60_000, // 60 seconds
        })
        console.log(transactionComfirmed)
        if (transactionComfirmed.status === 'success') {
          const openSeaLink = `${BADGE_OPENSEA_URL}${badgeId}`
          // Refresh list of Badges in the wallet
          setRefreshBadgesLS(true)
          setIsBadgeMintedLS(true)
          toast.closeAll()
          // TODO: add 🎊
          toast({
            description: (
              <>
                <Box>
                  <Box display="flex">
                    <Box mr="4">
                      <SealCheck width="40px" height="auto" />
                    </Box>
                    <Box flexDirection="column" alignSelf="center">
                      <Box>{t('Badge successfully minted!')}</Box>
                      <ExternalLink
                        underline="true"
                        href={openSeaLink}
                        alt="Lesson badge"
                      >
                        {`${openSeaLink.substring(0, 50)}...`}
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
        }
      }
      // something went wrong while minting
      if (
        result?.status !== 200 ||
        transactionComfirmed?.status !== 'success'
      ) {
        setStatus('')
        setIsMintingInProgress(false)
        toast.closeAll()
        const txLink = `${BADGE_EXPLORER}tx/${result.data.transactionHash}`
        toast({
          title: result.data.transactionHash
            ? result.data.status
            : t('⚠️ Problem while minting, try again later.'),
          description: (
            <>
              {result.data.transactionHash ? (
                <ExternalLink
                  underline="true"
                  href={txLink}
                  alt="Transaction in progress"
                >
                  {`${txLink.substring(0, 50)}...`}
                </ExternalLink>
              ) : (
                <>
                  {`${result.data.status || result.data.error || ''} | `}
                  <ExternalLink
                    underline="true"
                    href="/faq#d1a7f6dda4334a7ba73ee8b3a18a60ad"
                  >
                    {t('Learn more')}
                  </ExternalLink>
                </>
              )}
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
                        {t('Gitcoin Passport successfully set up.')}
                      </Box>
                      <Box mt="4">{t('Try to mint your badge again.')}</Box>
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
                      <Box fontWeight="bold">
                        {t('Gitcoin Passport not set up.')}
                      </Box>
                      <Box mt="4">
                        <ExternalLink
                          underline="true"
                          href="/faq#ea6ae6bd9ca645498c15cc611bc181c0"
                        >
                          {t('Follow these steps and try again')}
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
                {t(
                  'You haven’t set up Gitcoin Passport, or your stamps are out of date.'
                )}
              </Box>
            )}
            <Box my="4">
              {t(
                'Explorers must have a valid Gitcoin Passport in order to collect Bankless Academy rewards.'
              )}{' '}
              <ExternalLink
                underline="true"
                href="/faq#640071a81daf4aa4b7df00b1eec1c58d"
              >
                {t('Learn more')}
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
            {t('Help')}
          </ExternalLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )

  return (
    <>
      <Button
        variant={'primary'}
        w="100%"
        height="51px"
        fontSize="lg"
        fontWeight="bold"
        borderBottomRadius="0"
        isLoading={isMintingInProgress}
        loadingText={t('Minting Badge ...')}
        cursor={isBadgeMintedLS ? 'auto' : 'pointer'}
        onClick={() => {
          passportLS?.verified ? mintBadge() : onOpen()
        }}
      >
        {t('Mint Badge')}
      </Button>
      {GitcoinModal}
    </>
  )
}

export default MintBadge
