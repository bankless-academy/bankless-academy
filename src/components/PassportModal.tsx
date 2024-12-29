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
import { EMPTY_PASSPORT, NUMBER_OF_STAMP_REQUIRED } from 'constants/passport'

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
                        {t('Wallet protection successfully set up.')}
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
                        {t('Wallet protection not set up.')}
                      </Box>
                      <Box mt="4">
                        {t(
                          'Linking accounts to your wallet is required to mint a free lesson badge.'
                        )}
                      </Box>
                      {/* <Box mt="4">
                        <ExternalLink
                          underline="true"
                          href="/faq#17f5d5963c644fa7af5e32598bd6c793"
                        >
                          {t('Follow these steps and try again')}
                        </ExternalLink>
                      </Box> */}
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
            {/* {!passportLS?.verified && (
              <Box mt="4" mr="4">
                {t(
                  'You haven’t set up Gitcoin Passport, or your stamps are out of date.'
                )}
              </Box>
            )} */}
            <Box my="4">
              {`Explorers must connect at least ${NUMBER_OF_STAMP_REQUIRED} accounts in order to collect Bankless Academy lesson badges. `}
              <ExternalLink
                underline="true"
                href="/faq#36c048c07dea4b289d466a4318e41eb2"
              >
                {t('Learn more')}
              </ExternalLink>
            </Box>
          </Text>
          <Passport displayStamps isProfile={isProfile} />
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <Box display="flex" alignItems="center">
            {t('Powered by')}
            <Image
              src="/images/gitcoin-passport.svg"
              alt="Gitcoin Passport"
              p="0 4px 0 8px"
              height="32px"
            />
            Gitcoin Passport
          </Box>
          <ExternalLink
            underline="true"
            href={`/report-an-issue?context=connect_stamps_${window?.location.pathname}`}
          >
            {t('Help')}
          </ExternalLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default PassportModal
