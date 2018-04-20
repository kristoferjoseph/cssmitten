var reset = require('./reset')
var typeface = require('./typeface')
var variables = require('./variables')
var colors = require('./color')
var background = require('./background')
var border = require('./border')
var fill = require('./fill')
var stroke = require('./stroke')
var base = require('./base')
var fontBase = base + 'px'
var fontName = 'Mark'
module.exports = function theme (query) {
  query = query || ''
  var output = ''
  function append (string) {
    output += string + '\n'
  }

  append('\n/* ----- THEME ----- */\n')
  append(variables())
  append(reset())
  append(typeface(fontBase, fontName))
  append(colors(query))
  append(background(query))
  append(border(query))
  append(fill(query))
  append(stroke(query))
  return output
}
