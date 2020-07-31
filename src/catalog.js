const fetch = require('node-fetch')
const config = require('./config.js')

module.exports = {
  getCatalog,
  getCatalogUrlByName,
  getCatalogSchemaNames,
  config,
}

async function getCatalog() {
  return fetch(config.catalogUrl).then(res => res.json())
}

async function getCatalogUrlByName(name) {
  const catalog = await getCatalog()
  return catalog.schemas.find(s => {
    return name == normalizeString(s.name)
  }).url
}

async function getCatalogSchemaNames(name) {
  const catalog = await getCatalog()
  return catalog.schemas.map(s => {
    return normalizeString(s.name)
  })
}

function normalizeString(str) {
  return str.replace(/[^a-zA-Z0-9\-]+/g, '-')
    .replace(/-+/, '-')
    .replace(/^-/, '')
    .replace(/-$/, '')
    .toLowerCase()
}
