'use strict';

/** postcss config */
const postcssConfig = {
  plugins: {
    'autoprefixer': {},
    'postcss-short': { prefix: 'short', skip: 'x' },
  }
};

module.exports = postcssConfig;