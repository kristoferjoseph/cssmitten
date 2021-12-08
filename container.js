module.exports = function Container({width='', label=''}) {
  return /*css*/`
/* CONTAINER  */
.container${label}{max-width:${width || '100%'};}
`
}
