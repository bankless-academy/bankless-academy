import { NextApiRequest, NextApiResponse } from 'next'
import { LESSONS, DOMAIN_URL_, LanguageDescription } from 'constants/index'
import { LessonType, LanguageType } from 'entities/lesson'

type ContentType = 'LESSON' | 'HANDBOOK'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { readme } = req.query

    // Sort lessons first, then handbooks
    const sortedLessons = [...LESSONS].sort((a, b) => {
      if ((a.isArticle || false) === (b.isArticle || false)) return 0
      return (a.isArticle || false) ? 1 : -1
    })

    if (readme === 'true') {
      const lessons = sortedLessons.filter(lesson => !lesson.isArticle)
      const handbooks = sortedLessons.filter(lesson => lesson.isArticle)

      const formatItem = (lesson: LessonType) => {
        const mainLink = `${DOMAIN_URL_}/lessons/${lesson.slug}`
        let languageLinks = ''

        if (lesson.languages?.length) {
          const otherLangs = lesson.languages
            .filter(lang => lang !== 'en')
            .sort((a, b) => LanguageDescription[a].localeCompare(LanguageDescription[b]))
            .map(lang => `[${LanguageDescription[lang]}](${DOMAIN_URL_}/lessons/${lang}/${lesson.slug})`)

          if (otherLangs.length > 0) {
            languageLinks = ` [${otherLangs.join(',')}]`
          }
        }

        return `- [${lesson.name}](${mainLink})${languageLinks}`
      }

      const readmeFormat = [
        'Lessons:\n',
        ...lessons.map(formatItem),
        '\nHandbooks:\n',
        ...handbooks.map(formatItem)
      ].join('\n')

      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      return res.status(200).send(readmeFormat)
    }

    return res.status(200).json(
      sortedLessons.map((lesson: LessonType) => {
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

        return {
          ...lesson,
          type: lesson.isArticle ? 'HANDBOOK' : 'LESSON' as ContentType
        }
      })
    )
  } catch (error) {
    res.status(500).json({ error })
  }
}
