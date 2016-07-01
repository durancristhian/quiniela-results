# quiniela-results

[![npm version](https://img.shields.io/npm/v/quiniela-results.svg)](https://www.npmjs.com/package/quiniela-results)
[![Travis branch](https://img.shields.io/travis/durancristhian/quiniela-results/master.svg?maxAge=2592000)](https://travis-ci.org/durancristhian/quiniela-results)
[![codecov coverage](https://img.shields.io/codecov/c/github/durancristhian/quiniela-results.svg)](https://codecov.io/github/durancristhian/quiniela-results)
[![node](https://img.shields.io/node/v/quiniela-results.svg?maxAge=2592000)](https://www.npmjs.com/package/quiniela-results)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?maxAge=2592000)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=2592000)](http://makeapullrequest.com)
[![license](https://img.shields.io/github/license/durancristhian/quiniela-results.svg)](https://github.com/durancristhian/quiniela-results/blob/master/LICENSE)

Module to obtain the results of the argentinian lotery from a given date. It can be executed as a CLI or consumed as any other npm module (including client-side implementations).

## Demo

![quiniela-results](https://raw.githubusercontent.com/durancristhian/quiniela-results/master/images/quiniela-results-demo-1.gif)

## Instalation

```bash
# Use -g, --save or --save-dev. Whatever you need.
npm install quiniela-results
```

## Use

* As a CLI:

```bash
quiniela-results --date '2016-06-30'
```

* As any other npm module (including client-side implementations):

```javascript
const getResults = require('quiniela-results')

getResults('2016-06-30')
  .then(results => console.log(results))
  .catch(error => console.error(error))
```

## How it works

1. It hits [this URL](http://www.dejugadas.com/quinielas/datospizarra.php) with the given date via POST.
2. It uses [cheerio](https://github.com/cheeriojs/cheerio) to parse the response's body.
3. It performs a reduce to get the results from the cheerio's parsed DOM.
4. It returns the results as an object that looks like this:

```javascript
{
  Nacional: {
    laPrimera: '4148',
    matutina: '3641',
    vespertina: '1316',
    nocturna: '1754',
    rawName: 'Nacional'
  },
  Provincia: {
    laPrimera: '5709',
    matutina: '1100',
    vespertina: '0572',
    nocturna: '3220',
    rawName: 'Provincia'
  },
  SantaFe: {
    laPrimera: '4466',
    matutina: '1401',
    vespertina: '0101',
    nocturna: '79707',
    rawName: 'Santa Fe'
  },
  Montevideo: {
    laPrimera: '----',
    matutina: '9662',
    vespertina: '----',
    nocturna: '1046',
    rawName: 'Montevideo'
  },
  EntreRios: {
    laPrimera: '0215',
    matutina: '2912',
    vespertina: '0841',
    nocturna: '9559',
    rawName: 'Entre Ríos'
  },
  Mendoza: {
    laPrimera: '----',
    matutina: '0377',
    vespertina: '0370',
    nocturna: '5597',
    rawName: 'Mendoza'
  },
  Cordoba: {
    laPrimera: '6785',
    matutina: '3962',
    vespertina: '6283',
    nocturna: '5337',
    rawName: 'Córdoba'
  },
  Corrientes: {
    laPrimera: '5455',
    matutina: '1171',
    vespertina: '4085',
    nocturna: '6002',
    rawName: 'Corrientes'
  },
  Chaco: {
    laPrimera: '1115',
    matutina: '4895',
    vespertina: '9434',
    nocturna: '2144',
    rawName: 'Chaco'
  },
  Santiago: {
    laPrimera: '----',
    matutina: '4188',
    vespertina: '9211',
    nocturna: '3373',
    rawName: 'Santiago'
  },
  Neuquen: {
    laPrimera: '8463',
    matutina: '7156',
    vespertina: '2648',
    nocturna: '21663',
    rawName: 'Neuquén'
  },
  SanLuis: {
    laPrimera: '2968',
    matutina: '9475',
    vespertina: '6221',
    nocturna: '8969',
    rawName: 'San Luis'
  },
  Salta: {
    laPrimera: '7836',
    matutina: '7526',
    vespertina: '4360',
    nocturna: '1830',
    rawName: 'Salta'
  },
  Jujuy: {
    laPrimera: '5602',
    matutina: '1350',
    vespertina: '8111',
    nocturna: '0746',
    rawName: 'Jujuy'
  },
  Tucuman: {
    laPrimera: '8734',
    matutina: '0506',
    vespertina: '8262',
    nocturna: '7898',
    rawName: 'Tucumán'
  },
  Chubut: {
    laPrimera: '0157',
    matutina: '7382',
    vespertina: '5815',
    nocturna: '9100',
    rawName: 'Chubut'
  },
  Formosa: {
    laPrimera: '6811',
    matutina: '3656',
    vespertina: '3821',
    nocturna: '----',
    rawName: 'Formosa'
  },
  Misiones: {
    laPrimera: '5048',
    matutina: '7089',
    vespertina: '3102',
    nocturna: '7330',
    rawName: 'Misiones'
  },
  Catamarca: {
    laPrimera: '7949',
    matutina: '2196',
    vespertina: '7077',
    nocturna: '7801',
    rawName: 'Catamarca'
  },
  SanJuan: {
    laPrimera: '----',
    matutina: '3838',
    vespertina: '7619',
    nocturna: '1270',
    rawName: 'San Juan'
  },
  LaRioja: {
    laPrimera: '032',
    matutina: '578',
    vespertina: '---',
    nocturna: '406',
    rawName: 'La Rioja'
  }
}
```

## Contributing

No restriction at all. Feel free to contribute with whatever you want.

## License

MIT
