const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "hoge.js"),
  module: {
    rules: [
        { test: /\.vue$/, use: 'raw-loader' }
    ]
  }
}