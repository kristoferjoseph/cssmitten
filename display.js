module.exports = function display (query) {
  return `/* DISPLAY */
.d-none${query}{display:none;}
.d-block${query}{display:block;}
.d-inline${query}{display:inline;}
.d-inline-block${query}{display:block;}
.d-flex${query}{display:flex;}
.d-inline-flex${query}{display:inline-flex;}
`
}
