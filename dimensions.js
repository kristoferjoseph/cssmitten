module.exports = function dimensions (query) {
  return `
/* DIMENSIONS */
.width-auto${query}{width: auto;}
.height-auto${query}{height: auto;}
.width-100${query}{width:100%;}
.height-100${query}{height:100%;}
.viewport-width-100${query}{width:100vw;}
.viewport-height-100${query}{height:100vh;}
`
}
