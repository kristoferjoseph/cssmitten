var clrs = require('./colors')
module.exports = function stroke (query) {
  query = query ? query = `-${query}` : ''
  var colors = Object.keys(clrs)
  var output = '/* STROKE */\n'
  colors.map(function(color) {
    output += `.s-${color}${query}{stroke:${clrs[color]};}\n`
  })
  return output
}
