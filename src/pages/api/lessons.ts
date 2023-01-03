import { NextApiRequest, NextApiResponse } from 'next'
import { LESSONS, DOMAIN_URL } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    return res.status(200).json(
      LESSONS.map((lesson) => {
        delete lesson.imageLinks
        lesson.slides.map((slide) => {
          if (slide.content) {
            slide.content = slide.content.replace(
              /src='\//g,
              `src='${DOMAIN_URL}/`
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
