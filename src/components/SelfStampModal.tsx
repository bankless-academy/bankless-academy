/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Button,
  Text,
  Spinner,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { SelfAppBuilder, getUniversalLink } from '@selfxyz/qrcode'
import type { SelfApp } from '@selfxyz/qrcode'

const SELF_SCOPE = process.env.NEXT_PUBLIC_SELF_SCOPE || 'bankless-academy'
const ALLOW_STAGING = process.env.NEXT_PUBLIC_SELF_STAGING === 'true'

const SelfQRcodeWrapper = dynamic(
  () => import('@selfxyz/qrcode').then((mod) => mod.SelfQRcodeWrapper),
  { ssr: false }
)

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
  }, [])
  return isMobile
}

type Props = {
  isOpen: boolean
  onClose: () => void
  address: string | undefined
  onSuccess: () => void
}

const SelfStampModal = ({ isOpen, onClose, address, onSuccess }: Props): React.ReactElement => {
  const { t } = useTranslation()
  const [userId, setUserId] = useState<string>(() =>
    typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : ''
  )
  const [selfApp, setSelfApp] = useState<SelfApp | null>(null)
  const [universalLink, setUniversalLink] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [polling, setPolling] = useState(false)
  const [useStaging, setUseStaging] = useState(ALLOW_STAGING)
  const isMobile = useIsMobile()
  const hasOpenedSelfApp = useRef(false)

  const effectiveStaging = ALLOW_STAGING && useStaging

  // Build the SelfApp once we have an address + userId.
  useEffect(() => {
    if (!isOpen || !address || !userId) return
    try {
      const baseEndpoint =
        process.env.NEXT_PUBLIC_SELF_ENDPOINT ||
        `${process.env.NEXT_PUBLIC_STAMP_CALLBACK || ''}/self`
      const params: string[] = []
      params.push(`address=${encodeURIComponent(address)}`)
      if (effectiveStaging) params.push('staging=true')
      const endpoint = `${baseEndpoint}?${params.join('&')}`

      const app = new SelfAppBuilder({
        appName: 'Bankless Academy',
        scope: SELF_SCOPE,
        endpoint,
        endpointType: effectiveStaging ? 'staging_https' : 'https',
        userId,
        userIdType: 'uuid',
        // Empty disclosures: only the nullifier (always present in the proof
        // output) is needed for sybil checking. No personal data is shared.
        disclosures: {},
      } as Partial<SelfApp>).build()

      setSelfApp(app)
      setUniversalLink(getUniversalLink(app))
    } catch (e) {
      console.error('Failed to initialize Self app:', e)
      setError(t('Failed to initialize verification. Please try again.'))
    }
  }, [isOpen, address, userId, effectiveStaging, t])

  const checkStatus = async () => {
    try {
      const res = await fetch(
        `/api/stamps/callback/self?userId=${encodeURIComponent(userId)}`
      )
      const data = await res.json()
      if (data?.isStampValidated) {
        setSuccess(true)
        setError(null)
        onSuccess()
        return true
      }
      if (data?.status && !data?.pending) {
        setError(data.status)
        return true
      }
    } catch (e) {
      console.error('Status poll failed:', e)
    }
    return false
  }

  // When the user comes back from the Self app, kick off a status check.
  useEffect(() => {
    if (!isOpen) return
    const onVisibilityChange = () => {
      if (
        document.visibilityState === 'visible' &&
        hasOpenedSelfApp.current &&
        !polling &&
        !success
      ) {
        hasOpenedSelfApp.current = false
        setPolling(true)
        checkStatus().finally(() => setPolling(false))
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, polling, success, userId])

  // Background polling fallback so we pick up backend-side errors.
  useEffect(() => {
    if (!isOpen || success || error) return
    const id = setInterval(() => {
      checkStatus()
    }, 3000)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, success, error, userId])

  const handleReset = () => {
    setError(null)
    setSuccess(false)
    setSelfApp(null)
    setUniversalLink('')
    setUserId(
      typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : ''
    )
    hasOpenedSelfApp.current = false
  }

  return (
    <Modal onClose={onClose} size="xl" isCentered isOpen={isOpen}>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="linear-gradient(180deg, #a379bd82 0%, #5a519882 100%)"
        border="2px solid #B68BCC"
        borderRadius="3xl"
        backdropFilter="blur(10px)"
      >
        <ModalHeader>{t('Verify with Self')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {success ? (
            <Box textAlign="center" py={4}>
              <Text fontSize="lg" mb={2}>
                {t('Your identity has been verified.')}
              </Text>
              <Text fontSize="sm" opacity={0.8} mb={4}>
                {t('No personal data was shared.')}
              </Text>
              <Button onClick={onClose} variant="primaryWhite">
                {t('Close')}
              </Button>
            </Box>
          ) : (
            <>
              <Text fontSize="sm" mb={3}>
                {t(
                  'Self lets you prove you hold a unique government ID (passport, biometric ID, Aadhaar, or similar) using zero-knowledge proofs. Your data never leaves your device.'
                )}
              </Text>

              <Box as="ol" pl={5} fontSize="sm" mb={4} sx={{ listStyle: 'decimal' }}>
                <li>
                  {t('Download the Self app on')}{' '}
                  <ChakraLink
                    href="https://apps.apple.com/in/app/self-zk-proofs/id6478563710"
                    isExternal
                    textDecoration="underline"
                  >
                    iOS
                  </ChakraLink>{' '}
                  {t('or')}{' '}
                  <ChakraLink
                    href="https://play.google.com/store/apps/details?id=com.proofofpassportapp"
                    isExternal
                    textDecoration="underline"
                  >
                    Android
                  </ChakraLink>
                </li>
                <li>{t('Add your government ID in the Self app')}</li>
                {isMobile ? (
                  <li>{t('Tap the button below to open the Self app')}</li>
                ) : (
                  <li>{t('Scan the QR code below with the Self app')}</li>
                )}
              </Box>

              {ALLOW_STAGING && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  p={2}
                  mb={3}
                  borderRadius="md"
                  bg="rgba(255,255,255,0.08)"
                >
                  <Text fontSize="xs">
                    {t('Self mode')}: {effectiveStaging ? t('Test') : t('Production')}
                  </Text>
                  <Button
                    size="xs"
                    onClick={() => {
                      setUseStaging(!useStaging)
                      handleReset()
                    }}
                  >
                    {t('Switch')}
                  </Button>
                </Box>
              )}

              {error ? (
                <Box textAlign="center" py={2}>
                  <Text color="red.300" fontSize="sm" mb={3}>
                    {error}
                  </Text>
                  <Button onClick={handleReset} variant="primaryWhite">
                    {t('Try again')}
                  </Button>
                </Box>
              ) : isMobile ? (
                <Box textAlign="center" py={2}>
                  <Button
                    as="a"
                    href={universalLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primaryWhite"
                    isDisabled={!universalLink}
                    onClick={() => {
                      hasOpenedSelfApp.current = true
                    }}
                  >
                    {t('Open Self App')}
                  </Button>
                  {polling && (
                    <Box mt={3}>
                      <Spinner size="sm" mr={2} />
                      <Text as="span" fontSize="sm">
                        {t('Checking verification status...')}
                      </Text>
                    </Box>
                  )}
                </Box>
              ) : (
                <Box display="flex" justifyContent="center" py={2}>
                  {selfApp ? (
                    <SelfQRcodeWrapper
                      selfApp={selfApp}
                      onSuccess={() => {
                        setPolling(true)
                        checkStatus().finally(() => setPolling(false))
                      }}
                      onError={(data: { reason?: string }) =>
                        setError(data?.reason || t('Verification failed'))
                      }
                      darkMode={false}
                    />
                  ) : (
                    <Spinner />
                  )}
                </Box>
              )}

              <Text fontSize="xs" textAlign="center" mt={3} opacity={0.8}>
                {t('No personal data is shared.')}
              </Text>
            </>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SelfStampModal
