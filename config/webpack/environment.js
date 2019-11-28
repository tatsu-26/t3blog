const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')


//追記
module.exports = {
  module: {
    rules: [
      // ... other rules
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(scss|css)/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    // オプションでCSS内のurl()メソッドの取り込みを禁止する
                    url: false,
                    // ソースマップ
                    sourceMap: true,

                    // 0 => no loaders (default);
                    // 1 => postcss-loader;
                    // 2 => postcss-loader, sass-loader
                    importLoaders: 2
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    // ソースマップ
                    sourceMap: true,
                }
            }

        ]
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

