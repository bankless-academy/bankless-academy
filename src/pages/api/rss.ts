/* eslint-disable no-console */
import { Feed } from "feed"
import { NextApiRequest, NextApiResponse } from 'next'

import { DOMAIN_URL, GENERIC_ERROR_MESSAGE, LESSONS, PROJECT_DESCRIPTION, PROJECT_NAME, imageMeta } from 'constants/index'
import { lessonLink } from "utils";

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
    LESSONS.sort((a, b) => a.publicationDate > b.publicationDate ? -1 : 1).forEach((lesson) => {
      if (lesson.publicationStatus === 'publish')
        feed.addItem({
          title: `${lesson.isArticle ? 'Handbook:' : 'Lesson: '} ${lesson.englishName}`,
          id: `/lessons/${lesson.slug}`,
          link: lessonLink(lesson),
          description: lesson.description,
          content: `<a href="${lessonLink(lesson)}"><img src="${DOMAIN_URL}${lesson.socialImageLink}" alt="${lesson.englishName}" title="${lesson.englishName}"/></a>`,
          date: new Date(lesson.publicationDate),
          image: `${DOMAIN_URL}${lesson.socialImageLink}`
        });
    });
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
