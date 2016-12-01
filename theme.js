var reset = require('./reset')
var typeface = require('./typeface')
var colors = require('./color')
var background = require('./background')
var border = require('./border')
var radius = require('./radius')
var fontName = 'Mark'
var fontBase = '16px'
var weights = require('./weights')

module.exports = function theme() {
  var output =
`${typeface(fontBase,fontName)}
${weights}
${colors()}
${background()}
${border()}
${radius()}`

  return output
}
