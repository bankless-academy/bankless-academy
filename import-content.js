/* eslint-disable no-console */
require('dotenv').config()
const axios = require('axios')
const knex = require('knex')
const fs = require('fs')
const crc32 = require('js-crc').crc32
const stringifyObject = require('stringify-object')
const config = require('./knexfile.js')
const db = knex(config)
const { TABLES } = require('./db.js')

const defaultKeywords = require('./keywords.json')
const whitelabelKeywords = require('./whitelabel-keywords.json')

const PROJECT_DIR = process.env.PROJECT_DIR || ''
const IS_WHITELABEL = PROJECT_DIR !== ''
const LESSON_FILENAME = IS_WHITELABEL ? 'whitelabel_lessons' : 'lessons'
const DEFAULT_NOTION_ID = '1dd77eb6ed4147f6bdfd6f23a30baa46'
const POTION_API = 'https://potion.banklessacademy.com'

const keywords = IS_WHITELABEL ? whitelabelKeywords : defaultKeywords

const KEY_MATCHING = {
  'POAP image': 'poapImageLink',
  'Lesson image': 'lessonImageLink',
  'Social image': 'socialImageLink',
  'What will you be able to do after this lesson?': 'learningActions',
  'Landing page copy': 'marketingDescription',
  // 'Knowledge Requirements': 'knowledgeRequirements',
  'POAP event ID': 'poapEventId',
  'Kudos ID': 'kudosId',
  'Duration in minutes': 'duration',
  'What will you learn from this?': 'learnings',
  Difficulty: 'difficulty',
  Description: 'description',
  Name: 'name',
  Module: 'moduleId',
  Quest: 'quest',
  'Publication status': 'publicationStatus',
  'Featured on homepage': 'isFeaturedOnHomepage',
  'Enable Comments': 'isCommentsEnabled',
  'End of Lesson redirect': 'endOfLessonRedirect',
  'End of Lesson text': 'endOfLessonText',
  'Community discussion link': 'communityDiscussionLink',
}

const args = process.argv
const NOTION_ID = args[2] && args[2].length === 32 ? args[2] : process.env.DEFAULT_CONTENT_DB_ID || DEFAULT_NOTION_ID
console.log('NOTION_ID', NOTION_ID)

const slugify = (text) => text.toLowerCase()
  .replace(/<[^>]*>?/gm, '') // remove tags
  .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
  .replace(/\s+/g, '-') // collapse whitespace and replace by -
  .replace(/-+/g, '-') // collapse dashes

const get_img = (imageLink, slug, image_name) => {
  const [file_name] = imageLink.split('?')
  const file_extension = file_name.match(/\.(png|svg|jpg|jpeg|webp|mp4)/)[1].replace('jpeg', 'jpg')
  // console.log(file_extension)
  // create "unique" hash based on Notion imageLink (different when re-uploaded)
  const hash = crc32(file_name)
  const image_dir = `/${PROJECT_DIR}lesson/${slug}`
  const local_image_dir = `public${image_dir}`
  // create image directory dynamically in case it doesn't exist yet
  if (!fs.existsSync(local_image_dir)) {
    fs.mkdirSync(local_image_dir);
  }
  const image_path = `${image_dir}/${slugify(image_name)}-${hash}.${file_extension}`
  // console.log('image_path', image_path)
  const local_image_path = `public${image_path}`
  if (!fs.existsSync(local_image_path)) {
    download_image(imageLink, local_image_path)
    console.log('downloading image: ', local_image_path)
  }
  return image_path
}

const download_image = (url, image_path) =>
  axios({
    url,
    responseType: 'stream',
  }).then(function (response) {
    response.data.pipe(fs.createWriteStream(image_path))
  })

