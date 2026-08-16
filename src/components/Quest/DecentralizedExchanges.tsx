import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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
import { LESSONS } from 'constants/index'
import InternalLink from 'components/InternalLink'
import OnrampButton from 'components/OnrampButton'
import BridgeButton from 'components/BridgeButton'

const DecentralizedExchanges = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { t } = useTranslation('quests', {
    keyPrefix: 'DecentralizedExchanges',
  })
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
          // if tx contains a URL, just keep the tx hash
          // Sharing a link from a mobile explorer app routinely appends a
          // trailing slash, and `pop()` on that returns an empty string.
          tx: tx?.includes('/')
            ? tx.split('/').filter(Boolean).pop()
            : tx,
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
              {t('1. Load ')}
              <ExternalLink href="https://velodrome.finance/swap?from=eth&to=0x4200000000000000000000000000000000000042">
                Velodrome
              </ExternalLink>
              {t(' on the ')}
              <Image
                alt="Optimism"
                src="/images/op.svg"
                display="inline-flex"
                height="24px"
                m="0px 5px -5px 0"
              />
              <b>{t('Optimism network')}</b>
              {'.'}
            </p>
            <p>{t('2. Swap any token.')}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: t(
                  '3. Paste the successful <b>swap</b> transaction hash below:'
                ),
              }}
            />
            {/* 14.4px aligns the field with the numbered steps above, but on a
                phone that is width taken from an input holding a 66-character
                hash, and there is no second column to align against. */}
            <InputGroup
              maxW="530px"
              ml={isSmallScreen ? '0' : '14.4px'}
              size={isSmallScreen ? 'lg' : 'md'}
            >
              <Input
                placeholder="0x..."
                value={tx}
                mb="4"
                // This value always arrives by paste from a wallet or explorer
                // in another app, which is exactly where a stray space or a
                // mobile autocorrect comes from. Either one fails validation
                // with a red cross and nothing on screen explaining why.
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                onChange={(e): void => {
                  const value = e.target.value.trim()
                  setTx(value)
                  localStorage.setItem(
                    'quest-decentralized-exchanges-tx',
                    value
                  )
                  validateQuest(value)
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
            <Box ml={isSmallScreen ? '0' : '14.4px'} mt="2" mb="4">
              <b>{t('Resources:')}</b>
              {/* left-aligned with the numbered steps and the hash input above;
                  centering these read as a detached second block */}
              {/* Grid, not flex: two equal columns give the pair the same width
                  whatever the labels are, which shrink-to-fit never did
                  ("Bridge" against "Add funds", and worse in languages that run
                  longer). Capped at the input's 530px so they line up with the
                  hash field above instead of sprawling. */}
              <Box
                display="grid"
                gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
                maxW="530px"
                gap="4"
                mt="4"
              >
                <BridgeButton border="2px solid white" address={account} />
                <OnrampButton border="2px solid white" address={account} />
              </Box>
            </Box>
            {isTransactionVerified === 'false' && tx && tx?.length !== 0 && (
              <Box
                mb="4"
                dangerouslySetInnerHTML={{
                  __html: t(
                    '<b>Tip:</b> Make sure you paste the <b>swap</b> transaction hash done on <b>Optimism network</b> and not the token approval transaction hash. Read the explorer handbook article for more information.'
                  ),
                }}
              />
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
                {/* Half the padding on mobile. On desktop this card is a side
                    column that costs nothing; stacked under the form on a
                    phone it is the tallest thing on the slide, for a secondary
                    "go read the handbook" link. */}
                <Box py={isSmallScreen ? '4' : '8'}>
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
                <Box pb={isSmallScreen ? '4' : '8'}>
                  <InternalLink
                    href={`/lessons/${lesson.slug}`}
                    alt={lesson.englishName}
                    target="_blank"
                  >
                    <Button variant="primary">{t('Read Entry')}</Button>
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
