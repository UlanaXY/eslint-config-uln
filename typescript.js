"use strict";

module.exports = {
  extends: [
    "react-app",
    require.resolve('./base.js'),
  ],
  plugins: [
    "react-hooks",
  ],
  rules: {
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "@typescript-eslint/consistent-type-assertions": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    'no-use-before-define': ['error', { 'functions': true, 'classes': true }],
  },
};

