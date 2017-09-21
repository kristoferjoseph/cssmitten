var sided = require('./sided')
var rems = require('./rems')
module.exports = function padding(query) {
  var output = '/* PADDING */\n'
  output += sided(function(label,step,side,value) {
    side = side ? side = `-${side}` : ''
    return `.p${label}${step}${query}{padding${side}:${rems(value)};}\n`
  })
  return output
}
