const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader/lib/plugin')
const vue = require('./loaders/vue')


//追記
module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}

module.exports = environment


environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment

const customConfig = require('./custom')
environment.config.merge(customConfig)

module.exports = environment

