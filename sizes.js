var scale = require('./scale')
var rems = require('./rems')
module.exports = function sizes(query) {
  query = query ? query = `-${query}` : ''
  var output = ''
  var i = 0
  var l = scale.length
  var v

  for (i; i<l; i++) {
    v = scale[i]
    output += `.fs${i}${query}{font-size:${rems(v)};}\n`
  }

  return output
}

