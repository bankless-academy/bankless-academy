const fs = require('fs')
const path = require('path')

const pkgPath = path.join(
  'node_modules',
  '@walletconnect',
  'logger',
  'package.json'
)

if (!fs.existsSync(pkgPath)) process.exit(0)

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
if (pkg.exports && pkg.exports['.']) process.exit(0)

pkg.exports = {
  '.': {
    types: './dist/types/index.d.ts',
    import: './dist/index.es.js',
    require: './dist/index.cjs.js',
    default: './dist/index.cjs.js',
  },
}
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2))
console.log('[patch] added exports map to @walletconnect/logger')
