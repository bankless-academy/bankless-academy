import knex from 'knex'

const config = require('../../knexfile.js')
export const TABLES = require('../../db.js')

export const db = knex(config)
