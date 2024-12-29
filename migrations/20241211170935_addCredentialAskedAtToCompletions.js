const { TABLES } = require('../db')

exports.up = async function (knex) {
  await knex.schema.table(TABLES.completions, (table) => {
    table.timestamp('credential_asked_at').nullable().defaultTo(null)
  })
}

exports.down = async function (knex) {
  await knex.schema.table(TABLES.completions, (table) => {
    table.dropColumn('credential_asked_at')
  })
}
