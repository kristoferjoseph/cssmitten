var clrs = require('./colors')
module.exports = function fill (query) {
  var sections = Object.keys(clrs)
  var output = '/* FILL */\n'
  var colors
  var variable
  sections.forEach(function (section) {
    colors = Object.keys(clrs[section])
    colors && colors.map(function(color, i) {
        variable = section + i
        output += `.f-${variable}${query}{fill:var(--${variable});}/* ${color} */\n`
    })
  })
  return output
}
