/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useMediaQuery,
  Box,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  Button,
  Divider,
  NumberDecrementStepper,
  useToast,
  ModalFooter,
} from '@chakra-ui/react'
import { switchChain } from '@wagmi/core'
import { optimism } from 'wagmi/chains'
import { useWaitForTransactionReceipt, useAccount } from 'wagmi'
import { simulateContract, writeContract } from '@wagmi/core'
import { useTranslation } from 'react-i18next'
import { parseEther } from 'viem'
import { Gear, SealCheck } from '@phosphor-icons/react'
import { useWeb3Modal } from '@web3modal/wagmi/react'
import useSound from 'use-sound'

import { LessonType } from 'entities/lesson'
import Datadisk from 'components/Datadisk'
import { useLocalStorage } from 'usehooks-ts'
import ExternalLink from 'components/ExternalLink'
import { useSmallScreen } from 'hooks/index'
import { NB_DATADISK_MAX } from 'constants/index'
import Confetti from 'components/Confetti'
import { wagmiConfig } from 'utils/wagmi'
import soundCelebrate from 'sound/celebrate.mp3'

const MintDatadiskModal = ({
  isOpen,
  onClose,
  lesson,
  numberOfOwners,
}: {
  isOpen: boolean
  onClose: () => void
  lesson: LessonType
  numberOfOwners: number
}): React.ReactElement => {
  const { t } = useTranslation()
  const [playCelebrate] = useSound(soundCelebrate)
  const { open } = useWeb3Modal()
  const { address, chain } = useAccount()
  const [isSmallScreen] = useSmallScreen()
  const toast = useToast()
  const [isMinting, setIsMinting] = useState(false)
  const [nbDatadiskMintedLS] = useLocalStorage(
    `nbDatadiskMinted-${lesson.lessonCollectibleTokenAddress}`,
    0
  )
  const [nbMint, setNbMint] = useState(1)
  const [nextId, setNextId] = useState(null)
  const [hash, setHash] = useState('')
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])
  const [mintingError, setMintingError] = useState('')
  const [, setRefreshDatadiskLS] = useLocalStorage('refreshDatadisk', false)
  const remaining = 100 - numberOfOwners
  const [showConfetti, setShowConfetti] = useState(false)

  const mintArg = {
    address: '0xFafd47bb399d570b5AC95694c5D2a1fb5EA030bB',
    abi: [
      {
        inputs: [
          { internalType: 'uint256', name: 'vectorId', type: 'uint256' },
          { internalType: 'uint48', name: 'numTokensToMint', type: 'uint48' },
          { internalType: 'address', name: 'mintRecipient', type: 'address' },
        ],
        name: 'vectorMint721',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    functionName: 'vectorMint721',
    args: [lesson.datadiskVectorMint, nbMint, address],
    chainId: optimism.id,
    // 0.003 + 0.0008 in collector fee
    value: parseEther(`${0.0308 * nbMint}`),
    overrides: {
      gasLimit: 150000n,
    },
    onError(error) {
      console.error('Error', error)
      setMintingError(error.message?.split('\n')[0])
    },
    onSuccess() {
      setMintingError('')
    },
  }

  const { isLoading, isSuccess } = useWaitForTransactionReceipt({
    chainId: optimism.id,
    hash:
      // DEV: simulate tx
      // '0xbbac72d366946360a3e67f34f974f7d3867bb958cec8a56a7386d64349e0b3a0' ||
      hash as any,
    pollingInterval: 1_000,
  })

  useEffect(() => {
    // HACK: guess tokenId
    setNextId(1 + 100 - remaining)
  }, [])

  useEffect(() => {
    if (isLoading && hash) {
      toast.closeAll()
      const txLink = `https://optimistic.etherscan.io/tx/${hash}`
      toast({
        description: (
          <>
            <Box>
              <Box display="flex">
                <Box mr="4">
                  <Gear width="40px" height="auto" />
                </Box>
                <Box flexDirection="column">
                  <Box>{t('Minting in progress:')}</Box>
                  <ExternalLink
                    underline="true"
                    href={txLink}
                    alt="Etherscan transaction link"
                  >
                    {isSmallScreen ? `${txLink.substring(0, 50)}...` : txLink}
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
      toast.closeAll()
      setShowConfetti(true)
      playCelebrate()
      const txLink = `https://opensea.io/assets/optimism/${lesson.lessonCollectibleTokenAddress}/${nextId}`
      setRefreshDatadiskLS(true)
      toast({
        description: (
          <>
            <Box>
              <Box display="flex">
                <Box mr="4">
                  <SealCheck width="40px" height="auto" />
                </Box>
                <Box flexDirection="column">
                  <Box>{t('DataDisk minted:')}</Box>
                  <ExternalLink
                    underline="true"
                    href={txLink}
                    alt="OpenSea Link"
                  >
                    {`${txLink.substring(0, 50)}...`}
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

  // TODO: TRANSLATE
  return (
    <>
      <Modal
        onClose={onClose}
        size={isMobileScreen ? 'full' : 'md'}
        isCentered
        isOpen={isOpen}
      >
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          bg="linear-gradient(180deg, #a379bd82 0%, #5a519882 100%)"
          border={isMobileScreen ? '0' : '2px solid #B68BCC'}
          borderRadius={isMobileScreen ? '0' : '3xl'}
          backdropFilter="blur(10px)"
          overflowY="auto"
          maxH="var(--chakra-vh)"
        >
          <ModalHeader>
            {t('Collect DataDisk')}
            <Box mt="4" fontSize="md" fontWeight="normal">
              Bankless Academy is issuing a small quantity of collectible
              DataDisk devices in an evolving effort to share educational
              content with the deeper reaches of blockspace.
              <Box mt="2">
                Collect yours to become a Guardian of Bankless Academy{' '}
                <b>and retroactively fund this lesson!</b>
              </Box>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody padding={isMobileScreen ? '0' : 'default'} pb="0">
            {/* TODO: switch network */}
            <Box position="relative" h="8px">
              <Image
                src="/images/minted-on-OP.png"
                w="160px"
                position="absolute"
                top="-4px"
                right="10px"
              />
            </Box>
            <Box
              // mb={nbDatadiskMintedLS > 0 ? '-25px' : '0px'}
              mb={'-25px'}
              // opacity={nbDatadiskMintedLS > 0 ? '1' : '0.5'}
            >
              <Datadisk lesson={lesson} />
            </Box>
            <Box w="90%" m="auto">
              {/* {isBadgeMintedLS ? null : (
              <Box
                display="flex"
                w="100%"
                background="black"
                height="48px"
                borderRadius="8px"
                alignContent="center"
                justifyContent="center"
                alignItems="center"
                fontSize="lg"
              >
                <Lock />
                <Box ml="1">{t('Claim your lesson badge to unlock')}</Box>
              </Box>
            )} */}
              <Box
                display="flex"
                pt="4"
                w="100%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Box display="flex" alignItems="baseline">
                    <Box fontSize="2xl" fontWeight="bold">
                      {0.03 * nbMint}
                    </Box>
                    <Box fontSize="lg" ml="1">
                      ETH
                    </Box>
                  </Box>
                  {/* TODO: make it dynamic */}
                  <Box fontSize="xs">+ {0.0008 * nbMint} ETH mint fee</Box>
                </Box>
                <Box w="80px">
                  <NumberInput
                    defaultValue={nbMint}
                    isDisabled={NB_DATADISK_MAX - nbDatadiskMintedLS < 1}
                    max={NB_DATADISK_MAX - nbDatadiskMintedLS}
                    min={1}
                    onChange={(newValue) => {
                      setNbMint(parseInt(newValue))
                    }}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </Box>
              </Box>
              <Box textAlign="center" pt="4">
                <Button
                  size="lg"
                  variant="primaryWhite"
                  isDisabled={NB_DATADISK_MAX - nbDatadiskMintedLS < 1}
                  onClick={async () => {
                    try {
                      if (!address) {
                        onClose()
                        await open({ view: 'Connect' })
                      } else if (chain?.id !== optimism.id) {
                        try {
                          await switchChain(wagmiConfig, {
                            chainId: optimism.id,
                          })
                        } catch (error) {
                          console.error(error)
                          toast({
                            title: 'Switch your network to Optimism.',
                            description: (
                              <>Click Mint again after switching network.</>
                            ),
                            status: 'error',
                            duration: 10000,
                            isClosable: true,
                          })
                        }
                        setIsMinting(false)
                        toast({
                          title: 'The network has been switched to Optimism.',
                          description: <>Click Mint again.</>,
                          status: 'warning',
                          duration: 10000,
                          isClosable: true,
                        })
                      } else if (!isMinting) {
                        setIsMinting(true)
                        setTimeout(() => {
                          setIsMinting(false)
                        }, 3000)
                        if (mintingError !== '') {
                          toast({
                            title: t('⚠️ Problem while minting:'),
                            description: (
                              <>
                                <Box>
                                  {mintingError?.includes('exceeds the balance')
                                    ? 'The total cost including gas fee exceeds your balance of ETH on Optimism.'
                                    : mintingError}
                                </Box>
                                <Box>
                                  {t('Refresh the page before trying again.')}
                                </Box>
                              </>
                            ),
                            status: 'error',
                            duration: null,
                            isClosable: true,
                          })
                        } else {
                          const { request } = await simulateContract(
                            wagmiConfig,
                            mintArg
                          )
                          const hash = await writeContract(wagmiConfig, request)
                          setHash(hash)
                        }
                      }
                    } catch (error) {
                      const errorMessage =
                        error.message?.split('\n')[0] || 'Unknow error.'
                      toast({
                        title: '⚠️ Problem while minting...',
                        description: (
                          <>
                            {errorMessage?.includes('exceeds the balance')
                              ? 'The total cost including gas fee exceeds your balance of ETH on Optimism.'
                              : errorMessage}
                          </>
                        ),
                        status: 'error',
                        duration: 10000,
                        isClosable: true,
                      })
                      console.error(error)
                    }
                  }}
                >
                  {!address ? 'Connect Wallet' : 'Mint DataDisk'}
                </Button>
              </Box>
              <Box fontSize="md" pt="4">
                {`* ${NB_DATADISK_MAX} mints allowed per wallet`}
              </Box>
              <Divider my="4" />
              <Box justifyContent="space-between" display="flex" fontSize="sm">
                <Box>{numberOfOwners} minted</Box>
                <Box>{remaining} remaining</Box>
              </Box>
              <Box
                borderRadius="6px"
                h="6px"
                w="100%"
                background="#282827"
                mt="2"
                mb="2"
              >
                <Box
                  borderRadius="6px"
                  background="white"
                  h="100%"
                  w={`${numberOfOwners}%`}
                ></Box>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <ExternalLink
              underline="true"
              href={`/report-an-issue?context=datadisk-minting_${window?.location.pathname}`}
              alt={t('Report an Issue')}
            >
              {t('Help')}
            </ExternalLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Confetti
        showConfetti={showConfetti}
        onConfettiComplete={() => {
          setShowConfetti(false)
          onClose()
        }}
      />
    </>
  )
}

export default MintDatadiskModal
