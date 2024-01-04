const { TABLES } = require('../db')

exports.up = async function (knex) {
  await knex.schema.table(TABLES.completions, (table) => {
    table.boolean('is_quest_completed').default(false).index()
    table.boolean('is_quest_conversion').default(false).index()
    table.timestamp('quest_completed_at').nullable().defaultTo(null)
  })
}

exports.down = async function (knex) {
  await knex.schema.table(TABLES.completions, (table) => {
    table.dropColumn('quest_completed_at')
    table.dropColumn('is_quest_conversion')
    table.dropColumn('is_quest_completed')
  })
}

// Init all existing quest completions manually after deployment
/*

DROP TRIGGER "completions_updated_at" ON "public"."completions";
UPDATE "public"."completions" SET "is_quest_completed" = 't', "quest_completed_at" = created_at
CREATE TRIGGER "completions_updated_at" BEFORE UPDATE ON "public"."completions" FOR EACH ROW EXECUTE FUNCTION on_update_timestamp();

*/
