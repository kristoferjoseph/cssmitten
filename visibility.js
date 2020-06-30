module.exports = function overflow (query) {
  return `
/* VISIBILITY */
.invisible${query}{visibility:hidden;}
.visible${query}{visibility:visible;}
`
}
