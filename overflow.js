module.exports = function overflow (query) {
  return `
/* OVERFLOW */
.overflow-auto${query}{overflow:auto;-webkit-overflow-scrolling: touch;}
.overflow-scroll${query}{overflow:scroll;-webkit-overflow-scrolling: touch;}
.overflow-hidden${query}{overflow:hidden;}
.overflow-x-scroll${query}{overflow-x:scroll;-webkit-overflow-scrolling: touch;}
.overflow-x-hidden${query}{overflow-x:hidden;}
.overflow-y-scroll${query}{overflow-y:scroll;-webkit-overflow-scrolling: touch;}
.overflow-y-hidden${query}{overflow-y:hidden;}
`
}
