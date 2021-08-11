import React, { useEffect, useState, useRef, createRef } from 'react'
import Link from 'next/link'
import {
  useColorMode,
  Box,
  Center,
  Divider,
  Text,
  Button,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import { Player } from '@lottiefiles/react-lottie-player'

import QUESTS from 'constants/quests'
import CircularProgressSteps from 'components/CircularProgressSteps'

const QuestCard = styled(Box)`
  border-radius: 0.5rem;
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

const DIFFICULTY_COLORS: {
  Easy: string
  Advanced: string
  Expert: string
} = {
  Easy: 'green',
  Advanced: 'orange',
  Expert: 'red',
}

const QuestCards: React.FC = () => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const startNowRef = useRef(null)
  const [selectedQuest, setSelectedQuest] = useState(null)
  const [playerRefs, setPlayerRefs] = useState([])
  const [numberOfPoapClaimed, setNumberOfPoapClaimed] = useState([])

  const isSelectedQuestStarted = parseInt(
    localStorage.getItem(QUESTS[selectedQuest]?.slug) || '-1'
  )
  const arrLength = QUESTS.length
  useEffect(() => {
    setPlayerRefs((playerRefs) =>
      Array(arrLength)
        .fill('')
        .map((_, i) => playerRefs[i] || createRef())
    )
  }, [arrLength])

  useEffect((): void => {
    // TODO: replace with tokensQuantityByEventId https://github.com/poap-xyz/poap-webapp/blob/2def482ffec93e6cbc4e3c5e5a18000805cc6c2b/src/api.ts#L1235
    const promiseArray = QUESTS.map((q) => {
      return axios.post(
        'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai',
        {
          query: `{event(id: ${q.poapEventId}){ tokenCount }}`,
        }
      )
    })
    axios
      .all(promiseArray)
      .then((results) => {
        setNumberOfPoapClaimed(
          results.map((r) => r.data.data.event?.tokenCount || 0)
        )
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [])

  return (
    <>
      {QUESTS.map((quest, index) => {
        // quest not started yet: -1
        const currentSlide = parseInt(localStorage.getItem(quest.slug) || '-1')
        const numberOfSlides = quest.slides.length
        const isPoapClaimed = localStorage.getItem(`poap-${quest.slug}`)
        return (
          <QuestCard
            bg={colorMode === 'dark' ? 'whiteAlpha.400' : 'blackAlpha.400'}
            cursor="pointer"
            key={`quest-${index}`}
            overflow="hidden"
            onClick={() => {
              setSelectedQuest(index)
              onOpen()
            }}
            onMouseOver={() => {
              playerRefs[index]?.current.play()
            }}
            onMouseLeave={() => {
              playerRefs[index]?.current.stop()
              playerRefs[index]?.current.setSeeker(0)
            }}
          >
            <Center minH="325px" position="relative">
              <CircularProgressSteps
                step={currentSlide}
                total={numberOfSlides}
              />
              <Box opacity={isPoapClaimed ? 1 : 0.7}>
                <Player
                  autoplay={false}
                  ref={playerRefs[index]}
                  loop={false}
                  keepLastFrame={true}
                  controls={false}
                  src={`/lotties/${quest.poapEventId}.json`}
                  style={{ height: '250px', width: '250px' }}
                />
              </Box>
              <Duration colorScheme="gray" borderRadius="full" size="xs">
                🕒 {quest.duration} min
              </Duration>
              <Difficulty
                colorScheme={DIFFICULTY_COLORS[quest.difficulty]}
                borderRadius="full"
                size="xs"
              >
                {quest.difficulty === 'Easy' && '🙂 Easy'}
                {quest.difficulty === 'Advanced' && '🤓 Advanced'}
                {quest.difficulty === 'Expert' && '🛠 Expert'}
              </Difficulty>
              <Claimed colorScheme="gray" borderRadius="full" size="xs">
                🎖 {numberOfPoapClaimed[index]} Claimed
              </Claimed>
            </Center>
            <Divider />
            <Stack minH="100px" p="4">
              <Text fontSize="2xl" fontWeight="bold">
                {quest.name}
              </Text>
              <Text fontSize="xl">{quest.description}</Text>
            </Stack>
          </QuestCard>
        )
      })}
      <Modal
        initialFocusRef={startNowRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        {selectedQuest !== null && (
          <ModalContent>
            <ModalHeader>
              <Text fontSize="2xl">{QUESTS[selectedQuest].name}</Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody fontWeight="bold">
              <Text fontSize="xl" mb="4">
                📚 Knowledge requirement?
              </Text>
              <Text fontSize="l" mb="4" color="gray.500">
                {ReactHtmlParser(QUESTS[selectedQuest].knowledgeRequirements)}
              </Text>
              <Text fontSize="xl" mb="4">
                📖 What will you learn from this?
              </Text>
              <Text fontSize="l" mb="4" color="gray.500">
                {ReactHtmlParser(QUESTS[selectedQuest].learnings)}
              </Text>
              <Text fontSize="xl" mb="4">
                🤓 What will you be able to do by the end of this course?
              </Text>
              <Text fontSize="l" mb="4" color="gray.500">
                {ReactHtmlParser(QUESTS[selectedQuest].learningActions)}
              </Text>
              <Box textAlign="center" m="6">
                <Link href={`/quest/${QUESTS[selectedQuest].slug}`}>
                  <Button ref={startNowRef}>
                    {isSelectedQuestStarted !== -1
                      ? 'Continue quest'
                      : 'Start quest'}
                  </Button>
                </Link>
              </Box>
            </ModalBody>
          </ModalContent>
        )}
      </Modal>
    </>
  )
}

export default QuestCards
