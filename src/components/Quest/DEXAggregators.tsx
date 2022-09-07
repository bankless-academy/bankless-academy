import React, { useState, useEffect } from 'react'
import { Input, Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'
import axios from 'axios'

const DEXAggregators = (
  account: string
): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isTransactionVerified, setIsTransactionVerified] = useState(null)
  const [tx, setTx] = useState(localStorage.getItem('quest-dex-aggregators-tx'))
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  const validateQuest = async (tx) => {
    try {
      const isOnchainQuestCompleted = await axios.get(
        `/api/check-onchain-quest?address=${account}&quest=DEXAggregators&tx=${tx}`
      )
      setIsTransactionVerified(isOnchainQuestCompleted?.data?.quest)
    } catch (error) {
      console.error(error)
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
            <h2>
              Make a swap on 1inch on the Polygon Network then submit your
              transaction:
            </h2>
            <Box pr="2" maxW="530px">
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
            </Box>
          </div>
          <div className="bloc2">
            <iframe
              src="https://www.youtube.com/embed/PWtVAAGKTXI?start=509&rel=0"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </>
    ),
  }
}

export default DEXAggregators
