# quiniela-results

[![npm version](https://img.shields.io/npm/v/quiniela-results.svg)](https://www.npmjs.com/package/quiniela-results)
[![Travis branch](https://img.shields.io/travis/durancristhian/quiniela-results/master.svg?maxAge=2592000)](https://travis-ci.org/durancristhian/quiniela-results)
[![codecov coverage](https://img.shields.io/codecov/c/github/durancristhian/quiniela-results.svg)](https://codecov.io/github/durancristhian/quiniela-results)
[![Dependency Status](https://dependencyci.com/github/durancristhian/quiniela-results/badge)](https://dependencyci.com/github/durancristhian/quiniela-results)
[![node](https://img.shields.io/node/v/quiniela-results.svg?maxAge=2592000)](https://www.npmjs.com/package/quiniela-results)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?maxAge=2592000)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=2592000)](http://makeapullrequest.com)
[![license](https://img.shields.io/github/license/durancristhian/quiniela-results.svg)](https://github.com/durancristhian/quiniela-results/blob/master/LICENSE)

:calendar: Module to obtain the results of the argentinian lotery from a given date. It can be executed as a CLI or consumed as any other npm module.

## Demo

![quiniela-results](https://raw.githubusercontent.com/durancristhian/quiniela-results/master/images/quiniela-results-demo-2.gif)

## Instalation

```bash
# Use -g, --save or --save-dev. Whatever you need.
npm install quiniela-results
```

## Use

* As a CLI:

```bash
quiniela-results --date '2016-10-08'
```

* As any other npm module:

```javascript
const getResults = require('quiniela-results')

getResults('2016-10-08')
  .then(results => console.log(results))
  .catch(error => console.error(error))
```

## How it works

1. It hits [this URL](http://www.dejugadas.com/quinielas/datospizarra.php) with the given date via POST.
2. It uses [cheerio](https://github.com/cheeriojs/cheerio) to parse the response's body.
3. It performs a reduce to get the results from the cheerio's parsed DOM.
4. It returns the results as an object that looks like this:

```javascript
{ Nacional:
   { laPrimera: { meaning: 'Lombrices', number: 1466 },
     matutina: { meaning: 'Anteojos', number: 4295 },
     vespertina: { meaning: 'Borracho', number: 8814 },
     nocturna: { meaning: 'El cuchillo', number: 6441 },
     rawName: 'Nacional' },
  Provincia:
   { laPrimera: { meaning: 'Las plantas', number: 9659 },
     matutina: { meaning: 'Linterna', number: 6085 },
     vespertina: { meaning: 'Madre e Hijo', number: 3052 },
     nocturna: { meaning: 'Niño', number: 8002 },
     rawName: 'Provincia' },
  SantaFe:
   { laPrimera: { meaning: 'Linterna', number: 3485 },
     matutina: { meaning: 'Niño', number: 7902 },
     vespertina: { meaning: 'Revolver', number: 807 },
     nocturna: { meaning: 'Gente negra', number: 55574 },
     rawName: 'Santa Fe' },
  Montevideo:
   { laPrimera: { meaning: '', number: '' },
     matutina: { meaning: '', number: '' },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: 'El Jorobado', number: 6157 },
     rawName: 'Montevideo' },
  EntreRios:
   { laPrimera: { meaning: 'Muerto', number: 5147 },
     matutina: { meaning: 'La virgen', number: 4260 },
     vespertina: { meaning: 'La cama', number: 9404 },
     nocturna: { meaning: 'Cocinero', number: 523 },
     rawName: 'Entre Ríos' },
  Mendoza:
   { laPrimera: { meaning: '', number: '' },
     matutina: { meaning: 'Las llamas', number: 9076 },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: 'Vicios', number: 2669 },
     rawName: 'Mendoza' },
  Cordoba:
   { laPrimera: { meaning: 'Zapatillas', number: 7842 },
     matutina: { meaning: 'El Cerro', number: 1328 },
     vespertina: { meaning: 'La Cabeza', number: 3134 },
     nocturna: { meaning: 'Madre e Hijo', number: 1152 },
     rawName: 'Córdoba' },
  Corrientes:
   { laPrimera: { meaning: 'San Pedro', number: 2129 },
     matutina: { meaning: 'Mal tiempo', number: 9183 },
     vespertina: { meaning: 'La yeta', number: 7813 },
     nocturna: { meaning: 'La caída', number: 1756 },
     rawName: 'Corrientes' },
  Chaco:
   { laPrimera: { meaning: 'La caída', number: 7056 },
     matutina: { meaning: 'Castaña', number: 3736 },
     vespertina: { meaning: 'La Misa', number: 3026 },
     nocturna: { meaning: 'Muerto', number: 8647 },
     rawName: 'Chaco' },
  Santiago:
   { laPrimera: { meaning: '', number: '' },
     matutina: { meaning: 'Gente negra', number: 9374 },
     vespertina: { meaning: 'Gente negra', number: 7674 },
     nocturna: { meaning: 'El cazador', number: 165 },
     rawName: 'Santiago' },
  Neuquen:
   { laPrimera: { meaning: 'La Luz', number: 6631 },
     matutina: { meaning: 'Gente negra', number: 8174 },
     vespertina: { meaning: 'Pescado', number: 1819 },
     nocturna: { meaning: 'La caída', number: 1756 },
     rawName: 'Neuquén' },
  SanLuis:
   { laPrimera: { meaning: 'La pelea', number: 1682 },
     matutina: { meaning: 'Las plantas', number: 5259 },
     vespertina: { meaning: 'La caída', number: 7956 },
     nocturna: { meaning: 'Huevos', number: 5500 },
     rawName: 'San Luis' },
  Salta:
   { laPrimera: { meaning: 'Revolver', number: 7007 },
     matutina: { meaning: 'Pescado', number: 3919 },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: 'La música', number: 7555 },
     rawName: 'Salta' },
  Jujuy:
   { laPrimera: { meaning: 'Niña Bonita', number: 4615 },
     matutina: { meaning: 'El pan', number: 7050 },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: 'Muerto', number: 9947 },
     rawName: 'Jujuy' },
  Tucuman:
   { laPrimera: { meaning: 'La caída', number: 1156 },
     matutina: { meaning: 'Madre e Hijo', number: 4752 },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: 'Ramera', number: 2378 },
     rawName: 'Tucumán' },
  Chubut:
   { laPrimera: { meaning: 'Niña Bonita', number: 3015 },
     matutina: { meaning: 'San Cono', number: 9303 },
     vespertina: { meaning: 'Serrucho', number: 1251 },
     nocturna: { meaning: 'Gente negra', number: 1874 },
     rawName: 'Chubut' },
  Formosa:
   { laPrimera: { meaning: 'Soldado', number: 6412 },
     matutina: { meaning: 'Castaña', number: 9636 },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: 'La cama', number: 9704 },
     rawName: 'Formosa' },
  Misiones:
   { laPrimera: { meaning: 'Perro', number: 8706 },
     matutina: { meaning: 'Hospital', number: 2373 },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: 'La cama', number: 504 },
     rawName: 'Misiones' },
  Catamarca:
   { laPrimera: { meaning: 'Desgracia', number: 17 },
     matutina: { meaning: 'Desgracia', number: 2717 },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: 'El cuchillo', number: 8341 },
     rawName: 'Catamarca' },
  SanJuan:
   { laPrimera: { meaning: '', number: '' },
     matutina: { meaning: 'El cazador', number: 4065 },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: 'Las plantas', number: 3659 },
     rawName: 'San Juan' },
  LaRioja:
   { laPrimera: { meaning: '', number: '' },
     matutina: { meaning: '', number: '' },
     vespertina: { meaning: '', number: '' },
     nocturna: { meaning: '', number: '' },
     rawName: 'La Rioja' } }
```

## Contributing

No restriction at all. Feel free to contribute with whatever you want.

## License

MIT
