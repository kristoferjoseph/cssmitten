var scale = require('./scale')
var sds = require('./sides')
module.exports = function sided (template) {
  var step = 0
  var l = scale.length
  var sides = Object.keys(sds)
  var output = ''
  var value
  var side
  for (step; step<l; step++) {
    value = scale[step]
    output += template('',step,'',value)
    output += sides && sides.map(
      label => {
        side = sds[label]
        return template(label,step,side,value)
      }
    ).join('')
  }
  return output
}
