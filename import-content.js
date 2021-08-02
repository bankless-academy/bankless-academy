/* eslint-disable no-console */
const axios = require('axios')
const FileSystem = require('fs')
const stringifyObject = require('stringify-object')

const DEFAULT_NOTION_ID = '1813af42f771491b8d9af966d9d433fe'
const POTION_API = 'https://potion-api.vercel.app'

const KEY_MATCHING = {
  'POAP image link': 'poapImageLink',
  'What will you be able to do after this course?': 'learningActions',
  'Knowledge Requirements': 'knowledgeRequirements',
  'POAP event ID': 'poapEventId',
  'Duration in minutes': 'duration',
  'What will you learn from this?': 'learnings',
  Difficulty: 'difficulty',
  Description: 'description',
  Name: 'name',
}

const args = process.argv
const NOTION_ID =
  args[2] && args[3] && args[2] === '-id' && args[3].length === 32
    ? args[3]
    : DEFAULT_NOTION_ID
console.log('NOTION_ID', NOTION_ID)

axios
  .get(`${POTION_API}/table?id=${NOTION_ID}`)
  .then((response) => {
    const quests = []
    const promiseArray = response.data.map((course, index) => {
      console.log('course Notion link: ', `${POTION_API}/html?id=${course.id}`)
      return axios
        .get(`${POTION_API}/html?id=${course.id}`)
        .then((response) => {
          // replace keys
          const quest = Object.keys(KEY_MATCHING).reduce(
            (obj, k) =>
              Object.assign(obj, {
                [KEY_MATCHING[k]]: Number.isNaN(parseInt(course.fields[k]))
                  ? course.fields[k]
                  : // transform to number if the string contains a number
                    parseInt(course.fields[k]),
              }),
            {}
          )
          quest.notionId = course.id.replace(/-/g, '')
          quest.slug = quest.name
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-') // collapse dashes
          const content = JSON.parse(
            `[` +
              response.data
                .replace(/"/g, "'")
                .replace(/<h1>/g, `"},{"type": "LEARN","title": "`)
                .replace(/<\/h1>/g, `","content": "`)
                .substr(3) + // remove extra "}, at the beginning
              `"}]`
          )
          let quizNb = 0
          const slides = content.map((slide) => {
            // replace with type QUIZ
            if (
              slide.content.substr(0, "<div class='checklist'>".length) ===
              "<div class='checklist'>"
            ) {
              quizNb++
              slide.type = 'QUIZ'
              const questions = slide.content.split('</label><label>')
              delete slide.content
              slide.quiz = {}
              slide.quiz.rightAnswerNumber = null
              questions.map((question, i) => {
                const nb = i + 1
                if (
                  slide.quiz.rightAnswerNumber !== null &&
                  question.includes('disabled checked>')
                )
                  // NOTION BUG: in case of bug with checked checkbox, recreate a new one
                  throw new Error(
                    `more than 1 right answer, please check ${POTION_API}/html?id=${course.id}`
                  )
                if (question.includes('disabled checked>'))
                  slide.quiz.rightAnswerNumber = nb
                slide.quiz[`answer_${nb}`] = question.replace(
                  // remove tags
                  /<\/?[^>]+(>|$)/g,
                  ''
                )
              })
              slide.quiz.id = `${quest.slug}-${quizNb}`
            }
            return slide
          })
          const componentName = quest.name
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
            .replace(/\s+/g, '')
          slides.push({
            type: 'QUEST',
            title: `${quest.name} Quest`,
            component: componentName,
          })
          slides.push({
            type: 'POAP',
            title: 'Collect your POAP',
          })
          quest.slides = slides
          console.log('quest', quest)
          quests[index] = quest
        })
    })
    axios.all(promiseArray).then(() => {
      const FILE_CONTENT = `import { QuestType } from 'entities/quest'

const QUESTS: QuestType[] = ${stringifyObject(quests, {
        indent: '  ',
        singleQuotes: true,
      })}

export default QUESTS
`
      FileSystem.writeFile('src/constants/quests.ts', FILE_CONTENT, (error) => {
        if (error) throw error
      })
      console.log(
        'export done -> check syntax & typing errors in src/constants/quests.ts'
      )
    })
  })
  .catch((error) => {
    console.log(error)
  })
