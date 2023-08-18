'use strict';

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: { ecmaVersion: 2020 },
  extends: [
    'airbnb',
    'airbnb/hooks',
    require.resolve('./base.js'),
  ],
  rules: {
    'react/prop-types': [
      'error',
      {
        ignore: [
          ...require.resolve('./ignoredProps.js'),
        ],
        customValidators: [],
      },
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
  },
};
