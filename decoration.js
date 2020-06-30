module.exports = function decoration(query='') {
  return `
/* DECORATION */
.no-underline${query}{text-decoration:none;}
.underline${query}{text-decoration:underline;}
.line-through${query}{text-decoration:line-through;}
  `
}
