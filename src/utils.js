const Url = require('url')

module.exports = {
  splitHostFromPath,
}

// For nock and it's silly needs.
// Returns [href, path]. Eg: ['https://example.com', '/one/two?asdf']
function splitHostFromPath(url) {
  const {protocol, host, path} = Url.parse(url)
  return [protocol + '//' + host, path]
}
