module.exports = function media(size, content) {
  return `/* MEDIA ${size}
@media only screen and (min-width:${size}) {
${content}
}`
}

