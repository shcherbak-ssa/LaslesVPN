'use strict';

/** postcss config */
const postcssConfig = ({env}) => {
  return {
    plugins: {
      'autoprefixer': {},
      'postcss-short': { prefix: 'short', skip: 'x' },
      'cssnano': env === 'production' ? {} : false
    }
  }
};

/** export */
module.exports = postcssConfig;