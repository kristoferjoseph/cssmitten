var clrs = require('./colors')
module.exports = function color (query) {
  var sections = Object.keys(clrs)
  var output = '\n/* COLOR */\n'
  var colors
  var variable
  sections.forEach(function (section) {
    colors = Object.keys(clrs[section])
    colors && colors.map(function(color, i) {
      variable = section + i
      output += `.c-${variable}${query}{color:var(--${variable});}/* ${color} */\n`
    })
  })
  return output
}
