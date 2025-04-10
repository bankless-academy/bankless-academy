import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import { MetaData } from 'components/Head'
import MiniApp from 'components/MiniApp'
import MiniAppsList from 'components/MiniAppsList'
import MiniLessonsList from 'components/MiniLessonsList'
import styled from '@emotion/styled'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Flex,
  Heading,
  Box,
} from '@chakra-ui/react'

const pageMeta: MetaData = {
  description: 'Bankless Academy Farcaster Frame',
  canonical: '/',
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

interface MiniApp {
  domain: string
  name: string
  iconUrl: string
  homeUrl: string
  imageUrl: string
  buttonTitle: string
  splashImageUrl: string
  splashBackgroundColor: string
  author: {
    fid: number
    username: string
    displayName: string
    pfp: {
      url: string
      verified: boolean
    }
  }
}

interface MiniLesson {
  name: string
  slug: string
  lessonImageLink: string
  description: string
  level: string
}

const MiniApps = (): JSX.Element => {
  const [selectedApp, setSelectedApp] = useState<MiniApp | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<MiniLesson | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [frameUrl, setFrameUrl] = useState<string>('')

  const handleSelectApp = (app: MiniApp) => {
    setSelectedApp(app)
    setSelectedLesson(null)
    setFrameUrl(app.homeUrl)
    onOpen()
  }

  const handleSelectLesson = (lesson: MiniLesson) => {
    setSelectedLesson(lesson)
    setSelectedApp(null)
    setFrameUrl(`https://app.banklessacademy.com/lessons/${lesson.slug}`)
    onOpen()
  }

  const handleRefresh = () => {
    if (selectedApp) {
      setSelectedApp(null)
      setTimeout(() => setSelectedApp(selectedApp), 0)
    } else if (selectedLesson) {
      setSelectedLesson(null)
      setTimeout(() => setSelectedLesson(selectedLesson), 0)
    }
  }

  return (
    <Container>
      <ContentWrapper>
        <AppsListContainer>
          <Title>Mini Apps</Title>
          <MiniAppsList onSelectApp={handleSelectApp} />
        </AppsListContainer>
        <AppsListContainer>
          <Title>Mini Lessons</Title>
          <MiniLessonsList
            lessonSlugs={[
              'bitcoin-basics',
              'ethereum-basics',
              'intro-to-defi',
              'gitcoin-2.0-essentials',
            ]}
            onSelectLesson={handleSelectLesson}
          />
        </AppsListContainer>
      </ContentWrapper>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent maxW="500px">
          {selectedApp && (
            <>
              <ModalHeader>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Heading size="md">{selectedApp.name}</Heading>
                    <Text fontSize="sm" color="gray.500">
                      {selectedApp.domain}
                    </Text>
                  </Box>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={handleRefresh}
                    mr={8}
                  >
                    Refresh
                  </Button>
                </Flex>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <MiniApp
                  key={selectedApp.homeUrl}
                  frameUrl={selectedApp.homeUrl}
                  onClose={onClose}
                />
              </ModalBody>
            </>
          )}
          {selectedLesson && (
            <>
              <ModalHeader>
                <Flex justify="space-between" align="center">
                  <Box>
                    <Heading size="md">{selectedLesson.name}</Heading>
                    <Text fontSize="sm" color="gray.500">
                      {selectedLesson.level}
                    </Text>
                  </Box>
                  <Button
                    size="sm"
                    colorScheme="blue"
                    onClick={handleRefresh}
                    mr={8}
                  >
                    Refresh
                  </Button>
                </Flex>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <MiniApp key={frameUrl} frameUrl={frameUrl} onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const AppsListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`

export default MiniApps
