var sided = require('./sided')
var rems = require('./rems')
module.exports = function margin(query) {
  query = query || ''
  query? query = `-${query}`: ''

  return sided(
    function(label,step,side,value) {
      return `%m${label}${step}${query}{margin-${side}:${rems(value)};}\n`
    }
  )
}
