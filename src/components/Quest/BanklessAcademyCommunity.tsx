import React, { useState, useEffect } from 'react'
import { Box, VStack, Button, Spinner, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { CheckIcon } from '@chakra-ui/icons'
import axios from 'axios'

import { useActiveWeb3React } from 'hooks'

const BanklessAcademyCommunity = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { account } = useActiveWeb3React()
  const router = useRouter()

  const [hasUserJoinedGM, setHasUserJoinedGM] = useState(false)
  const [hasUserJoinedBA, setHasUserJoinedBA] = useState(false)

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

  return {
    isQuestCompleted: account && hasUserJoinedGM && hasUserJoinedBA,
    questComponent: (
      <>
        <Box>
          <VStack>
            <Button
              cursor="default"
              rightIcon={
                account ? (
                  <CheckIcon color="green.500" />
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
                  <CheckIcon color="green.500" />
                ) : (
                  <Spinner speed="1s" />
                )
              }
            >
              {'2. Join '}
              <Link href="https://gm.xyz/" target="_blank" ml="1">
                gm.xyz
              </Link>
            </Button>
            <Button
              cursor="default"
              rightIcon={
                hasUserJoinedBA ? (
                  <CheckIcon color="green.500" />
                ) : (
                  <Spinner speed="1s" />
                )
              }
            >
              {'3. Join '}
              <Link
                href="https://gm.xyz/c/BanklessAcademy"
                target="_blank"
                ml="1"
              >
                gm.xyz/c/BanklessAcademy
              </Link>
            </Button>
          </VStack>
          <Box mt="16">
            <Button onClick={() => router.push('/lessons')} variant="outline">
              Skip quest
            </Button>
            <Button
              colorScheme={hasUserJoinedGM && hasUserJoinedBA ? 'green' : 'red'}
              onClick={verifyQuest}
              variant="primary"
              ml="8"
            >
              Validate quest
            </Button>
          </Box>
        </Box>
      </>
    ),
  }
}

export default BanklessAcademyCommunity
