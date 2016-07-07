#! /usr/bin/env node

const commander = require('commander')
const getResults = require('../lib')

commander
  .usage('--date [DATE]')
  .option('-d, --date [DATE]', `'YYYY-MM-DD' format required`) // eslint-disable-line quotes
  .parse(process.argv)

getResults(commander.date)
  .then(results => console.log(results))
  .catch(error => console.error(error))
