const cheerio = require('cheerio')
const request = require('request')
const validator = require('validator')

module.exports = (date) => {
  return new Promise((resolve, reject) => {
    let validDate = validator.isISO8601(date)

    if (!validDate) {
      return reject(new Error(`${date} is not a valid ISO 8601 date. 'YYYY-MM-DD format required.'`))
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

      let results = $('#t_datos tr').map((index, row) => {
        let loteryName = $(row).children().eq(0).text()
          .replace(' ', '')
          .replace('á', 'a')
          .replace('é', 'e')
          .replace('í', 'i')
          .replace('ó', 'o')
          .replace('ú', 'u')
        let result = {}

        result[`${loteryName}`] = {
          laPrimera: $(row).children().eq(2).text(),
          matutina: $(row).children().eq(3).text(),
          rawName: $(row).children().eq(0).text(),
          vespertina: $(row).children().eq(4).text(),
          nocturna: $(row).children().eq(5).text()
        }

        return result
      })

      resolve(results.toArray())
    })
  })
}
