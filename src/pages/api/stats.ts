/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES, TABLE } from 'utils/db'
import { LESSONS } from 'constants/index'

// Don't include Kudos testing or lessons without quest
const NOTION_IDS: string[] = LESSONS.filter(
  (lesson) =>
    lesson.quest &&
    lesson.notionId !== '7bc2bf9be4ac4e9181782f996a2a6060' &&
    lesson.notionId !== 'fd14e05114294d6282713809742f79a4'
).map((lesson) => lesson.notionId)

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
    "badgeClaimed": {
      "c2e79569863a4f5bbfdc9e86be5ae64f": 1804 - 236,
      "409cd6ada1bd4ba7aa30f86239c98753": 1223 - 127,
      "1887f283a1b846008bcbd7fa1736bf49": 1445 - 189,
      "519c86d503954a629a2035eb1b401628": 1415 - 171,
      "7aeb05250dbc4d55a474fb817ff089d8": 1110 - 153,
      "48b3a9d48fe34d5593c125d5811b1273": 891 - 53,
      "5308fd17fcdb461b937bbc8717917ea2": 2409 - 105,
      "41209248612042d2b279261ee60e3a66": 180 - 74,
      "7f53656c75b343d4b94c5b6a78fd0332": 283 - 284,
      "e90059604739465ea99b9a2c8af5eb75": 14 - 13
    },
    userConverted: {},
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
      .whereNotNull(TABLE.completions.quest_completed_at)
      .groupBy(TABLE.completions.credential_id)
      .orderBy(TABLE.completions.credential_id)
    // console.log(lessonCompleted)
    for (const lesson of lessonCompleted) {
      if (lesson.credential_id)
        stats.lessonCompleted[idToNotionId[lesson.credential_id]] =
          lesson.lessonCompleted
    }
    const badgeClaimed = await db(TABLES.completions)
      .count('id', { as: 'badgeClaimed' })
      .distinct(TABLE.completions.credential_id)
      .whereIn(
        [TABLE.completions.credential_id],
        credentials.map((c) => c.id)
      )
      .whereNotNull(TABLE.completions.transaction_at)
      .whereNotNull(TABLE.completions.quest_completed_at)
      .groupBy(TABLE.completions.credential_id)
      .orderBy(TABLE.completions.credential_id)
    for (const lesson of badgeClaimed) {
      if (lesson.credential_id)
        stats.badgeClaimed[idToNotionId[lesson.credential_id]] =
          parseInt(lesson.badgeClaimed) + (stats.badgeClaimed[idToNotionId[lesson.credential_id]] || 0)
    }
    // console.log(badgeClaimed)
    const userConverted = await db(TABLES.completions)
      .count('id', { as: 'userConverted' })
      .distinct(TABLE.completions.credential_id)
      .whereIn(
        [TABLE.completions.credential_id],
        credentials.map((c) => c.id)
      )
      .where(TABLE.completions.is_quest_conversion, '=', 'true')
      .groupBy(TABLE.completions.credential_id)
      .orderBy(TABLE.completions.credential_id)
    for (const lesson of userConverted) {
      if (lesson.credential_id)
        stats.userConverted[idToNotionId[lesson.credential_id]] =
          lesson.userConverted
    }
    // console.log(badgeClaimed)
    const [{ lessonCompleted1day }] = await db(TABLES.completions)
      .count('id', { as: 'lessonCompleted1day' })
      .whereIn(
        [TABLE.completions.credential_id],
        credentials.map((c) => c.id)
      )
      .whereNotNull(TABLE.completions.quest_completed_at)
      .where(
        TABLE.completions.quest_completed_at,
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
      .whereNotNull(TABLE.completions.quest_completed_at)
      .where(
        TABLE.completions.quest_completed_at,
        '>=',
        db.raw("NOW() - INTERVAL '7 DAY'")
      )
    stats.lessonCompleted7days = lessonCompleted7days

    const monthyCompletion = await db(TABLES.completions)
      .select(db.raw(`date_trunc('month', quest_completed_at) AS month`))
      .count('id')
      .whereIn(
        [TABLE.completions.credential_id],
        db
          .select('id')
          .from(TABLES.credentials)
          .whereIn(TABLE.credentials.notion_id, NOTION_IDS)
      )
      .whereNotNull(TABLE.completions.quest_completed_at)
      .groupByRaw(`date_trunc('month', quest_completed_at)`)
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
