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
import { api } from 'utils/index'
import { StyledLessonCard } from 'components/LessonCard'
import { ArrowSquareOut } from '@phosphor-icons/react'

const DEXAggregators = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isTransactionVerified, setIsTransactionVerified] = useState(
    localStorage.getItem('quest-dex-aggregators')
  )
  const [isCheckingTx, setIsCheckingTx] = useState(false)
  const [tx, setTx] = useState(
    localStorage.getItem('quest-dex-aggregators-tx') || ''
  )
  const [isSmallScreen] = useSmallScreen()

  const validateQuest = async (tx) => {
    try {
      if (tx?.length) {
        setIsCheckingTx(true)
        const result = await api('/api/validate-quest', {
          address: account,
          quest: 'DEXAggregators',
          // if tx contains a URL, just keep the tx hash
          tx: tx?.includes('/') ? tx?.split('/')?.pop() : tx,
        })
        if (result && result.status === 200) {
          setIsCheckingTx(false)
          setIsTransactionVerified(result?.data?.isQuestValidated?.toString())
          localStorage.setItem(
            'quest-dex-aggregators',
            result?.data?.isQuestValidated
          )
        } else {
          // TODO: handle errors
        }
      } else {
        setIsTransactionVerified(null)
        localStorage.setItem('quest-dex-aggregators', null)
      }
    } catch (error) {
      console.error(error)
      setIsCheckingTx(false)
    }
  }

  useEffect(() => {
    if (account) validateQuest(tx)
  }, [account])

  const helperTitle = 'How to swap tokens with 1inch'

  return {
    isQuestCompleted: isTransactionVerified === 'true',
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
            <p>
              {'1. Load '}
              <ExternalLink href="https://1inch.com/swap?src=8453:USDC">
                1inch
              </ExternalLink>
              {' on the '}
              <Image
                alt="Base"
                src="/images/base.svg"
                display="inline-flex"
                height="24px"
                m="0px 5px -5px 0"
              />
              <b>Base network</b>
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
                    'quest-dex-aggregators-tx',
                    e.target.value
                  )
                  validateQuest(e.target.value)
                }}
              />
              <InputRightElement>
                {isCheckingTx ? (
                  <Spinner size="sm" speed="1s" color="orange" />
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
                <b>Tip:</b> 🚨 Make sure you paste the <b>swap</b> transaction
                hash done on <b>Base network</b> and not the token{' '}
                <b>approval</b> transaction hash.
              </Box>
            )}
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
                    {helperTitle}
                  </Text>
                  <ExternalLink
                    href={`https://help.1inch.com/en/articles/4585153-how-to-use-the-market-swap-on-1inch-pro-interface#h_3c9d315f17`}
                    alt={helperTitle}
                  >
                    <Image src="/images/1inch-swap-preview.jpg" />
                  </ExternalLink>
                </Box>
                <Box pb="8">
                  <ExternalLink
                    href={`https://help.1inch.com/en/articles/4585153-how-to-use-the-market-swap-on-1inch-pro-interface#h_3c9d315f17`}
                    alt={helperTitle}
                  >
                    <Button leftIcon={<ArrowSquareOut />} variant="primary">
                      Read documentation
                    </Button>
                  </ExternalLink>
                </Box>
              </Box>
            </StyledLessonCard>
          </div>
        </Box>
      </>
    ),
  }
}

export default DEXAggregators
