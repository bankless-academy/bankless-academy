/* eslint-disable no-console */
const knex = require('knex')
const fs = require('fs')
const path = require('path')
const config = require('./knexfile.js')
const db = knex(config)
const { TABLES } = require('./db.js')


const POAPS_DIR = 'poaps'
const CLAIM_LINK = 'http://POAP.xyz/claim/'

fs.promises
  .readdir(POAPS_DIR)
  .then(async (files) => {
    const promises_files = files.map(async (file) => {
      if (path.extname(file) == '.txt') {
        const poapEventId = path.parse(file).name
        const insert = []
        const data = await fs.promises.readFile(POAPS_DIR + '/' + file, 'utf8')
        let nb_already_in = 0
        const existing_codes = await db(TABLES.poaps)
          .select('code')
          .where('event_id', poapEventId)
        const existing_codes_array = existing_codes.map((v) => v.code)
        const data_array = data.split('\n')
        data_array
          .filter((v) => v !== '')
          .map((code) => {
            if (code.includes(CLAIM_LINK)) {
              const clean_code = code.replace(new RegExp(CLAIM_LINK, 'gi'), '')
              if (existing_codes_array.includes(clean_code)) {
                nb_already_in++
              } else {
                insert.push({
                  event_id: poapEventId,
                  code: clean_code,
                })
              }
            }
            return
          })
        // console.log(insert)
        if (nb_already_in > 0)
          console.log(`${nb_already_in} codes already in ${poapEventId}`)
        await db(TABLES.poaps)
          .insert(insert)
          .then((res) => {
            console.log(`${res.rowCount} new codes added to ${poapEventId}`)
          })
          .catch((error) => {
            if (error.constraint === 'poaps_code_unique') {
              console.error('code already added')
            }
          })
        const [remaining_poaps] = await db(TABLES.poaps)
          .count('is_claimed')
          .where('is_claimed', false)
          .where('event_id', poapEventId)
        console.log(`${remaining_poaps.count} remaining codes for ${poapEventId}`)
      }
    })
    await Promise.all(promises_files)
    process.exit()
  })
  .catch((err) => {
    console.error(err)
  })
