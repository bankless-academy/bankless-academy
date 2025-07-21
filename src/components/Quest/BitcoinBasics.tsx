import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Image,
  InputLeftAddon,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'
import { StyledLessonCard } from 'components/LessonCard'
import { Simulation } from 'components/Animation'

const Player = dynamic(
  () =>
    import('@lottiefiles/react-lottie-player').then((mod) => ({
      default: mod.Player,
    })),
  { ssr: false }
)

const DEFAULT_ANSWERS = ['1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3', '0']
const CORRECT_ANSWERS = ['1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', '0.02']

const BitcoinBasics = () => {
  const { t } = useTranslation('quests', { keyPrefix: 'BitcoinBasics' })
  // HACK: or else translation is skipped...
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t: tl } = useTranslation('lesson')
  const [isSmallScreen] = useSmallScreen()
  const [hasSimulationRun, setHasSimulationRun] = useState(false)
  const [animationStep, setAnimationStep] = useState(null)
  const initalAnswers = JSON.parse(
    localStorage.getItem('quest-bitcoin-basics')
  ) || ['', '']
  const [toAddress, setToAddress] = useState(
    initalAnswers[0] === DEFAULT_ANSWERS[0] ? '' : initalAnswers[0]
  )
  const [amount, setAmount] = useState(
    initalAnswers[1] === DEFAULT_ANSWERS[1] ? '' : initalAnswers[1]
  )
  const [selected, setSelected] = useState(
    localStorage.getItem('quest-bitcoin-basics') !== null
      ? JSON.parse(localStorage.getItem('quest-bitcoin-basics'))
      : DEFAULT_ANSWERS
  )

  const numericAmount = parseFloat(selected[1]?.replace(',', '.') || 5)
  const areAnswersCorrect =
    selected[0]?.toLowerCase() === CORRECT_ANSWERS[0]?.toLowerCase() &&
    numericAmount > 0 &&
    numericAmount <= parseFloat(CORRECT_ANSWERS[1])
  localStorage.setItem('quest-bitcoin-basics', JSON.stringify(selected))

  const animationSteps = [
    t('1. Your Bitcoin is on its way to Satoshi Nakamoto.'),
    t("2. It's now being verified by network miners..."),
    t('3. Your transaction is added to the blockchain "database"...'),
    t('4. Satoshi Nakamoto has received your Bitcoin!'),
  ]

  const validateQuest = () => {
    setHasSimulationRun(true)
    localStorage.setItem('quest-bitcoin-basics', JSON.stringify(selected))
    setSelected([toAddress, amount])
  }

  useEffect(() => {
    if (hasSimulationRun && areAnswersCorrect) {
      setAnimationStep(1)
    }
  }, [areAnswersCorrect, hasSimulationRun])

  useEffect(() => {
    if (areAnswersCorrect) {
      setAnimationStep(animationSteps.length)
    }
  }, [])

  const quesComponent = (
    <Box display={isSmallScreen ? 'block' : 'flex'} maxW="100%" minH="inherit">
      <div className="bloc1" style={{ alignSelf: 'center' }}>
        <Box m="4">
          <Text mx="0 !important" fontSize="xl">
            <div
              dangerouslySetInnerHTML={{
                __html: `${t(
                  "Using our simplified Bitcoin simulator, send any amount of BTC to Satoshi Nakamoto's address"
                )}: `,
              }}
            />
            <strong>{`1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`}</strong>
          </Text>
        </Box>
      </div>
      <div className="bloc2" style={{ alignSelf: 'center' }}>
        <Simulation
          title={t(
            'Interactive Simulation: Sending Bitcoin to Satoshi Nakamoto {{step}}',
            {
              step: animationStep
                ? `(${animationStep}/${animationSteps.length})`
                : '',
            }
          )}
        >
          <Box
            m="10px"
            display="block"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
          >
            {animationStep ? (
              <>
                <Player
                  autoplay={true}
                  loop={false}
                  keepLastFrame={true}
                  controls={false}
                  src={`/animations/bitcoin/step-${animationStep}.json`}
                  style={{ height: '400px', width: '400px' }}
                  onEvent={(event) => {
                    if (event === 'complete') {
                      if (animationStep < animationSteps.length)
                        setAnimationStep(animationStep + 1)
                    }
                  }}
                />

                <Text fontSize="xl">{animationSteps[animationStep - 1]}</Text>
                {animationStep === animationSteps.length && (
                  <Box textAlign="center" mt="4">
                    <Button
                      onClick={() => {
                        setHasSimulationRun(false)
                        setSelected([])
                        setToAddress('')
                        setAmount('')
                        setAnimationStep(null)
                      }}
                      variant="secondary"
                      fontWeight="bold"
                    >
                      {t('Reset simulation')}
                    </Button>
                  </Box>
                )}
              </>
            ) : (
              <StyledLessonCard
                borderRadius="3xl"
                maxW={isSmallScreen ? '100%' : '500px'}
                textAlign="center"
                m="50px auto"
                p={8}
              >
                <Box zIndex="2" position="relative" m="12px 0">
                  <Text fontWeight="bold" textAlign="left" m="0 !important">
                    {t('Recipient')}
                  </Text>
                  <InputGroup size={isSmallScreen ? 'md' : 'lg'}>
                    <InputLeftAddon
                      maxW="64px"
                      padding={isSmallScreen ? '6px' : '0 16'}
                    >
                      <Image
                        w={isSmallScreen ? '26px !important' : '30px'}
                        h={isSmallScreen ? '26px !important' : '30px'}
                        borderRadius="50%"
                        src="/images/explorer_avatar.png"
                      />
                    </InputLeftAddon>
                    <Input
                      placeholder={t('Address')}
                      value={toAddress}
                      mb="8"
                      onChange={(e): void => {
                        setToAddress(e.target.value)
                      }}
                    />
                    <InputRightElement>
                      {!hasSimulationRun ? null : toAddress?.toLowerCase() ===
                        CORRECT_ANSWERS[0]?.toLowerCase() ? (
                        <CheckIcon color={theme.colors.correct} />
                      ) : (
                        <CloseIcon color={theme.colors.incorrect} />
                      )}
                    </InputRightElement>
                  </InputGroup>
                  <Text fontWeight="bold" textAlign="left" m="0 !important">
                    {t('Asset')}
                  </Text>
                  <Box display="flex" justifyContent="space-between">
                    <Box
                      display="flex"
                      alignItems="center"
                      minW="fit-content"
                      mr="2"
                    >
                      <Box maxW="30px">
                        <Image
                          w={isSmallScreen ? '26px !important' : '30px'}
                          h={isSmallScreen ? '26px !important' : '30px'}
                          borderRadius="50%"
                          src="/images/bitcoin.png"
                        />
                      </Box>
                      <Box ml="1">BTC</Box>
                    </Box>
                    <InputGroup maxW="200px" size={isSmallScreen ? 'md' : 'lg'}>
                      <Input
                        placeholder={t('Amount')}
                        value={amount}
                        onChange={(e): void => {
                          setAmount(e.target.value)
                        }}
                      />
                      <InputRightElement>
                        {!hasSimulationRun ? null : numericAmount > 0 &&
                          numericAmount <= parseFloat(CORRECT_ANSWERS[1]) ? (
                          <CheckIcon color={theme.colors.correct} />
                        ) : (
                          <CloseIcon color={theme.colors.incorrect} />
                        )}
                      </InputRightElement>
                    </InputGroup>
                  </Box>
                  <Text textAlign="left" m="0 !important">
                    {t(`Balance`)}: {CORRECT_ANSWERS[1]}
                  </Text>
                  {areAnswersCorrect !== true && (
                    <Box mt="36px !important" textAlign="center">
                      <Button
                        width="full"
                        onClick={validateQuest}
                        variant="primary"
                        fontWeight="bold"
                      >
                        {t('Send')}
                      </Button>
                    </Box>
                  )}
                </Box>
              </StyledLessonCard>
            )}
          </Box>
        </Simulation>
      </div>
    </Box>
  )

  return quesComponent
}

// Factory function for quest system
export const getBitcoinBasicsQuest = () => {
  const storedAnswers = JSON.parse(
    localStorage.getItem('quest-bitcoin-basics') || 'null'
  )
  const selected = storedAnswers || DEFAULT_ANSWERS
  const numericAmount = parseFloat(selected[1]?.replace(',', '.') || 5)
  const areAnswersCorrect =
    selected[0]?.toLowerCase() === CORRECT_ANSWERS[0]?.toLowerCase() &&
    numericAmount > 0 &&
    numericAmount <= parseFloat(CORRECT_ANSWERS[1])

  return {
    isQuestCompleted: areAnswersCorrect,
    questComponent: <BitcoinBasics />,
  }
}

export default BitcoinBasics
