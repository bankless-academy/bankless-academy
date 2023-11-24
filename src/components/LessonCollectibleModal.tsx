import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useMediaQuery,
  Box,
} from '@chakra-ui/react'
import hljs from 'highlight.js'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'

import { LessonType } from 'entities/lesson'

const SPLIT = `\`\`\`

---`

const StyledMarkdown = styled(Box)`
  font-family: Menlo, Monaco, 'Courier New', monospace;
  font-size: 11.8px;
  word-wrap: break-word;
  white-space: pre-wrap;
  /* .hljs-section {
    display: block;
  }
  .hljs-bullet {
    display: table-column;
  } */
`

function replaceImagesInMarkdown(markdownString) {
  // Regular expression to match image Markdown syntax
  const imageRegex = /!\[\]\(<span class="hljs-link">(.*?)<\/span>\)/g
  // /!\[<span class="hljs-string">(.*?)<\/span>\]\(<span class="hljs-link">(.*?)<\/span>\)/g

  // Replace each image syntax with an <img> tag
  const replacedString = markdownString.replace(
    imageRegex,
    '<img alt="" src="$1" width="400px" />'
  )

  return replacedString
}

const LessonCollectibleModal = ({
  isOpen,
  onClose,
  lesson,
}: {
  isOpen: boolean
  onClose: () => void
  lesson: LessonType
}): React.ReactElement => {
  const { t } = useTranslation()
  const [isMobileScreen] = useMediaQuery(['(max-width: 480px)'])
  const [intro, setIntro] = useState('')
  const [content, setContent] = useState('')

  const html = hljs.highlight(content, {
    language: 'markdown',
  }).value

  const lang =
    typeof window !== 'undefined' && window.location.search?.length
      ? window.location.search.replace('?lang=', '')
      : 'en'

  useEffect(() => {
    if (lesson?.slug) {
      try {
        fetch(`/lesson/${lang}/${lesson.slug}.md`)
          .then((response) => response.text())
          .then((md) => {
            // console.log('md', md)
            if (md[0] !== '<') {
              // eslint-disable-next-line no-unsafe-optional-chaining
              const [intro, content] = md?.split(SPLIT)
              setIntro(intro + SPLIT)
              setContent(content)
            }
          })
      } catch (error) {
        console.error(error)
      }
    }
  }, [lesson])
  return (
    <Modal
      onClose={onClose}
      size={isMobileScreen ? 'full' : '6xl'}
      isCentered
      isOpen={isOpen}
    >
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        bg="linear-gradient(180deg, #f4c137bf 0%, #e9966a9c 100%)"
        border={isMobileScreen ? '0' : '2px solid #c17e3c'}
        borderRadius={isMobileScreen ? '0' : '3xl'}
        backdropFilter="blur(10px)"
      >
        <ModalHeader>{t('LESSON DATADISK CONTENT')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={isMobileScreen ? '10px' : 'default'}>
          <StyledMarkdown
            overflow="scroll"
            maxHeight={isMobileScreen ? 'calc( 100vh - 82px )' : '85vh'}
          >
            <Box
              dangerouslySetInnerHTML={{
                __html: replaceImagesInMarkdown(intro),
              }}
              width="1100px"
              overflowX="scroll"
            />
            <Box
              dangerouslySetInnerHTML={{
                __html: replaceImagesInMarkdown(html),
              }}
              width="inherit"
            />
          </StyledMarkdown>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default LessonCollectibleModal
