const {Command, flags} = require('@oclif/command')
const {getCatalogSchemaNames} = require('~/src/catalog.js')

class ListCommand extends Command {
  async run() {
    const names = await getCatalogSchemaNames()
    this.log(names.join('\n'))
  }
}

ListCommand.description = `List the schemas available
...
List the schemas available from schemastore.org
`

module.exports = ListCommand
