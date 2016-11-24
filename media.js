module.exports = function media(size, content) {
  var output =`
@media only screen and (min-width:${size}) {
${content}
}`
  return output
}

