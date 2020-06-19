var Scale = require('./scale')
var rems = require('./rems')
module.exports = function lineHeight (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var scale = Scale(config)
  var output = `/* LINE HEIGHT */\n`
  var i = 0
  var l = scale.length
  var half = Math.floor(l * 0.5)
  var step = half
  var value
  for (i; i < l; i++) {
    var s = step--
    value = scale[i]
    output += `.lh${s}${query}{line-height:${value})};}\n`
  }
  return output
}
