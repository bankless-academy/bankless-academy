/* eslint-disable no-console */
import React, { useState } from 'react'
import { Box, Text, Icon, Link, Button } from '@chakra-ui/react'
import { X, CircleWavyCheck } from 'phosphor-react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'

import { useActiveWeb3React } from 'hooks'
import { IS_WHITELABEL } from 'constants/index'
import GitcoinPassport from 'components/GitcoinPassport'
import { NUMBER_OF_STAMP_REQUIRED, EMPTY_PASSPORT } from 'constants/passport'

export const OkIcon = (
  <Icon as={CircleWavyCheck} color="green" display="inline" />
)
export const KoIcon = <Icon as={X} color="red" display="inline" />

const PassportComponent = ({
  displayStamps,
}: {
  displayStamps?: boolean
}): JSX.Element => {
  const [passportLS, setPassportLS] = useLocalStorage(
    'passport',
    EMPTY_PASSPORT
  )
  const [status, setStatus] = useState('')
  const { account } = useActiveWeb3React()

  async function checkPassport() {
    setStatus('loading passport ...')
    axios
      .get(`/api/passport?address=${account}`)
      .then(function (res) {
        setStatus('')
        console.log('passport', res.data)
        setPassportLS(res.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <>
      <Box mb={6}>
        <Text fontSize="2xl">
          {'Explorer 👨‍🚀 status: '}
          {!account && '⚠️ Connect your wallet first'}
          {status === '' ? (
            <>
              {passportLS.verified === true
                ? OkIcon
                : passportLS.verified === false && (
                    <>
                      {KoIcon}
                      <br />
                      {passportLS?.fraud}
                      {passportLS.validStampsCount <
                        NUMBER_OF_STAMP_REQUIRED && (
                        <>
                          {`Go to `}
                          <Link
                            href="https://passport.gitcoin.co/"
                            target="_blank"
                          >
                            Gitcoin Passport
                          </Link>
                          {` and collect ${
                            NUMBER_OF_STAMP_REQUIRED -
                            passportLS.validStampsCount
                          } more stamps`}
                        </>
                      )}
                    </>
                  )}
            </>
          ) : (
            status
          )}
        </Text>
      </Box>
      {/* TODO: add refresh button */}
      {!IS_WHITELABEL && (
        <GitcoinPassport
          stamps={passportLS ? passportLS.stamps : null}
          displayStamps={displayStamps}
        />
      )}
      <Box textAlign="center" mb={6}>
        <Button variant="outline" onClick={() => checkPassport()}>
          Refresh Stamps
        </Button>
      </Box>
    </>
  )
}

export default PassportComponent
