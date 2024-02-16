const { TABLES } = require('../db')

exports.up = async function (knex) {
  await knex.schema.table(TABLES.users, (table) => {
    table.jsonb('ba_stamps').nullable().defaultTo({}).index(null, 'GIN')
  })
  await knex.schema.table(TABLES.users, (table) => {
    table.jsonb('socials').nullable().defaultTo({}).index(null, 'GIN')
  })
}

exports.down = async function (knex) {
  await knex.schema.table(TABLES.users, (table) => {
    table.dropColumn('socials')
    table.dropColumn('ba_stamps')
  })
}
