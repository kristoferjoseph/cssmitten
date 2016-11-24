var position = require('./position')
var display = require('./display')
var dimensions = require('./dimensions')
var flex = require('./flex')
var layer = require('./layer')
module.exports = function layout(query) {
  var output =
`${position(query)}
${display(query)}
${dimensions(query)}
${flex(query)}
`
  return output
}
