import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Input,
  Box,
  InputRightElement,
  InputGroup,
  Spinner,
  Image,
  Stack,
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
  const { t } = useTranslation('quests', { keyPrefix: 'DEXAggregators' })
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

  const helperTitle = t('How to swap tokens with 1inch')

  return {
    isQuestCompleted: isTransactionVerified === 'true',
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
            {/* One padded container, normal-flow children: the padding is the
                only gutter, so a width:100% InputGroup can never escape the
                column (the slide's global `p { margin: 0.8em }` is defeated
                per-Text, the codebase convention for quest layouts). */}
            <Stack spacing="5" px="0.8em">
              <Text m="0 !important">
                {t('1. Load ')}
                <ExternalLink href="https://1inch.com/swap?src=8453:USDC">
                  1inch
                </ExternalLink>
                {t(' on the ')}
                <Image
                  alt="Base"
                  src="/images/base.svg"
                  display="inline-flex"
                  height="24px"
                  me="5px"
                  mb="-5px"
                />
                <b>{t('Base network')}</b>
                {'.'}
              </Text>
              <Text m="0 !important">{t('2. Swap any token.')}</Text>
              <Text
                m="0 !important"
                dangerouslySetInnerHTML={{
                  __html: t(
                    '3. Paste the successful <b>swap</b> transaction hash below:'
                  ),
                }}
              />
              <InputGroup>
                <Input
                  placeholder="0x..."
                  dir="ltr"
                  value={tx}
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
                <Box
                  dangerouslySetInnerHTML={{
                    __html: t(
                      '<b>Tip:</b> 🚨 Make sure you paste the <b>swap</b> transaction hash done on <b>Base network</b> and not the token <b>approval</b> transaction hash.'
                    ),
                  }}
                />
              )}
            </Stack>
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
                      {t('Read documentation')}
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
