/* eslint-disable no-console */
const axios = require('axios')
const FileSystem = require('fs')

const DEFAULT_NOTION_ID = '1813af42f771491b8d9af966d9d433fe'

// TODO: add typing?
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
console.log(KEY_MATCHING)

const args = process.argv
const NOTION_ID =
  args[2] && args[3] && args[2] === '-id' && args[3].length === 32
    ? args[3]
    : DEFAULT_NOTION_ID
console.log('NOTION_ID', NOTION_ID)

axios
  .get(`https://potion-api.vercel.app/table?id=${NOTION_ID}`)
  .then(async function (response) {
    const courses = response.data.sort((a, b) => parseInt(a.fields.order) > parseInt(b.fields.order))
    let quests = []
    await courses.map(async function (course) {
      const notionContentId = course.id.replace(/-/g, '')
      console.log(notionContentId)
      await axios.get(`https://potion-api.vercel.app/html?id=${notionContentId}`)
        .then(async function (response) {
          // replace keys
          let contentInfos = Object.keys(KEY_MATCHING).reduce(
            (obj, k) =>
              Object.assign(obj, {
                [KEY_MATCHING[k]]: Number.isNaN(parseInt(course.fields[k]))
                  ? course.fields[k]
                  // transform to number if the string contains a number
                  : parseInt(course.fields[k]),
              }),
            {}
          )
          contentInfos['slug'] = contentInfos['name']
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-') // collapse dashes
          const content = JSON.parse(`[` + response.data
            .replace(/"/g, "'")
            .replace(/<h1>/g, `"},{"type": "LEARN","title": "`)
            .replace(/<\/h1>/g, `","content": "`)
            .substr(3) + `"}]`)
          let quizNb = 0
          const slides = content.map((slide) => {
            // QUIZ
            if (slide.content.substr(0, "<div class='checklist'>".length) === "<div class='checklist'>") {
              quizNb++
              slide.type = 'QUIZ'
              let questions = slide.content.split('</label><label>')
              slide.quiz = {}
              questions.map((question, i) => {
                const nb = i + 1
                if (question.includes('disabled checked>')) slide.quiz['right_answer_number'] = nb
                slide.quiz[`answer_${nb}`] = question.replace(/<\/?[^>]+(>|$)/g, "")
              })
              slide.quiz.id = `${contentInfos.slug}-${quizNb}`
            }
            return slide
          })
          // TODO: dyn
          slides.push({
            type: 'QUEST',
            title: 'Wallet Basics Quest',
            component: 'WalletBasics',
          })
          slides.push({
            type: 'POAP',
            title: 'Collect your POAP',
          })
          console.log(slides)
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
  })
  .catch(function (error) {
    console.log(error)
  })
