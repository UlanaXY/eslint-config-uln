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
    },
    {
      files: ['**/*.ts?(x)'],
      rules: {
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/typedef": ["error", {
          "variableDeclaration": false,
          "parameter": true,
          "arrowParameter": true,
          "memberVariableDeclaration": false,
          "objectDestructuring": false,
          "arrayDestructuring": false,
          "propertyDeclaration": false,
        }],
      }
    }
  ],

  rules: {
    "@typescript-eslint/no-angle-bracket-type-assertion": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/prop-types": "error",
    "no-use-before-define": ['error', { 'functions': true, 'classes': true }]
  },
};

