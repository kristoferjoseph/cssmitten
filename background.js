var colors = require('./colors')
module.exports = function background(query) {
  query = query || ''
  query? query = `-${query}`: ''

  var output = `/* transparent */
%background0${query}{background-color:transparent;}\n`
  Object.keys(colors)
    .map(
      function(color, i) {
        output += `/* ${color} */
%background${i+1}${query}{background-color:${colors[color]};}\n`
      }
    )

  return output
}
