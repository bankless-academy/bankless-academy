const { TABLES } = require('../db')

exports.up = async function (knex) {
  await knex.schema.table(TABLES.users, (table) => {
    table.jsonb('gitcoin_stamps').nullable().defaultTo({}).index(null, 'GIN')
    table
      .integer('sybil_user_id')
      .nullable()
      .unsigned()
      .references('id')
      .inTable(TABLES.users)
      .onUpdate('CASCADE')
  })
}

exports.down = async function (knex) {
  await knex.schema.table(TABLES.users, (table) => {
    table.dropColumn('gitcoin_stamps')
    table.dropColumn('sybil_user_id')
  })
}
