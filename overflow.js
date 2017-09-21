module.exports = function overflow(query) {
   return `/* OVERFLOW */
.scroll${query}{overflow:scroll;-webkit-overflow-scrolling: touch;}
.hidden${query}{overflow:hidden;}
.scroll-x${query}{overflow-x:scroll;-webkit-overflow-scrolling: touch;}
.hidden-x${query}{overflow-x:hidden;}
.scroll-y${query}{overflow-y:scroll;-webkit-overflow-scrolling: touch;}
.hidden-y${query}{overflow-y:hidden;}
`
}
