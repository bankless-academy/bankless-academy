import { Box, Image } from '@chakra-ui/react'
import hljs from 'highlight.js'
import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

import { LessonType } from 'entities/lesson'
import LanguageSelector from 'components/LanguageSelector'
import LessonCard from 'components/LessonCard'
import { useSmallScreen } from 'hooks/index'
import { t } from 'i18next'

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
  return (
    filteredLines
      .join('\n')
      // hide which quiz option is the correct one
      .replaceAll('[x] ', '[ ] ')
      // remove empty line after quiz
      ?.replaceAll('\n\n\n', '\n\n')
  )
}

function replaceImagesInMarkdown(markdownString) {
  // Regular expression to match image Markdown syntax
  const imageRegex = /!\[\]\(<span class="hljs-link">(.*?)<\/span>\)/g
  // /!\[<span class="hljs-string">(.*?)<\/span>\]\(<span class="hljs-link">(.*?)<\/span>\)/g

  // Replace each image syntax with an <img> tag
  let replacedString = removeQuizAnswers(markdownString).replace(
    imageRegex,
    '<img alt="" src="$1" width="400px" />'
  )

  // add alt & title to images
  // const contentDiv = new JSDOM(replacedString)
  const sectionSplit = `<span class="hljs-section">`
  const sections = replacedString.split(sectionSplit)
  replacedString = ''
  for (const section of sections) {
    const contentDiv = document.createElement('div')
    contentDiv.innerHTML = `${sectionSplit}${section}`
    const sectionTitles = contentDiv.querySelectorAll('.hljs-section')
    // console.log(sectionTitles)
    const sectionTitle = sectionTitles[0].textContent?.replace('# ', '')
    // console.log(sectionTitle)
    const images = contentDiv.querySelectorAll('img')
    // console.log(images)
    for (const image of images) {
      image.alt = sectionTitle
      image.title = sectionTitle
    }
    // console.log(contentDiv)
    replacedString += contentDiv.innerHTML
  }

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

  // The markdown arrives through props (read from disk in getStaticProps).
  // It used to be fetched from raw.githubusercontent at runtime, which meant
  // the page depended on GitHub and showed stale content until a translation
  // reached main.
  useEffect(() => {
    const md = lesson?.rawMd
    if (!md || md[0] === '<') return
    // eslint-disable-next-line no-unsafe-optional-chaining
    const [intro, content] = md.split(SPLIT)
    setIntro(intro + SPLIT)
    setContent(content)
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
      <Box maxW="860px" m="auto" my={8} display="flex" justifyContent="center">
        <LanguageSelector lesson={lesson} />
      </Box>
      <StyledMarkdown>
        <Box fontSize="2xl">{t('Lesson Content:')}</Box>
        <Box
          dangerouslySetInnerHTML={{
            __html: intro,
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
