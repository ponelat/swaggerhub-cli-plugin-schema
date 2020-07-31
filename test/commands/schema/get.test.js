const {expect, test} = require('@oclif/test')
const config = require('~/src/config')
const {splitHostFromPath} = require('~/src/utils')

describe('schema:get', () => {

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
          schemas: [{
            name: 'foo',
            url: 'https://example.com/schema.json'
          }]

        }))

  .nock('https://example.com',
        api => api
        .get('/schema.json')
        .reply(200, {hello: true}))
  .stdout()
  .command(['schema:get', 'foo'])
  .it('should return mocked response for the correct URL', ctx => {
    const json = JSON.parse(ctx.stdout)
    expect(json).to.include({hello: true})
  })


  test
  .nock(catalogUrlBase,
        api => api
        .get(catalogUrlPath)

        .reply(200, {
          schemas: [{
            name: 'Not NOrmal name.js',
            url: 'https://example.com/'
          }]

        }))

  .nock('https://example.com',
        api => api
        .get('/')
        .reply(200, {hello: true}))
  .stdout()
  .command(['schema:get', 'not-normal-name-js'])
  .it('should normalize the name and return a schema', ctx => {
    const json = JSON.parse(ctx.stdout)
    expect(json).to.include({hello: true})
  })

})
