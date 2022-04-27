/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES } from 'utils/db'
import { POAP_EVENT_IDS, QUESTS } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const stats = {
    uniqueAddresses: {},
    remainingPoaps: {},
    poapDistributed: {},
    lessonCompleted: {},
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
    const lessonCompleted = await db(TABLES.quests)
      .count('id', { as: 'lessonCompleted' })
      .distinct('quest')
      .whereIn('quest', QUESTS)
      .groupBy('quest')
      .orderBy('quest')
    for (const event of lessonCompleted) {
      stats.lessonCompleted[event.quest] = event.lessonCompleted
    }
    return res.json(stats)
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${error}`,
    })
  }
}
