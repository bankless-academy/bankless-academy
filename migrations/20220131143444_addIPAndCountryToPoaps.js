const { TABLES } = require('../db')

exports.up = async function (knex) {
  await knex.schema.table(TABLES.poaps, (table) => {
    table.string('ip_address', 255).nullable().index()
    table.string('country_code', 255).nullable().index()
  })
}

exports.down = async function (knex) {
  await knex.schema.table(TABLES.poaps, (table) => {
    table.dropColumn('ip_address')
    table.dropColumn('country_code')
  })
}
