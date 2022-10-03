const { TABLES, addIdAndTimestamps, onUpdateTrigger } = require('../db')

exports.up = async function (knex) {
  await knex.schema.createTable(TABLES.credentials, addIdAndTimestamps)
  await knex.raw(onUpdateTrigger(TABLES.credentials))
  await knex.schema.table(TABLES.credentials, (table) => {
    table.string('notion_id', 255).notNullable().unique()
    table.string('signature', 255)
  })
}

exports.down = async function (knex) {
  await knex.schema.dropTable(TABLES.credentials)
}
