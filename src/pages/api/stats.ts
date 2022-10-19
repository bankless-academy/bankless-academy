/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES, TABLE } from 'utils/db'
import { LESSONS } from 'constants/index'

const NOTION_IDS: string[] = LESSONS.filter((lesson) => lesson.quest).map(
  (lesson) => lesson.notionId
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const stats = {
    uniqueAddresses: {},
    bots: {},
    sybils: {},
    lessonCompleted: {},
    monthyCompletion: {},
  }
  try {
    const [uniqueAddresses] = await db(TABLES.users)
      .whereNull(TABLE.users.sybil_user_id)
      .count('id')
    stats.uniqueAddresses = uniqueAddresses.count
    const [bots] = await db(TABLES.users)
      .where(TABLE.users.sybil_user_id, '12')
      .count('id')
    stats.bots = bots.count
    const [sybils] = await db(TABLES.users)
      .whereNotNull(TABLE.users.sybil_user_id)
      .andWhereNot(TABLE.users.sybil_user_id, '12')
      .count('id')
    stats.sybils = sybils.count

    const credentials = await db
      .select('id', 'notion_id')
      .from(TABLES.credentials)
      .whereIn(TABLE.credentials.notion_id, NOTION_IDS)
    // console.log(credentials)
    const idToNotionId = {}
    for (const credential of credentials) {
      idToNotionId[credential.id] = credential.notion_id
    }
    // console.log(idToNotionId)

    const lessonCompleted = await db(TABLES.completions)
      .count('id', { as: 'lessonCompleted' })
      .distinct(TABLE.completions.credential_id)
      .whereIn(
        [TABLE.completions.credential_id],
        credentials.map((c) => c.id)
      )
      .groupBy(TABLE.completions.credential_id)
      .orderBy(TABLE.completions.credential_id)
    // console.log(lessonCompleted)
    for (const lesson of lessonCompleted) {
      if (lesson.credential_id)
        stats.lessonCompleted[idToNotionId[lesson.credential_id]] =
          lesson.lessonCompleted
    }
    const monthyCompletion = await db(TABLES.completions)
      .select(db.raw(`date_trunc('month', created_at) AS month`))
      .count('id')
      .whereIn(
        [TABLE.completions.credential_id],
        db
          .select('id')
          .from(TABLES.credentials)
          .whereIn(TABLE.credentials.notion_id, NOTION_IDS)
      )
      .groupByRaw(`date_trunc('month', created_at)`)
      .orderBy('month')
    stats.monthyCompletion = monthyCompletion
    return res.json(stats)
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${error}`,
    })
  }
}
