var sided = require('./sided')
var rems = require('./rems')
module.exports = sided(
  function(label,step,side,value) {
    return `.m${label}-${step}{margin-${side}:${rems(value)};}
`
  }
)
