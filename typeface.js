module.exports = function typeface (base, name) {
  return `
html,
body,
#root {
  height: 100%;
}
html {font-size: ${base};}
body {
  font-family: '${name}', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 1.2;
  overflow: hidden;
}`

}
