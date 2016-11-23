var sided = require('./sided')
var rems = require('./rems')
module.exports = function margin(query) {
  return sided(
    function(label,step,side,value) {
      return `.m${label}-${step}{margin-${side}:${rems(value)};}\n`
    }
  )
}
