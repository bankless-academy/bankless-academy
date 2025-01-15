import React, { useState } from 'react'
import { Box, Checkbox, Stack, Text } from '@chakra-ui/react'

const BLOCKCHAINS = [
  {
    name: 'Bitcoin',
    correctAnswers: ['decentralisation', 'security'],
  },
  {
    name: 'Ethereum',
    correctAnswers: ['decentralisation', 'security'],
  },
]

const CHARACTERISTICS = ['decentralisation', 'scalability', 'security']

const isQuestCompleted = (state) => {
  return BLOCKCHAINS.every((blockchain, idx) => {
    const selectedCharacteristics = CHARACTERISTICS.filter(
      (_, charIdx) => state[idx][charIdx]
    )
    return (
      selectedCharacteristics.length === 2 &&
      selectedCharacteristics.every((char) =>
        blockchain.correctAnswers.includes(char)
      )
    )
  })
}

const Layer1Blockchains = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [selections, setSelections] = useState(
    localStorage.getItem('quest-layer-1-blockchains')
      ? JSON.parse(localStorage.getItem('quest-layer-1-blockchains'))
      : [
          [false, false, false],
          [false, false, false],
        ]
  )

  const handleCheckboxChange = (
    blockchainIndex: number,
    characteristicIndex: number
  ) => {
    const newSelections = [...selections]
    newSelections[blockchainIndex][characteristicIndex] =
      !newSelections[blockchainIndex][characteristicIndex]

    localStorage.setItem(
      'quest-layer-1-blockchains',
      JSON.stringify(newSelections)
    )
    setSelections(newSelections)
  }

  const isBlockchainCorrect = (blockchainIndex: number) => {
    const selectedCharacteristics = CHARACTERISTICS.filter(
      (_, charIdx) => selections[blockchainIndex][charIdx]
    )
    return (
      selectedCharacteristics.length === 2 &&
      selectedCharacteristics.every((char) =>
        BLOCKCHAINS[blockchainIndex].correctAnswers.includes(char)
      )
    )
  }

  const hasAllSelected = (blockchainIndex: number) => {
    return selections[blockchainIndex].every(Boolean)
  }

  return {
    isQuestCompleted: isQuestCompleted(selections),
    questComponent: (
      <>
        <Text fontSize="lg" mb={4}>
          Given the current state of blockchain technology, blockchains can only
          optimize for 2 of the 3 characteristics, at most.
          <br />
          Tick which characteristics Bitcoin and Ethereum initially optimized
          for.
        </Text>
        <Stack
          mt="4"
          spacing={6}
          align="stretch"
          flexDirection={{ base: 'column', md: 'row' }}
        >
          {BLOCKCHAINS.map((blockchain, blockchainIndex) => (
            <Box
              key={blockchain.name}
              p={4}
              minW="280px"
              borderWidth={1}
              borderRadius="md"
              borderColor={
                hasAllSelected(blockchainIndex)
                  ? '#A94462'
                  : isBlockchainCorrect(blockchainIndex)
                  ? '#44A991'
                  : 'inherit'
              }
            >
              <Text fontWeight="bold" mb={2}>
                {blockchain.name}
              </Text>
              <Box pl={4} display="flex" flexDirection="column" gap={2}>
                {CHARACTERISTICS.map((characteristic, charIndex) => (
                  <Checkbox
                    key={characteristic}
                    isChecked={selections[blockchainIndex][charIndex]}
                    onChange={() =>
                      handleCheckboxChange(blockchainIndex, charIndex)
                    }
                    mb={2}
                    colorScheme="purple"
                  >
                    {characteristic.charAt(0).toUpperCase() +
                      characteristic.slice(1)}
                  </Checkbox>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>
      </>
    ),
  }
}

export default Layer1Blockchains
