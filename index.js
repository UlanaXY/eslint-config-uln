"use strict";

module.exports = {
  parser: "babel-eslint",
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  extends: [
    require.resolve("./base.js"),
    "airbnb/hooks"
  ],
  parserOptions: {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/prop-types": [
      "error",
      {
        "ignore": [
          ...require.resolve("./ignoredProps.js")
        ],
        "customValidators": []
      }
    ],
    "react/jsx-filename-extension": [ "warn", { "extensions": [".js", ".jsx"] }],
  }
};
