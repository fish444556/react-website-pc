var webpack = require('webpack')
var path = require('path')

var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader", options: {
            paths: [
              path.resolve(__dirname, "node_modules")
            ]
          }
        }]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limited=8192'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.less']
  },

  plugins: [
    new ExtractTextPlugin('css/bundle.css')
  ]
}