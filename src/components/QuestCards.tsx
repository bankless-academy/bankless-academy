import React, { useState, useRef } from 'react'
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
  const modalRef = useRef(null)
  const [selectedQuest, setSelectedQuest] = useState(null)

  return (
    <>
      {QUESTS.map((quest, index) => {
        // quest not started yet: -1
        const currentSlide = parseInt(localStorage.getItem(quest.slug) || '-1')
        const numberOfSlides = quest.slides.length
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
          </QuestCard>
        )
      })}
      <Modal
        finalFocusRef={modalRef}
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
                <Button>Start now</Button>
              </Link>
            </ModalBody>
          </ModalContent>
        )}
      </Modal>
    </>
  )
}

export default QuestCards
