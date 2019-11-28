const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

//追記
const tsloaderConf = { test: /\.(ts)?(\.erb)?$/,  loader: 'ts-loader' }
const tsxloaderConf = { test: /\.(tsx)?(\.erb)?$/,  loader: 'babel-loader!ts-loader' }
environment.loaders.set('typescript',  tsloaderConf)
environment.loaders.set('tsx',  tsxloaderConf)


environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment

const customConfig = require('./custom')
environment.config.merge(customConfig)

module.exports = environment

