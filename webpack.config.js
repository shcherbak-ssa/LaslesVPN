'use strict';

/** node modules */
const {join: joinPaths, resolve} = require('path');

/** constants */
const SRC_DIRNAME = joinPaths(__dirname, 'src');

/** webpack plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** webpack config */
const webpackConfig = ({isDev}) => {
  return {
    mode: isDev ? 'development' : 'production',
    entry: joinPaths(SRC_DIRNAME, 'main.js'),
    output: {
      path: resolve(__dirname, 'public'),
      filename: '[name].js'
    },
    //watch: isDev,
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
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: !isDev,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './postcss.config.js'
                }
              }
            },
            'sass-loader',
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@': SRC_DIRNAME
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: joinPaths(SRC_DIRNAME, 'views', 'index.pug')
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css'
      })
    ]
  }
};

module.exports = webpackConfig;