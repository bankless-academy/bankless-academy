/* eslint-disable no-console */
const { TABLES, addIdAndTimestamps, onUpdateTrigger } = require('../db')

// add trigger to update updated_at column automatically
const ON_UPDATE_TIMESTAMP_FUNCTION = `
  CREATE OR REPLACE FUNCTION on_update_timestamp()
  RETURNS trigger AS $$
  BEGIN
    NEW.updated_at = now();
    RETURN NEW;
  END;
$$ language 'plpgsql';
`

const DROP_ON_UPDATE_TIMESTAMP_FUNCTION = 'DROP FUNCTION on_update_timestamp'

exports.up = async function (knex) {
  const poaps = await knex.select().table(TABLES.poaps)
  await knex.schema.dropTable(TABLES.poaps)

  await knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION)

  // users
  await knex.schema.createTable(TABLES.users, addIdAndTimestamps)
  await knex.raw(onUpdateTrigger(TABLES.users))
  await knex.schema.table(TABLES.users, (table) => {
    table.string('address', 255).unique().index()
  })

  // poaps
  await knex.schema.createTable(TABLES.poaps, addIdAndTimestamps)
  await knex.raw(onUpdateTrigger(TABLES.poaps))
  await knex.schema.table(TABLES.poaps, (table) => {
    table.integer('event_id').notNullable().index()
    table.string('code', 6).notNullable().unique().index()
    table.boolean('is_claimed').default(false).index()
    table
      .integer('user_id')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index()
  })

  // quests
  await knex.schema.createTable(TABLES.quests, addIdAndTimestamps)
  await knex.raw(onUpdateTrigger(TABLES.quests))
  await knex.schema.table(TABLES.quests, (table) => {
    table.string('quest', 255).notNullable().index()
    table
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index()
  })
  
  console.log('poaps', poaps)
  const addresses = new Set()
  poaps.map((poap) => {
    if (poap.address) addresses.add(poap.address)
  })
  console.log('addresses', addresses)
  const insertUsers = [...addresses].map((address) => {
    return { address: address }
  })
  if (insertUsers.length) {
    const users = await knex(TABLES.users).insert(insertUsers, [
      'id',
      'address',
    ])
    console.log('users', users)
    const addressToId = []
    for (const user of users) {
      addressToId[user.address] = user.id
    }
    console.log('addressToId', addressToId)
    const insertPoaps = []
    poaps.map((poap) => {
      const res = {}
      res.event_id = poap.event_id
      res.code = poap.code
      res.is_claimed = poap.is_code_claimed
      if (poap.address in addressToId) {
        res.user_id = addressToId[poap.address]
      }
      insertPoaps.push(res)
    })
    console.log('insertPoaps', insertPoaps)
    await knex(TABLES.poaps).insert(insertPoaps)
  }
}

exports.down = async function (knex) {
  await knex.schema.dropTable(TABLES.quests)
  await knex.schema.dropTable(TABLES.poaps)
  await knex.schema.dropTable(TABLES.users)
  await knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION)
  await knex.schema.createTable('poaps', function (table) {
    table.increments('id')
    table.integer('event_id').notNullable()
    table.string('code', 6).notNullable().unique()
    table.boolean('is_code_claimed').default(false)
    table.boolean('is_quest_completed').default(false)
    table.boolean('is_signature_verified').default(false)
    table.string('address', 255)
  })
}
