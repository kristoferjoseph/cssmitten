var position = require('./position')
var display = require('./display')
var flex = require('./flex')
var layer = require('./layer')
module.exports = function layout() {
  var output =
  `${position}
  ${display}
  ${flex}
  ${layer}
  .full-width{width:100%;}
  .full-height{height:100%;}
  .vp-width{width:100vw;}
  .vp-height{height:100vh;}
  `
  return output
}()
