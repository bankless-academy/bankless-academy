import React, { useState } from 'react'
import { Box, Button, Spinner } from '@chakra-ui/react'
import { useActiveWeb3React } from 'hooks'

const Web3Security101 = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const { account } = useActiveWeb3React()
  const [isQuestCorrect, setIsQuestCorrect] = useState(false)

  return {
    isQuestCompleted: !!account && isQuestCorrect,
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
            <h2>Select all SCAMS</h2>
            <Box display="flex">
              <Box
                display="flex"
                w="500px"
                h="250px"
                bgColor="red"
                alignItems="center"
                justifyContent="center"
                mr="2"
              >
                SCAM
              </Box>
              <Box
                display="flex"
                w="500px"
                h="250px"
                bgColor="red"
                alignItems="center"
                justifyContent="center"
              >
                SCAM
              </Box>
            </Box>
            <Box display="flex" mt="0">
              <Box
                display="flex"
                w="500px"
                h="250px"
                bgColor="green"
                alignItems="center"
                justifyContent="center"
                mr="2"
              >
                NOT SCAM
              </Box>
              <Box
                display="flex"
                w="500px"
                h="250px"
                bgColor="red"
                alignItems="center"
                justifyContent="center"
              >
                SCAM
              </Box>
            </Box>
            <Button
              colorScheme={isQuestCorrect ? 'green' : 'red'}
              onClick={() => setIsQuestCorrect(true)}
              variant="primary"
              ml="8"
            >
              Validate quest
            </Button>
          </>
        ) : (
          'To validate this quest and finish this lesson, connect your wallet to this website. To do this, click the "Connect wallet" button in the top-right corner.'
        )}
      </>
    ),
  }
}

export default Web3Security101
