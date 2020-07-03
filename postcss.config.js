'use strict';

/** postcss plugins */
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssShort = require('postcss-short');

/** postcss config */
const postcssConfig = {
  plugins: [
    autoprefixer(),
    postcssImport(),
    postcssSimpleVars(),
    postcssShort({ prefix: 'x' }),
  ]
};

module.exports = postcssConfig;