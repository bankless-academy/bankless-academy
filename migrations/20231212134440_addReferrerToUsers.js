const { TABLES } = require('../db')

exports.up = async function (knex) {
  await knex.schema.table(TABLES.users, (table) => {
    table
      .integer('referrer')
      .nullable()
      .unsigned()
      .references('id')
      .inTable(TABLES.users)
      .onUpdate('CASCADE')
  })
}

exports.down = async function (knex) {
  await knex.schema.table(TABLES.users, (table) => {
    table.dropColumn('referrer')
  })
}
