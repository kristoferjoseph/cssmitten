module.exports = function overflow (query) {
  return `/* VISIBILITY */
.v-hidden${query}{visibility:hidden;}
.v-visible${query}{visibility:visible;}
`
}
