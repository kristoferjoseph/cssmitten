var colors = require('./colors')
module.exports = function border(query) {
  query = query ? query = `-${query}` : ''

  var output =`
.ba{border: 1px solid;}
.bt{border-top: 1px solid;}
.br{border-right: 1px solid;}
.bb{border-bottom: 1px solid;}
.bl{border-left: 1px solid;}`
  Object.keys(colors)
    .map(
      function(color) {
        output += `.b-${color}${query}{border-color:${colors[color]};}\n`
      }
    )
  return output
}
