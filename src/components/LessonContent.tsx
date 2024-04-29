import { Box, Image } from '@chakra-ui/react'
import hljs from 'highlight.js'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { LessonType } from 'entities/lesson'
import LanguageSwitch from 'components/LanguageSwitch'
import LessonCard from 'components/LessonCard'
import { useSmallScreen } from 'hooks/index'

const SPLIT = `\`\`\`

---`

const StyledMarkdown = styled(Box)`
  font-family: Menlo, Monaco, 'Courier New', monospace;
  font-size: 11.8px;
  word-wrap: break-word;
  white-space: pre-wrap;
  * {
    color: white !important;
  }
  /* .hljs-section {
    display: block;
  }
  .hljs-bullet {
    display: table-column;
  } */
`

function removeQuizAnswers(text) {
  const lines = text.split('\n')
  const filteredLines = lines.filter(
    // hide line with quiz answers (starts with `> `)
    (line) => !line.trim().startsWith('<span class="hljs-quote">&gt; ')
  )
  // remove empty line after quiz
  return filteredLines.join('\n')?.replaceAll('\n\n\n', '\n\n')
}

function replaceImagesInMarkdown(markdownString) {
  // Regular expression to match image Markdown syntax
  const imageRegex = /!\[\]\(<span class="hljs-link">(.*?)<\/span>\)/g
  // /!\[<span class="hljs-string">(.*?)<\/span>\]\(<span class="hljs-link">(.*?)<\/span>\)/g

  // Replace each image syntax with an <img> tag
  const replacedString = removeQuizAnswers(markdownString).replace(
    imageRegex,
    '<img alt="" src="$1" width="400px" />'
  )

  return replacedString
}

const LessonContent = ({
  lesson,
}: {
  lesson: LessonType
}): React.ReactElement => {
  const [isSmallScreen] = useSmallScreen()
  const [intro, setIntro] = useState('')
  const [content, setContent] = useState('')

  const html = hljs.highlight(content, {
    language: 'markdown',
  }).value

  const lang =
    typeof window !== 'undefined' &&
    window.location.pathname.split('/')[2].length === 2
      ? window.location.pathname.split('/')[2]
      : 'en'

  useEffect(() => {
    if (lesson?.slug) {
      try {
        fetch(
          `https://raw.githubusercontent.com/bankless-academy/bankless-academy/main/translation/lesson/${lang}/${lesson.slug}.md`
        )
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
    <Box>
      <Box mb={8}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          my={isSmallScreen ? 4 : 8}
        >
          <Box w="100%" maxW="400px">
            {isSmallScreen && (
              <Box mb={8} p={4}>
                <Image
                  w="100%"
                  maxW="350px"
                  m="auto"
                  src="/images/learning-steps.png"
                />
              </Box>
            )}
            <LessonCard lesson={lesson} />
          </Box>
          {!isSmallScreen && (
            <Image
              w="100%"
              maxW="350px"
              h="fit-content"
              src="/images/learning-steps.png"
            />
          )}
        </Box>
      </Box>
      <Box maxW="860px" m="auto" my={8}>
        <LanguageSwitch lesson={lesson} />
      </Box>
      <StyledMarkdown>
        <Box fontSize="2xl">Lesson Content:</Box>
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
    </Box>
  )
}

export default LessonContent
