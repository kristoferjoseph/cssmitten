var scale = require('./scale')
var sds = require('./sides')
module.exports = function sided (template) {
  var i = 0
  var l = scale.length
  var half = Math.floor(l * 0.5)
  var step = half
  var sides = Object.keys(sds)
  var output = ''
  var value
  var side
  for (i; i < l; i++) {
    var s = step--
    value = scale[i]
    output += template('', s, '', value)
    output += sides && sides.map(
      label => {
        side = sds[label]
        return template(label, s, side, value)
      }
    ).join('')
  }
  return output
}
