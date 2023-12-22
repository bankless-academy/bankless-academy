/* eslint-disable no-console */
import { Feed } from "feed"
import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

import { DEFAULT_METADATA, DOMAIN_URL, GENERIC_ERROR_MESSAGE, LESSONS, PROJECT_DESCRIPTION, PROJECT_NAME, imageMeta } from 'constants/index'
import { lessonLink } from "utils"
import { LessonType } from 'entities/lesson'

const SPLIT = `\`\`\`

---`

const processMD = async (md, lang, englishLesson) => {
  console.log('processMD:', lang)
  // console.log('md', md)
  if (md[0] !== '<') {
    // eslint-disable-next-line no-unsafe-optional-chaining
    const [intro] = md?.split(SPLIT)
    // console.log(intro)
    const [, infos] = (intro || '').split('---')
    // console.log(infos)
    const [, title, description] = (infos || '').split('\n')
    // console.log(title)
    const newLesson: LessonType = JSON.parse(JSON.stringify(englishLesson))
    newLesson.name = title.replace('TITLE: ', '')
    newLesson.description = description.replace('DESCRIPTION:', '').trim()
    console.log(`save ${lang}`)
    // console.log(newLesson)
    return newLesson
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const feed = new Feed({
      title: PROJECT_NAME,
      description: PROJECT_DESCRIPTION,
      id: DOMAIN_URL,
      link: DOMAIN_URL,
      language: "en",
      image: `${DOMAIN_URL}${imageMeta}`,
      favicon: `${DOMAIN_URL}/favicon.png`,
      copyright: 'Bankless Academy',
    })

    const lessons = []
    await LESSONS.sort((a, b) => a.publicationDate > b.publicationDate ? -1 : 1).forEach(async (lesson) => {
      if (lesson.publicationStatus === 'publish') {
        lessons.push({
          title: `${lesson.englishName}`,
          id: `/lessons/${lesson.slug}`,
          link: lessonLink(lesson),
          description: lesson.description,
          date: new Date(lesson.publicationDate),
          image: `${DOMAIN_URL}${lesson.socialImageLink}`
        })
        lesson.languages.forEach(async language => {
          const md = fs.readFileSync(
            `translation/lesson/${language}/${lesson.slug}.md`,
            'utf8'
          )
          const currentLesson = await processMD(md, language, lesson)
          // console.log(currentLesson)
          lessons.push({
            title: `${currentLesson.name}`,
            id: `/lessons/${language}/${lesson.slug}`,
            link: lessonLink(lesson).replace('/lessons/', `/lessons/${language}/`),
            description: currentLesson.description,
            date: new Date(lesson.publicationDate),
            image: `${DOMAIN_URL}${lesson.socialImageLink}`
          })
        })
      }
    })
    const lastUpdate = new Date(lessons[0].date)
    feed.addItem({
      title: PROJECT_NAME,
      id: `/`,
      link: `${DOMAIN_URL}/`,
      description: PROJECT_DESCRIPTION,
      date: lastUpdate,
      image: `${DOMAIN_URL}${DEFAULT_METADATA.image}`
    })
    feed.addItem({
      title: `Lessons`,
      id: `/lessons`,
      link: `${DOMAIN_URL}/lessons`,
      description: PROJECT_DESCRIPTION,
      date: lastUpdate,
      image: `${DOMAIN_URL}${DEFAULT_METADATA.image}`
    })
    for (const lesson of lessons) {
      feed.addItem(lesson)
    }
    const rss = feed.rss2()
    res.setHeader('Content-Type', 'text/xml')
    return res.status(200).send(rss)
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      error: `error ${error?.code}: ${GENERIC_ERROR_MESSAGE}`,
    })
  }
}
