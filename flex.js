module.exports = function flex (query) {
  return `/* FLEX */
.flex-direction-row${query}{flex-direction: row;}
.flex-direction-row-reverse${query}{flex-direction: row-reverse;}
.flex-direction-column${query}{flex-direction: column;}
.flex-direction-column-reverse${query}{flex-direction: column-reverse;}
.flex-direction-inherit${query}{flex-direction: inherit;}
.align-items-start${query}{align-items:flex-start;}
.align-items-end${query}{align-items:flex-end;}
.align-items-center${query}{align-items:center;}
.justify-content-flex-start${query}{justify-content: flex-start;}
.justify-content-flex-end${query}{justify-content: flex-end;}
.justify-content-space-around${query}{justify-content:space-around;}
.justify-content-space-between${query}{justify-content:space-between;}
.justify-content-center${query}{justify-content:center;}
.flex-grow-0${query}{flex-grow:0;}
.flex-grow-1${query}{flex-grow:1;}
.flex-wrap-wrap${query}{flex-wrap: wrap;}
.flex-wrap-wrap-reverse${query}{flex-wrap: wrap-reverse;}
.flex-wrap-nowrap${query}{flex-wrap: nowrap;}
`
}
