/* eslint-disable no-console */
import {
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
} from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'

import Passport from 'components/Passport'
import ExternalLink from 'components/ExternalLink'
import { EMPTY_PASSPORT } from 'constants/passport'

const PassportModal = ({
  isOpen,
  onClose,
  isProfile,
}: {
  isOpen: boolean
  onClose: () => void
  isProfile?: boolean
}): React.ReactElement => {
  const { t } = useTranslation()
  const toast = useToast()
  const [passportLS] = useLocalStorage('passport', EMPTY_PASSPORT)

  return (
    <Modal
      onClose={() => {
        if (passportLS?.verified && !isProfile) {
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
        } else if (!isProfile) {
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
}

export default PassportModal
