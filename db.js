const TABLES = {
  users: 'users',
  lessons: 'lessons',
  quests: 'quests',
  poaps: 'poaps',
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function addIdAndTimestamps(table) {
  table.increments('id')
    .primary()
  table.timestamps(true, true);
  table.boolean('archived')
    .notNullable()
    .defaultTo(false)
    .index()
  table.timestamp('archived_at')
    .nullable()
}

function onUpdateTrigger(table) {
  return `
CREATE TRIGGER ${table}_updated_at
BEFORE UPDATE ON ${table}
FOR EACH ROW
EXECUTE PROCEDURE on_update_timestamp();
`
}

module.exports = {
  TABLES,
  addIdAndTimestamps,
  onUpdateTrigger,
};
