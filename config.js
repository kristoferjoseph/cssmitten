module.exports = function Config (overrides) {
  let defaults = {
    base: 18,
    scale: {
      ratio: 'perfectFourth',
      steps: 10
    },
    colors: {
      primary: [],
      secondary: [],
      brand: [],
      hover: [],
      active: [],
      disabled: [],
      visited: []
    },
    gradients: [
      {
        label: '001',
        type: 'linear',
        direction: '45deg',
        stops: [
          '#00A2C7',
          '#2C9B89'
        ]
      }
    ],
    queries: {
      desktop: '48em'
    },
    radii: [
      4,
      6,
      15,
      9999
    ]
  }

  let config = Object.assign({}, defaults, overrides)
  return config
}
