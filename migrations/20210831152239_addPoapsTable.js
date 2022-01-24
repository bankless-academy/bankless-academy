exports.up = function (knex) {
  return knex.schema.createTable('poaps', function (table) {
    table.increments('id')
    table.integer('event_id').notNullable()
    table.string('code', 6).notNullable().unique()
    table.boolean('is_code_claimed').default(false)
    table.boolean('is_quest_completed').default(false)
    table.boolean('is_signature_verified').default(false)
    table.string('address', 255)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('poaps')
}
