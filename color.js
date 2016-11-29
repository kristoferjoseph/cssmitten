var colors = require('./colors')
module.exports = function color(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output = ''
  Object.keys(colors)
    .map(
      function(color, i) {
        output += `/* ${color} */
%color${i}${query}:{color:${colors[color]};}\n`
      }
    )

  return output
}
