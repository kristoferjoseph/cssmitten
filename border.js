var colors = require('./colors')
module.exports = function border(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output = '.border{border: 1px solid transparent;}\n'
  Object.keys(colors)
    .map(
      function(color) {
        output += `.border-${color}${query}{border-color:${colors[color]};}\n`
      }
    )
  return output
}
