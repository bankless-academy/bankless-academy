const FileSystem = require('fs')
const defipedia = require('./defipedia.json')
const stringifyObject = require('stringify-object')
const definitions = {}
for (const d of defipedia) {
  definitions[d.term] = d.definition.replace(/\\-/g, '')
}
FileSystem.writeFile('definitions.json', stringifyObject(definitions, { indent: '  ', singleQuotes: false }), (error) => {
  if (error) throw error
})
