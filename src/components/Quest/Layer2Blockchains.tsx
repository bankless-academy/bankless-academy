import React, { useState, useEffect } from 'react'
import { Box, Spinner, Button, VStack } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

import ExternalLink from 'components/ExternalLink'
import { theme } from 'theme/index'
import { api } from 'utils'

const Layer2Blockchains = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isTransactionVerified, setIsTransactionVerified] = useState(
    localStorage.getItem('quest-layer-2-blockchains')
  )

  const validateQuest = async () => {
    try {
      setIsTransactionVerified('loading')
      const result = await api('/api/validate-quest', {
        address: account,
        quest: 'Layer2Blockchains',
      })
      if (result && result.status === 200) {
        setIsTransactionVerified(result?.data?.isQuestValidated?.toString())
        localStorage.setItem(
          'quest-layer-2-blockchains',
          result?.data?.isQuestValidated
        )
      } else {
        // TODO: handle errors
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (account) validateQuest()
  }, [account])

  return {
    isQuestCompleted: isTransactionVerified === 'true',
    questComponent: (
      <>
        <Box>
          <h2>{`Get ready to interact with Layer 2 blockchains.`}</h2>
          <VStack mt="8">
            <Button
              cursor="default"
              whiteSpace="break-spaces"
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
              whiteSpace="break-spaces"
              rightIcon={
                isTransactionVerified === 'true' ? (
                  <CheckIcon color={theme.colors.correct} />
                ) : isTransactionVerified === 'loading' ? (
                  <Spinner speed="1s" />
                ) : (
                  <CloseIcon color={theme.colors.incorrect} />
                )
              }
            >
              {'2. Account has at least 0.001 ETH on Optimism network.'}
            </Button>
          </VStack>
          <Box mt="8">
            {'Follow our '}
            <ExternalLink
              href="https://gm.xyz/c/BanklessAcademy?utm_source=BanklessAcademy&utm_medium=website&utm_campaign=GM-lesson"
              ml="1"
            >
              How to Fund a Wallet on Layer 2
            </ExternalLink>
            {
              ' tutorial to find out how to best onboard to get ETH into your wallet.'
            }
          </Box>
          <Box mt="24px !important" textAlign="center">
            <Button
              colorScheme={isTransactionVerified === 'true' ? 'green' : 'red'}
              onClick={validateQuest}
              variant="primary"
            >
              Refresh balance
            </Button>
          </Box>
        </Box>
      </>
    ),
  }
}

export default Layer2Blockchains
