var webpack = require('webpack')
var path = require('path')
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var APP_PATH = path.resolve(__dirname, 'src')
var APP_FILE = path.resolve(APP_PATH, 'index.js')
var DIST_PATH = path.resolve(__dirname, 'dist')

module.exports = {
  entry: {
    app: APP_FILE,
    venders: [
      'react',
      'react-dom',
      'react-router',
      'mockjs'
    ]
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js',
    chunkFilename: 'js/[name].[chunkhash:5].min.js'
  },
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
        loader: 'url-loader?limited=8192&name=image/[hash:8].[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.less']
  },

  plugins: [
    new webpack.DefinePlugin({//define env
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('venders.js'),
    new uglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warning: false
      }
    }),
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: './src/template/template.html',
      htmlWebpackPlugin: {
        files: {
          css: ["app.css"],
          js: ["bundle.js", "venders.js"]
        }
      },
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
    },
    filename: 'index.html',
    })
  ]
}