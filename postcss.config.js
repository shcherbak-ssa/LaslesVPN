'use strict';

/** postcss config */
const postcssConfig = {
  plugins: {
    'autoprefixer': {},
    'postcss-short': { prefix: 'x' },
  }
};

module.exports = postcssConfig;