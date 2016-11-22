var sided = require('./sided')
var rems = require('./rems')
module.exports = sided(
  function(label,step,side,value) {
    return `.p${label}-${step}{padding-${side}:${rems(value)};}
`
  }
)
