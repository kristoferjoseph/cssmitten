var colors = require('./color')
var background = require('./background')
var border = require('./border')
var radius = require('./radius')

module.exports = function theme(query) {
  var output =
`${colors(query)}
${background(query)}
${border(query)}
${radius(query)}`

  return output
}
