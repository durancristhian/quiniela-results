const getResults = require('./index.js')
const test = require('tape')

test('check error', (assert) => {
  getResults('this is not a date', (error, results) => {
    assert.equal(typeof error, 'object', 'error should not be null')
    assert.end()
  })
})

test('check results', (assert) => {
  getResults('2016/05/30', (error, results) => {
    assert.equal(error, null, 'error should be null')
    assert.equal(Array.isArray(results), true, 'results should be an array')
    assert.notEqual(results.length, 0, 'results.length should not be 0')
    assert.end()
  })
})
