/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES, TABLE } from 'utils/db'
import { POAP_EVENT_IDS, LESSONS } from 'constants/index'

const NOTION_IDS: string[] = LESSONS.filter((lesson) => lesson.quest).map(
  (lesson) => lesson.notionId
)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const stats = {
    uniqueAddresses: {},
    remainingPoaps: {},
    poapDistributed: {},
    lessonCompleted: {},
    monthyCompletion: {},
  }
  try {
    const [uniqueAddresses] = await db(TABLES.users).count('id')
    stats.uniqueAddresses = uniqueAddresses.count
    const remainingPoaps = await db(TABLES.poaps)
      .count('id', { as: 'remainingPoaps' })
      .distinct('event_id')
      .where('is_claimed', false)
      .whereIn('event_id', POAP_EVENT_IDS)
      .groupBy('event_id')
      .orderBy('event_id')
    for (const event of remainingPoaps) {
      stats.remainingPoaps[event.event_id] = event.remainingPoaps
    }
    const poapDistributed = await db(TABLES.poaps)
      .count('id', { as: 'poapDistributed' })
      .distinct('event_id')
      .where('is_claimed', true)
      .whereIn('event_id', POAP_EVENT_IDS)
      .groupBy('event_id')
      .orderBy('event_id')
    for (const event of poapDistributed) {
      stats.poapDistributed[event.event_id] = event.poapDistributed
    }

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
