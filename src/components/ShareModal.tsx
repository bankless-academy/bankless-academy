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
  Text,
} from '@chakra-ui/react'
import { shortenAddress } from 'utils'
import ProfileScore from 'components/ProfileScore'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'
import Helper from 'components/Helper'
import ShareAction from './ShareAction'

const ShareModal = ({
  isOpen,
  onClose,
  shareMessage,
  shareLink,
}: {
  isOpen: boolean
  onClose: () => void
  shareMessage: string
  shareLink: string
}): React.ReactElement => {
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])
  const [score] = useLocalStorage(`score`, 0)
  const [nameCache] = useLocalStorage(`name-cache`, {})
  const { address } = useAccount()
  const addressLower = address?.toLowerCase()

  const ens = address
    ? addressLower in nameCache && nameCache[addressLower]?.name?.includes('.')
      ? nameCache[addressLower].name
      : address
    : ''
  const avatar = address
    ? addressLower in nameCache &&
      nameCache[addressLower]?.avatar?.startsWith('http')
      ? nameCache[addressLower].avatar
      : ''
    : ''

  const hasReferral = shareLink.includes('referral=')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={isMobileScreen ? 'full' : 'xl'}
      isCentered
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
        <ModalHeader>Share</ModalHeader>
        <ModalCloseButton />
        <ModalBody alignContent="center">
          <ShareAction shareMessage={shareMessage} shareLink={shareLink} />
          {hasReferral ? (
            <Box
              display="flex"
              flexDir={isMobileScreen ? 'column' : 'row'}
              alignItems="center"
              maxW="400px"
              m="auto"
            >
              <Box
                zIndex="1"
                transform={isMobileScreen ? 'scale(0.7)' : 'scale(0.75)'}
                position="relative"
              >
                <ProfileScore avatar={avatar} score={score} />
              </Box>
              <Box
                backgroundColor="#3F3154"
                borderRightRadius="100px"
                borderLeftRadius={isMobileScreen ? '100px' : '0'}
                p={isMobileScreen ? '16px 32px' : '24px 48px'}
                marginLeft={isMobileScreen ? '0' : '-50px'}
                w={isMobileScreen ? '100%' : 'auto'}
                mt={isMobileScreen ? '-40px' : '0'}
              >
                <Box
                  ml={isMobileScreen ? '0' : '0px'}
                  w={isMobileScreen ? 'auto' : '200px'}
                  textAlign="center"
                  position="relative"
                >
                  <Text fontStyle="italic">Referred by:</Text>
                  <Text fontWeight="bold" textTransform="uppercase">
                    {ens.includes('.') ? ens : shortenAddress(ens)}
                  </Text>
                  <Box
                    position="absolute"
                    top={isMobileScreen ? '-6px' : '-12px'}
                    right={isMobileScreen ? '-22px' : '-32px'}
                  >
                    <Helper
                      title="Earn referral points"
                      definition={
                        <>
                          {`Explorers share knowledge with others.`}
                          <br />
                          {`Each friend referred (after claiming their first badge) increases your score by 1 point.`}
                        </>
                      }
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box display="flex" gap="10px" position="relative" mt="20px">
              <Image
                position="absolute"
                top="-8px"
                left="-30px"
                width="50px"
                src="/images/share/plus-one.png"
              />
              <Box
                borderRadius="30px"
                backgroundColor="#3F3154"
                p="8px 24px"
                color="white"
                fontSize="14px"
                fontWeight="500"
              >
                Connect your wallet and earn referral rewards!
              </Box>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ShareModal
