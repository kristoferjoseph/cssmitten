module.exports = function align(query='') {
  return `
/* ALIGN */
.text-inherit${query}{text-align:inherit;}
.text-center${query}{text-align:center;}
.text-left${query}{text-align:left;}
.text-right${query}{text-align:right;}
  `
}
