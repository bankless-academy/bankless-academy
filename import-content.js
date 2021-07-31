/* eslint-disable no-console */
const axios = require('axios')
const FileSystem = require("fs")

const DEFAULT_NOTION_ID = '1813af42f771491b8d9af966d9d433fe'

// TEMP
const MARKDOWN_CONTENT = `# header 1
## header 1.1

- learning 1
- learning 2

## header 1.2

- learning 3
- learning 4

# header 2

## header 2.1

- learning 5
- learning 6`
const MARKDOWN_VIDEO = `# EIP-1559 | Everything You Need to Know

https://www.youtube.com/watch?v=YZeXrChJ5n8

- learning 1
- learning 2
`
const QUIZ_TEST = {
  question: 'Quiz question',
  answer_1: 'Answer 1',
  answer_2: 'Answer 2',
  answer_3: 'Answer 3',
  answer_4: 'Answer 4',
  right_answer_number: 2,
}
const SLIDES_DEMO = [
  {
    type: 'LEARN',
    title: 'First slide',
    content: MARKDOWN_CONTENT,
  },
  {
    type: 'LEARN',
    title: 'Second slide',
    content: MARKDOWN_VIDEO,
  },
  {
    type: 'QUIZ',
    title: 'First quiz',
    quiz: { ...QUIZ_TEST },
  },
  {
    type: 'LEARN',
    title: 'Learn more',
    content: MARKDOWN_CONTENT,
  },
  {
    type: 'QUIZ',
    title: 'Second quiz',
    quiz: { ...QUIZ_TEST },
  },
  {
    type: 'QUEST',
    title: 'Wallet Basics Quest title',
    component: 'WalletBasics',
  },
  {
    type: 'POAP',
    title: 'Collect your POAP',
  },
]

// TODO: add typing?
const FIELD_MATCHING = {
  'POAP image link': 'poapImageLink',
  'What will you be able to do after this course?': 'learningActions',
  'Knowledge Requirements': 'knowledgeRequirements',
  'POAP event ID': 'poapEventId',
  'Duration in minutes': 'duration',
  'What will you learn from this?': 'learnings',
  Difficulty: 'difficulty',
  Description: 'description',
  Name: 'name'
}
console.log(FIELD_MATCHING)

const args = process.argv
const NOTION_ID = (args[2] && args[3] && args[2] === '-id' && args[3].length === 32) ? args[3] : DEFAULT_NOTION_ID
console.log('NOTION_ID', NOTION_ID)

axios.get(`https://potion-api.vercel.app/table?id=${NOTION_ID}`)
  .then(function (response) {
    let quests = []
    response.data.map(function (course) {
      const notionContentId = course.id.replace(/-/g, '')
      console.log(notionContentId)
      let contentInfos = Object.keys(FIELD_MATCHING).reduce((obj, k) => Object.assign(obj, { [FIELD_MATCHING[k]]: Number.isNaN(parseInt(course.fields[k])) ? course.fields[k] : parseInt(course.fields[k]) }), {})
      contentInfos['slug'] = contentInfos['name'].toLowerCase()
        .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-') // collapse dashes
      let quizNb = 0;
      const slides = SLIDES_DEMO.map((slide) => {
        if (slide.type === 'QUIZ') {
          quizNb++;
          slide.quiz.id = `${contentInfos.slug}-${quizNb}`
        }
        return slide
      })
      contentInfos['slides'] = slides
      console.log(contentInfos)
      quests.push(contentInfos)
    })
    const FILE_CONTENT = `import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = ${JSON.stringify(quests, null, 2)}

export default QUESTS
`
    FileSystem.writeFile('src/constants/quests.ts', FILE_CONTENT, (error) => {
      if (error) throw error
    })
  })
  .catch(function (error) {
    console.log(error)
  })
