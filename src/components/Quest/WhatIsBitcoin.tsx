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
import { Player } from '@lottiefiles/react-lottie-player'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'

import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks'
import { LessonCard } from 'components/LessonCards'

const DEFAULT_ANSWERS = ['1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3', '0']
const CORRECT_ANSWERS = ['1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', '0.00000001']

const WhatIsBitcoin = ({ test }: { test?: boolean }): any => {
  const { t } = useTranslation('quests', { keyPrefix: 'WhatIsBitcoin' })
  const [isSmallScreen] = useSmallScreen()
  const [hasSimulationRun, setHasSimulationRun] = useState(false)
  const [animationStep, setAnimationStep] = useState(null)
  const initalAnswers = JSON.parse(
    localStorage.getItem('quest-what-is-bitcoin')
  ) || ['', '']
  const [toAddress, setToAddress] = useState(
    initalAnswers[0] === DEFAULT_ANSWERS[0] ? '' : initalAnswers[0]
  )
  const [amount, setAmount] = useState(
    initalAnswers[1] === DEFAULT_ANSWERS[1] ? '' : initalAnswers[1]
  )
  const [selected, setSelected] = useState(
    localStorage.getItem('quest-what-is-bitcoin') !== null
      ? JSON.parse(localStorage.getItem('quest-what-is-bitcoin'))
      : DEFAULT_ANSWERS
  )

  const areAnswersCorrect =
    JSON.stringify(selected) === JSON.stringify(CORRECT_ANSWERS)
  localStorage.setItem('quest-what-is-bitcoin', JSON.stringify(selected))

  // TODO: add translation
  const animationSteps = [
    'Your transaction is being submitted to the network ...',
    'step 2 ...',
    'step 3 ...',
  ]

  function animation(step) {
    setTimeout(
      (step) => {
        setAnimationStep(step)
        if (step < animationSteps.length) animation(step + 1)
      },
      3000,
      step
    )
  }

  const validateQuest = () => {
    setHasSimulationRun(true)
    localStorage.setItem('quest-what-is-bitcoin', JSON.stringify(selected))
    setSelected([toAddress, amount])
  }

  useEffect(() => {
    if (hasSimulationRun && areAnswersCorrect) {
      setAnimationStep(1)
      animation(2)
    }
  }, [areAnswersCorrect, hasSimulationRun])

  useEffect(() => {
    if (areAnswersCorrect) {
      setAnimationStep(animationSteps.length)
    }
  }, [])

  const quesComponent = (
    <Box display={isSmallScreen ? 'block' : 'flex'}>
      <div className="bloc1">
        <Box ml="8">
          <Text mx="0 !important" fontSize="xl">
            <div
              dangerouslySetInnerHTML={{
                __html: `${t(
                  'Using our Bitcoin simulator, send <strong>0.00000001</strong> BTC to Satoshi Nakamoto’s address'
                )}: `,
              }}
            />
            <strong>{`1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa`}</strong>
          </Text>
        </Box>
      </div>
      <div className="bloc2">
        {animationStep ? (
          <Box>
            <Player
              autoplay={true}
              loop={false}
              keepLastFrame={true}
              controls={false}
              src={`/lotties/bitcoin_step${animationStep}.json`}
              style={{ height: '250px', width: '250px' }}
            />
            <Box>{animationSteps[animationStep - 1]}</Box>
            {animationStep === animationSteps.length && (
              <Box>
                <Button
                  width="full"
                  onClick={() => {
                    setHasSimulationRun(false)
                    setSelected([])
                    setToAddress('')
                    setAmount('')
                    setAnimationStep(null)
                  }}
                  variant="primary"
                  fontWeight="bold"
                >
                  {'Redo'}
                </Button>
              </Box>
            )}
          </Box>
        ) : (
          <LessonCard
            borderRadius="3xl"
            maxW="500px"
            textAlign="center"
            m="auto"
            p={8}
          >
            <Box zIndex="2" position="relative">
              <Text fontWeight="bold" textAlign="left">
                Recipient
              </Text>
              <InputGroup maxW="450px" size="lg">
                <InputLeftAddon>
                  <Image
                    w="30px"
                    h="30px"
                    borderRadius="50%"
                    src="/images/explorer_avatar.png"
                  />
                </InputLeftAddon>
                <Input
                  placeholder={DEFAULT_ANSWERS[0]}
                  value={toAddress}
                  mb="8"
                  onChange={(e): void => {
                    setToAddress(e.target.value)
                  }}
                />
                <InputRightElement>
                  {!hasSimulationRun ? null : toAddress ===
                    CORRECT_ANSWERS[0] ? (
                    <CheckIcon color={theme.colors.correct} />
                  ) : (
                    <CloseIcon color={theme.colors.incorrect} />
                  )}
                </InputRightElement>
              </InputGroup>
              <Text fontWeight="bold" textAlign="left">
                Asset
              </Text>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                  <Box>
                    <Image
                      w="30px"
                      h="30px"
                      borderRadius="50%"
                      src="/images/bitcoin.png"
                    />
                  </Box>
                  <Box ml="1">BTC</Box>
                </Box>
                <InputGroup maxW="200px" size="lg">
                  <Input
                    placeholder={DEFAULT_ANSWERS[1]}
                    value={amount}
                    onChange={(e): void => {
                      setAmount(e.target.value)
                    }}
                  />
                  <InputRightElement>
                    {!hasSimulationRun ? null : amount ===
                      CORRECT_ANSWERS[1] ? (
                      <CheckIcon color={theme.colors.correct} />
                    ) : (
                      <CloseIcon color={theme.colors.incorrect} />
                    )}
                  </InputRightElement>
                </InputGroup>
              </Box>
              <Text textAlign="left">Balance: 0.0005</Text>
              {areAnswersCorrect !== true && (
                <Box mt="24px !important" textAlign="center">
                  <Button
                    width="full"
                    onClick={validateQuest}
                    variant="primary"
                    fontWeight="bold"
                  >
                    {'Send'}
                  </Button>
                </Box>
              )}
            </Box>
          </LessonCard>
        )}
      </div>
    </Box>
  )

  if (test) return quesComponent

  return {
    isQuestCompleted:
      areAnswersCorrect && animationStep === animationSteps.length,
    questComponent: quesComponent,
  }
}

export default WhatIsBitcoin
