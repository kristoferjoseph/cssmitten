var colors = require('./colors')
module.exports = function variables() {
  var output = `:root {\n`
  Object.keys(colors)
    .map(
      function(k) {
        output += `--${k}:${colors[k]};\n`
      }
    )
  output += `}\n`
  return output
}
