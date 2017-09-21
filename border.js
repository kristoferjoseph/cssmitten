var clrs = require('./colors')
var radius = require('./radius')
module.exports = function border (query) {
  var sections = Object.keys(clrs)
  var output =`/* BORDER */
.b{border: 1px solid;}
.bt{border-top: 1px solid;}
.br{border-right: 1px solid;}
.bb{border-bottom: 1px solid;}
.bl{border-left: 1px solid;}
`
  var colors
  var variable
  sections.forEach(function (section) {
    colors = Object.keys(clrs[section])
    colors.map(function(color, i) {
      variable = section + i
      output += `.b-${variable}${query}{border-color:var(--${variable});}/* ${color} */\n`
    })
  })
  output += radius(query)
  return output
}
