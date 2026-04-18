const fs = require('fs')
const path = require('path')

const EXPORTS = {
  '.': {
    types: './dist/types/index.d.ts',
    import: './dist/index.es.js',
    require: './dist/index.cjs.js',
    default: './dist/index.cjs.js',
  },
}

function findLoggerPackageJsons(dir, results = []) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return results
  }
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const full = path.join(dir, entry.name)
    // Found a @walletconnect dir → check for logger/package.json
    if (entry.name === 'logger' && path.basename(dir) === '@walletconnect') {
      const pkg = path.join(full, 'package.json')
      if (fs.existsSync(pkg)) results.push(pkg)
      continue
    }
    findLoggerPackageJsons(full, results)
  }
  return results
}

const paths = findLoggerPackageJsons('node_modules')
let patched = 0
for (const p of paths) {
  const pkg = JSON.parse(fs.readFileSync(p, 'utf8'))
  if (pkg.exports && pkg.exports['.']) continue
  pkg.exports = EXPORTS
  fs.writeFileSync(p, JSON.stringify(pkg, null, 2))
  console.log('[patch] added exports map:', p)
  patched++
}
if (patched === 0) console.log('[patch] no changes needed')
