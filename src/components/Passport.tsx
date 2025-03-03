/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { Box, Text, Button, Image, useToast } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'
import { useTranslation } from 'react-i18next'

import PassportStamps from 'components/PassportStamps'
import ExternalLink from 'components/ExternalLink'
import {
  NUMBER_OF_STAMP_REQUIRED,
  EMPTY_PASSPORT,
  REQUIRED_PASSPORT_SCORE,
} from 'constants/passport'
import { theme } from 'theme/index'
import { api, shortenAddress } from 'utils/index'

const PassportComponent = ({
  displayStamps,
  isProfile,
}: {
  displayStamps?: boolean
  isProfile?: boolean
}): JSX.Element => {
  const { t } = useTranslation()
  const [passportLS, setPassportLS] = useLocalStorage(
    'passport',
    EMPTY_PASSPORT
  )
  const [refreshPassportLS, setRefreshPassportLS] = useLocalStorage(
    'refreshPassport',
    false
  )
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const { address } = useAccount()

  useEffect(() => {
    checkPassport()
  }, [])

  useEffect(() => {
    if (refreshPassportLS) {
      setRefreshPassportLS(false)
      checkPassport()
    }
  }, [refreshPassportLS])

  const checkPassport = async () => {
    try {
      setIsLoading(true)
      const result = await api('/api/passport', { address, isProfile })
      if (result && result.status === 200) {
        setIsLoading(false)
        if (result.data?.error) {
          toast.closeAll()
          if (result.data?.error.includes('ERR_BAD_RESPONSE')) {
            toast({
              title: t('Human Passport stamps not loading'),
              description: (
                <ExternalLink
                  underline="true"
                  href="/faq#17f5d5963c644fa7af5e32598bd6c793"
                >
                  {t('Follow these steps and try again')}
                </ExternalLink>
              ),
              status: 'warning',
              duration: null,
              isClosable: true,
            })
          } else {
            toast({
              title: t('Human Passport issue'),
              description: (
                <ExternalLink underline="true" href="/report-an-issue">
                  {t('Report an Issue')}
                </ExternalLink>
              ),
              status: 'warning',
              duration: null,
              isClosable: true,
            })
          }
        }
        setPassportLS(result.data)
      } else {
        console.error('Error checking passport:', result.data?.error)
        setIsLoading(false)
        toast({
          title: t('Error checking passport'),
          description: t(
            'An unexpected error occurred. Please try again later.'
          ),
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    } catch (error) {
      console.error('Error checking passport:', error)
      setIsLoading(false)
      toast({
        title: t('Error checking passport'),
        description: t('An unexpected error occurred. Please try again later.'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  const numberOfStampsLeftToCollect =
    NUMBER_OF_STAMP_REQUIRED - (passportLS.validStampsCount || 0)

  return (
    <>
      <Box mb={6}>
        {passportLS.verified === false && passportLS?.fraud ? (
          <Box display="flex" my={2} justifyContent="center" mb={4}>
            <Box
              display="flex"
              width="80px"
              alignItems="center"
              justifyContent="center"
            >
              <Image src="/images/warning.png" height="40px" alt="Warning" />
            </Box>
            <Text
              fontSize="xl"
              color={theme.colors.incorrect}
              fontWeight="bold"
            >
              {t('Duplicate account detected.')}
              <br />
              {passportLS?.fraud ? (
                <>
                  {`${t('Switch back to:')} ${shortenAddress(
                    passportLS?.fraud
                  )} or `}
                  <ExternalLink href="/report-an-issue">
                    contact us
                  </ExternalLink>
                </>
              ) : null}
            </Text>
          </Box>
        ) : isProfile ? null : (
          <Text fontSize="xl">
            <>
              <Box mt="4">
                {!passportLS?.verified ? (
                  t(
                    `Connect {{numberOfStampsLeftToCollect}} more account(s):`,
                    { numberOfStampsLeftToCollect }
                  )
                ) : (
                  <Box
                    background="whiteAlpha.800"
                    color="green.500"
                    p="4"
                    borderRadius="8px"
                    fontWeight="bold"
                  >
                    {passportLS?.score !== '...' &&
                    Number(passportLS?.score) >= REQUIRED_PASSPORT_SCORE
                      ? t(
                          'You already have a Human Passport score > {{required_score}}, so you are not required to connect more accounts.',
                          { required_score: REQUIRED_PASSPORT_SCORE }
                        )
                      : t('You have connected enough accounts.')}{' '}
                    {t('You can now close this popup and claim your rewards.')}
                  </Box>
                )}
              </Box>
            </>
          </Text>
        )}
      </Box>
      <PassportStamps
        stamps={passportLS ? passportLS.stamps : null}
        displayStamps={displayStamps}
      />
      <Box textAlign="center">
        <Button
          variant="outline"
          onClick={checkPassport}
          isLoading={isLoading}
          loadingText="Refreshing"
          mt="4"
        >
          {t('Refresh')}
        </Button>
      </Box>
    </>
  )
}

export default PassportComponent
