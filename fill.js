var colors = require('./colors')
module.exports = function fill (query) {
  query = query ? query = `-${query}` : ''
  var output = ''
  Object.keys(colors)
    .map(
      function(color) {
        output += `.f-${color}${query}{fill:${colors[color]};}\n`
      }
    )
  return output
}
