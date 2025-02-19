import { NextApiRequest, NextApiResponse } from 'next'
import { LESSONS, DOMAIN_URL_ } from 'constants/index'
import { LessonType, LanguageType } from 'entities/lesson'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    return res.status(200).json(
      LESSONS.map((lesson: LessonType) => {
        delete lesson?.imageLinks
        // Initialize lessonLinks object with default English link
        lesson.lessonLinks = {
          en: `${DOMAIN_URL_}/lessons/${lesson.slug}`
        }

        // Initialize rawContentFiles with English content
        lesson.rawContentFiles = {
          en: `https://raw.githubusercontent.com/bankless-academy/bankless-academy/refs/heads/main/translation/lesson/en/${lesson.slug}.md`
        }

        // Add language-specific links and raw content files if languages are specified
        if (lesson.languages?.length) {
          lesson.languages.forEach((lang: LanguageType) => {
            if (lang !== 'en') {
              lesson.lessonLinks![lang] = `${DOMAIN_URL_}/lessons/${lang}/${lesson.slug}`
              lesson.rawContentFiles![lang] = `https://raw.githubusercontent.com/bankless-academy/bankless-academy/refs/heads/main/translation/lesson/${lang}/${lesson.slug}.md`
            }
          })
        }

        // Add domain to image and media links if they exist and don't already have a domain
        const mediaFields = [
          'badgeImageLink',
          'lessonImageLink',
          'lessonCollectedImageLink',
          'lessonCollectibleGif',
          'lessonCollectibleVideo',
          'socialImageLink',
          'sponsorLogo',
          'nftGatingImageLink'
        ]

        mediaFields.forEach(field => {
          if (lesson[field] && !lesson[field].startsWith('http')) {
            lesson[field] = `${DOMAIN_URL_}${lesson[field].startsWith('/') ? '' : '/'}${lesson[field]}`
          }
        })

        lesson?.slides?.map((slide) => {
          if (slide.content) {
            slide.content = slide.content.replace(
              /src='\//g,
              `src='${DOMAIN_URL_}/`
            )
          }
          return slide
        })
        return lesson
      })
    )
  } catch (error) {
    res.status(500).json({ error })
  }
}
