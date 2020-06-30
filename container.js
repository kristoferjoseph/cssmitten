module.exports = function Container({width='', label=''}) {
  return `
/* CONTAINER  */
.container${label}{max-width:${width || '100%'};}
`
}
