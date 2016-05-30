# quiniela-results

[![npm-version](https://img.shields.io/npm/v/quiniela-results.svg)](https://www.npmjs.com/package/quiniela-results)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![commitizen-friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![license](https://img.shields.io/npm/l/quiniela-results.svg)

```quiniela-results``` is a module to obtain the results of the argentinian lotery from a given date

## Instalation

```bash
npm i --save quiniela-results
```

## Use

```javascript
const getResults = require('quiniela-results')

getResults('2016/05/30', (error, results) => {
  if (error) {
    return console.error(error)
  }

  console.log(results)
})
```

## Contributing

No restriction at all. Feel free to contribute with whatever you want

## License

MIT
