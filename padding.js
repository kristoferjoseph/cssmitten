var sided = require('./sided')
var rems = require('./rems')
module.exports = function padding(query) {
  query = query ? query = `-${query}` : ''

  return sided(
    function(label,step,side,value) {
      return `.p${label}${step}${query}{padding-${side}:${rems(value)};}\n`
    }
  )
}
