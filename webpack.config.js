'use strict';

/** node modules */
const {join: joinPaths, resolve} = require('path');

/** constants */
const SRC_DIRNAME = joinPaths(__dirname, 'src');

/** webpack plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** webpack config */
const webpackConfig = ({isDev}) => {
  return {
    mode: isDev ? 'development' : 'production',
    entry: joinPaths(SRC_DIRNAME, 'main.js'),
    output: {
      path: resolve(__dirname, 'public'),
      filename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: isDev
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: joinPaths(SRC_DIRNAME, 'views', 'index.pug')
      })
    ]
  }
};

module.exports = webpackConfig;