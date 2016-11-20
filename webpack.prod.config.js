var webpack = require('webpack')
var devConfig = require('./webpack.config')

var prodConfig = Object.assign(devConfig, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})

delete prodConfig.devtool

module.exports = prodConfig
