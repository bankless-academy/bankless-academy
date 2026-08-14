/* eslint-disable no-console */
import { Feed } from 'feed'
import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'

import {
  DEFAULT_METADATA,
  DOMAIN_URL,
  GENERIC_ERROR_MESSAGE,
  LESSONS,
  PROJECT_DESCRIPTION,
  PROJECT_NAME,
  imageMeta,
} from 'constants/index'
import { lessonLink } from 'utils'
import { LANGUAGES } from 'constants/languages'
import { pageMeta as lessonsPageMeta } from 'pages/lessons/index'
import { pageMeta as glossaryPageMeta } from 'pages/glossary'
import { pageMeta as oscPageMeta } from 'pages/onchain-summer-challenge'
import { pageMeta as explorePageMeta } from 'pages/explore'

const SPLIT = `\`\`\`

---`

const processMD = async (md, lang) => {
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
    const newLesson: any = {}
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
      language: 'en',
      image: `${DOMAIN_URL}${imageMeta}`,
      favicon: `${DOMAIN_URL}/favicon.png`,
      copyright: 'Bankless Academy',
    })

    const lessons = []
    const fetchPromises = LESSONS.sort((a, b) =>
      a.publicationDate > b.publicationDate ? -1 : 1
    ).map(async (lesson) => {
      if (lesson.publicationStatus === 'publish') {
        lessons.push({
          title: `${lesson.englishName}`,
          id: `/lessons/${lesson.slug}`,
          link: lessonLink(lesson),
          description: lesson.description,
          date: new Date(lesson.publicationDate),
          image: `${DOMAIN_URL}${lesson.socialImageLink}`,
        })
        if (!lesson?.isArticle) {
          // content page
          lessons.push({
            title: `${lesson.englishName}`,
            id: `/lessons/${lesson.slug}/content`,
            link: `${lessonLink(lesson)}/content`,
            description: lesson.description,
            date: new Date(lesson.publicationDate),
            image: `${DOMAIN_URL}${lesson.socialImageLink}`,
          })
        }

        // Read the translated markdown from disk rather than fetching it from
        // raw.githubusercontent/main: the content lives in this repo, so the
        // fetch added latency, made the sitemap depend on a third party, and
        // 500'd whenever a translation was registered but not yet pushed to
        // main (also why translations were invisible on preview deploys).
        const languagePromises = lesson.languages.map(async (language) => {
          const path = `translation/lesson/${language}/${lesson.slug}.md`
          if (!fs.existsSync(path)) return
          const md = fs.readFileSync(path, 'utf8')

          const translatedLesson = await processMD(md, language)
          if (!translatedLesson) return

          lessons.push({
            title: `${translatedLesson.name}`,
            id: `/lessons/${language}/${lesson.slug}`,
            link: lessonLink(lesson).replace(
              '/lessons/',
              `/lessons/${language}/`
            ),
            description: translatedLesson.description,
            date: new Date(lesson.publicationDate),
            image: `${DOMAIN_URL}${lesson.socialImageLink}`,
          })
          if (!lesson?.isArticle) {
            // content page
            lessons.push({
              title: `${translatedLesson.name}`,
              id: `/lessons/${language}/${lesson.slug}/content`,
              link: `${lessonLink(lesson).replace(
                '/lessons/',
                `/lessons/${language}/`
              )}/content`,
              description: translatedLesson.description,
              date: new Date(lesson.publicationDate),
              image: `${DOMAIN_URL}${lesson.socialImageLink}`,
            })
          }
        })

        await Promise.all(languagePromises)
      }
    })

    await Promise.all(fetchPromises)

    const lastUpdate = new Date(lessons[0].date)
    feed.addItem({
      title: PROJECT_NAME,
      id: `/`,
      link: `${DOMAIN_URL}/`,
      description: PROJECT_DESCRIPTION,
      date: lastUpdate,
      image: `${DOMAIN_URL}${DEFAULT_METADATA.image}`,
    })
    feed.addItem({
      title: lessonsPageMeta.title,
      id: `/lessons`,
      link: `${DOMAIN_URL}/lessons`,
      description: PROJECT_DESCRIPTION,
      date: lastUpdate,
      image: `${DOMAIN_URL}${DEFAULT_METADATA.image}`,
    })
    feed.addItem({
      title: `FAQ`,
      id: `/faq`,
      link: `${DOMAIN_URL}/faq`,
      description: PROJECT_DESCRIPTION,
      date: lastUpdate,
      image: `${DOMAIN_URL}${DEFAULT_METADATA.image}`,
    })
    feed.addItem({
      title: `${glossaryPageMeta.title}`,
      id: `/glossary`,
      link: `${DOMAIN_URL}/glossary`,
      description: PROJECT_DESCRIPTION,
      date: lastUpdate,
      image: `${DOMAIN_URL}${DEFAULT_METADATA.image}`,
    })
    // one entry per localized glossary URL, so each translation is crawlable
    for (const language of LANGUAGES.filter((l) => l.code !== 'en')) {
      feed.addItem({
        title: `${glossaryPageMeta.title} (${language.localName})`,
        id: `/glossary/${language.code}`,
        link: `${DOMAIN_URL}/glossary/${language.code}`,
        description: PROJECT_DESCRIPTION,
        date: lastUpdate,
        image: `${DOMAIN_URL}${DEFAULT_METADATA.image}`,
      })
    }
    feed.addItem({
      title: `${oscPageMeta.title}`,
      id: `/onchain-summer-challenge`,
      link: `${DOMAIN_URL}/onchain-summer-challenge`,
      description: `${oscPageMeta.description}`,
      date: lastUpdate,
      image: `${DOMAIN_URL}${oscPageMeta.image}`,
    })
    feed.addItem({
      title: `${explorePageMeta.title}`,
      id: `/explore`,
      link: `${DOMAIN_URL}/explore`,
      description: `${explorePageMeta.description}`,
      date: lastUpdate,
      image: `${DOMAIN_URL}${DEFAULT_METADATA.image}`,
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
