const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')
const request = require('request')
const validator = require('validator')

const dreamsFile = path.join(__dirname, '../', 'resources', 'dreams.json')
const dreamsJSON = fs.readFileSync(dreamsFile, 'utf8')
const parsedDreams = JSON.parse(dreamsJSON)
const dreams = parsedDreams.dreams

function getResultObject (numberAsString) {
  const fullNumber = parseInt(numberAsString)
  const lastTwoDigitNumber = parseInt(numberAsString.slice(-2))

  const meaning = isNaN(lastTwoDigitNumber) ? '' : dreams[lastTwoDigitNumber]
  const number = isNaN(fullNumber) ? '' : fullNumber

  return {
    meaning,
    number
  }
}

module.exports = (date = '') => {
  return new Promise((resolve, reject) => {
    !validator.isISO8601(date) && reject(new Error(`
      '${date}' is not a valid ISO 8601 date.
      'YYYY-MM-DD' format required.
    `))

    let requestParameters = {
      form: {
        fecha: date
      },
      url: 'http://www.dejugadas.com/quinielas/datospizarra.php'
    }

    request.post(requestParameters, (error, response, body) => {
      if (error) {
        return reject(error)
      }

      let $ = cheerio.load(body, {
        normalizeWhitespace: true
      })

      let results = $('#t_datos tr')
        .toArray()
        .reduce(
          (previous, current) => {
            let loteryName = $(current).children().eq(0).text()
              .replace(' ', '')
              .replace('á', 'a')
              .replace('é', 'e')
              .replace('í', 'i')
              .replace('ó', 'o')
              .replace('ú', 'u')

            previous[`${loteryName}`] = {
              laPrimera: getResultObject($(current).children().eq(2).text()),
              matutina: getResultObject($(current).children().eq(3).text()),
              vespertina: getResultObject($(current).children().eq(4).text()),
              nocturna: getResultObject($(current).children().eq(5).text()),
              rawName: $(current).children().eq(0).text()
            }

            return previous
          },
          {}
        )

      resolve(results)
    })
  })
}
