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
module.exports = function theme () {
  var output  = ''
  function append (string) {
    output += string + '\n'
  }

  append('/* === THEME === */')
  append(reset())
  append(typeface(fontBase,fontName))
  append(colors())
  append(background())
  append(border())
  append(fill())
  append(stroke())
  return output
}
