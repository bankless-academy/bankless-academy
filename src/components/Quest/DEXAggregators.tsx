import React, { useState, useEffect } from 'react'
import {
  Input,
  Box,
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
            <p>
              {'3. View your transaction on '}
              <a
                href={`https://polygonscan.com/address/${account}`}
                target="_blank"
                rel="noreferrer"
              >
                PolygonScan
              </a>
              .
            </p>
            <p>4. Paste the transaction hash (ID) of your token swap below:</p>
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
                  <Spinner speed="1s" color="orange" />
                ) : isTransactionVerified === true ? (
                  <CheckIcon color="green.500" />
                ) : (
                  tx && tx.length !== 0 && <CloseIcon color="red.500" />
                )}
              </InputRightElement>
            </InputGroup>
            {isTransactionVerified === false && tx && tx.length !== 0 && (
              <Box mb="4">
                <b>Tip:</b> Make sure you paste the swap transaction hash and
                not the approval transaction hash. Watch the video for more
                information.
              </Box>
            )}
            <Box mt="4">
              <b>Disclaimer:</b> Unfortunately, this quest is not available for
              US residents at the moment due to geographic restrictions.
              <br />
              <Box mt="2">
                We expect this to be resolved in the coming months.
              </Box>
            </Box>
          </div>
          <div className="bloc2">
            <iframe
              src="https://www.youtube.com/embed/0K8W_4PW7-s?rel=0"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </>
    ),
  }
}

export default DEXAggregators
