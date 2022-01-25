/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES } from 'utils/db'
import { LESSON_SLUGS } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { address, lessonSlug } = req.query
  if (
    !address ||
    !lessonSlug ||
    typeof address === 'object' ||
    typeof lessonSlug === 'object' ||
    !LESSON_SLUGS.includes(lessonSlug)
  )
    return res.json({ error: 'Wrong params' })

  console.log('address', address)
  console.log('lessonSlug', lessonSlug)

  try {
    const [quest] = await db(TABLES.quests)
      .select('id', 'is_quest_completed')
      .where('lesson_slug', lessonSlug)
      .where('address', address)
    console.log('quest', quest)
    if (quest?.is_quest_completed) {
      return res.json({ status: 'Quest already completed' })
    } else {
      // TODO: add backend quest verif if possible
      await db(TABLES.quests).insert({
        lesson_slug: lessonSlug,
        is_quest_completed: true,
        address: address,
      })
      res.json({ status: 'Quest completed' })
    }
  } catch (error) {
    console.error(error)
    res.json({
      error: 'Something went wrong ... please contact poap@banklessacademy.com',
    })
  }
}
