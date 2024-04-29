import React, { useState, useEffect } from 'react'
import {
  Input,
  Box,
  InputRightElement,
  InputGroup,
  Spinner,
  Image,
  Text,
  Button,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

import ExternalLink from 'components/ExternalLink'
import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'
import { api } from 'utils'
import { StyledLessonCard } from 'components/LessonCard'
import { LESSONS } from 'constants/index'
import InternalLink from 'components/InternalLink'

const DecentralizedExchanges = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isTransactionVerified, setIsTransactionVerified] = useState(
    localStorage.getItem('quest-decentralized-exchanges')
  )
  const [isCheckingTx, setIsCheckingTx] = useState(false)
  const [tx, setTx] = useState(
    localStorage.getItem('quest-decentralized-exchanges-tx') || ''
  )
  const [isSmallScreen] = useSmallScreen()

  const validateQuest = async (tx) => {
    try {
      if (tx?.length) {
        setIsCheckingTx(true)
        const result = await api('/api/validate-quest', {
          address: account,
          quest: 'DecentralizedExchanges',
          tx: tx
            ?.replaceAll('https://optimistic.etherscan.io/tx/', '')
            ?.replaceAll('https://blockscout.com/optimism/mainnet/tx/', ''),
        })
        if (result && result.status === 200) {
          setIsCheckingTx(false)
          setIsTransactionVerified(result?.data?.isQuestValidated?.toString())
          localStorage.setItem(
            'quest-decentralized-exchanges',
            result?.data?.isQuestValidated
          )
        } else {
          // TODO: handle errors
        }
      } else {
        setIsTransactionVerified(null)
        localStorage.setItem('quest-decentralized-exchanges', null)
      }
    } catch (error) {
      console.error(error)
      setIsCheckingTx(false)
    }
  }

  useEffect(() => {
    if (account) validateQuest(tx)
  }, [account])

  const lesson = LESSONS.find(
    (lesson) => lesson.slug === 'swapping-on-a-decentralized-exchange'
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
        <Box display={isSmallScreen ? 'block' : 'flex'} w="100%">
          <div className="bloc1">
            <p>
              {'1. Load '}
              <ExternalLink href="https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042">
                Velodrome
              </ExternalLink>
              {' on the '}
              <Image
                alt="Optimism"
                src="/images/op.svg"
                display="inline-flex"
                height="24px"
                m="0px 5px -5px 0"
              />
              <b>Optimism network</b>
              {'.'}
            </p>
            <p>{'2. Swap any token.'}</p>
            <p>
              3. Paste the successful <b>swap</b> transaction hash below:
            </p>
            <InputGroup maxW="530px">
              <Input
                placeholder="0x..."
                value={tx}
                mb="4"
                onChange={(e): void => {
                  setTx(e.target.value)
                  localStorage.setItem(
                    'quest-decentralized-exchanges-tx',
                    e.target.value
                  )
                  validateQuest(e.target.value)
                }}
              />
              <InputRightElement>
                {isCheckingTx ? (
                  <Spinner speed="1s" color="orange" />
                ) : isTransactionVerified === 'true' ? (
                  <CheckIcon color={theme.colors.correct} />
                ) : (
                  tx &&
                  tx?.length !== 0 && (
                    <CloseIcon color={theme.colors.incorrect} />
                  )
                )}
              </InputRightElement>
            </InputGroup>
            {isTransactionVerified === 'false' && tx && tx?.length !== 0 && (
              <Box mb="4">
                <b>Tip:</b> Make sure you paste the <b>swap</b> transaction hash
                done on <b>Optimism network</b> and not the token approval
                transaction hash. Read the explorer handbook article for more
                information.
              </Box>
            )}
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
                    <Button variant="primary">Read Entry</Button>
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

export default DecentralizedExchanges
