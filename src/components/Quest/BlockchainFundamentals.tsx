import React, { useState, useEffect } from 'react'
import {
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Input,
  Box,
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

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
    return (
      from?.toLowerCase() === '0x0ef696b2da7e7c6a3113681ce57344b66bbcf559' ||
      from?.toLowerCase() === 'broccoin.eth'
    )
  }

  const verifyTo = (to) => {
    return to?.toLowerCase() === '0x38f9282576c9ef837423ddbfaf58650f8de28dd1'
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
                  'To validate this quest, paste the "from" and "to" addresses of the first transaction of block #14850714 '
                }
                <a
                  href="https://etherscan.io/txs?block=14850714"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://etherscan.io/txs?block=14850714
                </a>
              </>
            </p>
            <InputGroup maxW="510px">
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
              {isFromCorrect && (
                <InputRightElement>
                  <CheckIcon color="green.500" />
                </InputRightElement>
              )}
            </InputGroup>
            <InputGroup maxW="510px">
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
              {isToCorrect && (
                <InputRightElement>
                  <CheckIcon color="green.500" />
                </InputRightElement>
              )}
            </InputGroup>
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
