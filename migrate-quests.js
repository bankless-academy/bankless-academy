/* eslint-disable no-console */
const knex = require('knex')
const config = require('./knexfile.js')
const db = knex(config)
const { TABLES } = require('./db.js')
// run `tsc src/constants/lessons.ts`
const lessons = require('./src/constants/lessons.js')

async function main() {
  const quests = await db.select('created_at', 'updated_at', 'quest', 'user_id').from(TABLES.quests)
  // console.log(quests)
  // console.log(lessons.default)
  const credentials = await db.select('id', 'notion_id').from(TABLES.credentials)
  console.log(credentials)
  const NOTION_IDS = {}
  for (const credential of credentials) {
    NOTION_IDS[credential.notion_id] = credential.id
  }
  console.log(NOTION_IDS)
  const QUESTS = {}
  for (const lesson of lessons.default) {
    console.log(lesson.notionId)
    console.log(lesson.quest)
    QUESTS[lesson.quest] = NOTION_IDS[lesson.notionId]
  }
  console.log(QUESTS)
  const insert = quests.map((quest) => {
    quest.credential_id = QUESTS[quest.quest]
    delete quest.quest
    if (quest.credential_id)
      return quest
    else
      return null
  }).filter((row) => row !== null)
  console.log(insert)
  await db(TABLES.completions).insert(insert)
  console.log('done!')
}

main()
