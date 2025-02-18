/* eslint-disable no-console */
import React, { useRef, useState, useEffect, useLayoutEffect } from 'react'
import {
  Box,
  Text,
  ButtonGroup,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  Tooltip,
  useToast,
} from '@chakra-ui/react'
import { useHotkeys } from 'react-hotkeys-hook'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import ReactHtmlParser, { processNodes } from 'react-html-parser'
import { ArrowBackIcon, ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons'
import { Warning, X, Bug, Square, CheckSquare } from '@phosphor-icons/react'
import { useLocalStorage } from 'usehooks-ts'
import { useAccount } from 'wagmi'
import { useTranslation } from 'react-i18next'
import { isMobile, isDesktop } from 'react-device-detect'
import { Emoji } from 'emoji-picker-react'
import emojiRegex from 'emoji-regex'
import emojisToUnified from 'data/emojis.json'

import { LessonType, SlideType } from 'entities/lesson'
import ProgressSteps from 'components/ProgressSteps'
import Card from 'components/Card'
import MintBadge from 'components/MintBadge'
import ExternalLink from 'components/ExternalLink'
import { useSmallScreen } from 'hooks/index'
import { isHolderOfNFT, Mixpanel, scrollDown, scrollTop } from 'utils/index'
import {
  IS_PROD,
  IS_WHITELABEL,
  KEYWORDS,
  TOKEN_GATING_ENABLED,
} from 'constants/index'
import {
  LearnIcon,
  QuizIcon,
  PollIcon,
  QuestIcon,
  RewardsIcon,
} from 'components/Icons'
import { theme } from 'theme/index'
import { QuestType } from 'components/Quest/QuestComponent'
import NFT from 'components/NFT'
import Keyword from 'components/Keyword'
import EditContentModal from 'components/EditContentModal'
import Helper from 'components/Helper'
import Animation from 'components/Animation'
import { ANIMATIONS } from 'constants/animations'
import { useNavBar } from 'contexts/NavBarContext'

export const Slide = styled(Card)<{
  issmallscreen?: string
  slidetype: SlideType
  ispreview?: string
  istranslation?: string
  highlightnumber?: string
}>`
  border-radius: 0.5rem;
  ${(props) => props.issmallscreen === 'true' && 'display: contents;'};
  ${(props) => props?.ispreview === 'true' && '.is-missing : {color:red}'};
  h1 {
    margin-top: 1em;
    font-size: var(--chakra-fontSizes-2xl);
  }
  span.keyword {
    cursor: help;
    border-bottom: 1px dashed #e5afff;
    color: #e5afff;
    display: inline-block !important;
  }
  span.is-missing {
    ${!IS_PROD ? 'color:red;' : ''};
  }
  span.force-english {
    ${!IS_PROD ? 'color: orange;' : ''};
  }
  div.content > div {
    ${(props) =>
      props.slidetype === 'LEARN' &&
      (props.issmallscreen === 'true' ? 'display: block;' : 'display: flex;')};
  }
  img.epr-emoji-img {
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 5px;
  }
  li.hide-marker {
    list-style-type: none;
  }
  div.content > div > img {
    margin: auto;
    ${(props) => props.issmallscreen !== 'true' && 'max-height: 60vh;'};
  }
  .bloc-ab {
    flex: 1 1 0;
    margin: 10px;
  }
  .bloc-ab img {
    width: 100%;
  }
  .bloc-b {
    ${(props) =>
      props.issmallscreen === 'true' && 'border-bottom: 1px solid #72757B;'};
  }
  div.content > div > div:last-child .bloc-b {
    border-bottom: none;
  }
  .bloc1,
  .bloc2 {
    flex: 1;
  }
  .bloc2 {
    ${(props) => props.istranslation === 'true' && ' flex: 0.8;'};
    align-self: center;
    img {
      width: auto;
      margin: auto;
      max-height: 100%;
    }
    ${(props) =>
      props.issmallscreen === 'true'
        ? `
        margin-top: 24px;
        img {
          width: 100%;
          max-width: 800px;
        }
      `
        : 'img {  max-height: 60vh; max-height: 600px; }'};
  }
  div.content div {
    h2,
    p {
      font-size: var(--chakra-fontSizes-xl);
      ${(props) => props.istranslation === 'true' && 'font-size: 19px;'};
      margin: 0.8em;
      ${(props) =>
        (props.slidetype === 'QUIZ' || props.slidetype === 'POLL') &&
        props.issmallscreen === 'true' &&
        'margin: 0.8em 0 0 0;'};
    }
    h2 {
      font-weight: bold;
    }
    a {
      color: #b85ff1;
      text-decoration: none;
    }
    ul,
    ol {
      font-size: var(--chakra-fontSizes-xl);
      ${(props) => props.istranslation === 'true' && 'font-size: 19px;'};
      margin-left: 2em;
    }
    /* hide all sibling elements that come after the <ol> element */
    ol.animation-in-progress ~ * {
      display: none;
    }
    li {
      margin-bottom: 8px;
    }
    ${(props) =>
      parseInt(props.highlightnumber) >= 0 &&
      `
      ol li {
        opacity: 0.5;
      }
      ol li:nth-of-type(${parseInt(props.highlightnumber) + 1}) {
        opacity: 1;
      }
    `};
    iframe {
      padding: 16px;
      aspect-ratio: 16/9;
      max-width: 100%;
      height: 360px;
    }
    iframe.animation {
      margin: 0 auto;
      width: 590px;
      height: 590px;
    }
    blockquote {
      font-size: var(--chakra-fontSizes-lg);
      margin: 1em;
      padding-left: 1em;
      border-left: 2px solid white;
    }

    // toggle
    details {
      border-radius: 8px;
      margin-bottom: 5px;
      overflow: hidden;
    }
    summary {
      padding: 15px;
      background-color: #3f3154;
      cursor: pointer;
      position: relative;
    }
    .content-detail {
      border-radius: 0 0 8px 8px;
      border: 1px solid #a873d2;
      border-top: 0px;
    }
    summary:hover {
    }
    details[open] summary {
      background: linear-gradient(134deg, #67407e, #354374);
      border: 1px solid #a873d2;
      overflow: hidden;
      border-radius: 8px 8px 0 0;
    }
    .content-detail {
      padding: 15px;
    }
  }
`

const StyledKeywords = styled(Box)`
  span.keyword {
    cursor: help;
    border-bottom: 1px dashed #e5afff;
    color: #e5afff;
    display: inline-block !important;
  }
`

const Answers = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: black;
    margin-right: 0.5em;
    margin-bottom: 4px;
  }
