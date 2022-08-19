const { TABLES, addIdAndTimestamps, onUpdateTrigger } = require('../db')

exports.up = async function (knex) {
  await knex.schema.createTable(TABLES.completions, addIdAndTimestamps)
  await knex.raw(onUpdateTrigger(TABLES.completions))
  await knex.schema.table(TABLES.completions, (table) => {
    table
      .integer('credential_id')
      .nullable()
      .unsigned()
      .references('id')
      .inTable(TABLES.credentials)
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index()
    table
      .integer('user_id')
      .nullable()
      .unsigned()
      .references('id')
      .inTable(TABLES.users)
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .index()
    table.timestamp('credential_claimed_at').nullable().defaultTo(null)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable(TABLES.completions)
}
