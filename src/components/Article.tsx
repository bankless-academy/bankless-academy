import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Image,
  Button,
  Text,
  SimpleGrid,
} from '@chakra-ui/react'
import { ArrowRight } from '@phosphor-icons/react'
import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'
import { useTranslation } from 'react-i18next'
// TODO: migrate to mdxjs https://mdxjs.com/packages/react/

import ExternalLink from 'components/ExternalLink'
import InternalLink from 'components/InternalLink'
import MintHandbookButton from 'components/MintHandbookButton'
import { LessonType } from 'entities/lesson'
import { useSmallScreen } from 'hooks/index'
import {
  IS_PROD,
  IS_WALLET_DISABLED,
  IS_WHITELABEL,
  KEYWORDS,
} from 'constants/index'
import {
  getArticlesCollected,
  getArticlesCollectors,
  Mixpanel,
} from 'utils/index'
import Keyword from 'components/Keyword'
import LanguageSwitch from 'components/LanguageSwitch'

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
    margin-top: 24px;
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
  > p,
  blockquote p {
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
  ul,
  ol {
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
  ul li {
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
    ul {
      margin-top: 0;
      padding-left: 0;
      padding-right: 0;
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
  figcaption {
    font-size: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    color: rgba(255, 255, 255, 0.35);
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
    ul {
      ${(props) =>
        props.issmallscreen === 'true'
          ? `
        padding-left: 16px;
        padding-right: 16px;
      `
          : ``};
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
    border-bottom: 1px dashed #e5afff;
    color: #e5afff;
    display: inline-block !important;
  }
  span.is-missing {
    ${!IS_PROD ? 'color: red;' : ''};
  }
  span.force-english {
    ${!IS_PROD ? 'color: orange;' : ''};
  }
  ol {
    padding-left: 43px;
    li {
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
    }
  }
`

const Article = ({
  lesson,
  extraKeywords,
}: {
  lesson: LessonType
  extraKeywords?: any
}): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const [isSmallScreen] = useSmallScreen()
  const [articlesCollectedLS, setArticlesCollectedLS] = useLocalStorage(
    'articlesCollected',
    []
  )
  const [numberCollected, setNumberCollected] = useState<number | '...'>('...')
  const { address } = useAccount()

  useEffect(() => {
    Mixpanel.track('open_lesson', {
      lesson: lesson?.englishName,
      language: i18n.language,
    })
    // mark article as read after 30 seconds
    setTimeout(() => {
      localStorage.setItem(lesson.slug, 'true')
    }, 30000)
  }, [])

  const updateArticlesCollectors = async () => {
    const NFTCollectors = await getArticlesCollectors(lesson.mirrorNFTAddress)
    setNumberCollected(NFTCollectors?.length)
  }

  useEffect(() => {
    if (lesson.mirrorNFTAddress) updateArticlesCollectors().catch(console.error)
  }, [])

  useEffect(() => {
    const updateArticlesCollected = async () => {
      const articlesCollected = await getArticlesCollected(address)
      if (articlesCollected && Array.isArray(articlesCollected))
        setArticlesCollectedLS(articlesCollected)
    }
    if (!IS_WHITELABEL && address) {
      updateArticlesCollected().catch(console.error)
    }
  }, [address])

  const keywords = { ...KEYWORDS, ...extraKeywords }

  const isArticleCollected =
    lesson.mirrorNFTAddress?.length &&
    articlesCollectedLS.includes(lesson.mirrorNFTAddress)

  return (
    <Container maxW="container.md" p={isSmallScreen ? '0' : 'unset'}>
      <Image
        src={lesson.lessonImageLink}
        w="100%"
        h="auto"
        borderRadius={isSmallScreen ? '0' : '0.375rem'}
        mt={isSmallScreen ? '0' : '24px'}
      />
      <H1 issmallscreen={isSmallScreen.toString()}>{lesson.name}</H1>
      {!IS_WALLET_DISABLED && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap={6} m="24px">
          <Box
            // border="1px solid #989898"
            py={isSmallScreen ? '2' : '6'}
            px="6"
            borderRadius="lg"
          >
            {isArticleCollected ? (
              <Button
                variant="secondaryGold"
                w="100%"
                background="transparent !important"
              >
                {t('Entry Collected')}
              </Button>
            ) : (
              <MintHandbookButton
                lesson={lesson}
                numberCollected={numberCollected}
              />
            )}
          </Box>
          <Box
            // border="1px solid #989898"
            py={isSmallScreen ? '2' : '6'}
            px="6"
            borderRadius="lg"
            textAlign="center"
          >
            <ExternalLink href={lesson.mirrorLink}>
              <Button
                variant="primary"
                w="100%"
                rightIcon={<ArrowRight size={16} />}
              >
                {t('View on Mirror.xyz')}
              </Button>
            </ExternalLink>
          </Box>
        </SimpleGrid>
      )}
      <LanguageSwitch lesson={lesson} />
      <ArticleStyle issmallscreen={isSmallScreen.toString()}>
        <ReactMarkdown
          components={{
            // Tooltip with definition
            code: ({ node }: any) => {
              const keyword = node.children[0]?.value
              const lowerCaseKeyword = node.children[0]?.value?.toLowerCase()
              const lowerCaseKeywordSingular =
                lowerCaseKeyword?.length && lowerCaseKeyword.endsWith('s')
                  ? lowerCaseKeyword.slice(0, -1)
                  : undefined
              if (!lowerCaseKeyword?.length) return <>{keyword}</>
              const englishDefition =
                keywords[lowerCaseKeyword]?.definition ||
                keywords[lowerCaseKeywordSingular]?.definition
              const definition =
                i18n.language !== 'en'
                  ? !t(`${lowerCaseKeyword}.definition`, {
                      ns: 'keywords',
                    }).endsWith('.definition')
                    ? t(`${lowerCaseKeyword}.definition`, { ns: 'keywords' })
                    : !t(`${lowerCaseKeywordSingular}.definition`, {
                        ns: 'keywords',
                      }).endsWith('.definition')
                    ? t(`${lowerCaseKeywordSingular}.definition`, {
                        ns: 'keywords',
                      })
                    : englishDefition
                  : englishDefition
              return definition?.length ? (
                <Keyword
                  definition={definition}
                  keyword={keyword}
                  forceEnglish={
                    i18n.language !== 'en' && englishDefition === definition
                  }
                />
              ) : (
                <span className="is-missing">{keyword}</span>
              )
            },
            // force links to target _blank
            a: ({ children, ...props }) => {
              if (
                props?.href?.includes('youtube') &&
                props?.href?.includes('embed')
              )
                // HACK: replace youtube links with iframe
                return (
                  <iframe
                    src={props?.href}
                    width="100%"
                    style={{
                      aspectRatio: '16/9',
                    }}
                  ></iframe>
                )
              else return <ExternalLink {...props}>{children}</ExternalLink>
            },
            img: ({ children, ...props }) => {
              return (
                <>
                  <img {...props}>{children}</img>
                  <figcaption>{props.alt}</figcaption>
                </>
              )
            },
          }}
        >
          {lesson.articleContent}
        </ReactMarkdown>
      </ArticleStyle>
      <Box
        border="1px solid #989898"
        py="8"
        px="6"
        m="24px"
        borderRadius="lg"
        display={isSmallScreen ? 'block' : 'flex'}
      >
        <Box w={isSmallScreen ? '100%' : '70%'}>
          <Text fontSize="xl" fontWeight="bold">
            {`Subscribe to the Explorer's Handbook`}
          </Text>
          <Text fontSize="xl">
            {t('Receive new entries directly to your inbox.')}
          </Text>
        </Box>
        <Box
          textAlign={isSmallScreen ? 'left' : 'right'}
          w={isSmallScreen ? '100%' : '30%'}
          alignSelf="center"
          alignItems="center"
          mt={isSmallScreen ? '20px' : '0'}
        >
          <ExternalLink href={lesson.mirrorLink}>
            <Button variant="primary">{t('Subscribe')}</Button>
          </ExternalLink>
        </Box>
      </Box>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} gap={6} m="24px">
        <Box
          // border="1px solid #989898"
          py={isSmallScreen ? '2' : '6'}
          px="6"
          borderRadius="lg"
        >
          {isArticleCollected ? (
            <Button
              variant="secondaryGold"
              w="100%"
              background="transparent !important"
            >
              {t('Entry Collected')}
            </Button>
          ) : IS_WALLET_DISABLED ? null : (
            <MintHandbookButton
              lesson={lesson}
              numberCollected={numberCollected}
            />
          )}
        </Box>
        <Box
          // border="1px solid #989898"
          py={isSmallScreen ? '2' : '6'}
          px="6"
          borderRadius="lg"
          textAlign="center"
        >
          <InternalLink href={`/lessons`} alt="Explore more Lessons">
            <Button variant="primary" w="100%">
              {t('Explore more Lessons')}
            </Button>
          </InternalLink>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Article
