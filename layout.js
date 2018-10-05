var position = require('./position')
var display = require('./display')
var width = require('./width')
var height = require('./height')
var flex = require('./flex')
module.exports = function layout (state) {
  state = state || {}
  var query = state.query
  return `\n/* -----  LAYOUT ----- */\n
${position(query)}
${display(query)}
${width(state)}
${height(state)}
${flex(query)}`
}
