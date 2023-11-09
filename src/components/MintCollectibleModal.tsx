/* eslint-disable no-console */
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
  // NumberInput,
  // NumberInputField,
  // NumberDecrementStepper,
  // NumberIncrementStepper,
  // NumberInputStepper,
  // Button,
  // Divider,
} from '@chakra-ui/react'
import { Lock } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import { LessonType } from 'entities/lesson'
import Collectible from 'components/Collectible'
import { useLocalStorage } from 'usehooks-ts'
// import Collectible from 'components/Collectible'

const MintCollectibleModal = ({
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
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])
  const [isBadgeMintedLS] = useLocalStorage(
    `isBadgeMinted-${lesson.badgeId}`,
    false
  )
  const remaining = 100 - numberOfOwners
  console.log(remaining)
  // TODO: TRANSLATE
  return (
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
            Bankless Academy is issuing a small quantity of collectible DataDisk
            devices in an evolving effort to share Bankless Academy content with
            the deeper reaches of blockspace. Collect yours to{' '}
            <b>become a Guardian of Bankless Academy</b>, and retroactively fund
            education public goods!
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={isMobileScreen ? '0' : 'default'}>
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
            mb={isBadgeMintedLS ? '-25px' : '0px'}
            opacity={isBadgeMintedLS ? '1' : '0.6'}
          >
            <Collectible lesson={lesson} />
          </Box>
          <Box w="90%" m="auto">
            {isBadgeMintedLS ? null : (
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
            )}
            {/* <Box
              display="flex"
              pt="4"
              w="100%"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Box display="flex" alignItems="baseline">
                  <Box fontSize="2xl" fontWeight="bold">
                    0.03
                  </Box>
                  <Box fontSize="lg" ml="1">
                    ETH
                  </Box>
                </Box>
                <Box fontSize="xs">+ 0.0008 ETH mint fee</Box>
              </Box>
              <Box w="80px">
                <NumberInput defaultValue={1} max={2} min={1}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
            </Box>
            <Box textAlign="center" pt="4">
              <Button size="lg" variant="primaryWhite">
                Mint DataDisk
              </Button>
            </Box>
            <Box fontSize="md" pt="4">
              * 2 mints allowed per wallet
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
              mb="4"
            >
              <Box
                borderRadius="6px"
                background="white"
                h="100%"
                w={`${numberOfOwners}%`}
              ></Box>
            </Box> */}
          </Box>
          {lesson.lessonCollectibleMintID && (
            <iframe
              src={`/mint.html?collection=${lesson.lessonCollectibleMintID}${
                isMobileScreen ? `&mobile=true` : ''
              }`}
              frameBorder="0"
              style={{
                width: isMobileScreen ? '100%' : '400px',
                height: isMobileScreen ? '378px' : '370px',
                margin: 'auto',
                colorScheme: 'none',
                overflow: 'hidden',
              }}
            ></iframe>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default MintCollectibleModal
