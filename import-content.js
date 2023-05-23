/* eslint-disable no-unreachable */
/* eslint-disable no-console */
require('dotenv').config()
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const axios = require('axios')
const knex = require('knex')
const fs = require('fs')
const crc32 = require('js-crc').crc32
const stringifyObject = require('stringify-object')

const config = require('./knexfile.js')
const db = knex(config)
const { TABLES } = require('./db.js')

const PROJECT_DIR = process.env.PROJECT_DIR || ''
const IS_WHITELABEL = PROJECT_DIR !== ''
const LESSON_FILENAME = IS_WHITELABEL ? 'whitelabel_lessons' : 'lessons'
const DEFAULT_NOTION_ID = '1dd77eb6ed4147f6bdfd6f23a30baa46'
const POTION_API = 'https://potion.banklessacademy.com'

const KEY_MATCHING = {
  'Lesson badge image': 'lessonBadgeImageLink',
  'Lesson image': 'lessonImageLink',
  'Lesson collected image': 'lessonCollectedImageLink',
  'Lesson collectible video': 'lessonCollectibleVideo',
  'Lesson collectible mint ID': 'LessonCollectibleMintID',
  'Lesson collectible token address': 'LessonCollectibleTokenAddress',
  'Social image': 'socialImageLink',
  'What will you be able to do after this lesson?': 'learningActions',
  'Landing page copy': 'marketingDescription',
  'Kudos ID': 'kudosId',
  'Duration in minutes': 'duration',
  'What will you learn from this?': 'learnings',
  Difficulty: 'difficulty',
  Description: 'description',
  Name: 'name',
  Module: 'moduleId',
  Quest: 'quest',
  'Publication status': 'publicationStatus',
  'Featured order on homepage': 'featuredOrderOnHomepage',
  'Enable Comments': 'isCommentsEnabled',
  'End of Lesson redirect': 'endOfLessonRedirect',
  'End of Lesson text': 'endOfLessonText',
  // 'Community discussion link': 'communityDiscussionLink',
  'Mirror link': 'mirrorLink',
  'Mirror NFT address': 'mirrorNFTAddress',
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
  const file_extension = file_name.match(/\.(png|svg|jpg|jpeg|webp|mp4|gif)/)[1].replace('jpeg', 'jpg')
  // console.log(file_extension)
  // create "unique" hash based on Notion imageLink (different when re-uploaded)
  const hash = crc32(file_name)
  const image_dir = `/${PROJECT_DIR}lesson/${slug}`
  const local_image_dir = `public${image_dir}`
  // create image directory dynamically in case it doesn't exist yet
  if (!fs.existsSync(local_image_dir)) {
    fs.mkdirSync(local_image_dir)
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
    if (IS_WHITELABEL && !fs.existsSync(`public/${PROJECT_DIR}lesson`)) {
      // create image directory dynamically in case it doesn't exist yet
      fs.mkdirSync(`public/${PROJECT_DIR}lesson`)
    }
    const promiseArray = notionRows.data.map(async (notion, index) => {
      // DEV_MODE: only test first lesson
      // if (index > 0) return

      // replace keys
      const lesson = Object.keys(KEY_MATCHING).reduce(
        (obj, k) =>
          Object.assign(obj, {
            // transform to number if the string contains a number
            [KEY_MATCHING[k]]: Number.isNaN(parseInt(notion.fields[k])) ||
              // ignore type transform for ModuleId & mirrorNFTAddress
              (k === 'Module' || k === 'Mirror NFT address' || k === 'Lesson collectible mint ID' || k === 'Lesson collectible token address')
              ? notion.fields[k]
              : parseInt(notion.fields[k]),
          }),
        {}
      )
      if (lesson.publicationStatus === undefined) return
      notion.id = notion.id.replace(/-/g, '')
      console.log('Notion lesson link: ', `${POTION_API}/html?id=${notion.id}`)

      if (lesson.description === undefined) lesson.description = ''
      if (lesson.socialImageLink === undefined) delete lesson.socialImageLink
      if (lesson.kudosId === undefined) lesson.kudosId = null
      if (lesson.lessonBadgeImageLink === undefined) lesson.lessonBadgeImageLink = null
      if (lesson.LessonCollectibleMintID === undefined) delete lesson.LessonCollectibleMintID
      if (lesson.LessonCollectibleTokenAddress === undefined) delete lesson.LessonCollectibleTokenAddress
      if (lesson.LessonCollectibleMintID && lesson.LessonCollectibleTokenAddress) lesson.hasCollectible = true
      if (lesson.lessonImageLink === undefined) lesson.lessonImageLink = null
      if (lesson.marketingDescription === undefined) lesson.marketingDescription = lesson.description
      if (lesson.learningActions === undefined) lesson.learningActions = ''
      if (lesson.learnings === undefined) lesson.learnings = ''
      if (lesson.featuredOrderOnHomepage === undefined) lesson.featuredOrderOnHomepage = false
      if (lesson.isCommentsEnabled === undefined) lesson.isCommentsEnabled = false
      if (lesson.endOfLessonRedirect === undefined) lesson.endOfLessonRedirect = null
      if (lesson.moduleId === undefined) delete lesson.moduleId
      else {
        lesson.moduleId = lesson.moduleId[0]
      }
      if (lesson.communityDiscussionLink === undefined) delete lesson.communityDiscussionLink
      if (lesson.mirrorLink === undefined || lesson.mirrorLink === null) delete lesson.mirrorLink
      if (lesson.mirrorNFTAddress === undefined || lesson.mirrorNFTAddress === null) delete lesson.mirrorNFTAddress

      // console.log(lesson)

      const mirrorId = lesson.mirrorLink?.split('/')?.pop()
      if (lesson.mirrorLink && mirrorId) {
        lesson.isArticle = true
        lesson.notionId = notion.id
        lesson.slug = slugify(lesson.name)
        delete lesson.quest
        await axios({
          url: 'https://arweave.net/graphql',
          method: 'post',
          data: {
            query: `
              query GetMirrorTransactions($digest: String!) {
                transactions(tags:[
                  {
                    name:"App-Name",
                    values:["MirrorXYZ"],
                  },
                  {
                    name:"Original-Content-Digest",
                    values:[$digest]
                  }
                ], sort:HEIGHT_DESC, first: 10){
                  edges {
                    node {
                      id
                    }
                  }
                }
              }`,
            variables: { "digest": mirrorId }
          }
        }).then((result) => {
          const arweaveTxId = result?.data?.data?.transactions?.edges[0]?.node?.id
          console.log('Mirror article: ', arweaveTxId)
          if (arweaveTxId) {
            return axios
              .get(`https://arweave.net/${arweaveTxId}`)
              .then(async ({ data }) => {
                // console.log(data)
                // console.log(data?.content?.body)
                // console.log(data?.content?.title)
                lesson.articleContent = data?.content?.body
                  .replace(/\\\[/g, "[")
                  .replace(/\\\]/g, "]")
                // console.log('lesson', lesson)

                if (lesson.articleContent.includes('\n\n\n---\n\n')) {
                  const articleContentArray = lesson.articleContent.split('\n\n\n---\n\n')
                  if (articleContentArray.length && articleContentArray[articleContentArray.length - 1].includes('Explore more lessons')) {
                    articleContentArray.pop()
                    lesson.articleContent = articleContentArray.join('\n\n\n---\n\n')
                  }
                  if (articleContentArray.length && articleContentArray[articleContentArray.length - 1].includes('financial or tax advice')) {
                    articleContentArray.pop()
                    lesson.articleContent = articleContentArray.join('\n\n\n---\n\n')
                  }
                }

                if (lesson.lessonImageLink) {
                  lesson.lessonImageLink = get_img(lesson.lessonImageLink, lesson.slug, 'lesson')
                }
                if (lesson.socialImageLink) {
                  lesson.socialImageLink = get_img(lesson.socialImageLink, lesson.slug, 'social')
                }

                lessons[index] = lesson
              })
          }
        });
        return
      }

      return axios
        .get(`${POTION_API}/html?id=${notion.id}`)
        .then(async (htmlPage) => {
          lesson.notionId = notion.id
          lesson.slug = slugify(lesson.name)
          // add notionId to DB
          await db(TABLES.credentials).insert([{ notion_id: lesson.notionId }]).onConflict('notion_id')
            .ignore()

          if (lesson.lessonBadgeImageLink) {
            lesson.lessonBadgeImageLink = get_img(lesson.lessonBadgeImageLink, lesson.slug, 'kudos')
          }
          if (lesson.lessonImageLink) {
            lesson.lessonImageLink = get_img(lesson.lessonImageLink, lesson.slug, 'lesson')
          }
          if (lesson.socialImageLink) {
            lesson.socialImageLink = get_img(lesson.socialImageLink, lesson.slug, 'social')
          }

          lesson.imageLinks = []
          // data cleaning
          htmlPage.data = htmlPage.data.includes('<h1 notion-id=') ? htmlPage.data
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
            .substr(3) : `{"type": "LEARN", "title": "TODO", "content": "<p>slide content</p>`
          const content = JSON.parse(`[${htmlPage.data}"}]`)
          let quizNb = 0
          const slides = content.map((slide) => {
            // replace with type QUIZ
            if (slide.content.includes("<div class='checklist'>")) {
              quizNb++
              slide.quiz = {}
              slide.type = 'QUIZ'
              const [question] = slide.content.split(
                "<div class='checklist'>"
              )
              slide.quiz.question = question
                .replace('<p>', '')
                .replace('</p>', '')
              slide.quiz.answers = []
              slide.quiz.feedback = []
              const quizDiv = new JSDOM(slide.content);
              const checkboxes = quizDiv.window.document.querySelectorAll(
                '.checklist input[type="checkbox"]:disabled'
              )
              const blockquotes = quizDiv.window.document.querySelectorAll('blockquote')
              const labels = quizDiv.window.document.querySelectorAll('.checklist label')

              for (let i = 0; i < checkboxes.length; i++) {
                const nb = i + 1
                const checkbox = checkboxes[i]
                const blockquote = blockquotes[i]
                const label = labels[i]

                const answer = label.textContent.trim()
                slide.quiz.answers.push(answer)

                const feedback = blockquote?.textContent.trim()
                slide.quiz.feedback.push(feedback)

                const isChecked = checkbox?.checked
                if (isChecked) slide.quiz.rightAnswerNumber = nb
              }
              if (!slide.quiz.rightAnswerNumber)
                throw new Error(
                  `missing right answer, please check ${POTION_API}/html?id=${notion.id}`
                )
              slide.quiz.id = `${lesson.slug}-${quizNb}`
            }
            if (slide.content) {
              // download images locally
              const imageLinks = [...slide.content.matchAll(/<img src='(.*?)'/gm)].map(a => a[1])
              for (const imageLink of imageLinks) {
                const file_extension = imageLink.match(/\.(png|svg|jpg|jpeg|webp|mp4|gif)\?table=/)[1]
                // create "unique" hash based on Notion imageLink (different when re-uploaded)
                const hash = crc32(imageLink)
                const image_dir = `/${PROJECT_DIR}lesson/${lesson.slug}`
                const local_image_dir = `public${image_dir}`
                // create image directory dynamically in case it doesn't exist yet
                if (!fs.existsSync(local_image_dir)) {
                  fs.mkdirSync(local_image_dir)
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
                const blocs = slide.content
                  .replace(
                    /<img src='([^>]*)'>/gi,
                    '|SPLIT|$1|SPLIT|'
                  )
                  // .replace(/<img src='/g, '|SPLIT|')
                  // .replace(/'>/g, '|SPLIT|')
                  .replace('|SPLIT|', '')
                  .split('|SPLIT|')
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
          // slides.push({
          //   type: 'END',
          //   title: lesson.kudosId ? 'Lesson Reward' : 'End of lesson',
          // })
          lesson.slides = slides
          // console.log('lesson', lesson)

          // TEMP:
          lesson.lessonImageLink = 'https://link.assetfile.io/4pSavwMzYsfXDhNuQ5Khwa/Screenshot+2023-04-18+at+11.43.53.png'
          lesson.lessonCollectedImageLink = 'https://link.assetfile.io/1FoR1qWkJ7CvtdzJIYhP3I/Screenshot+2023-04-18+at+11.43.53+copy2.png'
          lesson.lessonCollectibleVideo = 'https://link.assetfile.io/4izrmKkAKuvVJTCCXikhSa/transparentWebmTest.webm'
          lesson.socialImageLink = 'https://link.assetfile.io/6TXNOC2uuyEQkoj8V2upUh/Lesson+social+media.jpg?1'
          lesson.lessonBadgeImageLink = 'https://link.assetfile.io/Fp8a1TuFMsIAbrsU6j9r3/badge_a01_nftvideo.mp4'

          lessons[index] = lesson

          if (lesson.publicationStatus === 'planned') {
            lesson.lessonImageLink = '/images/coming-soon-lesson.png'
          }

          // TODO: remove old images (diff between old/new lesson.imageLinks)
        })
    })
    axios.all(promiseArray).then(() => {
      const FILE_CONTENT = `/* eslint-disable no-useless-escape */
import { LessonType } from 'entities/lesson'

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
