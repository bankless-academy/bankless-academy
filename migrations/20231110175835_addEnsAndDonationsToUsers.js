const { TABLES } = require('../db')

exports.up = async function (knex) {
  await knex.schema.table(TABLES.users, (table) => {
    table.string('ens_name', 255).nullable().index()
    table.string('ens_avatar', 255).nullable().index()
    table.jsonb('donations').nullable().defaultTo({}).index(null, 'GIN')
  })
}

exports.down = async function (knex) {
  await knex.schema.table(TABLES.users, (table) => {
    table.dropColumn('donations')
    table.dropColumn('ens_avatar')
    table.dropColumn('ens_name')
  })
}
