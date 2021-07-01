import * as React from 'react'
import {
  useColorMode,
  Box,
  CircularProgress,
  Center,
  Divider,
  Text,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

const QUESTS = [
  {
    name: 'Wallet Basics',
    description: 'Wallet Basics description',
    duration: 10,
    difficulty: '🙂 easy',
    poap_image: '/images/poap1.png',
  },
  {
    name: 'Borrow with Aave',
    description: 'Borrow with Aave description',
    duration: 30,
    difficulty: '🛠 expert',
    poap_image: '/images/poap2.png',
  },
]

const Card = styled(Box)`
  border-radius: 0.5rem;
`

const PoapImage = styled(Image)`
  position: absolute;
  width: 250px;
`

const Duration = styled(Button)`
  position: absolute;
  top: 12px;
  left: 12px;
`

const Difficulty = styled(Button)`
  position: absolute;
  bottom: 12px;
  left: 12px;
`

const Claimed = styled(Button)`
  position: absolute;
  top: 12px;
  right: 12px;
`

const QuestCards: React.FC = () => {
  const { colorMode } = useColorMode()

  return (
    <>
      {QUESTS.map((quest, index) => (
        <Card
          bg={colorMode === 'dark' ? 'whiteAlpha.400' : 'blackAlpha.400'}
          key={`quest-${index}`}
        >
          <Center minH="320px" position="relative">
            <CircularProgress
              value={30}
              size="300px"
              thickness="2px"
              trackColor="#edebe961"
              color="red"
            />
            <PoapImage src={quest.poap_image} />
            <Duration colorScheme="gray" borderRadius="full" size="xs">
              🕒 {quest.duration} min
            </Duration>
            <Difficulty colorScheme="gray" borderRadius="full" size="xs">
              {quest.difficulty}
            </Difficulty>
            <Claimed colorScheme="gray" borderRadius="full" size="xs">
              🎖 12 Claimed
            </Claimed>
          </Center>
          <Divider />
          <Stack minH="100px" p="4">
            <Text fontSize="2xl" fontWeight="bold">
              {quest.name}
            </Text>
            <Text fontSize="xl">{quest.description}</Text>
          </Stack>
        </Card>
      ))}
    </>
  )
}

export default QuestCards
