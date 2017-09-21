var clrs = require('./colors')
module.exports = function variables() {
  var sections = Object.keys(clrs)
  var output = `/* VARIABLES */
:root {\n`
  var colors
  sections.forEach(function (section) {
    colors = Object.keys(clrs[section])
    colors && colors.map(function (color, i) {
        output += `  --${section}${i}:${clrs[section][color]};/* ${color} */\n`
    })
  })
  output += `}\n`
  return output
}
