const container = require('./container')

module.exports = function media (size, content) {
  return `
@media only screen and (min-width:${size}) {
${content}
}
`
}
