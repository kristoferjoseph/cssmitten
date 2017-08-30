var position = require('./position')
var display = require('./display')
var dimensions = require('./dimensions')
var flex = require('./flex')
module.exports = function layout(query) {
  return `/* === LAYOUT === */
${position(query)}
${display(query)}
${dimensions(query)}
${flex(query)}`

}
