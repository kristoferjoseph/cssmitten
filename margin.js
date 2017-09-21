var sided = require('./sided')
var rems = require('./rems')
module.exports = function margin(query) {
  var output = `/* MARGIN */
.m-auto{
  margin-right: auto;
  margin-left:auto;
}
.mr-auto{margin-right: auto;}
.ml-auto{margin-left: auto;}
`
  output += sided(function(label,step,side,value) {
    side = side ? side = `-${side}` : ''
    return `.m${label}${step}${query}{margin${side}:${rems(value)};}\n`
  })
  return output
}
