import React, { useEffect, useState } from 'react'
import { GetStaticProps } from 'next'
import { Container } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

import { MetaData } from 'components/Head'

import Lesson from 'components/Lesson'

const pageMeta: MetaData = {
  title: 'Lesson preview',
}

const processLesson = (htmlPage, notion_id) => {
  const lesson: any = { slug: 'preview' }
  lesson.imageLinks = []
  // data cleaning
  htmlPage.data = htmlPage.data
    .replace(/"/g, "'")
    .replace(/\s+/g, ' ')
    .replace(
      /<h1 notion-id='(.*?)'>/g,
      `"},{"type": "LEARN", "notionId":"$1", "title": "`
    )
    .replace(/<\/h1>/g, `","content": "`)
    .substr(3)
  const content = JSON.parse(`[${htmlPage.data}"}]`)
  let quizNb = 0
  const slides = content.map((slide) => {
    // replace with type QUIZ
    if (slide.content.includes("<div class='checklist'>")) {
      quizNb++
      slide.type = 'QUIZ'
      const [question, answers] = slide.content.split("<div class='checklist'>")
      const quiz_answers = answers.split('</label><label>')
      delete slide.content
      slide.quiz = {}
      slide.quiz.question = question.replace('<p>', '').replace('</p>', '')
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
            `more than 1 right answer, please check ${POTION_API}/html?id=${notion_id}`
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
      if ((slide.content.match(/<img /g) || []).length > 1) {
        // multiple images
        const blocs = slide.content
          .replace(/<img src='/g, '|SPLIT|')
          .replace(/'>/g, '|SPLIT|')
          .replace('|SPLIT|', '')
          .split('|SPLIT|')
        slide.content = blocs.reduce(
          (p, c, i) =>
            i % 2 === 0
              ? `${p}<div class="bloc-ab"><div class="bloc-a"><img src='${c}'></div>`
              : `${p}<div class="bloc-b">${c}</div></div>`,
          ''
        )
      } else if (slide.content.includes('<img ')) {
        // content contains an image -> 1st bloc = text | second bloc = square image
        const [bloc1, bloc2] = slide.content.split('<img ')
        if (bloc1 !== '' && bloc2 !== '')
          slide.content = `<div class="bloc1">${bloc1}</div><div class="bloc2"><img ${bloc2}</div>`
      } else if (slide.content.includes('<iframe ')) {
        // content contains an iframe
        const [bloc1, bloc2] = slide.content.split('<iframe ')
        if (bloc2 !== '') {
          slide.content = `${
            bloc1 !== '' ? `<div class="bloc1">${bloc1}</div>` : ''
          }`
          slide.content += `<div class="bloc2"><iframe allowfullscreen ${bloc2.replace(
            /feature=oembed/g,
            'feature=oembed&rel=0'
          )}</div>`
        }
      } else {
        // text only
        slide.content = `<div class="bloc1">${slide.content}</div>`
      }
      slide.content = slide.content
        .replace(/<code>/g, '')
        .replace(/<\/code>/g, '')
    }
    return slide
  })
  lesson.slides = slides
  return lesson
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { pageMeta },
  }
}

const POTION_API = 'https://potion.banklessacademy.com'

const Lessons = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query
  const [lesson, setLesson]: any = useState(null)

  useEffect(() => {
    if (id) {
      axios
        .get(`${POTION_API}/html?id=${id}`)
        .then(function (htmlPage) {
          if (!htmlPage.data.error) {
            const res = processLesson(htmlPage, id)
            // eslint-disable-next-line no-console
            console.log(res)
            setLesson(res)
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    }
  }, [id])

  if (!lesson) return null
  else
    return (
      <Container maxW="container.xl">
        <Lesson lesson={lesson} />
      </Container>
    )
}

export default Lessons
