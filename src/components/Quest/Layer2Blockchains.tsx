import React, { useState, useEffect } from 'react'
import { Box, Spinner, Button, VStack, Image, Text } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

import { StyledLessonCard } from 'components/LessonCard'
import { theme } from 'theme/index'
import { api } from 'utils'
import { useSmallScreen } from 'hooks'
import InternalLink from 'components/InternalLink'
import { LESSONS } from 'constants/index'

const Layer2Blockchains = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isSmallScreen] = useSmallScreen()
  const [isTransactionVerified, setIsTransactionVerified] = useState(
    localStorage.getItem('quest-layer-2-blockchains') || 'false'
  )
  const [isLoading, setIsLoading] = useState(false)

  const validateQuest = async () => {
    try {
      setIsLoading(true)
      const result = await api('/api/validate-quest', {
        address: account,
        quest: 'Layer2Blockchains',
      })
      setIsLoading(false)
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

  const lesson = LESSONS.find(
    (lesson) => lesson.slug === 'funding-a-wallet-on-layer-2'
  )

  if (!lesson)
    return {
      isQuestCompleted: false,
      questComponent: <>missing handbook</>,
    }

  return {
    isQuestCompleted: isTransactionVerified === 'true',
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
            <Box ml="8">
              <Text mx="0 !important" fontSize="xl" fontWeight="bold">
                {`Begin your L2 journey on the Optimism Network.`}
              </Text>
              <VStack mt="8" alignItems="start">
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
                {/* TODO: add step later */}
                {/* <Button
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
                  {'2. Switch to Optimism Network on Bankless Academy'}
                </Button> */}
                <Button
                  cursor="default"
                  whiteSpace="break-spaces"
                  rightIcon={
                    isTransactionVerified === 'true' ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : isLoading ? (
                      <Spinner speed="1s" />
                    ) : (
                      <CloseIcon color={theme.colors.incorrect} />
                    )
                  }
                >
                  {
                    '2. Hold a balance of at least 0.001 ETH on Optimism Network'
                  }
                </Button>
              </VStack>
              <Box mt="8">
                {`Tip: Check our Explorer's Handbook entry on 'How to Fund a Wallet on Layer 2' to find the best funding pathway for you.`}
              </Box>
              {isTransactionVerified !== 'true' && (
                <Box mt="24px !important" textAlign="center">
                  <Button onClick={validateQuest} variant="primary">
                    {'Check Quest'}
                  </Button>
                </Box>
              )}
            </Box>
          </div>
          <div className="bloc2">
            <StyledLessonCard
              borderRadius="3xl"
              maxW="400px"
              textAlign="center"
              m="auto"
            >
              <Box zIndex="2" position="relative">
                <Box py="8">
                  <Text mt="0 !important" fontSize="xl" fontWeight="bold">
                    {lesson.name}
                  </Text>
                  <InternalLink
                    href={`/lessons/${lesson.slug}`}
                    alt={lesson.englishName}
                    target="_blank"
                  >
                    <Image src={lesson.lessonImageLink} />
                  </InternalLink>
                </Box>
                <Box pb="8">
                  <InternalLink
                    href={`/lessons/${lesson.slug}`}
                    alt={lesson.englishName}
                    target="_blank"
                  >
                    <Button variant="primary">{'Read Entry'}</Button>
                  </InternalLink>
                </Box>
              </Box>
            </StyledLessonCard>
          </div>
        </Box>
      </>
    ),
  }
}

export default Layer2Blockchains
