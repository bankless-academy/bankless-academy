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
      // etc. with more modules
    ]);
    return config
  },
}

module.exports = nextConfig
