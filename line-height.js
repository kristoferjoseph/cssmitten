const Scale = require('./scale')
const rems = require('./rems')
module.exports = function lineHeight (query='') {
  return `
/* LINE HEIGHT */
.line-height5${query}{line-height: 2;}
.line-height4${query}{line-height: 1.625;}
.line-height3${query}{line-height: 1.5;}
.line-height2${query}{line-height: 1.375;}
.line-height1${query}{line-height: 1.25;}
.line-height0${query},
.line-height-none${query}{line-height:1;}
`
  return output
}
