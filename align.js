module.exports = function align (query) {
  return `
/* ALIGN */
.text-align-inherit${query}{text-align:inherit;}
.text-align-center${query}{text-align:center;}
.text-align-left${query}{text-align:left;}
.text-align-right${query}{text-align:right;}
`
}
