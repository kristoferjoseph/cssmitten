module.exports = function display (query) {
  return `
/* DISPLAY */
.hidden${query}{display:none;}
.block${query}{display:block;}
.inline${query}{display:inline;}
.inline-block${query}{display:inline-block;}
.flex${query}{display:flex;}
.inline-flex${query}{display:inline-flex;}
.grid${query}{display:grid;}
.inline-grid${query}{display:inline-grid;}
`
}
