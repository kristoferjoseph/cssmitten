var clrs = require('./colors')
module.exports = function color (query) {
  query = query ? query = `-${query}` : ''
  var colors = Object.keys(clrs)
  var output = '\n/* COLOR */\n'
  colors && colors.map(function(k) {
    output += `.${k}${query}{color:${clrs[k]};}\n`
  })
  return output
}
