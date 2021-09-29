/* eslint-disable no-console */
const knex = require('knex')
const fs = require('fs')
const path = require('path')
const config = require('./knexfile.js')
const db = knex(config)

const POAPS_DIR = 'poaps'
const CLAIM_LINK = 'http://POAP.xyz/claim/'

fs.promises
  .readdir(POAPS_DIR)
  .then((files) => {
    files.forEach(async (file) => {
      console.log(file)
      if (path.extname(file) == '.txt') {
        const poapEventId = path.parse(file).name
        const insert = []
        const data = await fs.promises.readFile(POAPS_DIR + '/' + file, 'utf8')
        data.split('\n').forEach((code) => {
          if (code.includes(CLAIM_LINK))
            insert.push({
              event_id: poapEventId,
              code: code.replace(new RegExp(CLAIM_LINK, 'gi'), ''),
            })
        })
        // console.log(insert)
        db('poaps')
          .insert(insert)
          .then((res) => {
            console.log(`${res.rowCount} new codes added`)
          })
          .catch((error) => {
            if (error.constraint === 'poaps_code_unique') {
              console.error('code already added')
            }
          })
      }
    })
  })
  .catch((err) => {
    console.error(err)
  })
