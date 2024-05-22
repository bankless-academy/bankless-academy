/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import {
  Button,
  useToast,
  Box,
  useDisclosure,
  // Popover,
  // PopoverTrigger,
  // PopoverContent,
  // PopoverCloseButton,
  // PopoverArrow,
  // PopoverBody,
} from '@chakra-ui/react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount, useWaitForTransactionReceipt } from 'wagmi'
import { signMessage } from '@wagmi/core'
import { Gear, SealCheck, ShootingStar } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { wagmiConfig } from 'utils/wagmi'
import { polygon } from 'viem/chains'

import ExternalLink from 'components/ExternalLink'
import { WALLET_SIGNATURE_MESSAGE } from 'constants/index'
import { BADGE_EXPLORER } from 'constants/badges'
import { EMPTY_PASSPORT } from 'constants/passport'
import { api } from 'utils'
import PassportModal from 'components/PassportModal'
import Confetti from 'components/Confetti'

const MintBadge = ({
  badgeId,
  isQuestCompleted,
}: {
  badgeId: number
  isQuestCompleted: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const [isBadgeMintedLS, setIsBadgeMintedLS] = useLocalStorage(
    `isBadgeMinted-${badgeId}`,
    false
  )
  // const [badgesMintedLS] = useLocalStorage('badgesMinted', [])
  const [status, setStatus] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)
  const [hash, setHash] = useState('')
  // const [showPopover, setShowPopover] = useState(false)
  const [isMintingInProgress, setIsMintingInProgress] = useState(false)
  const [passportLS, setPassportLS] = useLocalStorage(
    'passport',
    EMPTY_PASSPORT
  )
  const [, setRefreshBadgesLS] = useLocalStorage('refreshBadges', false)
  const { query } = useRouter()
  const { simulate } = query
  // const {
  //   isOpen: isOpenPopOver,
  //   onOpen: onOpenPopOver,
  //   onClose: onClosePopOver,
  // } = useDisclosure()
  // const [isSmallScreen] = useSmallScreen()

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

  // useEffect(() => {
  //   if (isQuestCompleted && badgesMintedLS?.length === 0 && !showPopover) {
  //     setTimeout(() => {
  //       onOpenPopOver()
  //       setShowPopover(true)
  //     }, 1000)
  //   }
  // }, [badgesMintedLS])

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    chainId: polygon.id,
    hash:
      // DEV: simulate tx
      // '0x5f746594b5570220b618a02b0010806b3b6a57ba4ea0670b386b3cdda088fd3e' ||
      hash as any,
    pollingInterval: 1_000,
  })

  useEffect(() => {
    if (isLoading) {
      toast.closeAll()
      const txLink = `${BADGE_EXPLORER}tx/${hash}`
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
                    alt="Polyscan transaction link"
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
    }
  }, [isLoading])

  useEffect(() => {
    if (isSuccess) {
      const zerionLink = `https://app.zerion.io/nfts/polygon/0x3436d8af0b617deef5aadbafc56f293e102dd886:${badgeId}?address=${address}`
      toast.closeAll()
      setShowConfetti(true)
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
                    href={zerionLink}
                    alt="Lesson badge"
                  >
                    {`${zerionLink.substring(0, 50)}...`}
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
    }
  }, [isSuccess])

  useEffect(() => {
    if (address) {
      if (!passportLS.verified) checkPassport()
      axios
        .get(`/api/user/${address}?badges=true`)
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
      const signature = simulate
        ? 'simulate_signature'
        : await signMessage(wagmiConfig, {
            account: address,
            message: WALLET_SIGNATURE_MESSAGE,
          })
      const bodyParameters = {
        address,
        badgeId,
        signature: signature,
        referrer: localStorage.getItem('referrer'),
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
        setHash(result.data.transactionHash)
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
                    href="/faq#0c0b44a30724489d927dda0838c085ad"
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
      {/* <Popover
        isOpen={isOpenPopOver}
        placement={isSmallScreen ? 'bottom' : 'right'}
        returnFocusOnClose={false}
        onOpen={onOpenPopOver}
        onClose={onClosePopOver}
      > */}
      {/* <PopoverTrigger> */}
      <Button
        variant={'primary'}
        w="100%"
        height="51px"
        fontSize="lg"
        fontWeight="bold"
        opacity={!address || !isQuestCompleted ? '0.5' : 1}
        isLoading={isMintingInProgress}
        loadingText={t('Minting Badge...')}
        cursor={isBadgeMintedLS ? 'auto' : 'pointer'}
        onClick={() => {
          passportLS?.verified ? mintBadge() : onOpen()
        }}
        leftIcon={<ShootingStar width="28px" height="28px" />}
      >
        {t('Claim Badge')}
      </Button>
      {/* </PopoverTrigger> */}
      <PassportModal isOpen={isOpen} onClose={onClose} />
      <Confetti
        showConfetti={showConfetti}
        onConfettiComplete={() => {
          setShowConfetti(false)
          // Refresh list of Badges in the wallet
          setIsBadgeMintedLS(true)
          setRefreshBadgesLS(true)
          setStatus('')
          setIsMintingInProgress(false)
        }}
      />
      {/* <PopoverContent>
          <PopoverCloseButton />
          <PopoverArrow />
          <PopoverBody textAlign="left">
            <Box mt="2" p="2">
              If you have a crypto wallet, you can now mint your lesson badge
              here!
            </Box>
            <Box mb="2" p="2">
              {`If you don't have a wallet yet, check out our '`}
              <ExternalLink
                underline="true"
                href="/lessons/creating-a-crypto-wallet"
              >
                Creating a Crypto Wallet
              </ExternalLink>
              {`' walkthrough. Wallets are your account on the blockchain!`}
            </Box>
          </PopoverBody>
        </PopoverContent> */}
      {/* {isSmallScreen && (
          <Box position="absolute" height="250px" w="1px"></Box>
        )} */}
      {/* </Popover> */}
    </>
  )
}

export default MintBadge
