/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { Box, Text, Icon, Link, Button } from '@chakra-ui/react'
import { X, CircleWavyCheck } from 'phosphor-react'
import axios from 'axios'

import { useActiveWeb3React } from 'hooks'
import { IS_WHITELABEL } from 'constants/index'
import GitcoinPassport from 'components/GitcoinPassport'
import { NUMBER_OF_STAMP_REQUIRED } from 'constants/passport'

export const OkIcon = (
  <Icon as={CircleWavyCheck} color="green" display="inline" />
)
export const KoIcon = <Icon as={X} color="red" display="inline" />

const PassportComponent = ({
  displayStamps,
}: {
  displayStamps?: boolean
}): JSX.Element => {
  const [passport, setPassport] = useState(null)
  const { account } = useActiveWeb3React()

  async function checkPassport() {
    axios
      .get(`/api/passport?address=${account}`)
      .then(function (res) {
        console.log('passport', res.data)
        setPassport(res.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  useEffect(() => {
    if (account) checkPassport()
    else {
      setPassport(null)
    }
  }, [account])

  return (
    <>
      <Box mb={6}>
        <Text fontSize="2xl">
          {'Explorer 👨‍🚀 status: '}
          {!account && '⚠️ Connect your wallet first'}
          {passport !== null && (
            <>
              {passport.verified === true
                ? OkIcon
                : passport.verified === false && (
                    <>
                      {KoIcon}
                      <br />
                      {passport?.requirement}
                      {passport.validStampsCount < NUMBER_OF_STAMP_REQUIRED && (
                        <>
                          {`Go to `}
                          <Link
                            href="https://passport.gitcoin.co/"
                            target="_blank"
                          >
                            Gitcoin Passport
                          </Link>
                          {` and collect ${
                            NUMBER_OF_STAMP_REQUIRED - passport.validStampsCount
                          } more stamps`}
                        </>
                      )}
                    </>
                  )}
            </>
          )}
        </Text>
      </Box>
      {/* TODO: add refresh button */}
      {!IS_WHITELABEL && (
        <GitcoinPassport
          stamps={passport ? passport.stamps : null}
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
