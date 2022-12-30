/* eslint-disable no-console */
import React, { useState } from 'react'
import { Box, Text, Button, Image, useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'

import { useActiveWeb3React } from 'hooks/index'
import GitcoinPassport from 'components/GitcoinPassport'
import ExternalLink from 'components/ExternalLink'
import { NUMBER_OF_STAMP_REQUIRED, EMPTY_PASSPORT } from 'constants/passport'
import { theme } from 'theme/index'
import { shortenAddress } from 'utils'

const PassportComponent = ({
  displayStamps,
}: {
  displayStamps?: boolean
}): JSX.Element => {
  const [passportLS, setPassportLS] = useLocalStorage(
    'passport',
    EMPTY_PASSPORT
  )
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  const { account } = useActiveWeb3React()

  async function checkPassport() {
    setIsLoading(true)
    axios
      .get(`/api/passport?address=${account}`)
      .then(function (res) {
        setIsLoading(false)
        // console.log('passport', res.data)
        if (res.data?.error) {
          toast.closeAll()
          if (res.data?.error.includes('ERR_BAD_RESPONSE')) {
            toast({
              title: 'Gitcoin Passport stamps not loading',
              description: (
                <ExternalLink href="/faq#ea6ae6bd9ca645498c15cc611bc181c0">
                  Follow these steps and try again
                </ExternalLink>
              ),
              status: 'warning',
              duration: null,
            })
          } else {
            toast({
              title: 'Gitcoin Passport issue',
              description: (
                <ExternalLink href="/bug">Report a bug</ExternalLink>
              ),
              status: 'warning',
              duration: null,
            })
          }
        }
        setPassportLS(res.data)
      })
      .catch(function (error) {
        console.error(error)
      })
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
                Duplicate stamp detected.
              </ExternalLink>
              <br />
              {passportLS?.fraud
                ? `Switch back to ${shortenAddress(passportLS?.fraud)}`
                : null}
            </Text>
          </Box>
        ) : (
          <Text fontSize="2xl">
            <>
              {numberOfStampsLeftToCollect > 0 ? (
                <>
                  {`Visit `}
                  <ExternalLink href="https://passport.gitcoin.co/">
                    <Button variant="primary">Gitcoin Passport</Button>
                  </ExternalLink>
                  {` and collect ${numberOfStampsLeftToCollect} more of the following stamp${
                    numberOfStampsLeftToCollect !== 1 ? 's' : ''
                  }:`}
                </>
              ) : (
                'You have collected enough stamps. You can now close this popup and claim your rewards.'
              )}
            </>
          </Text>
        )}
      </Box>
      <GitcoinPassport
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
          Refresh
        </Button>
      </Box>
    </>
  )
}

export default PassportComponent
