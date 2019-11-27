const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment

const customConfig = require('./custom')
environment.config.merge(customConfig)

module.exports = environment

const sassLoader = environment.loaders.get('sass')
const cssLoader = sassLoader.use.find(loader => loader.loader === 'css-loader')

cssLoader.options = Object.assign(cssLoader.options, {
  modules: true,
  localIdentName: '[path][name]__[local]--[hash:base64:5]'
})

module.exports = environment
