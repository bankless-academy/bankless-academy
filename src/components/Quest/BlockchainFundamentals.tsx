import React, { useState, useEffect } from 'react'
import {
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Input,
  Box,
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

const BlockchainFundamentals = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null)
  const [from, setFrom] = useState(
    localStorage.getItem('quest-blockchain-fundamentals-from')
  )
  const [to, setTo] = useState(
    localStorage.getItem('quest-blockchain-fundamentals-to')
  )
  const [isFromCorrect, setIsFromCorrect] = useState(false)
  const [isToCorrect, setIsToCorrect] = useState(false)
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  const verifyFrom = (from) => {
    return from?.toLowerCase() === '0x1ad97f73a9881904bad41e829b663fcee2809c90'
  }

  const verifyTo = (to) => {
    return to?.toLowerCase() === '0xc3ada0acfc05abbead016f101912735cbd0ad7c5'
  }

  useEffect(() => {
    setIsFromCorrect(verifyFrom(from))
    setIsToCorrect(verifyTo(to))
    validateQuest(from, to)
  }, [])

  const validateQuest = (from, to) => {
    setIsAnswerCorrect(verifyFrom(from) && verifyTo(to))
  }

  return {
    isQuestCompleted: isAnswerCorrect,
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
            <h2>Understand a transaction</h2>
            <p>
              <>
                {
                  'To validate this quest, paste the "from" and "to" addresses of this transaction '
                }
                <a
                  href="https://etherscan.io/tx/0xb6a8f39b0f095fb6188f99d7ba23f9b0910eab8fb7b8ab57a2b96ddac2c90055"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://etherscan.io/tx/0xb6...0055
                </a>
              </>
            </p>
            <Box pr="2">
              <InputGroup maxW="530px">
                <InputLeftAddon width="71px">From</InputLeftAddon>
                <Input
                  placeholder="0x..."
                  value={from}
                  mb="8"
                  onChange={(e): void => {
                    setFrom(e.target.value)
                    localStorage.setItem(
                      'quest-blockchain-fundamentals-from',
                      e.target.value
                    )
                    setIsFromCorrect(verifyFrom(e.target.value))
                    validateQuest(e.target.value, to)
                  }}
                />
                <InputRightElement>
                  {isFromCorrect ? (
                    <CheckIcon color="green.500" />
                  ) : (
                    from !== '' && <CloseIcon color="red.500" />
                  )}
                </InputRightElement>
              </InputGroup>
              <InputGroup maxW="530px">
                <InputLeftAddon width="71px">To</InputLeftAddon>
                <Input
                  placeholder="0x..."
                  value={to}
                  onChange={(e): void => {
                    setTo(e.target.value)
                    localStorage.setItem(
                      'quest-blockchain-fundamentals-to',
                      e.target.value
                    )
                    setIsToCorrect(verifyTo(e.target.value))
                    validateQuest(from, e.target.value)
                  }}
                />
                <InputRightElement>
                  {isToCorrect ? (
                    <CheckIcon color="green.500" />
                  ) : (
                    to !== '' && <CloseIcon color="red.500" />
                  )}
                </InputRightElement>
              </InputGroup>
            </Box>
          </div>
          <div className="bloc2">
            <iframe
              src="https://www.youtube.com/embed/-6k6zg8ExNs?rel=0"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </>
    ),
  }
}

export default BlockchainFundamentals
