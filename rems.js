module.exports = function rems (state) {
  state = state || {}
  var config = state.config || {}
  var base = config.base || 16
  var value = state.value || 0
  return `${Math.round((value / base) * 1000) / 1000}rem`
}
