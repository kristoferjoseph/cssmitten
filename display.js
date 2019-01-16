module.exports = function display (query) {
  return `
/* DISPLAY */
.display-none${query}{display:none;}
.display-block${query}{display:block;}
.display-inline${query}{display:inline;}
.display-inline-block${query}{display:inline-block;}
.display-flex${query}{display:flex;}
.display-inline-flex${query}{display:inline-flex;}
`
}
