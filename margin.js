var sided = require('./sided')
module.exports = sided(
  function(label,step,side,value) {
    return `.m${label}${step}{margin-${side}:${value};}
`
  }
)
