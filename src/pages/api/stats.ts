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
    uniqueAddresses1day: {},
    uniqueAddresses7days: {},
    bots: {},
    bots1day: {},
    bots7days: {},
    sybils: {},
    sybils1day: {},
    sybils7days: {},
    lessonCompleted: {},
    lessonCompleted1day: {},
    lessonCompleted7days: {},
    monthyCompletion: {},
  }
  try {
    const [uniqueAddresses] = await db(TABLES.users)
      .whereNull(TABLE.users.sybil_user_id)
      .count('id')
    stats.uniqueAddresses = uniqueAddresses.count
    const [uniqueAddresses1day] = await db(TABLES.users)
      .whereNull(TABLE.users.sybil_user_id)
      .where(TABLE.users.created_at, '>=', db.raw("NOW() - INTERVAL '1 DAY'"))
      .count('id')
    stats.uniqueAddresses1day = uniqueAddresses1day.count
    const [uniqueAddresses7days] = await db(TABLES.users)
      .whereNull(TABLE.users.sybil_user_id)
      .where(TABLE.users.created_at, '>=', db.raw("NOW() - INTERVAL '7 DAY'"))
      .count('id')
    stats.uniqueAddresses7days = uniqueAddresses7days.count

    const [bots] = await db(TABLES.users)
      .where(TABLE.users.sybil_user_id, '12')
      .count('id')
    stats.bots = bots.count
    const [bots1day] = await db(TABLES.users)
      .where(TABLE.users.sybil_user_id, '12')
      .where(TABLE.users.created_at, '>=', db.raw("NOW() - INTERVAL '1 DAY'"))
      .count('id')
    stats.bots1day = bots1day.count
    const [bots7days] = await db(TABLES.users)
      .where(TABLE.users.sybil_user_id, '12')
      .where(TABLE.users.created_at, '>=', db.raw("NOW() - INTERVAL '7 DAY'"))
      .count('id')
    stats.bots7days = bots7days.count

    const [sybils] = await db(TABLES.users)
      .whereNotNull(TABLE.users.sybil_user_id)
      .andWhereNot(TABLE.users.sybil_user_id, '12')
      .count('id')
    stats.sybils = sybils.count
    const [sybils1day] = await db(TABLES.users)
      .whereNotNull(TABLE.users.sybil_user_id)
      .andWhereNot(TABLE.users.sybil_user_id, '12')
      .where(TABLE.users.created_at, '>=', db.raw("NOW() - INTERVAL '1 DAY'"))
      .count('id')
    stats.sybils1day = sybils1day.count
    const [sybils7days] = await db(TABLES.users)
      .whereNotNull(TABLE.users.sybil_user_id)
      .andWhereNot(TABLE.users.sybil_user_id, '12')
      .where(TABLE.users.created_at, '>=', db.raw("NOW() - INTERVAL '7 DAY'"))
      .count('id')
    stats.sybils7days = sybils7days.count

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
    const [{ lessonCompleted1day }] = await db(TABLES.completions)
      .count('id', { as: 'lessonCompleted1day' })
      .whereIn(
        [TABLE.completions.credential_id],
        credentials.map((c) => c.id)
      )
      .where(
        TABLE.completions.created_at,
        '>=',
        db.raw("NOW() - INTERVAL '1 DAY'")
      )
    stats.lessonCompleted1day = lessonCompleted1day
    const [{ lessonCompleted7days }] = await db(TABLES.completions)
      .count('id', { as: 'lessonCompleted7days' })
      .whereIn(
        [TABLE.completions.credential_id],
        credentials.map((c) => c.id)
      )
      .where(
        TABLE.completions.created_at,
        '>=',
        db.raw("NOW() - INTERVAL '7 DAY'")
      )
    stats.lessonCompleted7days = lessonCompleted7days

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
    return res.status(200).json(stats)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: `error ${error?.code}: ${error}`,
    })
  }
}
