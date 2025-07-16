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
    min: 2,
    max: 100,
    acquireTimeoutMillis: 60000, // 60 seconds
    createTimeoutMillis: 30000, // 30 seconds
    idleTimeoutMillis: 30000, // 30 seconds
    reapIntervalMillis: 1000, // 1 second
    createRetryIntervalMillis: 100, // 0.1 seconds
    propagateCreateError: false // don't throw on connection errors
  },
  acquireConnectionTimeout: 60000,
}
