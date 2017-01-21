#! /usr/bin/env node

const commander = require('commander')
const getResults = require('../lib')

commander
  .usage('--date [DATE]')
  .option('-d, --date [DATE]', `'YYYY-MM-DD' format required`)
  .parse(process.argv)

getResults(commander.date)
  .then(results => console.log(JSON.stringify(results, null, 2)))
  .catch(error => console.error(error))
