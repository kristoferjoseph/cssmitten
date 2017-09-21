module.exports = function overflow(query) {
   return `/* VISIBILITY */
.hide${query}{visibility:visible; opacity: 1.0;}
.show${query}{visibility:hidden; opacity: 0.0001;}
`
}
