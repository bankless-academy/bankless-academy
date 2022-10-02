/* eslint-disable no-console */
const knex = require('knex')
const axios = require('axios')
const config = require('./knexfile.js')
const db = knex(config)
const { TABLES } = require('./db.js')
const POTION_API = 'https://potion.banklessacademy.com'

const NOTION_IDS = {}
NOTION_IDS['1dd77eb6ed4147f6bdfd6f23a30baa46'] = ''
NOTION_IDS['4167517c388a45f191931cf783270ec2'] = 'humanDAO/'
NOTION_IDS['696cedf98b294da186191abb515605d7'] = 'BanklessDAO/'

async function main() {
  const QUESTS = {}
  const promises = Object.keys(NOTION_IDS).map((notion_id) =>
    axios.get(`${POTION_API}/table?id=${notion_id}`)
  )
  axios
    .all(promises)
    .then(
      axios.spread((...res) => {
        res.map((notionRows, index) => {
          const PROJECT = Object.values(NOTION_IDS)[index]
          // console.log(notionRows.data)
          const lessons = notionRows.data.filter(
            (l) => l.fields['Publication status']
          )
          // console.log(lessons)
          for (const lesson of lessons) {
            // console.log(lesson.fields.Name)
            console.log(PROJECT)
            const quest =
              PROJECT.replace(/[^A-Za-z0-9]/g, '') +
              lesson.fields.Name.split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
                .replace(/\s+/g, '')
                .replace(/[^A-Za-z0-9]/g, '') // remove invalid chars
            const notionId = lesson.id.replace(/-/g, '')
            console.log(`${quest}:${notionId}`)
            QUESTS[quest] = notionId
          }
        })
      })
    )
    .then(async () => {
      console.log('QUESTS', QUESTS)
      const credentials_insert = Object.values(QUESTS).map((quest) => {
        return { notion_id: quest }
      })
      console.log(credentials_insert)
      await db(TABLES.credentials)
        .insert(credentials_insert)
        .onConflict('notion_id')
        .ignore()
      const quests = await db
        .select('created_at', 'updated_at', 'quest', 'user_id')
        .from(TABLES.quests)
      // console.log(quests)

      const credentials = await db
        .select('id', 'notion_id')
        .from(TABLES.credentials)
      console.log(credentials)
      const NOTION_IDS = {}
      for (const credential of credentials) {
        NOTION_IDS[credential.notion_id] = credential.id
      }
      console.log(NOTION_IDS)
      const insert = quests
        .map((quest) => {
          quest.credential_id = NOTION_IDS[QUESTS[quest.quest]]
          delete quest.quest
          if (quest.credential_id) return quest
          else {
            console.log(quest)
            return null
          }
        })
        .filter((row) => row !== null)
      // console.log(insert)
      await db(TABLES.completions).insert(insert)
      console.log('data migrated!')
      return
    })
    .catch((error) => {
      console.error(error)
    })
}

main()