axios
  .get(`${POTION_API}/table?id=${NOTION_ID}`)
  .then((notionRows) => {
    const lessons = []
    const promiseArray = notionRows.data.map((notion, index) => {
      // DEV_MODE: only test first lesson
      // if (index > 0) return

      // replace keys
      const lesson = Object.keys(KEY_MATCHING).reduce(
        (obj, k) =>
          Object.assign(obj, {
            // transform to number if the string contains a number
            [KEY_MATCHING[k]]: Number.isNaN(parseInt(notion.fields[k])) ||
              // ignore type transform for ModuleId
              k === 'Module'
              ? notion.fields[k]
              : parseInt(notion.fields[k]),
          }),
        {}
      )
      if (lesson.publicationStatus === undefined) return
      console.log('Notion lesson link: ', `${POTION_API}/html?id=${notion.id}`)

      if (lesson.description === undefined) lesson.description = ''
      if (lesson.socialImageLink === undefined) lesson.socialImageLink = null
      if (lesson.poapEventId === undefined) lesson.poapEventId = null
      if (lesson.kudosId === undefined) lesson.kudosId = null
      if (lesson.poapImageLink === undefined) lesson.poapImageLink = null
      if (lesson.lessonImageLink === undefined) lesson.lessonImageLink = null
      if (lesson.marketingDescription === undefined) lesson.marketingDescription = lesson.description
      if (lesson.learningActions === undefined) lesson.learningActions = ''
      if (lesson.learnings === undefined) lesson.learnings = ''
      if (lesson.isFeaturedOnHomepage === undefined) lesson.isFeaturedOnHomepage = false
      if (lesson.isCommentsEnabled === undefined) lesson.isCommentsEnabled = false
      if (lesson.endOfLessonRedirect === undefined) lesson.endOfLessonRedirect = null
      if (lesson.moduleId === undefined) delete lesson.moduleId
      else {
        lesson.moduleId = lesson.moduleId[0]
      }
      if (lesson.communityDiscussionLink === undefined) delete lesson.communityDiscussionLink

      return axios
        .get(`${POTION_API}/html?id=${notion.id}`)
        .then(async (htmlPage) => {
          lesson.notionId = notion.id.replace(/-/g, '')
          lesson.slug = slugify(lesson.name)
          // add notionId to DB
          await db(TABLES.credentials).insert([{ notion_id: lesson.notionId }]).onConflict('notion_id')
            .ignore()

          if (lesson.poapImageLink) {
            lesson.poapImageLink = get_img(lesson.poapImageLink, lesson.slug, 'poap')
          }
          if (lesson.lessonImageLink) {
            lesson.lessonImageLink = get_img(lesson.lessonImageLink, lesson.slug, 'lesson')
          }
          if (lesson.socialImageLink) {
            lesson.socialImageLink = get_img(lesson.socialImageLink, lesson.slug, 'social')
          }

          lesson.imageLinks = []
          // data cleaning
          htmlPage.data = htmlPage.data
            .replace(/"/g, "'")
            // strip parentheses content (slide numbers)
            // .replace(/ *\([^)]*\) */g, '')
            // collapse whitespace
            .replace(/\s+/g, ' ')
            .replace(
              /<h1 notion-id='(.*?)'>/g,
              `"},{"type": "LEARN", "notionId":"$1", "title": "`
            )
            .replace(/<\/h1>/g, `","content": "`)
            // remove extra "}, at the beginning
            .substr(3)
          const content = JSON.parse(`[${htmlPage.data}"}]`)
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
                    `more than 1 right answer, please check ${POTION_API}/html?id=${notion.id}`
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
            if (slide.content) {
              // download images locally
              const imageLinks = [...slide.content.matchAll(/<img src='(.*?)'/gm)].map(a => a[1])
              for (const imageLink of imageLinks) {
                const file_extension = imageLink.match(/\.(png|svg|jpg|jpeg|webp|mp4)\?table=/)[1]
                // create "unique" hash based on Notion imageLink (different when re-uploaded)
                const hash = crc32(imageLink)
                const image_dir = `/${PROJECT_DIR}lesson/${lesson.slug}`
                const local_image_dir = `public${image_dir}`
                // create image directory dynamically in case it doesn't exist yet
                if (!fs.existsSync(local_image_dir)) {
                  fs.mkdirSync(local_image_dir);
                }
                const image_path = `${image_dir}/${slugify(slide.title)}-${hash}.${file_extension}`
                const local_image_path = `public${image_path}`
                slide.content = slide.content.replace(imageLink, image_path)
                lesson.imageLinks.push(image_path)
                if (!fs.existsSync(local_image_path)) {
                  download_image(imageLink, local_image_path)
                  console.log('downloading image: ', local_image_path)
                }
              }

              if ((slide.content.match(/<img /g) || []).length > 1) {
                // multiple images
                const blocs = slide.content.replace(/<img src='/g, '|SPLIT|').replace(/'>/g, '|SPLIT|').replace('|SPLIT|', '').split('|SPLIT|')
                slide.content = blocs.reduce((p, c, i) => (i % 2 === 0) ? `${p}<div class="bloc-ab"><div class="bloc-a"><img src='${c}'></div>` : `${p}<div class="bloc-b">${c}</div></div>`, '')
              } else if (slide.content.includes('<img ')) {
                // content contains an image -> 1st bloc = text | second bloc = square image
                const [bloc1, bloc2] = slide.content.split('<img ')
                if (bloc1 !== '' && bloc2 !== '')
                  slide.content = `<div class="bloc1">${bloc1}</div><div class="bloc2"><img ${bloc2}</div>`
              } else if (slide.content.includes('<iframe ')) {
                // content contains an iframe
                const [bloc1, bloc2] = slide.content.split('<iframe ')
                if (bloc2 !== '') {
                  slide.content = `${bloc1 !== '' ? `<div class="bloc1">${bloc1}</div>` : ''}`
                  slide.content += `<div class="bloc2"><iframe allowfullscreen ${bloc2.replace(/feature=oembed/g, 'feature=oembed&rel=0')}</div>`
                }
              } else {
                // text only
                slide.content = `<div class="bloc1">${slide.content}</div>`
              }
              // replace keywords in content
              // TODO: move this logic to the frontend?
              const content = slide.content.toLowerCase()
              for (const word in keywords) {
                const search = '<code>' + word.toLowerCase() + '</code>'
                if (content.includes(search)) {
                  // console.log('word found: ', word)
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
          const componentName = PROJECT_DIR.replace(/[^A-Za-z0-9]/g, '') + lesson.name
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
            .replace(/\s+/g, '')
            .replace(/[^A-Za-z0-9]/g, '') // remove invalid chars
          if (IS_WHITELABEL) {
            lesson.quest = componentName
          } else if (lesson.quest === true) {
            lesson.quest = componentName
            slides.push({
              type: 'QUEST',
              title: `${lesson.name} Quest`,
              component: componentName,
            })
          } else {
            delete lesson.quest
          }
          // TEMP: replace POAP with END flow
          // slides.push({
          //   type: 'POAP',
          //   title: `Collect your <span class="tooltip" definition="${keywords['POAP'].definition}">POAP</span>`,
          // })
          slides.push({
            type: 'END',
            title: lesson.kudosId ? 'Lesson Reward' : 'End of lesson',
          })
          lesson.slides = slides
          // console.log('lesson', lesson)
          lessons[index] = lesson
          // TODO: remove old images (diff between old/new lesson.imageLinks)
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
      fs.writeFile(`src/constants/${LESSON_FILENAME}.ts`, FILE_CONTENT, (error) => {
        if (error) throw error
      })
      console.log(
        `export done -> check syntax & typing errors in src/constants/${LESSON_FILENAME}.ts`
      )
    })
  })
  .catch((error) => {
    console.error(error)
  })
