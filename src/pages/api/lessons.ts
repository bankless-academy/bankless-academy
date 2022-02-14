import { NextApiRequest, NextApiResponse } from 'next'
import LESSONS from 'constants/lessons'
import { DOMAIN } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    return res.json(
      LESSONS.map((lesson) => {
        delete lesson.imageLinks
        lesson.slides.map((slide) => {
          if (slide.content) {
            slide.content = slide.content.replace(/src='\//g, `src='${DOMAIN}/`)
          }
          return slide
        })
        return lesson
      })
    )
  } catch (error) {
    res.json({ error })
  }
}
