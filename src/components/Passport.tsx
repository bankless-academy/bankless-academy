/* eslint-disable no-console */
import React, { useState } from 'react'
import { Box, Text, Icon, Link, Button } from '@chakra-ui/react'
import { X, CircleWavyCheck } from 'phosphor-react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'

import { useActiveWeb3React } from 'hooks'
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
  const [isLoading, setIsLoading] = useState(false)
  const { account } = useActiveWeb3React()

  async function checkPassport() {
    setIsLoading(true)
    axios
      .get(`/api/passport?address=${account}`)
      .then(function (res) {
        setIsLoading(false)
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
          <>
            {`Visit `}
            {passportLS.verified === false && passportLS?.fraud && (
              <p>
                {KoIcon}
                <br />
                {passportLS?.fraud}
              </p>
            )}
            <Link href="https://passport.gitcoin.co/" target="_blank">
              Gitcoin Passport
            </Link>
            {` and collect ${
              NUMBER_OF_STAMP_REQUIRED - passportLS.validStampsCount
            } more stamps:`}
          </>
        </Text>
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
