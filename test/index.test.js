const getResults = require('../lib')
const nock = require('nock')
const test = require('tape')

test('check results', (assert) => {
  let today = (new Date()).toISOString().substring(0, 10)

  getResults(today)
    .then(results => {
      assert.equal(typeof results, 'object', 'results should be an object')
      assert.end()
    })
})

test('check invalid date parameter', (assert) => {
  let today = 'this is not a valid date'

  getResults(today)
    .catch(error => {
      assert.equal(typeof error, 'object', 'error should be an object after an invalid date parameter')
      assert.end()
    })
})

test('check network error (404)', (assert) => {
  let today = (new Date()).toISOString().substring(0, 10)

  nock('http://www.dejugadas.com/quinielas/datospizarra.php')
    .get('*')
    .reply(404)

  getResults(today)
    .catch(error => {
      assert.equal(typeof error, 'object', 'error should be an object after a network error (404)')
      assert.end()
    })
})
