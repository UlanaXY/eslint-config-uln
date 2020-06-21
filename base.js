'use strict';

module.exports = {
  extends: [
    'airbnb'
  ],
  rules: {
    "linebreak-style": 0,
    "func-names": [
      "error",
      "never"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "camelcase": "off",
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
    "arrow-parens": "off",
    "no-return-assign": "off",
    "no-trailing-spaces": "off",
    "no-control-regex": "off",
    "no-use-before-define": ["error", { "functions": false, "classes": true }],
    "no-multiple-empty-lines": ["error", { "max": 2 }],
    "react/static-property-placement": ["error", "static public field"],
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "react/require-default-props": "error",
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
    "import/newline-after-import": ["error", { "count": 2 }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "cypress/**",
          ".storybook/**",
          "**/stories/**",
          "**/stories.js",
          "**/*.stories.js"
        ]
      }
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
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
