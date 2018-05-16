var reset = require('./reset')
var typeface = require('./typeface')
var variables = require('./variables')
var colors = require('./color')
var background = require('./background')
var border = require('./border')
var fill = require('./fill')
var stroke = require('./stroke')
module.exports = function theme (config) {
  config = config || {}
  var query = config.query || ''
  var output = ''
  function append (string) {
    output += string + '\n'
  }

  append('\n/* ----- THEME ----- */\n')
  append(variables({config}))
  append(reset())
  append(typeface({config}))
  append(colors({config, query}))
  append(background({config, query}))
  append(border({config, query}))
  append(fill({config, query}))
  append(stroke({config, query}))
  return output
}
