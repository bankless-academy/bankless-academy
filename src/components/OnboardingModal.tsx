import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  useMediaQuery,
  Button,
  Image,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'

import { LOGO, PROJECT_NAME } from 'constants/index'
import { Envelope } from '@phosphor-icons/react'
import { t } from 'i18next'
import { emailRegex, api, Mixpanel } from 'utils/index'

const OnboardingModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}): React.ReactElement => {
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])
  const [step, setStep] = useState<'initial' | 'learn' | 'subscribe'>('initial')
  const [, setOnboarding] = useLocalStorage('onboarding', '')
  const [email, setEmail] = useLocalStorage('email', '')
  const [initialEmail] = useLocalStorage('email', '')
  const toast = useToast()
  const { address } = useAccount()
  const [ens] = useLocalStorage(`name-cache`, {})

  useEffect(() => {
    if (isOpen) {
      setStep('initial')
    }
  }, [isOpen])

  const handleNextStep = async () => {
    if (step === 'initial') setStep('learn')
    else if (step === 'learn') setStep('subscribe')
    else {
      toast.closeAll()
      if (!email)
        toast({
          title: t('Email missing'),
          description: t('Provide an email.'),
          status: 'warning',
          duration: 10000,
          isClosable: true,
        })
      else if (emailRegex.test(email) === false)
        toast({
          title: t('Wrong email format'),
          description: t('Please check your email.'),
          status: 'warning',
          duration: 10000,
          isClosable: true,
        })
      else {
        const addressLower = address?.toLowerCase()
        const result = await api('/api/subscribe-newsletter', {
          email,
          wallet: address,
          ens:
            addressLower &&
            addressLower in ens &&
            !ens[addressLower]?.name?.includes('...')
              ? ens[addressLower]?.name
              : undefined,
        })
        if (result && result.status === 200) {
          localStorage.setItem('email', email)
          localStorage.setItem(`newsletter`, 'true')
          Mixpanel.track(
            initialEmail?.length ? 'subscribe_newsletter' : 'update_newsletter',
            {
              email: email,
            }
          )
          toast({
            title: t('Thanks for subscribing Explorer 🧑‍🚀'),
            description: t(`You'll hear from us soon!`),
            status: 'success',
            duration: 10000,
            isClosable: true,
          })
        } else {
          toast({
            title: t(
              `Something went wrong... we couldn't add your subscription.`
            ),
            description: t('Please try again later.'),
            status: 'warning',
            duration: 10000,
            isClosable: true,
          })
        }
      }
      setOnboarding('done')
      onClose()
    }
  }

  return (
    <Modal
      onClose={onClose}
      size={isMobileScreen ? 'full' : 'xl'}
      isCentered
      isOpen={isOpen}
      closeOnOverlayClick={false}
      closeOnEsc={false}
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
        {step === 'subscribe' && <ModalCloseButton />}
        <ModalBody padding={isMobileScreen ? '0' : 'default'} pb="4">
          {step === 'initial' && (
            <>
              <Box mt="24px">
                <Box display="flex" justifyContent="center">
                  <Image maxW="80%" src={LOGO} alt={PROJECT_NAME} />
                </Box>
                <Box maxW="480px" m={isMobileScreen ? '16px' : 'auto'}>
                  <Text
                    fontWeight="bold"
                    fontSize="2xl"
                    textAlign="center"
                    mt="24px"
                  >
                    Welcome to {PROJECT_NAME}!
                  </Text>
                  <Box
                    display="flex"
                    flexDir={isMobileScreen ? 'column' : 'row'}
                    alignItems="center"
                  >
                    <Image
                      height="180px"
                      src="/images/LEVELUP.png"
                      alt="Explorer Profile"
                      zIndex="1"
                    />
                    <Box
                      backgroundColor="#3F3154"
                      borderRightRadius="100px"
                      borderLeftRadius={isMobileScreen ? '100px' : '0'}
                      p="24px 48px"
                      marginLeft={isMobileScreen ? '0' : '-70px'}
                      w={isMobileScreen ? '90%' : 'auto'}
                      mt={isMobileScreen ? '-45px' : '0'}
                    >
                      <Box
                        ml={isMobileScreen ? '0' : '20px'}
                        w={isMobileScreen ? 'auto' : '215px'}
                        textAlign={isMobileScreen ? 'center' : 'left'}
                      >
                        <Text>You were referred by:</Text>
                        <Text fontWeight="bold">TETRANOME.ETH</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box mt="24px">
                    <Text>Your digital transformation begins here.</Text>
                    <Text mt="8px">
                      It’s time to start your crypto journey and change your
                      digital life forever.
                    </Text>
                  </Box>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  onClick={handleNextStep}
                  mt="4"
                  variant="primaryWhite"
                  size="lg"
                >
                  Next
                </Button>
              </Box>
            </>
          )}
          {step === 'learn' && (
            <>
              <Box>
                <Box
                  fontWeight="bold"
                  fontSize="2xl"
                  textAlign="center"
                  mt="24px"
                >
                  Start your crypto journey!
                </Box>
                <Box maxW="480px" m="auto">
                  <Box
                    display="flex"
                    flexDir={isMobileScreen ? 'column' : 'row'}
                    alignItems="center"
                  >
                    <Image
                      height="152px"
                      src="/images/LESSON.png"
                      alt="Lesson"
                      zIndex="1"
                    />
                    <Box
                      backgroundColor="#3F3154"
                      borderRightRadius="100px"
                      borderLeftRadius={isMobileScreen ? '100px' : '0'}
                      p="24px 48px"
                      marginLeft={isMobileScreen ? '0' : '-70px'}
                      w={isMobileScreen ? '90%' : 'auto'}
                      mt={isMobileScreen ? '-45px' : '0'}
                    >
                      <Box ml={isMobileScreen ? '0' : '20px'}>
                        <Text fontWeight="bold">1. Lessons & Quests</Text>
                        <Text pl="16px">Gain practical skills.</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDir={isMobileScreen ? 'column' : 'row-reverse'}
                    alignItems="center"
                    mt={isMobileScreen ? '0' : '-36px'}
                  >
                    <Image
                      height="180px"
                      src="/images/BADGE.png"
                      alt="Badge"
                      zIndex="1"
                    />
                    <Box
                      backgroundColor="#3F3154"
                      borderLeftRadius="100px"
                      borderRightRadius={isMobileScreen ? '100px' : '0'}
                      p="24px 48px"
                      marginRight={isMobileScreen ? '0' : '-70px'}
                      w={isMobileScreen ? '90%' : 'auto'}
                      mt={isMobileScreen ? '-45px' : '0'}
                    >
                      <Box w={isMobileScreen ? 'auto' : '250px'}>
                        <Text fontWeight="bold">2. Claim Badges</Text>
                        <Text pl="17px">Showcase your expertise.</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDir={isMobileScreen ? 'column' : 'row'}
                    alignItems="center"
                    mt={isMobileScreen ? '0' : '-36px'}
                  >
                    <Image
                      height="180px"
                      src="/images/LEVELUP.png"
                      alt="Explorer Profile"
                      zIndex="1"
                    />
                    <Box
                      backgroundColor="#3F3154"
                      borderRightRadius="100px"
                      borderLeftRadius={isMobileScreen ? '100px' : '0'}
                      p="24px 48px"
                      marginLeft={isMobileScreen ? '0' : '-70px'}
                      w={isMobileScreen ? '90%' : 'auto'}
                      mt={isMobileScreen ? '-45px' : '0'}
                    >
                      <Box
                        ml={isMobileScreen ? '0' : '20px'}
                        w={isMobileScreen ? 'auto' : '215px'}
                      >
                        <Text fontWeight="bold">3. Level Up</Text>
                        <Text pl="17px">Build your digital identity.</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    onClick={handleNextStep}
                    mt="4"
                    variant="primaryWhite"
                    size="lg"
                  >
                    Start
                  </Button>
                </Box>
              </Box>
            </>
          )}
          {step === 'subscribe' && (
            <>
              <Box display="flex" flexDir="column" alignItems="center">
                <Image src="/images/emailKey.png" alt="Email" maxW="250px" />
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="2xl">
                    Sign up, unlock your power!
                  </Text>
                  <Text>
                    Enter your email to receive expert guidance and key updates.
                  </Text>
                </Box>
                <InputGroup size="lg" maxW="350px" mt="24px">
                  <InputLeftElement pointerEvents="none">
                    <Envelope size="32" />
                  </InputLeftElement>
                  <Input
                    backgroundColor="black"
                    placeholder={t('Enter your email address...')}
                    type="email"
                    value={email}
                    mb="8"
                    onChange={(e): void => {
                      setEmail(e.target.value)
                      localStorage.setItem('email', e.target.value)
                    }}
                  />
                </InputGroup>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  onClick={handleNextStep}
                  mt="4"
                  variant="primaryWhite"
                  size="lg"
                >
                  Sign-up
                </Button>
              </Box>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default OnboardingModal
