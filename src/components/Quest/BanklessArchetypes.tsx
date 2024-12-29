/* eslint-disable no-console */
import { Box } from '@chakra-ui/react'
import ReactHtmlParser from 'react-html-parser'

import { LESSONS } from 'constants/index'
import { LessonType } from 'entities/lesson'
import { ARCHETYPES_MATRIX } from 'constants/archetypes'
import { useSmallScreen } from 'hooks/index'

const BanklessArchetypes = (): {
  isQuestCompleted: boolean
  questComponent: React.ReactElement
} => {
  const [isSmallScreen] = useSmallScreen()

  const MATCHING_ALGO = {
    no: {
      '1': 100,
      '2': 75,
      '3': 50,
      '4': 25,
      '5': 0,
    },
    yes: {
      '1': 0,
      '2': 25,
      '3': 50,
      '4': 75,
      '5': 100,
    },
  }
  const TRAITS = [
    'Risk',
    'Self sovereignty',
    'DEX',
    'Trads',
    'LP',
    'Long term',
    'Works in a DAO',
    'Crypto knowledge',
    'Crypto donation',
    'Buys stuff in crypto',
    'Deployed smart contracts',
    'Anon',
    'Works in web3',
    'Creates digital art',
    'Owns Bitcoin',
    'Owns NFTs',
    'Aping into something new',
    'Owns shitcoin',
  ]

  const LESSON_SLUG = 'bankless-archetypes'

  const currentLesson = LESSONS.find(
    (lesson: LessonType) => lesson.slug === LESSON_SLUG
  )

  const nbOfQuizzes = currentLesson.slides.filter(
    (slide) => slide.type === 'QUIZ'
  ).length

  let quiz_res = ''
  let res = ''
  const quiz_results = []

  for (let i = 1; i <= nbOfQuizzes; i++) {
    const quiz_result = localStorage.getItem(`quiz-${LESSON_SLUG}-${i}`)
    quiz_results.push(quiz_result)
    quiz_res += `${TRAITS[i - 1]}:${quiz_result}<br />`
  }
  // console.log(quiz_results)

  const ARCHETYPES = Object.keys(ARCHETYPES_MATRIX)

  const matching_scores = []
  for (const archetype of ARCHETYPES) {
    let trait_number = 0
    const matching_array = []
    for (const trait of ARCHETYPES_MATRIX[archetype]) {
      const trait_value = quiz_results[trait_number]
      if (trait === 'yes' || trait === 'no') {
        matching_array.push(MATCHING_ALGO[trait][trait_value])
      }
      trait_number++
    }
    const matching_score =
      matching_array.reduce((x, y) => x + y) / matching_array?.length
    matching_scores.push({ archetype, score: matching_score })
  }

  const sorted_matching_scores = matching_scores.sort(function (a, b) {
    return b.score - a.score
  })
  for (const matching_score of sorted_matching_scores) {
    res += `${matching_score.archetype}: ${matching_score.score.toFixed(
      2
    )}%<br />`
  }

  return {
    isQuestCompleted: true,
    questComponent: (
      <Box display={isSmallScreen ? 'block' : 'flex'} w="80%">
        <div className="bloc1">
          <h2>Answer selected:</h2>
          {ReactHtmlParser(quiz_res)}
        </div>
        <div className="bloc2">
          <h2>Bankless Archetype results:</h2>
          {ReactHtmlParser(res)}
        </div>
      </Box>
    ),
  }
}

export default BanklessArchetypes
