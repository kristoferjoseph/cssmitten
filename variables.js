module.exports = function variables (state) {
  state = state || {}
  var config = state.config
  var clrs = config.colors
  var sections = Object.keys(clrs)
  var output = `
/* VARIABLES */
:root {\n`
  var colors
  sections.forEach(function (section) {
    colors = clrs[section]
    colors && colors.map(function (color, i) {
      output += `  --${section}${i}:${color.value};/* ${color.label} */\n`
    })
  })
  output += `}\n`
  return output
}
