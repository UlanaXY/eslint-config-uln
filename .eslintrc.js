'use strict';

module.exports = {
  extends: [
    require.resolve('./src/typescript.js'),

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  ignorePatterns: [],
};
