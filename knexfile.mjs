import 'dotenv/config'

const DB_HOST = process.env.DB_HOST || 'localhost'

const ssl = DB_HOST !== 'localhost' ? { rejectUnauthorized: false } : null

export default {
  client: 'pg',
  connection: {
    host: DB_HOST,
    port: process.env.DB_PORT || '5432',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'postgres',
    ssl: ssl,
  },
  pool: {
    // Retry transient connection-creation failures instead of failing the
    // queued query (e.g. Postgres "53300: remaining connection slots are
    // reserved"). Everything else uses Knex defaults.
    propagateCreateError: false,
  },
}
