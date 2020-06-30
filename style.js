module.exports = function Style(query) {
  return `
/* Style */
.italic${query}{font-style:italic;}
.not-italic${query}{font-style:normal;}
`
}
