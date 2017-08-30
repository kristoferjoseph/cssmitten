var sided = require('./sided')
var rems = require('./rems')
module.exports = function margin(query) {
  query = query ? query = `-${query}` : ''
  var output = '/* MARGIN */\n'
  output += sided(function(label,step,side,value) {
    side = side ? side = `-${side}` : ''
    return `.m${label}${step}${query}{margin${side}:${rems(value)};}\n`
  })
  return output
}
