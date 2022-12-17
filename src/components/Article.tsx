import { Box, Container, Link, Image, Tooltip } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
// TODO: migrate to mdxjs https://mdxjs.com/packages/react/

import { LessonType } from 'entities/lesson'
import { useSmallScreen } from 'hooks/index'
import { KEYWORDS } from 'constants/index'

// TODO: clean dirty copy/paste style
const H1 = styled(Box)<{ issmallscreen?: string }>`
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  display: block;
  font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
  font-kerning: normal;
  font-size: ${(props) => (props.issmallscreen === 'true' ? '36px' : '48px')};
  font-weight: 600;
  letter-spacing: -0.05px;
  line-height: ${(props) => (props.issmallscreen === 'true' ? '40px' : '52px')};
  margin-bottom: 0px;
  margin-top: 0px;
  max-width: 768px;
  padding-bottom: 0px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  text-rendering: optimizelegibility;
  /* vertical-align: baseline; */
  -webkit-text-stroke-color: rgba(0, 0, 0, 0);
  -webkit-text-stroke-width: 0px;
`

// TODO: clean dirty copy/paste style
const ArticleStyle = styled(Box)<{ issmallscreen?: string }>`
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
  font-kerning: normal;
  font-size: 16px;
  font-weight: 375;
  letter-spacing: -0.064px;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  text-rendering: optimizelegibility;
  vertical-align: baseline;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0);
  -webkit-text-stroke-width: 0px;
  h2 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
    font-kerning: normal;
    font-size: ${(props) => (props.issmallscreen === 'true' ? '24px' : '30px')};
    font-weight: 600;
    letter-spacing: -0.444px;
    line-height: ${(props) =>
      props.issmallscreen === 'true' ? '28px' : '34px'};
    margin-bottom: 12px;
    margin-top: 36px;
    max-width: 768px;
    overflow-wrap: break-word;
    padding-left: 24px;
    padding-right: 24px;
    text-rendering: optimizelegibility;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 0px;
  }
  h3 {
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
    font-kerning: normal;
    font-size: ${(props) => (props.issmallscreen === 'true' ? '18px' : '22px')};
    font-weight: 600;
    letter-spacing: -0.324px;
    line-height: ${(props) =>
      props.issmallscreen === 'true' ? '22px' : '28px'};
    margin-bottom: 12px;
    margin-top: 0px;
    max-width: 768px;
    overflow-wrap: break-word;
    padding-left: 24px;
    padding-right: 24px;
    text-rendering: optimizelegibility;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 0px;
  }
  strong {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
    font-kerning: normal;
    font-size: 17.6px;
    font-weight: 700;
    letter-spacing: -0.064px;
    line-height: 28.6px;
    overflow-wrap: break-word;
    text-rendering: optimizelegibility;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 0px;
  }
  code {
    background-color: rgba(255, 255, 255, 0.1);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'iAWriter Mono', monospace;
    font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
    font-kerning: normal;
    font-size: 17.6px;
    font-weight: 375;
    letter-spacing: -0.064px;
    line-height: 28.6px;
    overflow-wrap: break-word;
    padding-bottom: 0.8px;
    padding-left: 4.8px;
    padding-right: 4.8px;
    padding-top: 0.8px;
    text-rendering: optimizelegibility;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 0px;
  }
  p {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
    font-kerning: normal;
    font-size: 17.6px;
    font-weight: 375;
    letter-spacing: -0.064px;
    line-height: 28.6px;
    margin-bottom: 12px;
    margin-top: 12px;
    max-width: 768px;
    overflow-wrap: break-word;
    padding-left: 24px;
    padding-right: 24px;
    text-rendering: optimizelegibility;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 0px;
  }
  ul {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
    font-kerning: normal;
    font-size: 17.6px;
    font-weight: 375;
    letter-spacing: -0.064px;
    line-height: 28.6px;
    margin-bottom: 12px;
    margin-top: 12px;
    max-width: 768px;
    overflow-wrap: break-word;
    padding-bottom: 0px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 0px;
    text-rendering: optimizelegibility;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 0px;
  }
  li {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
    font-kerning: normal;
    font-size: 17.6px;
    font-weight: 375;
    letter-spacing: -0.064px;
    line-height: 28.6px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    margin-top: 8px;
    overflow-wrap: break-word;
    padding-left: 32px;
    position: relative;
    text-rendering: optimizelegibility;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 0px;
    ::before {
      box-sizing: border-box;
      color: rgba(255, 255, 255, 0.35);
      content: '•';
      font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
      font-kerning: normal;
      font-weight: 375;
      letter-spacing: -0.064px;
      line-height: 28.6px;
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      overflow-wrap: break-word;
      position: absolute;
      right: calc(100% - 1ch);
      top: -2px;
      text-align: right;
      text-rendering: optimizelegibility;
      -webkit-text-stroke-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke-width: 0px;
      font-size: 30px;
    }
    p {
      box-sizing: border-box;
      color: rgba(255, 255, 255, 0.7);
      font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
      font-kerning: normal;
      font-size: 17.6px;
      font-weight: 375;
      letter-spacing: -0.064px;
      line-height: 28.6px;
      list-style-image: none;
      list-style-position: outside;
      list-style-type: none;
      margin-bottom: 0px;
      margin-top: 0px;
      overflow-wrap: break-word;
      text-rendering: optimizelegibility;
      -webkit-text-stroke-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke-width: 0px;
      padding: 0;
    }
  }
  hr {
    align-items: center;
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgba(0, 0, 0, 0);
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: auto;
    border-bottom-color: rgb(128, 128, 128);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(128, 128, 128);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(128, 128, 128);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(128, 128, 128);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-top-style: none;
    border-top-width: 0px;
    box-sizing: border-box;
    color: rgb(128, 128, 128);
    display: flex;
    font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
    font-kerning: normal;
    font-size: 17.6px;
    font-weight: 375;
    height: 96px;
    justify-content: center;
    letter-spacing: -0.064px;
    line-height: 28.6px;
    margin-bottom: 0px;
    margin-top: 0px;
    max-width: 768px;
    overflow-wrap: break-word;
    padding-bottom: 48px;
    padding-top: 48px;
    position: relative;
    text-rendering: optimizelegibility;
    -moz-box-align: center;
    -moz-box-pack: center;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 0px;
    ::before {
      background-color: rgba(255, 255, 255, 0.1);
      border-bottom-left-radius: 99px;
      border-bottom-right-radius: 99px;
      border-top-left-radius: 99px;
      border-top-right-radius: 99px;
      box-sizing: border-box;
      color: rgb(128, 128, 128);
      content: '';
      display: block;
      font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
      font-kerning: normal;
      font-size: 17.6px;
      font-weight: 375;
      height: 2px;
      letter-spacing: -0.064px;
      line-height: 28.6px;
      margin-left: 0px;
      margin-right: 0px;
      max-width: 192px;
      overflow-wrap: break-word;
      position: absolute;
      text-rendering: optimizelegibility;
      width: 192px;
      -webkit-text-stroke-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke-width: 0px;
    }
  }
  blockquote {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
    font-kerning: normal;
    font-size: 17.6px;
    font-weight: 375;
    letter-spacing: -0.064px;
    line-height: 28.6px;
    margin-bottom: 12px;
    margin-top: 0px;
    max-width: 768px;
    overflow-wrap: break-word;
    padding-bottom: 0px;
    padding-left: ${(props) => (props.issmallscreen === 'true' ? '24px' : '0')};
    padding-right: 24px;
    padding-top: 0px;
    position: relative;
    text-rendering: optimizelegibility;
    -webkit-text-stroke-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke-width: 0px;
    ::before {
      background-color: rgb(191, 90, 242);
      border-bottom-left-radius: 999px;
      border-bottom-right-radius: 999px;
      border-top-left-radius: 999px;
      border-top-right-radius: 999px;
      bottom: 0px;
      box-sizing: border-box;
      color: rgba(255, 255, 255, 0.7);
      content: '';
      font-family: 'Inter var', system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
      font-feature-settings: 'kern', 'liga', 'calt' 0, 'kern';
      font-kerning: normal;
      font-size: 17.6px;
      font-weight: 375;
      left: 0px;
      letter-spacing: -0.064px;
      line-height: 28.6px;
      overflow-wrap: break-word;
      position: absolute;
      text-rendering: optimizelegibility;
      top: 0px;
      width: 2px;
      -webkit-text-stroke-color: rgba(0, 0, 0, 0);
      -webkit-text-stroke-width: 0px;
      display: block;
      margin-left: ${(props) =>
        props.issmallscreen === 'true' ? '24px' : '0'};
    }
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  p > img {
    ${(props) =>
      props.issmallscreen === 'true'
        ? `
      max-width: 100vw;
      margin-left: -24px;
      margin-right: -24px;
      `
        : ``};
  }
  span.keyword {
    cursor: help;
    border-bottom: 1px dashed grey;
    display: inline-block !important;
  }
`

