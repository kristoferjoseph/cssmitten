var position = require('./position')
var display = require('./display')
var dimensions = require('./dimensions')
var flex = require('./flex')
module.exports = function layout(query) {
  return `\n/* -----  LAYOUT ----- */\n
${position(query)}
${display(query)}
${dimensions(query)}
${flex(query)}`

}
