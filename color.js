var colors = require('./colors')
module.exports = function color() {
  var output = ''
  Object.keys(colors)
    .map(
      function(k) {
        output += `.c-${k}:{color:${colors[k]};}\n`
      }
    )

  return output
}()
