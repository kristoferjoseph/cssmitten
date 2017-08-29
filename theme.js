var reset = require('./reset')
var typeface = require('./typeface')
var colors = require('./color')
var background = require('./background')
var border = require('./border')
var fill = require('./fill')
var stroke = require('./stroke')
var base = require('./base')
var fontBase = base+'px'
var fontName = 'Mark'

module.exports = function theme() {
  return `
 ${reset()}
 ${typeface(fontBase,fontName)}
 ${colors()}
 ${background()}
 ${border()}
 ${fill()}
 ${stroke()}`

}
