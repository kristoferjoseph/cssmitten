var scale = require('./scale')
var rems = require('./rems')
module.exports = function sizes (query) {
  var output = '/* SIZES */\n'
  var i = 0
  var l = scale.length
  var v
  for (i; i<l; i++) {
    v = scale[i]
    output += `.fs${i}${query}{font-size:${rems(v)};}\n`
  }
  return output
}

