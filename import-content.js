/* eslint-disable no-console */
const axios = require('axios')
const fs = require('fs')
const stringifyObject = require('stringify-object')
const keywords = require('./keywords.json')

const DEFAULT_NOTION_ID = '1dd77eb6ed4147f6bdfd6f23a30baa46'
const POTION_API = 'https://potion.banklessacademy.com'

const KEY_MATCHING = {
  'POAP image link': 'poapImageLink',
  'Lesson image link': 'lessonImageLink',
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
const NOTION_ID = args[2] && args[2].length === 32 ? args[2] : DEFAULT_NOTION_ID
console.log('NOTION_ID', NOTION_ID)

axios
  .get(`${POTION_API}/table?id=${NOTION_ID}`)
  .then((response) => {
    const lessons = []
    const promiseArray = response.data.map((course, index) => {
      console.log('course Notion link: ', `${POTION_API}/html?id=${course.id}`)
      return axios
        .get(`${POTION_API}/html?id=${course.id}`)
        .then((response) => {
          // replace keys
          const lesson = Object.keys(KEY_MATCHING).reduce(
            (obj, k) =>
              Object.assign(obj, {
                [KEY_MATCHING[k]]: Number.isNaN(parseInt(course.fields[k]))
                  ? course.fields[k]
                  : // transform to number if the string contains a number
                    parseInt(course.fields[k]),
              }),
            {}
          )
          lesson.notionId = course.id.replace(/-/g, '')
          lesson.slug = lesson.name
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-') // collapse dashes
          const content = JSON.parse(
            `[` +
              response.data
                .replace(/"/g, "'")
                // .replace(/ *\([^)]*\) */g, '') // strip parentheses content (slide numbers)
                .replace(/\s+/g, ' ') // collapse whitespace
                .replace(
                  /<h1 notion-id='(.*?)'>/g,
                  `"},{"type": "LEARN", "notionId":"$1", "title": "`
                )
                .replace(/<\/h1>/g, `","content": "`)
                .substr(3) + // remove extra "}, at the beginning
              `"}]`
          )
          let quizNb = 0
          const slides = content.map((slide) => {
            // replace with type QUIZ
            if (slide.content.includes("<div class='checklist'>")) {
              quizNb++
              slide.type = 'QUIZ'
              const [question, answers] = slide.content.split(
                "<div class='checklist'>"
              )
              const quiz_answers = answers.split('</label><label>')
              delete slide.content
              slide.quiz = {}
              slide.quiz.question = question
                .replace('<p>', '')
                .replace('</p>', '')
              slide.quiz.rightAnswerNumber = null
              slide.quiz.answers = []
              quiz_answers.map((quiz_answer, i) => {
                const nb = i + 1
                if (
                  slide.quiz.rightAnswerNumber !== null &&
                  quiz_answer.includes('disabled checked>')
                )
                  // NOTION BUG: in case of bug with checked checkbox, recreate a new one
                  throw new Error(
                    `more than 1 right answer, please check ${POTION_API}/html?id=${course.id}`
                  )
                if (quiz_answer.includes('disabled checked>'))
                  slide.quiz.rightAnswerNumber = nb
                slide.quiz.answers.push(
                  quiz_answer.replace(
                    // remove tags
                    /<\/?[^>]+(>|$)/g,
                    ''
                  )
                )
              })
              slide.quiz.id = `${lesson.slug}-${quizNb}`
            }
            // TODO: move this logic to the frontend?
            // replace keywords in content
            if (slide.content) {
              if (slide.content.includes('<img ')) {
                // content contains an image
                const [bloc1, bloc2] = slide.content.split('<img ')
                if (bloc1 !== '' && bloc2 !== '')
                  slide.content = `<div class="bloc1">${bloc1}</div><div class="bloc2"><img ${bloc2}</div>`
              } else if (slide.content.includes('<iframe ')) {
                // content contains an iframe
                const [bloc1, bloc2] = slide.content.split('<iframe ')
                if (bloc2 !== '')
                  slide.content = `${
                    bloc1 !== '' ? `<div class="bloc1">${bloc1}</div>` : ''
                  }<div class="bloc2"><iframe allowfullscreen ${bloc2.replace(
                    /feature=oembed/g,
                    'feature=oembed&rel=0'
                  )}</div>`
              } else {
                // text only
                slide.content = `<div class="bloc1">${slide.content}</div>`
              }
              const content = slide.content.toLowerCase()
              for (const word in keywords) {
                const search = '<code>' + word.toLowerCase() + '</code>'
                if (content.includes(search)) {
                  console.log('word found: ', word)
                  slide.content = slide.content.replace(
                    new RegExp(search, 'gi'),
                    `<span class="tooltip" definition="${keywords[word].definition}">$&</span>`
                  )
                }
              }
              slide.content = slide.content
                .replace(/<code>/g, '')
                .replace(/<\/code>/g, '')
            }
            // replace keywords in title
            if (slide.title && slide.type !== 'QUIZ') {
              const title = slide.title.toLowerCase()
              for (const word in keywords) {
                const search = '<code>' + word.toLowerCase() + '</code>'
                if (title.includes(search)) {
                  console.log('word found in title: ', word)
                  slide.title = slide.title.replace(
                    new RegExp(search, 'gi'),
                    `<span class="tooltip" definition="${keywords[word].definition}">$&</span>`
                  )
                }
              }
              slide.title = slide.title
                .replace(/<code>/g, '')
                .replace(/<\/code>/g, '')
            }
            return slide
          })
          const componentName = lesson.name
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
            .replace(/\s+/g, '')
          slides.push({
            type: 'QUEST',
            title: `${lesson.name} Quest`,
            component: componentName,
          })
          slides.push({
            type: 'POAP',
            title: 'Collect your POAP',
          })
          lesson.slides = slides
          console.log('lesson', lesson)
          lessons[index] = lesson
        })
    })
    axios.all(promiseArray).then(() => {
      const FILE_CONTENT = `import { LessonType } from 'entities/lesson'

const LESSONS: LessonType[] = ${stringifyObject(lessons, {
        indent: '  ',
        singleQuotes: true,
      })}

export default LESSONS
`
      fs.writeFile('src/constants/lessons.ts', FILE_CONTENT, (error) => {
        if (error) throw error
      })
      console.log(
        'export done -> check syntax & typing errors in src/constants/lessons.ts'
      )
    })
  })
  .catch((error) => {
    console.error(error)
  })
