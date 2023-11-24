/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import { Button, useToast, Box, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'
import { signMessage, waitForTransaction } from '@wagmi/core'
import { Gear, SealCheck } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import ExternalLink from 'components/ExternalLink'
import { WALLET_SIGNATURE_MESSAGE } from 'constants/index'
import {
  BADGE_OPENSEA_URL,
  BADGE_CHAIN_ID,
  BADGE_EXPLORER,
} from 'constants/badges'
import { EMPTY_PASSPORT } from 'constants/passport'
import { api } from 'utils'
import PassportModal from 'components/PassportModal'

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
        .get(`/api/user/${address}`)
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
      <PassportModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default MintBadge
