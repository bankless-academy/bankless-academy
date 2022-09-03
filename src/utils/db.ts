/* eslint-disable no-console */
import knex from 'knex'

const config = require('../../knexfile.js')

export const db = knex(config)

export const TABLES = {
  users: 'users',
  quests: 'quests',
  poaps: 'poaps',
  credentials: 'credentials',
  completions: 'completions',
}

export const TABLE = {
  users: {
    id: 'users.id',
    address: 'users.address',
    gitcoin_stamps: 'users.gitcoin_stamps',
    sybil_user_id: 'users.sybil_user_id'
  },
  quests: {
    id: 'quests.id',
    quest: 'quests.quest',
    user_id: 'quests.user_id'
  },
  poaps: {
    id: 'poaps.id',
    event_id: 'poaps.event_id',
    code: 'poaps.code',
    is_claimed: 'poaps.is_claimed',
    user_id: 'poaps.user_id',
    ip_address: 'poaps.ip_address',
    country_code: 'poaps.country_code'
  },
  credentials: {
    id: 'credentials.id',
    notion_id: 'credentials.notion_id',
    signature: 'credentials.signature'

  },
  completions: {
    id: 'completions.id',
    credential_id: 'completions.credential_id',
    user_id: 'completions.user_id',
    credential_claimed_at: 'completions.credential_claimed_at'
  },
}

export async function getUserId(address: string): Promise<number> {
  try {
    // ilike = case insensitive search
    const [user] = await db(TABLES.users)
      .select('id')
      .where('address', 'ilike', `%${address}%`)
    console.log('user', user)
    let createUser = null
    if (!user) {
      [createUser] = await db(TABLES.users).insert({ address: address }, [
        'id',
      ])
      console.log('createUser', createUser)
    }
    return user?.id || createUser?.id
  } catch (error) {
    // known issue: error 53300, remaining connection slots are reserved for non-replication superuser connections
    console.error(`can't get user id | ${error?.code}: ${error}`)
  }
}
