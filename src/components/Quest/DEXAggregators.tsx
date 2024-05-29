import React, { useState, useEffect } from 'react'
import {
  Input,
  Box,
  InputRightElement,
  InputGroup,
  Spinner,
  Image,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

import ExternalLink from 'components/ExternalLink'
import { theme } from 'theme/index'
import { useSmallScreen } from 'hooks/index'
import { api } from 'utils/index'

const DEXAggregators = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
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
          tx: tx?.replaceAll('https://polygonscan.com/tx/', ''),
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

  return {
    isQuestCompleted: isTransactionVerified === 'true',
    questComponent: (
      <>
        <Box display={isSmallScreen ? 'block' : 'flex'}>
          <div className="bloc1">
            <p>
              {'1. Load '}
              <ExternalLink href="https://app.1inch.io/#/137/simple/swap/MATIC">
                1inch
              </ExternalLink>
              {' on the '}
              <Image
                alt="Polygon"
                src="/images/matic.svg"
                display="inline-flex"
                height="24px"
                m="0px 5px -5px 0"
              />
              <b>Polygon network</b>
              {'.'}
            </p>
            <p>{'2. Swap any token.'}</p>
            <p>
              3. Paste the successful <b>swap</b> transaction hash below:
            </p>
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
              <Box mb="4">
                <b>Tip:</b> Make sure you paste the <b>swap</b> transaction hash
                done on <b>Polygon network</b> and not the token approval
                transaction hash. Watch the video for more information.
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
              src="https://www.youtube.com/embed/FBrFUJiBbZk?rel=0"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </>
    ),
  }
}

export default DEXAggregators
