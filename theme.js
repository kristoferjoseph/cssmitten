var reset = require('./reset')
var typeface = require('./typeface')
var colors = require('./color')
var background = require('./background')
var border = require('./border')
var fontName = 'Mark'
var fontBase = '16px'

module.exports = function theme() {
  var output = `${reset()}
${typeface(fontBase,fontName)}
${colors()}
${background()}
${border()}`

    return output
}
