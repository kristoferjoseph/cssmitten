var scale = require('./scale')
var sides = require('./sides')
module.exports = function sided(template) {
  var step = 0
  var l = scale.length
  var output = ''
  for (step; step<l; step++) {
    output += Object.keys(sides).map(
      label => {
        var side = sides[label]
        var value = scale[step]
        return template(label,step,side,value)
      }
    ).join('')
  }
  return output
}
