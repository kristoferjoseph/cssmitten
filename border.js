var clrs = require('./colors')
var radius = require('./radius')
module.exports = function border (query) {
  query = query ? query = `-${query}` : ''
  var colors = Object.keys(clrs)
  var output =`/* BORDER */
.b{border: 1px solid;}
.bt{border-top: 1px solid;}
.br{border-right: 1px solid;}
.bb{border-bottom: 1px solid;}
.bl{border-left: 1px solid;}`
  colors.map(function(color) {
    output += `.b-${color}${query}{border-color:${clrs[color]};}\n`
  })
  output += radius(query)
  return output
}
