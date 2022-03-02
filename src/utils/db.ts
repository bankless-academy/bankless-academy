/* eslint-disable no-console */
import knex from 'knex'

const config = require('../../knexfile.js')

export const db = knex(config)

export const TABLES = {
  users: 'users',
  quests: 'quests',
  poaps: 'poaps',
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
