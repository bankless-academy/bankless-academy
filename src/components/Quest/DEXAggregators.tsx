import React, { useState, useEffect } from 'react'
import {
  Input,
  Box,
  Image,
  InputRightElement,
  InputGroup,
  Spinner,
} from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import axios from 'axios'

const DEXAggregators = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isTransactionVerified, setIsTransactionVerified] = useState(null)
  const [isCheckingTx, setIsCheckingTx] = useState(false)
  const [tx, setTx] = useState(localStorage.getItem('quest-dex-aggregators-tx'))
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  const validateQuest = async (tx) => {
    try {
      if (tx !== '') {
        setIsCheckingTx(true)
        const questResult = await axios.get(
          `/api/validate-quest?address=${account}&quest=DEXAggregators&tx=${tx.replaceAll(
            'https://polygonscan.com/tx/',
            ''
          )}`
        )
        setIsCheckingTx(false)
        setIsTransactionVerified(questResult?.data?.isQuestValidated)
      } else {
        setIsTransactionVerified(null)
      }
    } catch (error) {
      console.error(error)
      setIsCheckingTx(false)
    }
  }

  useEffect(() => {
    if (account) validateQuest(tx)
  }, [account])

  return {
    isQuestCompleted: isTransactionVerified,
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
            <p>
              {'1. Load '}
              <a
                href="https://app.1inch.io/#/137/unified/swap/MATIC/0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab"
                target="_blank"
                rel="noreferrer"
              >
                1inch
              </a>
              {' on the Polygon network.'}
            </p>
            <p>
              {'2. Swap any token to '}
              <a
                href="https://polygonscan.com/token/0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab"
                target="_blank"
                rel="noreferrer"
              >
                $BANK
              </a>
              .
            </p>
            <p>3. Enter the transaction ID below:</p>
            <InputGroup maxW="530px">
              <Input
                placeholder="0x..."
                value={tx}
                mb="8"
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
                  <Spinner speed="1s" color="orange" />
                ) : isTransactionVerified === true ? (
                  <CheckIcon color="green.500" />
                ) : (
                  tx && tx.length !== 0 && <CloseIcon color="red.500" />
                )}
              </InputRightElement>
            </InputGroup>
          </div>
          <div className="bloc2">
            <Image src="/images/dex-aggregators-quest.png" />
            {/* <iframe
              src="https://www.youtube.com/embed/PWtVAAGKTXI?start=509&rel=0"
              allowFullScreen
            ></iframe> */}
          </div>
        </Box>
      </>
    ),
  }
}

export default DEXAggregators
