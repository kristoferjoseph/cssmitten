var reset = require('./reset')
var typeface = require('./typeface')
var variables = require('./variables')
var colors = require('./color')
var background = require('./background')
var gradient = require('./gradient')
var border = require('./border')
var fill = require('./fill')
var stroke = require('./stroke')
module.exports = function theme (config) {
  var output = ''
  function append (string) {
    output += string + '\n'
  }

  append('\n/* ----- THEME ----- */\n')
  append(variables({config}))
  append(reset())
  append(typeface({config}))
  append(colors({config}))
  append(background({config}))
  append(gradient({config}))
  append(border({config}))
  append(fill({config}))
  append(stroke({config}))
  return output
}
