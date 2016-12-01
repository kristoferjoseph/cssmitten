var colors = require('./colors')

module.exports = function border(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output = `/* transparent */
%border0{border-color:transparent;}\n`
  Object.keys(colors)
    .map(
      function(color, i) {
        output += `/* ${color} */
%border${i+1}${query}{border-color:${colors[color]};}\n`
      }
    )
  return output
}
