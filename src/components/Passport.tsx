/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { Box, Text, Button, Image, useToast } from '@chakra-ui/react'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'
import { useTranslation } from 'react-i18next'

import PassportStamps from 'components/PassportStamps'
import ExternalLink from 'components/ExternalLink'
import { NUMBER_OF_STAMP_REQUIRED, EMPTY_PASSPORT } from 'constants/passport'
import { theme } from 'theme/index'
import { api, shortenAddress } from 'utils'

const PassportComponent = ({
  displayStamps,
}: {
  displayStamps?: boolean
}): JSX.Element => {
  const { t } = useTranslation()
  const [passportLS, setPassportLS] = useLocalStorage(
    'passport',
    EMPTY_PASSPORT
  )
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const { address } = useAccount()

  useEffect(() => {
    checkPassport()
  }, [])

  async function checkPassport() {
    setIsLoading(true)
    const result = await api('/api/passport', { address })
    if (result && result.status === 200) {
      setIsLoading(false)
      // console.log('passport', result.data)
      if (result.data?.error) {
        toast.closeAll()
        if (result.data?.error.includes('ERR_BAD_RESPONSE')) {
          toast({
            title: t('Gitcoin Passport stamps not loading'),
            description: (
              <ExternalLink
                underline="true"
                href="/faq#ea6ae6bd9ca645498c15cc611bc181c0"
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
            title: t('Gitcoin Passport issue'),
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
      // TODO: handle errors
    }
  }

  const numberOfStampsLeftToCollect =
    NUMBER_OF_STAMP_REQUIRED - passportLS.validStampsCount

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
              <Image src="/images/warning.png" height="40px" />
            </Box>
            <Text
              fontSize="xl"
              color={theme.colors.incorrect}
              fontWeight="bold"
            >
              <ExternalLink href="/faq#ea6ae6bd9ca645498c15cc611bc181c0">
                {t('Duplicate stamp detected.')}
              </ExternalLink>
              <br />
              {passportLS?.fraud
                ? `${t('Switch back to:')} ${shortenAddress(passportLS?.fraud)}`
                : null}
            </Text>
          </Box>
        ) : (
          <Text fontSize="xl">
            <>
              {`Visit here: `}
              <ExternalLink href="https://passport.gitcoin.co/?filter=bankless-academy#/dashboard">
                <Button
                  variant="primaryWhite"
                  color="#5D4E78"
                  size="lg"
                  leftIcon={
                    <Image
                      width="20px"
                      src="/images/gitcoin-passport.svg"
                      alt="Gitcoin Passport"
                    />
                  }
                >
                  {t('Gitcoin Passport')}
                </Button>
              </ExternalLink>
              <Box mt="4">
                {numberOfStampsLeftToCollect > 0
                  ? t(
                      `Collect {{numberOfStampsLeftToCollect}} more of the following stamps:`,
                      { numberOfStampsLeftToCollect }
                    )
                  : t(
                      'You have collected enough stamps. You can now close this popup and claim your rewards.'
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
          onClick={() => checkPassport()}
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
