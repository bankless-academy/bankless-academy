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
  await knex.raw(ON_UPDATE_TIMESTAMP_FUNCTION)

  // users
  await knex.schema.createTable(TABLES.users, addIdAndTimestamps)
  await knex.raw(onUpdateTrigger(TABLES.users))
  await knex.schema.table(TABLES.users, table => {
    table.string('address', 255)
      .index()
  })

  // lessons
  await knex.schema.createTable(TABLES.lessons, addIdAndTimestamps)
  await knex.raw(onUpdateTrigger(TABLES.lessons))
  await knex.schema.table(TABLES.lessons, table => {
    table.string('lesson_slug', 255)
      .notNullable()
      .index()
  })

  // poaps
  await knex.schema.createTable(TABLES.poaps, addIdAndTimestamps)
  await knex.raw(onUpdateTrigger(TABLES.poaps))
  await knex.schema.table(TABLES.poaps, table => {
    table.integer('event_id')
      .notNullable()
      .index()
    table.string('code', 6)
      .notNullable()
      .unique()
      .index()
    table.boolean('is_poap_claimed')
      .default(false)
      .index()
    table.integer('user_id')
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
  await knex.schema.table(TABLES.quests, table => {
    table.integer('lesson_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('lessons')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index()
    table.integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index()
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable(TABLES.quests)
  await knex.schema.dropTable(TABLES.poaps)
  await knex.schema.dropTable(TABLES.lessons)
  await knex.schema.dropTable(TABLES.users)
  await knex.raw(DROP_ON_UPDATE_TIMESTAMP_FUNCTION)
}
