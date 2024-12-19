import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  Button,
  useDisclosure,
  Icon,
  IconButton,
  Box,
  useMediaQuery,
} from '@chakra-ui/react'
import { ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import ExternalLink from 'components/ExternalLink'

const QuestionIcon = (props) => (
  <Icon
    width={props.size === 'lg' ? '30px' : '24px'}
    height={props.size === 'lg' ? '30px' : '24px'}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M12.0002 21C16.9708 21 21.0002 16.9706 21.0002 12C21.0002 7.02944 16.9708 3 12.0002 3C7.02968 3 3.00024 7.02944 3.00024 12C3.00024 16.9706 7.02968 21 12.0002 21Z"
      fill="#1A191A"
      stroke="#C6C6C6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17.8125C12.5178 17.8125 12.9375 17.3928 12.9375 16.875C12.9375 16.3572 12.5178 15.9375 12 15.9375C11.4822 15.9375 11.0625 16.3572 11.0625 16.875C11.0625 17.3928 11.4822 17.8125 12 17.8125Z"
      fill="#C6C6C6"
    />
    <path
      d="M12 13.5004V12.7504C12.5192 12.7504 13.0267 12.5965 13.4584 12.308C13.8901 12.0196 14.2265 11.6096 14.4252 11.13C14.6239 10.6503 14.6758 10.1225 14.5746 9.61332C14.4733 9.10412 14.2233 8.63639 13.8562 8.26927C13.489 7.90216 13.0213 7.65215 12.5121 7.55087C12.0029 7.44958 11.4751 7.50156 10.9955 7.70024C10.5158 7.89892 10.1058 8.23538 9.81739 8.66706C9.52895 9.09874 9.375 9.60625 9.375 10.1254"
      stroke="#C6C6C6"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
)

const ButtonHelper = ({
  onOpenHelpModal,
  isProfile,
}: {
  onOpenHelpModal: (e: React.MouseEvent) => void
  isProfile?: boolean
}): JSX.Element => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Box
      position="absolute"
      zIndex="2"
      top={
        isHover
          ? isProfile
            ? '-16px'
            : '-15px'
          : isProfile
          ? '-16px'
          : '-12px'
      }
      right={
        isHover
          ? isProfile
            ? '-14px'
            : '-15px'
          : isProfile
          ? '-11px'
          : '-12px'
      }
    >
      <IconButton
        variant="unstyled"
        size={isHover ? 'lg' : 'md'}
        onClick={onOpenHelpModal}
        display="contents"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        icon={<QuestionIcon size={isHover ? 'lg' : 'md'} />}
        aria-label=""
      />
    </Box>
  )
}

const Helper = ({
  title,
  definition,
  fullscreen,
  isProfile,
  triggerOpen,
  helpLink,
  onCloseParent,
}: {
  title: ReactNode
  definition: ReactNode
  fullscreen?: boolean
  isProfile?: boolean
  triggerOpen?: boolean
  helpLink?: string
  onCloseParent?: () => void
}): React.ReactElement => {
  const { t } = useTranslation()
  const {
    isOpen: isOpenHelpModal,
    onOpen: onOpenHelpModal,
    onClose: onCloseHelpModal,
  } = useDisclosure()
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])

  useEffect(() => {
    if (triggerOpen) {
      onOpenHelpModal()
    }
  }, [triggerOpen])

  const handleClose = () => {
    onCloseHelpModal()
    if (onCloseParent) {
      onCloseParent()
    }
  }

  return (
    <>
      <ButtonHelper
        isProfile={isProfile}
        onOpenHelpModal={(e: React.MouseEvent) => {
          e.preventDefault()
          e.stopPropagation()
          onOpenHelpModal()
        }}
      />
      <Modal
        onClose={handleClose}
        size={fullscreen && isMobileScreen ? 'full' : 'md'}
        isOpen={isOpenHelpModal}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          bg="linear-gradient(180deg, #a379bdcc 0%, #5a5198cc 100%)"
          border={fullscreen && isMobileScreen ? '0' : '2px solid #B68BCC'}
          borderRadius={fullscreen && isMobileScreen ? '0' : '3xl'}
          backdropFilter="blur(10px)"
          overflowY="auto"
          maxH="var(--chakra-vh)"
        >
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{definition}</ModalBody>
          <ModalFooter
            justifyContent="space-between"
            alignSelf="center"
            w="100%"
          >
            <Box w="36px"></Box>
            <Button variant="primaryWhite" onClick={handleClose}>
              {t('Got it')}
            </Button>
            <Box w="36px">
              {helpLink ? (
                <ExternalLink underline="true" href={helpLink}>
                  Help
                </ExternalLink>
              ) : (
                ''
              )}
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Helper
