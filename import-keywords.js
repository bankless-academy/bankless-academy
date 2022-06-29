/* eslint-disable no-console */
require('dotenv').config()
const axios = require('axios')
const FileSystem = require('fs')

const PROJECT_DIR = process.env.PROJECT_DIR || ''
const IS_WHITELABEL = PROJECT_DIR !== ''
const DEFAULT_NOTION_ID = '623e965e4f10456094d17aa94ec37105'
const POTION_API = 'https://potion.banklessacademy.com'
const KEYWORDS_FILE = IS_WHITELABEL ? 'whitelabel-keywords.json' : 'keywords.json'

const args = process.argv
const NOTION_ID = args[2] && args[2].length === 32 ? args[2] : process.env.DEFAULT_KEYWORD_DB_ID || DEFAULT_NOTION_ID
console.log('NOTION_ID', NOTION_ID)

// TODO: make sure these color are OK
// TODO: how to handle dark mode?
// TODO: move color logic to frontend
const COLOR_MATCHING = {
  green: 'rgba(0, 135, 107, 1)',
  blue: 'rgba(0, 120, 223, 1)',
  red: 'rgba(255, 0, 26, 1)',
  black: 'rgba(128, 128, 128, 1)',
}

const keywords = {}

axios
  .get(`${POTION_API}/table?id=${NOTION_ID}&sort=keyword`)
  .then((response) => {
    response.data.map((k) => {
      const { definition, color, keyword } = k.fields
      if (definition !== undefined)
        keywords[keyword] = { definition, color: COLOR_MATCHING[color] }
    })
    console.log(keywords)
    const FILE_CONTENT = `${JSON.stringify(keywords, null, 2)}
`
    FileSystem.writeFile(KEYWORDS_FILE, FILE_CONTENT, (error) => {
      if (error) throw error
    })
    console.log(`export done -> check ${KEYWORDS_FILE}`)
  })
  .catch((error) => {
    console.log(error)
  })