`

export type AnswerStateType = 'UNSELECTED' | 'CORRECT' | 'WRONG'

const QuizAnswer = styled(Button)<{
  answerstate: AnswerStateType
  isActive: boolean
  isPoll: boolean
}>`
  ${(props) => props.isActive && !props.isPoll && `cursor: default;`};
  ${(props) =>
    props.answerstate === 'UNSELECTED' &&
    props.isActive &&
    !props.isPoll &&
    `background: #1C1C1C !important;`}
  ${(props) =>
    props.answerstate === 'UNSELECTED' &&
    props.isPoll &&
    `background-color: #3f3154 !important;`}
  ${(props) =>
    props.answerstate === 'CORRECT' &&
    !props.isPoll &&
    `background: linear-gradient(95.83deg, #44A991 -9.2%, rgba(68, 169, 145, 0.7) 97.91%) !important;`}
  ${(props) =>
    props.answerstate === 'CORRECT' &&
    props.isPoll &&
    `
    background: linear-gradient(134deg, #67407e, #354374) !important;
    border: 1px solid #a873d2 !important;
  `}
  ${(props) =>
    props.answerstate === 'WRONG' &&
    !props.isPoll &&
    `background: linear-gradient(91.91deg, #A94462 49%, rgba(169, 68, 98, 0.7) 124.09%) !important;`}
   .chakra-button__icon {
    margin-bottom: 0;
  }
  height: 56px;
`

const SlideNav = styled(Box)<{ issmallscreen?: string }>`
  ${(props) =>
    props.issmallscreen === 'true' &&
    `
      position: fixed;
      bottom: 0;
      width: 100%;
      left: 0;
      background-color: #2b2b2bdd;
      backdrop-filter: blur(10px);
      z-index: 9;
      border-top:1px solid #222222;
      `};
