module.exports = function visibility (query) {
  return `
/* VISIBILITY */
.visibility-hidden${query}{visibility:hidden;}
.visibility-visible${query}{visibility:visible;}
`
}