const Article = ({
  lesson,
  extraKeywords,
}: {
  lesson: LessonType
  extraKeywords?: any
}): React.ReactElement => {
  const [isSmallScreen] = useSmallScreen()
  const keywords = { ...KEYWORDS, ...extraKeywords }

  return (
    <Container maxW="container.md" p={isSmallScreen ? '0' : 'unset'}>
      <Image
        src={lesson.socialImageLink}
        w="100%"
        h="auto"
        borderRadius={isSmallScreen ? '0' : '0.375rem'}
        mt={isSmallScreen ? '0' : '24px'}
      />
      <H1 issmallscreen={isSmallScreen.toString()}>{lesson.name}</H1>
      <Box p="24px">
        {`Original Mirror article: `}
        <Link href={lesson.mirrorLink} target="_blank">
          {lesson.mirrorLink}
        </Link>
      </Box>
      <ArticleStyle issmallscreen={isSmallScreen.toString()}>
        <ReactMarkdown
          components={{
            // Tooltip with definition
            code: ({ node, ...props }: any) => {
              const keyword = node.children[0]?.value
              const lowerCaseKeyword = node.children[0]?.value?.toLowerCase()
              return lowerCaseKeyword?.length &&
                lowerCaseKeyword in keywords ? (
                <Tooltip
                  hasArrow
                  label={keywords[lowerCaseKeyword]?.definition}
                  closeOnClick={false}
                  {...props}
                >
                  <span className="keyword">{keyword}</span>
                </Tooltip>
              ) : (
                <>{keyword}</>
              )
            },
            // force links to target _blank
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            a: ({ node, children, ...props }) => {
              return (
                <a target="_blank" {...props}>
                  {children}
                </a>
              )
            },
          }}
        >
          {lesson.articleContent}
        </ReactMarkdown>
      </ArticleStyle>
    </Container>
  )
}

export default Article
