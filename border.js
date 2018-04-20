var clrs = require('./colors')
var radius = require('./radius')
module.exports = function border (query) {
  var sections = Object.keys(clrs)
  var output = `/* BORDER */
.b-none${query}{border:none;}
.bt-none${query}{border-top:none;}
.br-none${query}{border-right:none;}
.bb-none${query}{border-bottom:none;}
.bl-none${query}{border-left:none;}
.b${query}{border: 1px solid;}
.bt${query}{border-top: 1px solid;}
.br${query}{border-right: 1px solid;}
.bb${query}{border-bottom: 1px solid;}
.bl${query}{border-left: 1px solid;}
`
  var colors
  var variable
  sections.forEach(function (section) {
    colors = Object.keys(clrs[section])
    colors.map(function (color, i) {
      variable = section + i
      output += `.b-${variable}${query}{border-color:var(--${variable});}/* ${color} */\n`
    })
  })
  output += radius(query)
  return output
}
