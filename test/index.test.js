const getResults = require('../lib')
const test = require('tape')

test('check results', (assert) => {
  let today = (new Date()).toISOString().substring(0, 10)

  getResults(today)
    .then(results => {
      assert.equal(Array.isArray(results), true, 'results should be an array')
      assert.end()
    })
})
