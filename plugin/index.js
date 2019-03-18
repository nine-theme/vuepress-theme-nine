const path = require('path')

module.exports = () => ({
  name: 'theme-nine',

  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceApp.js'),
  ],

  chainWebpack (config, isServer) {
    if (isServer === false) {
      config.node.set('Buffer', false)
    }
  },
})
