const path = require('path');
// dynamically adding bundles to HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
// clean up the dist folder automatically
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // Entry can be a object which can contain multiple entry point.
  entry: {
    app: './src/index.js',
    //print: './src/print.js',
  },
  // Output using [name] to generate multiple output file based on entry name. like app and print.
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  // plugins is a array which contains all the setting of plugins.
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new UglifyJSPlugin()
  ],
  //  inline-souce-map: If an error originates from a.js, the source map will tell you exactly that not the bundle.js.
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
}