`

function countWords(st) {
  let s
  s = st?.replace(/(^\s*)|(\s*$)/gi, '') //exclude  start and end white-space
  s = s?.replace(/[ ]{2,}/gi, ' ') //2 or more space to 1
  s = s?.replace(/\n /, '\n') // exclude newline with a start spacing
  return s?.split(' ').filter(function (str) {
    return str != ''
  }).length
  //return s.split(' ').filter(String).length; - this can also be used
}

const Lesson = ({
  lesson,
  extraKeywords,
  closeLesson,
  Quest,
  isLessonOpen = false,
}: {
  lesson: LessonType
  extraKeywords?: any
  closeLesson?: () => void
  Quest?: QuestType
  isLessonOpen?: boolean
}): React.ReactElement => {
  const { t, i18n } = useTranslation()
  const { setHideNavBar } = useNavBar()
  const numberOfSlides = lesson.slides?.length
  // HACK: when reducing the number of slides in a lesson
  if (
    parseInt(localStorage.getItem(lesson.slug) || '0') + 1 >=
    numberOfSlides
  ) {
    localStorage.setItem(lesson.slug, (numberOfSlides - 1).toString())
  }

  const buttonLeftRef = useRef(null)
  const buttonRightRef = useRef(null)
  const slideRef = useRef(null)
  const answerRef = useRef([])
  const [currentSlide, setCurrentSlide] = useLocalStorage(`${lesson.slug}`, 0)
  const [selectedAnswerNumber, setSelectedAnswerNumber] = useState<number>(null)
  const [longSlide, setLongSlide] = useState<boolean>(false)
  const [, isSmallScreen] = useSmallScreen()
  const [, setConnectWalletPopupLS] = useLocalStorage(
    `connectWalletPopup`,
    false
  )
  const [quizRetryCount, setQuizRetryCount] = useState({})
  const toast = useToast()
  const [isBadgeMintedLS] = useLocalStorage(
    `isBadgeMinted-${lesson.badgeId}`,
    false
  )
  const { address } = useAccount()
  const router = useRouter()

  const { embed } = router.query
  const slide = lesson.slides[currentSlide]
  const [quizSlide, setQuizSlide] = useLocalStorage(
    `quiz-${slide?.quiz?.id}`,
    []
  )
  const isQuizSlideArray = Array.isArray(quizSlide)
  const isFirstSlide = currentSlide === 0
  const isLastSlide = currentSlide + 1 === numberOfSlides

  const isAnimationSlide = slide.content?.includes('/animation/')
  slide.content = slide.content?.replace(
    // HACK: display local animation
    'https://app.banklessacademy.com/animation/',
    '/animation/'
  )
  // const matchAnimation = /src=["']\/animation\/([^"']+)["']/.exec(slide.content)
  // console.log(matchAnimation)
  // const animationSlideId = matchAnimation?.length ? matchAnimation[1] : ''
  const animationSlideId =
    // Bitcoin Basics
    lesson.notionId === '6a440f5dd00a4179811178943bf89e1d'
      ? 'bitcoin'
      : // Staking on Ethereum
      lesson.notionId === 'e90059604739465ea99b9a2c8af5eb75'
      ? 'validating-tx-with-ethereum-staking'
      : // Ethereum Basics
      lesson.notionId === '2a957f2be160403ebdd7c89a4f0fa01d'
      ? // - 1 to currentSlide because starting at 0
        currentSlide === 11 - 1
        ? 'swap'
        : currentSlide === 14 - 1
        ? 'send'
        : currentSlide === 17 - 1
        ? 'ethereum'
        : ''
      : ''
  const [animationStepLS, setAnimationStepLS] = useLocalStorage(
    `animation-${animationSlideId}`,
    0
  )
  const animationSteps = Object.keys(ANIMATIONS).includes(animationSlideId)
    ? ANIMATIONS[animationSlideId]?.steps?.length
    : null

  const walletAddress = address
  // DEV ENV: you can force a specific wallet address here if you want to test the claiming function
  // walletAddress = '0xbd19a3f0a9cace18513a1e2863d648d13975cb44'

  const keywords = { ...KEYWORDS, ...extraKeywords }

  useLayoutEffect(() => {
    if (
      slideRef?.current?.offsetHeight > 615 &&
      !isSmallScreen &&
      slide.type === 'LEARN' &&
      slide.content.includes('bloc2')
    )
      setLongSlide(true)
    else setLongSlide(false)
  }, [slide, isSmallScreen])

  useEffect((): void => {
    localStorage.setItem(lesson.slug, currentSlide.toString())

    // toggle
    const accordions = document.querySelectorAll('.bloc1')
    accordions.forEach((accordion) => {
      const details = accordion.querySelectorAll('details')

      // Open the first accordion by default
      if (details.length > 0) {
        details[0].setAttribute('open', 'true')
      }

      details.forEach((detail) => {
        // Check if content div already exists
        if (!detail.querySelector('.content-detail')) {
          // Wrap content in a div
          const content = document.createElement('div')
          content.className = 'content-detail'
          while (detail.childNodes.length > 1) {
            content.appendChild(detail.childNodes[1])
          }
          detail.appendChild(content)
        }

        // Add click event listener
        detail.addEventListener('click', () => {
          details.forEach((otherDetail) => {
            if (otherDetail !== detail) {
              otherDetail.removeAttribute('open')
            }
          })
        })
      })
    })
  }, [currentSlide])

  useEffect((): void => {
    if (address) setConnectWalletPopupLS(false)
    if (
      (slide.type === 'QUEST' || slide.type === 'END') &&
      !address &&
      slide.component !== 'BitcoinBasics' &&
      slide.component !== 'WalletBasics'
    )
      setConnectWalletPopupLS(true)
  }, [address, slide])

  useEffect(() => {
    console.log('isLessonOpen', isLessonOpen)
    console.log('slide.type', slide.type)
    if (isLessonOpen && slide.type !== 'QUEST') setHideNavBar(true)
    else setHideNavBar(false)

    return () => {
      setHideNavBar(false)
    }
  }, [isLessonOpen, slide, setHideNavBar])

  useEffect((): void => {
    const checkNFT = async () => {
      const hasNFT = await isHolderOfNFT(address, lesson.nftGating)
      if (!hasNFT) {
        toast.closeAll()
        toast({
          title: t("You don't own the required NFT"),
          description: lesson?.nftGatingRequirements,
          status: 'warning',
          duration: 20000,
          isClosable: true,
        })
        closeLesson()
      }
    }
    if (TOKEN_GATING_ENABLED && lesson.nftGating) {
      if (!address) {
        toast.closeAll()
        toast({
          title: t('This is a token gated lesson'),
          description: t('Connect your wallet to access the lesson.'),
          status: 'warning',
          duration: 20000,
          isClosable: true,
        })
        closeLesson()
      } else {
        checkNFT()
      }
    }
  }, [address])

  useEffect(() => {
    Mixpanel.track('open_lesson', {
      lesson: lesson?.englishName,
      language: i18n.language,
    })
    // preloading all lesson images after 3 seconds for smoother transitions
    setTimeout(() => {
      lesson.imageLinks.forEach((imageLink) => {
        const img = new Image()
        img.src = imageLink
      })
    }, 3000)
  }, [])

  const clickLeft = () => {
    if (isAnimationSlide && animationStepLS > 0) {
      setAnimationStepLS(animationStepLS - 1)
      if (isSmallScreen) scrollDown()
    } else goToPrevSlide()
  }

  const clickRight = () => {
    if (isAnimationSlide && animationStepLS + 1 < animationSteps) {
      setAnimationStepLS(animationStepLS + 1)
      if (isSmallScreen) scrollDown()
    } else if (!(slide.quiz && !answerIsCorrect)) goToNextSlide()
  }

  const goToPrevSlide = () => {
    toast.closeAll()
    if (!isFirstSlide) {
      setCurrentSlide(currentSlide - 1)
      if (!isDesktop) scrollTop()
    }
    setSelectedAnswerNumber(null)
  }

  const goToNextSlide = () => {
    toast.closeAll()
    if (slide.quiz && localStorage.getItem(`quiz-${slide.quiz.id}`) === null) {
      console.log('select your answer to the quiz first')
    } else if (!isLastSlide) {
      setCurrentSlide(currentSlide + 1)
      if (!isDesktop) scrollTop()
    } else if (isLastSlide) {
      if (!isDesktop) scrollTop()
      if (lesson.endOfLessonRedirect) {
        if (lesson.endOfLessonRedirect.includes('https://tally.so/r/')) {
          closeLesson()
          //   // redirect to embeded Tally form
          //   const tallyId = lesson.endOfLessonRedirect.replace(
          //     'https://tally.so/r/',
          //     ''
          //   )
          //   router.push(`/feedback?tally=${tallyId}`)
          // } else {
          //   // generic redirect
          //   document.location.href = lesson.endOfLessonRedirect
        }
      } else {
        if (IS_WHITELABEL) closeLesson()
        else {
          // default: go back to lessons
          closeLesson()
          // router.push('/lessons')
        }
      }
    }
    setSelectedAnswerNumber(null)
  }

  const selectAnswer = (e, answerNumber: number) => {
    if (!(slide.type === 'QUIZ' || slide.type === 'POLL')) return
    if (lesson.slug === 'bankless-archetypes') {
      slide.quiz.rightAnswerNumber = answerNumber
      setSelectedAnswerNumber(answerNumber)
    }
    if (!answerIsCorrect) setSelectedAnswerNumber(answerNumber)
    toast.closeAll()
    const feedback = slide.quiz?.feedback?.length
      ? slide.quiz?.feedback[answerNumber - 1]
      : undefined
    if (
      slide.quiz.rightAnswerNumber === answerNumber ||
      (slide.type === 'POLL' && answerNumber)
    ) {
      if (feedback?.length)
        toast({
          title: feedback,
          status: 'success',
          duration: 20000,
          isClosable: true,
        })
      // correct answer
      if (slide.type === 'QUIZ') {
        Mixpanel.track('quiz_correct_answer', {
          lesson: lesson?.englishName,
          quiz_question: `${slide.quiz.id.split('-').pop()}. ${
            slide.quiz.question
          }`,
          retry:
            slide.quiz.id in quizRetryCount ? quizRetryCount[slide.quiz.id] : 0,
        })
      }
      const answerNumberString = answerNumber.toString()
      if (slide.type === 'POLL') {
        // case for multiple answers
        let setQuiz = Array.isArray(quizSlide) ? quizSlide : []
        if (setQuiz?.includes(answerNumberString)) {
          setQuiz = setQuiz.filter(function (v) {
            return v !== answerNumberString
          })
        } else {
          setQuiz.push(answerNumberString)
          Mixpanel.track('poll_answer', {
            lesson: lesson?.englishName,
            quiz_question: `${slide.quiz.id.split('-').pop()}. ${
              slide.quiz.question
            }`,
            quiz_answer: slide.quiz.answers[answerNumber - 1],
          })
        }
        setQuizSlide(setQuiz)
      } else localStorage.setItem(`quiz-${slide.quiz.id}`, answerNumberString)
    } else if (!answerIsCorrect) {
      if (feedback?.length)
        toast({
          title: feedback,
          status: 'warning',
          duration: 20000,
          isClosable: true,
        })
      // wrong answer
      Mixpanel.track('quiz_wrong_answer', {
        lesson: lesson?.englishName,
        quiz_question: `${slide.quiz.id.split('-').pop()}. ${
          slide.quiz.question
        }`,
        quiz_answer: `${answerNumber}. ${slide.quiz.answers[answerNumber - 1]}`,
      })
      const newQuizRetryCount = quizRetryCount
      newQuizRetryCount[slide.quiz.id] =
        slide.quiz.id in newQuizRetryCount
          ? newQuizRetryCount[slide.quiz.id] + 1
          : 1
      setQuizRetryCount(newQuizRetryCount)
    }
  }

  const answerIsCorrect =
    (slide?.quiz &&
      parseInt(localStorage.getItem(`quiz-${slide.quiz.id}`)) ===
        slide.quiz.rightAnswerNumber) ||
    (slide.type === 'POLL' && quizSlide?.length)

  // shortcuts
  // TODO: add modal with all the shortcuts
  useHotkeys('?,shift+/', () =>
    alert(
      'TODO: add a modal with all the shortcuts 👉 previous slide ⬅️ | next slide ➡️ | select quiz answer 1️⃣ / 2️⃣ / 3️⃣ / 4️⃣'
    )
  )
  useHotkeys('left', () => clickLeft(), [
    isAnimationSlide,
    animationStepLS,
    animationSlideId,
    slide,
    currentSlide,
    isFirstSlide,
    isDesktop,
  ])
  useHotkeys('right', () => clickRight(), [
    isAnimationSlide,
    animationStepLS,
    animationSlideId,
    slide,
    answerIsCorrect,
    isLastSlide,
    currentSlide,
    lesson,
    isDesktop,
  ])
  useHotkeys('1', () => {
    answerRef?.current[1]?.click()
  })
  useHotkeys('2', () => {
    answerRef?.current[2]?.click()
  })
  useHotkeys('3', () => {
    answerRef?.current[3]?.click()
  })
  useHotkeys('4', () => {
    answerRef?.current[4]?.click()
  })
  useHotkeys('5', () => {
    answerRef?.current[5]?.click()
  })
  useHotkeys('Esc', () => {
    closeLesson()
  })

  const emojiRegexPattern = emojiRegex()

  function replaceEmojis(text) {
    const emojis = text.match(emojiRegexPattern)
    const parts = text.split(emojiRegexPattern)
    const result = []

    for (let i = 0; i < parts.length; i++) {
      // Add the non-emoji part to the result array
      result.push(parts[i])

      // If there's a corresponding emoji, add the CustomEmojiComponent
      if (emojis && emojis[i]) {
        const emoji = emojis[i]
        const unified = emojisToUnified[emoji]
        if (!unified) {
          console.log(`${emoji} no found !!`)
        } else {
          const em = <Emoji unified={unified} size={20} />
          result.push(em)
        }
      }
    }

    return result
  }

  function transform(node, index) {
    if (node.type === 'text' && emojiRegexPattern.test(node.data)) {
      return replaceEmojis(node.data)
    }
    if (node.type === 'tag' && node.name === 'a') {
      // force links to target _blank
      if (node.attribs?.href?.length)
        return (
          <ExternalLink href={node.attribs?.href}>
            {node.children[0]?.data}
          </ExternalLink>
        )
    }
    if (
      node.type === 'tag' &&
      node.name === 'iframe' &&
      node?.attribs?.src?.includes('/animation/') &&
      animationSlideId?.length
    ) {
      // HACK: integrate the embed animation iframe as a component
      return <Animation animationId={animationSlideId} />
    }
    if (isAnimationSlide && node.type === 'tag' && node.name === 'ol') {
      // only show all sibling elements that come after the <ol> element if all animation steps are complete
      const isAnimationInProgress = animationStepLS + 1 < animationSteps
      return (
        <ol
          className={
            isAnimationInProgress ? 'animation-in-progress' : 'animation'
          }
        >
          {processNodes(node.children, transform)}
        </ol>
      )
    }
    if (isAnimationSlide && node.type === 'tag' && node.name === 'li') {
      // hide next steps
      if (animationStepLS < index) return null

      return (
        <li
          onClick={
            animationStepLS === index
              ? () => {}
              : () => setAnimationStepLS(index)
          }
          style={animationStepLS === index ? {} : { cursor: 'pointer' }}
        >
          {processNodes(node.children, transform)}
        </li>
      )
    }
    // paragraphs starting with an emoji -> hide marker
    if (
      node.type === 'tag' &&
      node.name === 'li' &&
      emojiRegexPattern.test(node.children[0].data)
    ) {
      const p = processNodes(node.children, transform)
      p.shift()
      return (
        <li className="hide-marker">
          {replaceEmojis(node.children[0].data)}
          {p}
        </li>
      )
    }
    if (node.type === 'tag' && node.name === 'code') {
      // Tooltip with definition
      try {
        const keyword = node.children[0]?.data
        const lowerCaseKeyword = node.children[0]?.data?.toLowerCase()
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
            ? !t(`${lowerCaseKeyword}.definition`, { ns: 'keywords' }).endsWith(
                '.definition'
              )
              ? t(`${lowerCaseKeyword}.definition`, { ns: 'keywords' })
              : !t(`${lowerCaseKeywordSingular}.definition`, {
                  ns: 'keywords',
                }).endsWith('.definition')
              ? t(`${lowerCaseKeywordSingular}.definition`, { ns: 'keywords' })
              : englishDefition
            : englishDefition
        const nextHasPunctuation =
          node.next?.data && ['.', ',', ':'].includes(node.next?.data)
        const extra = nextHasPunctuation ? node.next?.data : ''
        if (nextHasPunctuation) node.next.data = ''
        if (!definition?.length) console.log('Missing definition:', keyword)
        return definition?.length ? (
          <>
            <span style={{ whiteSpace: 'nowrap' }}>
              <Keyword
                definition={definition}
                keyword={keyword}
                forceEnglish={
                  i18n.language !== 'en' && englishDefition === definition
                }
              />
            </span>
            {extra}
          </>
        ) : (
          <span className="is-missing">{keyword}</span>
        )
      } catch (error) {
        console.error('Error in code tag processing:', error)
        return null
      }
    }
  }

  if (
    slide?.quiz &&
    lesson.slug === 'bankless-archetypes' &&
    localStorage.getItem(`quiz-${slide.quiz.id}`)
  ) {
    slide.quiz.rightAnswerNumber = parseInt(
      localStorage.getItem(`quiz-${slide.quiz.id}`)
    )
  }

  return (
    <Slide
      p={8}
      pt={4}
      pb={2}
      mt={6}
      issmallscreen={isSmallScreen.toString()}
      ispreview={lesson?.isPreview?.toString()}
      istranslation={(i18n.language !== 'en').toString()}
      highlightnumber={isAnimationSlide ? animationStepLS.toString() : null}
      key={`slide-${currentSlide}`}
      slidetype={slide.type}
      position="relative"
    >
      {!lesson?.isPreview && !isSmallScreen && (
        <Box h="0" w="100%">
          <Button
            position="absolute"
            top="-24px"
            right="-24px"
            size="lg"
            iconSpacing="0"
            variant="secondaryBig"
            leftIcon={<X width="24px" height="24px" />}
            onClick={() => closeLesson()}
            p="0"
            _hover={{ p: '0' }}
          ></Button>
        </Box>
      )}
      <Text
        fontSize={isSmallScreen ? 'xl' : '3xl'}
        my={isSmallScreen ? '2' : '4'}
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        fontWeight="bold"
        as="h2"
      >
        <Box display="inline-flex" alignItems="center" mr="4">
          {slide.type === 'LEARN' && <LearnIcon />}
          {slide.type === 'QUIZ' && <QuizIcon />}
          {slide.type === 'POLL' && <PollIcon />}
          {slide.type === 'QUEST' && <QuestIcon />}
          {slide.type === 'END' && <RewardsIcon />}
        </Box>
        <Box color={slide.type === 'END' ? theme.colors.secondary : 'unset'}>
          {slide.type === 'QUIZ' || slide.type === 'POLL' ? (
            <>
              {lesson?.isPreview || !IS_PROD ? (
                <Box display="contents" color="orange">
                  [{currentSlide + 1}]{' '}
                </Box>
              ) : (
                ''
              )}
              {slide.type === 'QUIZ' ? t('Knowledge Check') : 'Poll'}
            </>
          ) : slide.type === 'QUEST' ? (
            <>
              {t(`{{lesson_title}} Quest`, {
                lesson_title: lesson.name,
                interpolation: { escapeValue: false },
              })}
            </>
          ) : (
            <>
              {lesson?.isPreview || !IS_PROD ? (
                <Box display="contents" color="orange">
                  [{currentSlide + 1}]{' '}
                </Box>
              ) : (
                ''
              )}
              {slide.title}
            </>
          )}
        </Box>
      </Text>
      <ProgressSteps
        step={currentSlide}
        total={numberOfSlides}
        pourcentage={
          isAnimationSlide
            ? ((animationStepLS + 1) / animationSteps) * 100
            : null
        }
      />
      <Box maxH={isSmallScreen ? 'unset' : '600px'}>
        <Box
          className="content"
          minH="calc(100vh - 360px)"
          pb={isSmallScreen ? '6' : 0}
          pt={slide.type === 'QUIZ' || slide.type === 'POLL' ? 0 : 4}
        >
          {slide.type === 'LEARN' && (
            <Box ref={slideRef}>
              {ReactHtmlParser(slide.content, { transform })}
            </Box>
          )}
          {(slide.type === 'QUIZ' || slide.type === 'POLL') && (
            <>
              <Answers
                mx={2}
                minH={isSmallScreen ? '470px' : '590px'}
                display="flex"
                flexDirection="column"
              >
                {slide.quiz?.question && (
                  <Box maxW="750px" margin="0 auto 32px">
                    <h2>
                      {ReactHtmlParser(slide?.quiz?.question, { transform })}
                    </h2>
                  </Box>
                )}
                <ButtonGroup size="lg" w="100%">
                  <SimpleGrid
                    columns={[null, null, 1]}
                    spacing="40px"
                    w="100%"
                    justifyItems="center"
                  >
                    {[1, 2, 3, 4, 5].map((n) => {
                      const answerState = answerIsCorrect
                        ? slide.quiz.rightAnswerNumber === n ||
                          (slide.type === 'POLL' &&
                            isQuizSlideArray &&
                            quizSlide?.includes(n.toString()))
                          ? 'CORRECT'
                          : 'UNSELECTED'
                        : selectedAnswerNumber === n && slide.type === 'QUIZ'
                        ? 'WRONG'
                        : 'UNSELECTED'
                      if (slide.quiz.answers?.length >= n)
                        return (
                          <QuizAnswer
                            ref={(el) => (answerRef.current[n] = el)}
                            key={`answer-${n}`}
                            w="100%"
                            maxW="500px"
                            p="4"
                            h="auto"
                            className={
                              slide.type === 'POLL'
                                ? isQuizSlideArray &&
                                  quizSlide?.includes(n.toString())
                                  ? 'poll checked'
                                  : 'poll'
                                : 'quiz'
                            }
                            border={
                              answerState === 'UNSELECTED'
                                ? '1px solid #646587'
                                : '1px solid #64658700'
                            }
                            fontWeight="normal"
                            whiteSpace="break-spaces"
                            onClick={(e) => {
                              if (
                                answerState !== 'CORRECT' ||
                                slide.type === 'POLL'
                              )
                                selectAnswer(e, n)
                            }}
                            answerstate={answerState}
                            justifyContent="space-between"
                            textAlign="left"
                            rightIcon={
                              answerState === 'UNSELECTED' &&
                              slide.type === 'POLL' ? (
                                <Square color="white" size={26} />
                              ) : answerState === 'CORRECT' ? (
                                slide.type === 'POLL' ? (
                                  <CheckSquare color="white" size={26} />
                                ) : (
                                  <CheckIcon color="white" />
                                )
                              ) : (
                                answerState === 'WRONG' && (
                                  <Warning weight="bold" color="white" />
                                )
                              )
                            }
                            isActive={
                              (answerIsCorrect &&
                                lesson.slug !== 'bankless-archetypes') ||
                              slide.type === 'POLL'
                            }
                            isPoll={slide.type === 'POLL'.toString()}
                          >
                            {slide.quiz.answers[n - 1]}
                          </QuizAnswer>
                        )
                    })}
                  </SimpleGrid>
                </ButtonGroup>
              </Answers>
            </>
          )}
          {slide.type === 'QUEST' && (
            <VStack flex="auto" minH="520px" justifyContent="center">
              {Quest?.questComponent}
            </VStack>
          )}
          {slide.type === 'END' && (
            <VStack flex="auto" minH="420px" justifyContent="center">
              {IS_WHITELABEL && !walletAddress ? (
                <>{Quest?.questComponent}</>
              ) : (
                <>
                  {lesson.badgeImageLink && (
                    <Box w="290px" h="290px">
                      <NFT nftLink={lesson.badgeImageLink} />
                    </Box>
                  )}
                  {lesson.badgeId ? (
                    <MintBadge
                      badgeId={lesson.badgeId}
                      isQuestCompleted={Quest.isQuestCompleted}
                    />
                  ) : (
                    <h2>
                      {t(
                        `Congrats on finishing our "{{lesson_title}}" lesson! 🥳`,
                        {
                          lesson_title: lesson.name,
                          interpolation: { escapeValue: false },
                        }
                      )}
                    </h2>
                  )}
                  <p>
                    {!embed &&
                      lesson?.endOfLessonText &&
                      lesson?.endOfLessonText}
                  </p>
                </>
              )}
            </VStack>
          )}
        </Box>
      </Box>
      <SlideNav display="flex" p={4} issmallscreen={isSmallScreen.toString()}>
        <HStack flex="auto">
          {isSmallScreen && (
            <Button
              ref={buttonLeftRef}
              variant="secondaryBig"
              size="lg"
              onClick={() => closeLesson()}
              leftIcon={<X width="24px" height="24px" />}
              ml={longSlide ? '600px' : '0'}
              p="0"
              _hover={{ p: '0' }}
              iconSpacing="0"
            >
              {isSmallScreen ? '' : 'Prev'}
            </Button>
          )}
          {!isFirstSlide && (
            <Button
              ref={buttonLeftRef}
              variant="secondaryBig"
              size="lg"
              onClick={() => clickLeft()}
              leftIcon={<ArrowBackIcon />}
              ml={longSlide ? '600px' : '0'}
            >
              {isSmallScreen ? '' : 'Prev'}
            </Button>
          )}
          {
            /* lesson.isCommentsEnabled && */
            !isMobile &&
              !lesson?.isPreview &&
              !IS_WHITELABEL &&
              (slide.type === 'LEARN' ||
                ((slide.type === 'QUIZ' || slide.type === 'POLL') &&
                  answerIsCorrect)) &&
              address && (
                <>
                  <EditContentModal lesson={lesson} slide={slide} />
                </>
              )
          }
          {lesson?.isPreview && (
            <Box position="relative">
              DEBUG
              <Helper
                fullscreen
                title="DEBUG"
                definition={
                  <Box>
                    <StyledKeywords>
                      Keyword list:{' '}
                      {ReactHtmlParser(
                        lesson.keywords
                          .map((keyword) => `<code>${keyword}</code>`)
                          .join(', '),
                        { transform }
                      )}
                    </StyledKeywords>
                    Number of words:{' '}
                    {lesson.slides
                      .map((slide) => countWords(slide.content))
                      .reduce((a, b) => {
                        return a + b
                      }, 0)}
                  </Box>
                }
              />
            </Box>
          )}
          {slide.type === 'QUEST' && address && (
            <ExternalLink href={'/report-an-issue'} alt={t('Report an Issue')}>
              <Button
                leftIcon={<Bug width="24px" height="24px" />}
                iconSpacing={isSmallScreen ? 0 : '8px'}
                variant="outline"
              >
                {isSmallScreen ? '' : t('Report an Issue')}
              </Button>
            </ExternalLink>
          )}
        </HStack>
        <HStack>
          {slide.type === 'QUEST' &&
          !Quest?.isQuestCompleted &&
          !isSmallScreen ? (
            <Tooltip
              hasArrow
              label={t(
                "By skipping this quest you won't be able to claim the lesson badge"
              )}
            >
              <Button variant="outline" onClick={() => closeLesson()}>
                {t('Skip Quest')}
              </Button>
            </Tooltip>
          ) : null}
          {!isLastSlide || (lesson?.endOfLessonText && !embed) ? (
            <Button
              ref={buttonRightRef}
              variant="primaryBig"
              size="lg"
              isDisabled={
                (slide.quiz && !answerIsCorrect) ||
                (slide.type === 'QUEST' && !Quest?.isQuestCompleted)
              }
              onClick={() => clickRight()}
              rightIcon={<ArrowForwardIcon />}
            >
              Next
            </Button>
          ) : (
            <>
              <Button
                size="lg"
                isDisabled={
                  lesson.badgeId &&
                  !Quest?.isQuestCompleted &&
                  lesson.slug !== 'ethereum-basics'
                }
                onClick={() => closeLesson()}
                variant="primaryBigLast"
                rightIcon={<ArrowForwardIcon />}
              >
                {lesson.badgeId &&
                isBadgeMintedLS === false &&
                Quest?.isQuestCompleted
                  ? // ? t('Mint Badge')
                    t('Finish')
                  : t('Finish')}
              </Button>
            </>
          )}
        </HStack>
      </SlideNav>
    </Slide>
  )
}

export default Lesson
