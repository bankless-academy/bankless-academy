/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next'

import { db, TABLES } from 'utils/db'
import { POAP_EVENT_IDS, POAP_QUESTS } from 'constants/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const stats = { uniqueAddresses: {}, remainingPoaps: {}, poapDistributed: {} }
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
      const slug = POAP_QUESTS[event.event_id]
      if (slug) stats.remainingPoaps[slug] = event.remainingPoaps
    }
    const poapDistributed = await db(TABLES.poaps)
      .count('id', { as: 'poapDistributed' })
      .distinct('event_id')
      .where('is_claimed', true)
      .whereIn('event_id', POAP_EVENT_IDS)
      .groupBy('event_id')
      .orderBy('event_id')
    for (const event of poapDistributed) {
      const slug = POAP_QUESTS[event.event_id]
      if (slug) stats.poapDistributed[slug] = event.poapDistributed
    }
    return res.json(stats)
  } catch (error) {
    console.error(error)
    res.json({
      error: `error ${error?.code}: ${error}`,
    })
  }
}
