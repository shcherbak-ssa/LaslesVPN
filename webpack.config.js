'use strict';

/** node modules */
const {join: joinPaths, resolve} = require('path');

/** constants */
const SRC_DIRNAME = joinPaths(__dirname, 'src');

/** webpack plugins */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** webpack config */
const webpackConfig = (env) => {
  const isDev = env.isDev || false;
  process.env.NODE_ENV = getCurrentMode(isDev);

  return {
    mode: getCurrentMode(isDev),
    entry: joinPaths(SRC_DIRNAME, 'main.js'),
    output: {
      path: resolve(__dirname, 'public'),
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js'
    },
    devtool: isDev && 'inline-source-map',
    watch: isDev,
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
    optimization: {
      minimizer: isDev ? [] : [new UglifyjsWebpackPlugin()],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        favicon: joinPaths(SRC_DIRNAME, 'assets', 'favicon.ico'),
        template: joinPaths(SRC_DIRNAME, 'index.pug')
      }),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      })
    ]
  }
};

/** help functions */
function getCurrentMode(isDev) {
  return isDev ? 'development' : 'production';
}

/** export */
module.exports = webpackConfig;