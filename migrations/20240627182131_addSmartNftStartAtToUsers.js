const { TABLES } = require('../db')

exports.up = async function (knex) {
  await knex.schema.table(TABLES.completions, (table) => {
    table.timestamp('smart_nft_start_at').nullable().defaultTo(null)
  })
}

exports.down = async function (knex) {
  await knex.schema.table(TABLES.completions, (table) => {
    table.dropColumn('smart_nft_start_at')
  })
}
