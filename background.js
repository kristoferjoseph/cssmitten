var clrs = require('./colors')
module.exports = function background (query) {
  var sections = Object.keys(clrs)
  var output = `/* BACKGROUND */
.bg-none{background-color:none;}
`
  var colors
  var variable
  sections.forEach(function (section) {
    colors = Object.keys(clrs[section])
    colors && colors.map(function (color, i) {
      variable = section + i
      output += `.bg-${variable}${query}{background-color:var(--${variable});}/* ${color} */\n`
    })
  })
  return output
}
