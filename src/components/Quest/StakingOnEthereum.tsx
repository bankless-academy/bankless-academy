import React, { useState, useEffect } from 'react'
import { Box, Spinner, Button, VStack, Image, Text } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

import { StyledLessonCard } from 'components/LessonCard'
import { theme } from 'theme/index'
import { api } from 'utils/index'
import { useSmallScreen } from 'hooks/index'
import InternalLink from 'components/InternalLink'
import { LESSONS } from 'constants/index'
import ExternalLink from 'components/ExternalLink'

const StakingOnEthereum = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isSmallScreen] = useSmallScreen()
  const [isTransactionVerified, setIsTransactionVerified] = useState(
    localStorage.getItem('quest-staking-on-ethereum') || 'false'
  )
  const [isLoading, setIsLoading] = useState(false)

  const validateQuest = async () => {
    try {
      setIsLoading(true)
      const result = await api('/api/validate-quest', {
        address: account,
        quest: 'StakingOnEthereum',
      })
      setIsLoading(false)
      if (result && result.status === 200) {
        setIsTransactionVerified(result?.data?.isQuestValidated?.toString())
        localStorage.setItem(
          'quest-staking-on-ethereum',
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

  const lesson = LESSONS.find((lesson) => lesson.slug === 'staking-ether')

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
          <div className="bloc1" style={{ alignSelf: 'center' }}>
            <Box m="4">
              <Text mx="0 !important" fontSize="xl" fontWeight="bold">
                {`Begin your staking journey with Rocket Pool.`}
              </Text>
              <VStack mt="8" alignItems="start">
                {/* <Button
                  cursor="default"
                  textAlign="start"
                  height="fit-content"
                  rightIcon={
                    account ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : (
                      <Spinner size="sm" speed="1s" />
                    )
                  }
                >
                  <Box
                    padding="10px 0"
                    whiteSpace="break-spaces"
                    lineHeight="1.5em"
                  >
                    {'1. Connect your wallet to Bankless Academy.'}
                  </Box>
                </Button> */}
                <Button
                  cursor="default"
                  textAlign="start"
                  height="fit-content"
                  rightIcon={
                    isTransactionVerified === 'true' ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : isLoading ? (
                      <Spinner size="sm" speed="1s" />
                    ) : (
                      <CloseIcon color={theme.colors.incorrect} />
                    )
                  }
                >
                  <Box
                    padding="10px 0"
                    whiteSpace="break-spaces"
                    lineHeight="1.5em"
                  >
                    {'Obtain 0.0002 rETH on any supported network*.'}
                    <Box ml="2">
                      {'a) Visit a '}
                      <ExternalLink href="https://app.uniswap.org/explore/tokens/base/0xb6fe221fe9eef5aba221c348ba20a1bf5e73624c">
                        Decentralized Exchange
                      </ExternalLink>
                      {' to swap for rETH (Optimism or Base recommended)'}
                      <br />
                      {'b) Or mint rETH on Mainnet via '}
                      <ExternalLink href="https://stake.rocketpool.net/">
                        Rocket Pool
                      </ExternalLink>
                      {' (0.01 ETH minimum)'}
                    </Box>
                  </Box>
                </Button>
              </VStack>
              <Box mt="8">
                {`Tip: Check our Explorer's Handbook entry '${lesson.name}' to find the best funding pathway for you.`}
              </Box>
              <Box mt="8">
                * Supported networks: Ethereum, Optimism, Base, Arbitrum and
                Polygon (POS)
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
          <div className="bloc2" style={{ alignSelf: 'center' }}>
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

export default StakingOnEthereum
