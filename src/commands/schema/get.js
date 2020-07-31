const {Command, flags} = require('@oclif/command')
const {getCatalogUrlByName} = require('../../catalog.js')

const fetch = require('node-fetch')

class GetCommand extends Command {
  async run() {
    const {flags, args} = this.parse(GetCommand)
    const url = await getCatalogUrlByName(args['schema-name'])
    const res = await fetch(url)
    if(!res.ok)
      this.error('Failed to fetch schema file!')
    const json = await res.json()
    this.log(JSON.stringify(json))
  }
}

GetCommand.description = `Fetch a JSON Schema named NAME.
...
Extra documentation goes here
`

GetCommand.args = [{
  name: 'schema-name',
  required: true,
  description: 'The JSON Schema to fetch. See schema:list for a list.'
}]

module.exports = GetCommand
