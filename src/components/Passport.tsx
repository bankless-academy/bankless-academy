/* eslint-disable no-console */
import React, { useState } from 'react'
import { Box, Text, Link, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useLocalStorage } from 'usehooks-ts'

import { useActiveWeb3React } from 'hooks'
import GitcoinPassport from 'components/GitcoinPassport'
import { NUMBER_OF_STAMP_REQUIRED, EMPTY_PASSPORT } from 'constants/passport'

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

  const numberOfStampsLeftToCollect =
    NUMBER_OF_STAMP_REQUIRED - passportLS.validStampsCount

  return (
    <>
      <Box mb={6}>
        {passportLS.verified === false && passportLS?.fraud && (
          <p style={{ color: 'red' }}>{passportLS?.fraud}</p>
        )}
        <Text fontSize="2xl">
          <>
            {`Visit `}
            <Link href="https://passport.gitcoin.co/" target="_blank">
              Gitcoin Passport
            </Link>
            {` and collect ${
              numberOfStampsLeftToCollect >= 1 ? numberOfStampsLeftToCollect : 0
            } more stamp${numberOfStampsLeftToCollect !== 1 ? 's' : ''}:`}
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
