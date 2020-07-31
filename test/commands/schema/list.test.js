const {expect, test} = require('@oclif/test')
const { splitHostFromPath } = require('~/src/utils')
const config = require('~/src/config')

describe('schema:list', () => {

  test
  .stdout()
  .command(['schema:get'])
  .exit(2)
  .it('should complain that it\'s missing a parameter')

  const [catalogUrlBase, catalogUrlPath] = splitHostFromPath(config.catalogUrl)
  test
  .nock(catalogUrlBase,
        api => api
        .get(catalogUrlPath)
        .reply(200, {
          schemas: [
            {name: 'one'},
            {name: 'two'},
            {name: 'three with spaces'}
          ]
        }))
  .stdout()
  .command(['schema:list'])
  .it('should return list of schema names (normalized) ', ctx => {
    expect(ctx.stdout).to.include('one')
    expect(ctx.stdout).to.include('\ntwo')
    expect(ctx.stdout).to.include('\nthree-with-spaces')
  })

})
