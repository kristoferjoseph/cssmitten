var sided = require('./sided')
module.exports = sided(
  function(label,step,side,value) {
    return `.p${label}${step}{padding-${side}:${value};}
`
  }
)
