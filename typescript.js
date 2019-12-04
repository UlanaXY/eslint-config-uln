"use strict";

module.exports = {
  extends: [
    "react-app",
    require.resolve('./base.js'),
  ],
  plugins: [
    "react-hooks",
  ],
  overrides: [
    {
      files: ['**/*.js?(x)'],
      rules: {
        "react/prop-types": [
          "error",
          {
            "ignore": [
              ...require.resolve("./ignoredProps.js")
            ],
            "customValidators": [],
          }
        ],
      }
    }
  ],

  rules: {
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "no-use-before-define": ['error', { 'functions': true, 'classes': true }],
    "react/prop-types": "off",
  },
};

