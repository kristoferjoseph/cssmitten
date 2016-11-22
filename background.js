var colors = require('./colors')
module.exports = function background() {
  var output = ''
  Object.keys(colors)
    .map(
      function(k) {
        output += `.bg-${k}:{background-color:${colors[k]};}\n`
      }
    )

  return output
}()
