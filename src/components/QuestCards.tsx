import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import {
  useColorMode,
  Box,
  Center,
  Divider,
  Text,
  Image,
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

import QUESTS from 'constants/quests'
import CircularProgressSteps from 'components/CircularProgressSteps'

const QuestCard = styled(Box)`
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const startNowRef = useRef(null)
  const [selectedQuest, setSelectedQuest] = useState(null)
  const [numberOfPoapClaimed, setNumberOfPoapClaimed] = useState([])

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
        // eslint-disable-next-line no-console
        console.log(error)
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
            onClick={() => {
              setSelectedQuest(index)
              onOpen()
            }}
          >
            <Center minH="320px" position="relative">
              <CircularProgressSteps
                step={currentSlide}
                total={numberOfSlides}
              />
              <PoapImage
                src={quest.poapImageLink}
                opacity={isPoapClaimed ? 1 : 0.7}
              />
              <Duration colorScheme="gray" borderRadius="full" size="xs">
                🕒 {quest.duration} min
              </Duration>
              <Difficulty colorScheme="gray" borderRadius="full" size="xs">
                {quest.difficulty}
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
            <ModalHeader>{QUESTS[selectedQuest].name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                📚 Knowledge requirement? No prior knowledge needed. 📖 What
                will you learn from this? Understand ... 🤓 What will you be
                able to do by the end of this course? create and manage your own
                wallet connect your wallet to Onboard
              </Text>
              <Link href={`/quest/${QUESTS[selectedQuest].slug}`}>
                <Button ref={startNowRef}>Start now</Button>
              </Link>
            </ModalBody>
          </ModalContent>
        )}
      </Modal>
    </>
  )
}

export default QuestCards
