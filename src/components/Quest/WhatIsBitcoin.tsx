import React, { useState } from 'react'
import {
  Box,
  Button,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightElement,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

import { theme } from 'theme/index'

const StyledDiv = styled(Box)`
  img {
    display: flex;
    border-radius: 5px;
    width: 420px;
    max-width: 100%;
    cursor: pointer;
    margin-bottom: 8px;
  }
  h2 {
    text-align: center;
  }
  span {
    font-weight: normal;
    font-size: 16px;
    color: orange;
  }
`

const DEFAULT_ANSWERS = ['0', '1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3']
const CORRECT_ANSWERS = ['0.00000001', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa']

const WhatIsBitcoin = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [hasSimulationRun, setHasSimulationRun] = useState(false)
  const initalAnswers = JSON.parse(
    localStorage.getItem('quest-what-is-bitcoin')
  ) || ['', '']
  const [amount, setAmount] = useState(
    initalAnswers[0] === DEFAULT_ANSWERS[0] ? '' : initalAnswers[0]
  )
  const [toAddress, setToAddress] = useState(
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

  const validateQuest = () => {
    setHasSimulationRun(true)
    alert('Simulation in progress ...')
    localStorage.setItem('quest-what-is-bitcoin', JSON.stringify(selected))
    setSelected([amount, toAddress])
  }

  return {
    isQuestCompleted: areAnswersCorrect,
    questComponent: (
      <StyledDiv>
        <h2>
          Interact with the following mock-up wallet and send 0.00000001 BTC to
          Satoshi’s address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
        </h2>
        <Box>
          <Box>
            <InputGroup maxW="600px">
              <InputLeftAddon width="170px">BTC Amount</InputLeftAddon>
              <Input
                placeholder={DEFAULT_ANSWERS[0]}
                value={amount}
                mb="8"
                onChange={(e): void => {
                  setAmount(e.target.value)
                }}
              />
              <InputRightElement>
                {areAnswersCorrect ? (
                  <CheckIcon color={theme.colors.correct} />
                ) : hasSimulationRun ? (
                  <CloseIcon color={theme.colors.incorrect} />
                ) : null}
              </InputRightElement>
            </InputGroup>
            <InputGroup maxW="600px">
              <InputLeftAddon width="170px">Receiver Address</InputLeftAddon>
              <Input
                placeholder={DEFAULT_ANSWERS[1]}
                value={toAddress}
                onChange={(e): void => {
                  setToAddress(e.target.value)
                }}
              />
              <InputRightElement>
                {areAnswersCorrect ? (
                  <CheckIcon color={theme.colors.correct} />
                ) : hasSimulationRun ? (
                  <CloseIcon color={theme.colors.incorrect} />
                ) : null}
              </InputRightElement>
            </InputGroup>
          </Box>
          {areAnswersCorrect !== true && (
            <Box mt="24px !important" textAlign="center">
              <Button onClick={validateQuest} variant="primary">
                {'Simulate transaction'}
              </Button>
            </Box>
          )}
        </Box>
      </StyledDiv>
    ),
  }
}

export default WhatIsBitcoin
