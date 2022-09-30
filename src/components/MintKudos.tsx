/* eslint-disable no-console */
import { useState, useEffect } from 'react'
import {
  Button,
  Link,
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
  useMediaQuery,
} from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'

import { useActiveWeb3React } from 'hooks'
import switchNetwork from 'components/SwitchNetworkButton/switchNetwork'
import Passport from 'components/Passport'
import { IS_WHITELABEL, TWITTER_ACCOUNT, LESSONS } from 'constants/index'
import {
  MINTKUDOS_API,
  MINTKUDOS_URL,
  MINTKUDOS_DOMAIN_INFO,
  MINTKUDOS_EXPLORER,
  MINTKUDOS_CHAIN_ID,
  MINTKUDOS_OPENSEA_URL,
  MINTKUDOS_COMMUNITY_ID,
} from 'constants/kudos'
import { NETWORKS } from 'constants/networks'
import { EMPTY_PASSPORT } from 'constants/passport'
import { KudosType } from 'entities/kudos'
import { theme } from 'theme/index'

const MintKudos = ({
  kudosId,
  isQuestCompleted,
  goToPrevSlide,
}: {
  kudosId: number
  isQuestCompleted: boolean
  goToPrevSlide: () => void
}): React.ReactElement => {
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
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

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
      if (!passportLS.verified) checkPassport()
      axios
        .get(
          `${MINTKUDOS_API}/v1/wallets/${account}/tokens?limit=100&communityId=${MINTKUDOS_COMMUNITY_ID}&claimStatus=claimed`
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

    setStatus('🛠 minting in progress ...')
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
          title: 'Credential minted 🎉',
          status: 'success',
          duration: 10000,
        })
        setStatus('')
      } else {
        setStatus('')
        toast.closeAll()
        toast({
          title: '⚠️ problem while minting',
          description: (
            <>
              {`${result.data.status || result.data.error || ''} | `}
              <Link
                href="/faq#d1a7f6dda4334a7ba73ee8b3a18a60ad"
                target="_blank"
              >
                Learn more
              </Link>
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
          <Link href="/faq#640071a81daf4aa4b7df00b1eec1c58d" target="_blank">
            Learn more
          </Link>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Passport displayStamps />
        </ModalBody>
        <ModalFooter>
          <Link href="/faq#257d4f97419e48cbad7b030b516a444e" target="_blank">
            Help
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )

  const lesson = LESSONS.find((lesson) => lesson.kudosId === kudosId)

  const share = `I've just claimed my "${
    lesson.name
  }" on-chain credential at @${TWITTER_ACCOUNT} 🎉
${MINTKUDOS_URL}profile/${account}?tab=Received&tokenId=${kudosId}
${
  IS_WHITELABEL
    ? ''
    : `Join the journey and level up your #web3 knowledge! 👨‍🚀🚀`
}`

  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    share
  )}`

  return (
    <Box>
      {!account ? (
        <>{ConnectFirst}</>
      ) : (
        <>
          {!isQuestCompleted ? (
            <Box textAlign="center">
              <Heading as="h2" size="xl" textAlign="center">
                Rewards are only available after full lesson completion.
              </Heading>
              <Button
                variant="primary"
                onClick={goToPrevSlide}
                leftIcon={<ArrowBackIcon />}
              >
                Retry Quest
              </Button>
            </Box>
          ) : (
            <>
              <Heading as="h2" size="xl" textAlign="center">
                <span style={{ color: theme.colors.secondary }}>
                  {lesson.name}
                </span>
                {` credential ${isKudosMintedLS ? 'claimed' : 'available'}!`}
              </Heading>
              <Box display="flex" justifyContent="center" mb={10} mt={-3}>
                <Link href={`${MINTKUDOS_URL}`} target="_blank">
                  <Image width="120px" src="/images/powered-by-MintKudos.svg" />
                </Link>
              </Box>
              {isKudosMintedLS ? (
                <Box display="flex" justifyContent="center">
                  <Link href={twitterLink} target="_blank" mr="2">
                    <Button
                      leftIcon={
                        <Image width="24px" src="/images/Twitter-blue.svg" />
                      }
                    >
                      Share on Twitter
                    </Button>
                  </Link>
                  <Link
                    href={`${MINTKUDOS_OPENSEA_URL}${kudosId}`}
                    target="_blank"
                  >
                    <Button
                      leftIcon={
                        <Image width="24px" src="/images/OpenSea.svg" />
                      }
                    >
                      View on OpenSea
                    </Button>
                  </Link>
                </Box>
              ) : passportLS?.verified ? (
                <Box textAlign="center">
                  <Button
                    colorScheme={'green'}
                    onClick={mintKudos}
                    variant="primary"
                  >
                    {status !== '' ? status : 'Mint credential 🛠'}
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
                      Authentication takes ~2 minutes, and protects the
                      legitimacy of Academy rewards.
                    </p>
                  </Box>
                  {GitcoinModal}
                </>
              )}
            </>
          )}
        </>
      )}
    </Box>
  )
}

export default MintKudos
