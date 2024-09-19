/* eslint-disable no-console */
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
  ModalFooter,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'

import { LOGO, PROJECT_NAME } from 'constants/index'
import { Envelope } from '@phosphor-icons/react'
import { t } from 'i18next'
import { emailRegex, api, Mixpanel, shortenAddress } from 'utils/index'
import ProfileScore from 'components/ProfileScore'
import { UserType } from 'entities/user'

const OnboardingModal = ({
  isOpen,
  onClose,
  newsletterOnly,
}: {
  isOpen: boolean
  onClose: () => void
  newsletterOnly?: boolean
}): React.ReactElement => {
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])
  const [step, setStep] = useState<'initial' | 'learn' | 'subscribe' | ''>(
    newsletterOnly ? '' : 'initial'
  )
  const [, setOnboarding] = useLocalStorage('onboarding', '')
  const [email, setEmail] = useLocalStorage(
    'email',
    localStorage.getItem('email') || ''
  )
  const [referrer] = useLocalStorage('referrer', '')
  const [referrerData, setReferrerData] = useState<UserType | null>(null)
  const [initialEmail] = useLocalStorage(
    'email',
    localStorage.getItem('email') || ''
  )
  const toast = useToast()
  const { address } = useAccount()
  const [ens] = useLocalStorage(`name-cache`, {})

  useEffect(() => {
    const loadUser = async () => {
      try {
        const res = await fetch(`/api/user/${referrer}?profile=true`)
        const user: UserType = await res.json()
        if (user) {
          console.log(user)
          setReferrerData(user)
        }
      } catch (error) {
        console.error(error)
      }
    }
    if (referrer && step === 'initial') loadUser()
  }, [referrer, step])

  useEffect(() => {
    if (isOpen) {
      setStep(newsletterOnly ? 'subscribe' : 'initial')
      setOnboarding(Date.now().toString())
    }
  }, [isOpen])

  const handleNextStep = async () => {
    if (step === 'initial') setStep('learn')
    else if (step === 'learn') {
      if (email && localStorage.getItem('newsletter') === 'true') {
        setOnboarding('done')
        onClose()
      } else setStep('subscribe')
    } else {
      // subscribe
      toast.closeAll()
      if (!email)
        toast({
          title: `Email missing.`,
          description: `Please provide an email address.`,
          status: 'warning',
          duration: 10000,
          isClosable: true,
        })
      else if (emailRegex.test(email) === false)
        toast({
          title: `Wrong email format.`,
          description: `Please check your email.`,
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
          setEmail(email)
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
          setOnboarding('done')
          onClose()
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
    }
  }

  const handlePrevStep = () => {
    if (step === 'learn') setStep('initial')
    else if (step === 'subscribe') setStep('learn')
  }

  const Buttons = {
    initial: (
      <>
        <Box />
        <Button onClick={handleNextStep} variant="primaryWhite" size="lg">
          Next
        </Button>
      </>
    ),
    learn: (
      <>
        <Button onClick={handlePrevStep} variant="secondaryWhite" size="lg">
          Back
        </Button>
        <Button onClick={handleNextStep} variant="primaryWhite" size="lg">
          Start
        </Button>
      </>
    ),
    subscribe: (
      <>
        {newsletterOnly ? (
          <Box />
        ) : (
          <Button onClick={handlePrevStep} variant="secondaryWhite" size="lg">
            Back
          </Button>
        )}
        <Button onClick={handleNextStep} variant="primaryWhite" size="lg">
          Sign-up
        </Button>
      </>
    ),
  }

  return (
    <Modal
      onClose={onClose}
      size={isMobileScreen ? 'full' : 'xl'}
      isCentered
      isOpen={isOpen}
      closeOnOverlayClick={step === 'subscribe' || !!email}
      closeOnEsc={step === 'subscribe' || !!email}
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
        {(step === 'subscribe' || !!email) && <ModalCloseButton />}
        <ModalBody
          padding={isMobileScreen ? '0' : 'default'}
          pb="4"
          alignContent="center"
          minH={isMobileScreen ? 'default' : '548px'}
        >
          {step === 'initial' && (
            <>
              <Box mt="24px">
                <Box display="flex" justifyContent="center" mt="24px">
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
                  {referrerData?.address ? (
                    <Box
                      display="flex"
                      flexDir={isMobileScreen ? 'column' : 'row'}
                      alignItems="center"
                      maxW="400px"
                      m="24px auto 0"
                    >
                      <Box
                        zIndex="1"
                        transform={isMobileScreen ? 'scale(0.7)' : 'scale(0.9)'}
                        position="relative"
                      >
                        <ProfileScore
                          avatar={referrerData.avatar}
                          score={referrerData.stats.score}
                        />
                      </Box>
                      <Box
                        backgroundColor="#3F3154"
                        borderRightRadius="100px"
                        borderLeftRadius={isMobileScreen ? '100px' : '0'}
                        p={isMobileScreen ? '16px 32px' : '24px 48px'}
                        marginLeft={isMobileScreen ? '0' : '-50px'}
                        w={isMobileScreen ? '90%' : 'auto'}
                        mt={isMobileScreen ? '-40px' : '0'}
                      >
                        <Box
                          ml={isMobileScreen ? '0' : '0px'}
                          w={isMobileScreen ? 'auto' : '200px'}
                          textAlign="center"
                        >
                          <Text>You were referred by:</Text>
                          <Text fontWeight="bold" textTransform="uppercase">
                            {referrerData.ensName ||
                              shortenAddress(referrerData.address)}
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <Box h="24px" />
                  )}
                  <Box mt="24px">
                    <Text>Your digital transformation begins here.</Text>
                    <Text mt="8px">
                      {`It's time to start your crypto journey and change your
                      digital life forever.`}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </>
          )}
          {step === 'learn' && (
            <>
              <Box textUnderlineOffset="4px">
                <Box
                  fontWeight="bold"
                  fontSize="2xl"
                  textAlign="center"
                  mt="24px"
                >
                  Start your crypto journey!
                </Box>
                <Box maxW="480px" m="auto" my={isMobileScreen ? '0' : '32px'}>
                  <Box
                    display="flex"
                    position="relative"
                    flexDir="column"
                    alignItems="center"
                  >
                    <Image
                      position={isMobileScreen ? 'relative' : 'absolute'}
                      top="-37px"
                      left="-40px"
                      height={isMobileScreen ? '130px' : '197px'}
                      src="/images/LESSON.png"
                      alt="Lesson"
                      zIndex="1"
                    />
                    <Box
                      backgroundColor="#3F3154"
                      borderRadius="100px"
                      p={isMobileScreen ? '16px 32px' : '24px 48px'}
                      w={isMobileScreen ? '90%' : '100%'}
                      mt={isMobileScreen ? '-40px' : '0'}
                    >
                      <Box
                        ml={isMobileScreen ? '0' : '222px'}
                        w={isMobileScreen ? 'auto' : '176px'}
                      >
                        <Text fontSize="lg" fontWeight="bold">
                          1. Lessons & Quests
                        </Text>
                        <Text pl="17px">
                          Gain <u>theoretical</u> and <u>practical</u> skills.
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    position="relative"
                    flexDir="column"
                    alignItems="center"
                    mt={isMobileScreen ? '0' : '48px'}
                  >
                    <Image
                      height={isMobileScreen ? '150px' : '230px'}
                      src="/images/BADGE.png"
                      alt="Badge"
                      zIndex="1"
                      position={isMobileScreen ? 'relative' : 'absolute'}
                      top="-52px"
                      right="-34px"
                    />
                    <Box
                      backgroundColor="#3F3154"
                      borderRadius="100px"
                      p={isMobileScreen ? '16px 32px' : '24px 48px'}
                      w={isMobileScreen ? '90%' : '100%'}
                      mt={isMobileScreen ? '-40px' : '0'}
                    >
                      <Box w={isMobileScreen ? 'auto' : '270px'}>
                        <Text fontSize="lg" fontWeight="bold">
                          2. Claim Badges
                        </Text>
                        <Text pl="20px">
                          Showcase your expertise with{' '}
                          <u>onchain certifications</u>.
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    position="relative"
                    flexDir="column"
                    alignItems="center"
                    mt={isMobileScreen ? '0' : '48px'}
                  >
                    <Image
                      height={isMobileScreen ? '150px' : '230px'}
                      src="/images/LEVELUP.png"
                      alt="Explorer Profile"
                      zIndex="1"
                      position={isMobileScreen ? 'relative' : 'absolute'}
                      top="-52px"
                      left="-34px"
                    />
                    <Box
                      backgroundColor="#3F3154"
                      borderRadius="100px"
                      p={isMobileScreen ? '16px 32px' : '24px 48px'}
                      w={isMobileScreen ? '90%' : '100%'}
                      mt={isMobileScreen ? '-40px' : '0'}
                    >
                      <Box
                        ml={isMobileScreen ? '0' : '161px'}
                        w={isMobileScreen ? 'auto' : '257px'}
                      >
                        <Text fontSize="lg" fontWeight="bold">
                          3. Level Up
                        </Text>
                        <Text pl="20px">
                          Build your digital identity through your{' '}
                          <u>Explorer Profile</u>.
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          )}
          {step === 'subscribe' && (
            <>
              <Box
                display="flex"
                flexDir="column"
                alignItems="center"
                maxW="90%"
                m="auto"
              >
                <Image src="/images/emailKey.png" alt="Email" maxW="250px" />
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="2xl">
                    Sign up, unlock your power!
                  </Text>
                  <Text mt="18px">
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
                    }}
                  />
                </InputGroup>
              </Box>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Box display="flex" justifyContent="space-between" w="100%">
            {Buttons[step]}
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default OnboardingModal
