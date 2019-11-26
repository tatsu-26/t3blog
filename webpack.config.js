const webpack = require('webpack');
var path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "vue-loader",
        exclude: /node_modules/
      }
    ]
  }
}
