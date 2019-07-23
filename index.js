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
    "airbnb"
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
    "linebreak-style": 0,
    "func-names": [
      "error",
      "never"
    ],
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      "warn",
      "single"
    ],
    "semi": [
      "warn",
      "always"
    ],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "no-return-assign": "off",
    "arrow-parens": "off",
    "no-trailing-spaces": "off",
    "no-control-regex": "off",
    "no-use-before-define": ["error", { "functions": false, "classes": true }],
    "react/display-name": [
      "off"
    ],
    "react/require-default-props": "error",
    "react/prop-types": [
      "error",
      {
        "ignore": [
          "t",
          "i18n",
          "match"
        ],
        "customValidators": []
      }
    ],
    "react/jsx-one-expression-per-line": ["error", { "allow": "literal" }],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/prefer-stateless-function": [
      "off",
      {
        "ignorePureComponents": false
      }
    ],
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          ".storybook/**",
          "**/stories/**",
          "**/stories.js",
          "**/*.stories.js"
        ]
      }
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "to"
        ]
      }
    ]
  }
};
