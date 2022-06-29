import React, { useState } from 'react'
import { Box, Button, Spinner } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react'

import { useActiveWeb3React } from 'hooks'

const CORRECT_ANSWERS = [true, true, false, true]

const Web3Security = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { account } = useActiveWeb3React()
  const [selected, setSelected] = useState(
    localStorage.getItem('quest-web3-security-101') !== null
      ? JSON.parse(localStorage.getItem('quest-web3-security-101'))
      : [false, false, false, false]
  )
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)')

  const areAnswersCorrect =
    JSON.stringify(selected) === JSON.stringify(CORRECT_ANSWERS)
  localStorage.setItem('quest-web3-security-101', JSON.stringify(selected))

  return {
    isQuestCompleted: !!account && areAnswersCorrect,
    questComponent: (
      <>
        {!account && (
          <Button
            variant="outlined"
            leftIcon={<Spinner speed="1s" />}
            color={'orange'}
            cursor="default"
            boxShadow="none !important"
          >
            Waiting to detect your wallet ...
          </Button>
        )}
        {account ? (
          <>
            <Box display={isSmallScreen ? 'block' : 'flex'}>
              <Box
                display="flex"
                w="500px"
                h="250px"
                bgColor="red"
                border={selected[0] ? '1px solid white' : ''}
                alignItems="center"
                justifyContent="center"
                mr="2"
                mb="2"
                cursor="pointer"
                onClick={() =>
                  setSelected(selected.map((v, i) => (i === 0 ? !v : v)))
                }
              >
                SCAM
              </Box>
              <Box
                display="flex"
                w="500px"
                h="250px"
                bgColor="red"
                border={selected[1] ? '1px solid white' : ''}
                alignItems="center"
                justifyContent="center"
                mb="2"
                cursor="pointer"
                onClick={() =>
                  setSelected(selected.map((v, i) => (i === 1 ? !v : v)))
                }
              >
                SCAM
              </Box>
            </Box>
            <Box display={isSmallScreen ? 'block' : 'flex'} mt="0 !important">
              <Box
                display="flex"
                w="500px"
                h="250px"
                bgColor="green"
                border={selected[2] ? '1px solid white' : ''}
                alignItems="center"
                justifyContent="center"
                mr="2"
                mb="2"
                cursor="pointer"
                onClick={() =>
                  setSelected(selected.map((v, i) => (i === 2 ? !v : v)))
                }
              >
                NOT SCAM
              </Box>
              <Box
                display="flex"
                w="500px"
                h="250px"
                bgColor="red"
                border={selected[3] ? '1px solid white' : ''}
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                onClick={() =>
                  setSelected(selected.map((v, i) => (i === 3 ? !v : v)))
                }
              >
                SCAM
              </Box>
            </Box>
            <h2>Select all screenshots containing scams 👆</h2>
          </>
        ) : (
          'To validate this quest and finish this lesson, connect your wallet to this website. To do this, click the "Connect wallet" button in the top-right corner.'
        )}
      </>
    ),
  }
}

export default Web3Security
