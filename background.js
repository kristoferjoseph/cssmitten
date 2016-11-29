var colors = require('./colors')
module.exports = function background(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output = ''
  Object.keys(colors)
    .map(
      function(color, i) {
        output += `/* ${color} */
%background${i}${query}:{background-color:${colors[color]};}\n`
      }
    )

  return output
}
