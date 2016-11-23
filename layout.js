var position = require('./position')
var display = require('./display')
var dimensions = require('./dimensions')
var flex = require('./flex')
var layer = require('./layer')
module.exports = function layout(query) {
  var output =
`${position()}
${display()}
${dimensions()}
${flex()}
`
  return output
}
