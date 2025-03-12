const { TABLES, addIdAndTimestamps, onUpdateTrigger } = require('../db')

exports.up = async function (knex) {
  await knex.schema.createTable(TABLES.logs, addIdAndTimestamps)
  await knex.raw(onUpdateTrigger(TABLES.logs))
  await knex.schema.table(TABLES.logs, (table) => {
    table.text('prompt').notNullable().index()
    table.string('event', 255).notNullable().index()
    table.jsonb('data').nullable().defaultTo({}).index(null, 'GIN')
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable(TABLES.logs)
}
