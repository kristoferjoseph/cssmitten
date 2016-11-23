var scale = require('./scale')
var rems = require('./rems')
module.exports = function sizes(query) {
  var output = ''
  var i = 0
  var l = scale.length
  var v
  for (i; i<l; i++) {
    v = scale[i]
    output += `.fs-${i}{font-size:${rems(v)};}\n`
  }
  return output
}

