var colors = require('./colors')
module.exports = function color (query) {
  query = query ? query = `-${query}` : ''

  var output = ''
  Object.keys(colors)
    .map(
      function(k) {
        output += `.${k}${query}{color:${colors[k]};}\n`
      }
    )

  return output
}
