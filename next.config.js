/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  webpack: (config) => {
    config.externals = config.externals.concat([
      // Possible drivers (and related modules) for knex - we'll ignore them
      'tedious',
      'mssql',
      'sqlite3',
      'mysql2',
      'mariasql',
      'mysql',
      'oracle',
      'strong-oracle',
      'oracledb',
      'pg',
      'pg-query-stream'
    ]);
    return config
  },
}

module.exports = nextConfig
