import knex from 'knex'
const config = require('../../knexfile.js')

const db = knex(config)

export default db
