const cheerio = require('cheerio')
const request = require('request')
const validator = require('validator')

module.exports = (date = '') => {
  return new Promise((resolve, reject) => {
    let isValidDate = validator.isISO8601(date)

    if (!isValidDate) {
      return reject(new Error(`'${date}' is not a valid ISO 8601 date. 'YYYY-MM-DD' format required.`))
    }

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

      let $ = cheerio.load(
        body,
        {
          normalizeWhitespace: true
        }
      )

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
              laPrimera: $(current).children().eq(2).text(),
              matutina: $(current).children().eq(3).text(),
              vespertina: $(current).children().eq(4).text(),
              nocturna: $(current).children().eq(5).text(),
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
