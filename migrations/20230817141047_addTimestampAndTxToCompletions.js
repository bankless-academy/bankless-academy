const { TABLES } = require('../db')

exports.up = async function (knex) {
  await knex.schema.table(TABLES.completions, (table) => {
    table.timestamp('transaction_at').nullable().defaultTo(null)
    table.string('transaction_hash', 255).nullable().index()
  })
}

exports.down = async function (knex) {
  await knex.schema.table(TABLES.completions, (table) => {
    table.dropColumn('transaction_at')
    table.dropColumn('transaction_hash')
  })
}
