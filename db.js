const TABLES = {
  users: 'users',
  quests: 'quests',
  poaps: 'poaps',
  credentials: 'credentials',
  completions: 'completions',
  logs: 'logs',
}

function addIdAndTimestamps(table) {
  table.increments('id').primary()
  table.timestamps(true, true)
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
}
