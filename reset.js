module.exports = function reset (query) {
  return `/* RESET */
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
 margin: 0;
 padding: 0;
 border: 0 solid transparent;
}
html:focus-within {
  scroll-behavior: smooth;
}
body {
  min-heigh: 100vh
  line-height: 1;
  text-rendering: optimizeSpeed;
}
audio,
canvas,
embed,
iframe,
img,
object,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}
button,
input,
select,
textarea {
  font: inherit;
  line-height: inherit;
  color: inherit;
}
a {
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
button,
[role="button"] {
  cursor: pointer;
  background-color: transparent;
}
code {
  font: inherit;
  font-size: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
ul[role='list'],
ol[role='list'] {
 list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
textarea {
  vertical-align: top;
  overflow: auto;
}
[type=date],
[type=datetime],
[type=datetime-local],
[type=email],
[type=month],
[type=number],
[type=password],
[type=search],
[type=tel],
[type=text],
[type=time],
[type=url],
[type=week],
textarea,
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
}
[type='checkbox'],
[type='radio'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
::-moz-placeholder {
  opacity: 1;
}
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`
}
