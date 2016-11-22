var position = require('./position')
var display = require('./display')
var flex = require('./flex')
var layer = require('./layer')
module.exports = function layout() {
  var output =
  `${position}
  ${display}
  ${flex}
  ${layer}`
  return output
}()
