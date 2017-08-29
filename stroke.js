var colors = require('./colors')
module.exports = function stroke (query) {
  query = query ? query = `-${query}` : ''
  var output = ''
  Object.keys(colors)
    .map(
      function(color) {
        output += `.s-${color}${query}{stroke:${colors[color]};}\n`
      }
    )
  return output
}
