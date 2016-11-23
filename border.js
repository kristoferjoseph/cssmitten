var colors = require('./colors')
module.exports = function border() {
  var output = '.b{border: 1px solid transparent;}\n'
  Object.keys(colors)
    .map(
      function(color) {
        output += `.bc-${color}{border-color:${colors[color]};}\n`
      }
    )
  return output
}
