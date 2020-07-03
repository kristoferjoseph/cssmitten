const Scale = require('./scale')
const rems = require('./rems')
module.exports = function lineHeight (query='') {
  return `
/* LINE HEIGHT */
.leading5${query}{line-height: 2;}
.leading4${query}{line-height: 1.625;}
.leading3${query}{line-height: 1.5;}
.leading2${query}{line-height: 1.375;}
.leading1${query}{line-height: 1.25;}
.leading0${query},
.leading-none${query}{line-height:1;}
`
  return output
}
