import React, { useState, useEffect } from 'react'
import { Box, VStack, Button, Spinner } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import axios from 'axios'

import ExternalLink from 'components/ExternalLink'
import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'

const AcademyCommunity = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [hasUserJoinedGM, setHasUserJoinedGM] = useState(false)
  const [hasUserJoinedBA, setHasUserJoinedBA] = useState(false)
  const [isSmallScreen] = useSmallScreen()

  useEffect(() => {
    verifyQuest()
  }, [account])

  const verifyQuest = async () => {
    if (account) {
      setHasUserJoinedGM(null)
      setHasUserJoinedBA(null)
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
          setHasUserJoinedGM(false)
          setHasUserJoinedBA(false)
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
              <VStack mt="20" alignItems="start" mr="4">
                <Button
                  cursor="default"
                  rightIcon={
                    account ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : (
                      <Spinner size="sm" speed="1s" />
                    )
                  }
                >
                  {'1. Connect your wallet to Bankless Academy'}
                </Button>
                <Button
                  cursor="default"
                  whiteSpace="break-spaces"
                  display="initial"
                  textAlign="left"
                  rightIcon={
                    hasUserJoinedGM ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : (
                      <>
                        {hasUserJoinedGM === null ? (
                          <Spinner size="sm" speed="1s" />
                        ) : (
                          <CloseIcon color={theme.colors.incorrect} />
                        )}
                      </>
                    )
                  }
                >
                  {'2. Join gm.xyz using this '}
                  <ExternalLink href="https://gm.xyz/invite/K3iot3AU7o" mx="1">
                    invite link
                  </ExternalLink>
                  {` or register with a phone number`}
                </Button>
                <Button
                  cursor="default"
                  rightIcon={
                    hasUserJoinedBA ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : (
                      <>
                        {hasUserJoinedBA === null ? (
                          <Spinner size="sm" speed="1s" />
                        ) : (
                          <CloseIcon color={theme.colors.incorrect} />
                        )}
                      </>
                    )
                  }
                >
                  {'3. Join '}
                  <ExternalLink
                    href="https://gm.xyz/c/BanklessAcademy?utm_source=BanklessAcademy&utm_medium=website&utm_campaign=GM-lesson"
                    ml="1"
                  >
                    gm.xyz/c/BanklessAcademy
                  </ExternalLink>
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
