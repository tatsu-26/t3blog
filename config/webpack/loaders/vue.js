module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [{
    
  }],
  test: /\.css$/,
  loader: "style-loader!css-loader?modules&importLoaders=1&camelCase!postcss-loader"
}
