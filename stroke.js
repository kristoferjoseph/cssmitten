var clrs = require('./colors')
module.exports = function stroke (query) {
  var sections = Object.keys(clrs)
  var output = '/* STROKE */\n'
  var colors
  var variable
  sections.forEach(function (section) {
    colors = Object.keys(clrs[section])
    colors && colors.map(function (color, i) {
      variable = section + i
      output += `.s-${variable}${query}{stroke:var(--${variable});}/* ${color} */\n`
    })
  })
  return output
}
