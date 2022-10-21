import React, { useState, useEffect } from 'react'
import { Box, VStack, Button, Spinner, Link } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import axios from 'axios'

import { theme } from 'theme/index'

const AcademyCommunity = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [hasUserJoinedGM, setHasUserJoinedGM] = useState(false)
  const [hasUserJoinedBA, setHasUserJoinedBA] = useState(false)
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  useEffect(() => {
    verifyQuest()
  }, [account])

  const verifyQuest = async () => {
    if (account) {
      axios
        .get(`https://api.gm.xyz/api/users/${account.toLowerCase()}`)
        .then(function (res) {
          setHasUserJoinedGM(true)
          if (res.data.username)
            axios
              .get(
                `https://api.gm.xyz/api/users/${res.data.username}/communities?page=0&count=100`
              )
              .then(function (res) {
                // Bankless Academy uuid = 42bc3917-6fae-4b43-b3c2-467e72e0f666
                setHasUserJoinedBA(
                  res.data.some(
                    (community) =>
                      community.uuid === '42bc3917-6fae-4b43-b3c2-467e72e0f666'
                  )
                )
              })
              .catch(function (error) {
                console.error(error)
              })
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }

  const isQuestCompleted = account && hasUserJoinedGM && hasUserJoinedBA

  return {
    isQuestCompleted: isQuestCompleted,
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
            <Box>
              <VStack mt="20">
                <Button
                  cursor="default"
                  rightIcon={
                    account ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : (
                      <Spinner speed="1s" />
                    )
                  }
                >
                  {'1. Connect your wallet to Bankless Academy'}
                </Button>
                <Button
                  cursor="default"
                  rightIcon={
                    hasUserJoinedGM ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : (
                      <Spinner speed="1s" />
                    )
                  }
                >
                  {'2. Join '}
                  <Link
                    href="https://gm.xyz/?utm_source=BanklessAcademy&utm_medium=website&utm_campaign=GM-lesson"
                    target="_blank"
                    ml="1"
                  >
                    gm.xyz
                  </Link>
                </Button>
                <Button
                  cursor="default"
                  rightIcon={
                    hasUserJoinedBA ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : (
                      <Spinner speed="1s" />
                    )
                  }
                >
                  {'3. Join '}
                  <Link
                    href="https://gm.xyz/c/BanklessAcademy?utm_source=BanklessAcademy&utm_medium=website&utm_campaign=GM-lesson"
                    target="_blank"
                    ml="1"
                  >
                    gm.xyz/c/BanklessAcademy
                  </Link>
                </Button>
              </VStack>
              {!isQuestCompleted && (
                <Box mt="16" textAlign="center">
                  <Button
                    colorScheme={
                      hasUserJoinedGM && hasUserJoinedBA ? 'green' : 'red'
                    }
                    onClick={verifyQuest}
                    variant="primary"
                    ml="8"
                  >
                    Validate quest
                  </Button>
                </Box>
              )}
            </Box>
          </div>
          <div className="bloc2">
            <iframe
              src="https://www.youtube.com/embed/cImViarm4Qk?rel=0"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </>
    ),
  }
}

export default AcademyCommunity
