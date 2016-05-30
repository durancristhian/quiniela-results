const cheerio = require('cheerio')
const request = require('request')

module.exports = function getResults (date, callback) {
  const requestParameters = {
    form: {
      fecha: date
    },
    url: 'http://www.dejugadas.com/quinielas/datospizarra.php'
  }

  request.post(requestParameters, (error, response, body) => {
    /* istanbul ignore if */
    if (error) {
      return callback(error)
    }

    let $ = cheerio.load(
      body,
      {
        normalizeWhitespace: true
      }
    )

    const results = $('#t_datos tr').map((index, row) => {
      const loteryName = $(row).children().eq(0).text()
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

    return callback(null, results.toArray())
  })
}
