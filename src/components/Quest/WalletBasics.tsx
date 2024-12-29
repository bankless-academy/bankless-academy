import React from 'react'
import { Box, Button, VStack, Image, Text } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

import { StyledLessonCard } from 'components/LessonCard'
import ExternalLink from 'components/ExternalLink'
import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'
import { LESSONS } from 'constants/index'
import InternalLink from 'components/InternalLink'

const WalletBasics = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { t } = useTranslation('quests', { keyPrefix: 'WalletBasics' })
  const { t: tl } = useTranslation('lesson')
  const [isSmallScreen] = useSmallScreen()

  const lesson = LESSONS.find(
    (lesson) => lesson.slug === 'creating-a-crypto-wallet'
  )

  if (!lesson)
    return {
      isQuestCompleted: false,
      questComponent: <>missing handbook</>,
    }

  return {
    isQuestCompleted: !!account,
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1" style={{ alignSelf: 'center' }}>
            <Box m="4">
              <Text mx="0 !important" fontSize="xl" fontWeight="bold">
                {t(`Create your first crypto wallet, with Zerion.`)}
              </Text>
              <VStack mt="8" alignItems="start">
                <Button cursor="default" textAlign="start" height="fit-content">
                  <Box
                    padding="10px 0"
                    whiteSpace="break-spaces"
                    lineHeight="1.5em"
                  >
                    {t('1. Download and install the Zerion wallet from ')}
                    <ExternalLink href="https://link.zerion.io/referral?code=H9C9AZOTA">
                      zerion.io
                    </ExternalLink>
                  </Box>
                </Button>
                <Box m="0 8px 8px 16px">
                  {t('If you already have a wallet, move to step 2.')}
                </Box>
                <Button
                  cursor="default"
                  textAlign="start"
                  height="fit-content"
                  rightIcon={
                    account ? <CheckIcon color={theme.colors.correct} /> : null
                  }
                >
                  <Box
                    padding="10px 0"
                    whiteSpace="break-spaces"
                    lineHeight="1.5em"
                  >
                    {t('2. Connect your wallet to Bankless Academy')}
                  </Box>
                </Button>
              </VStack>
              <Box mt="8">
                {t('Tip')}
                {`: `}
                {t(
                  "Check our Explorer's Handbook entry on '{{lesson_title}}' for a step-by-step walkthrough of the quest.",
                  {
                    lesson_title: tl(lesson.englishName),
                    interpolation: { escapeValue: false },
                  }
                )}
              </Box>
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
                    {tl(lesson.englishName)}
                  </Text>
                  <InternalLink
                    href={`/lessons/${lesson.slug}`}
                    alt={tl(lesson.englishName)}
                    target="_blank"
                  >
                    <Image src={lesson.lessonImageLink} />
                  </InternalLink>
                </Box>
                <Box pb="8">
                  <InternalLink
                    href={`/lessons/${lesson.slug}`}
                    alt={tl(lesson.englishName)}
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

export default WalletBasics
