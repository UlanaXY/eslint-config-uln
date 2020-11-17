'use strict';

module.exports = {
  extends: [
    require.resolve('./base.js'),
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*.js?(x)'],
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
      },
    },
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        }],
        '@typescript-eslint/typedef': ['error', {
          variableDeclaration: false,
          parameter: true,
          arrowParameter: false,
          memberVariableDeclaration: false,
          objectDestructuring: false,
          arrayDestructuring: false,
          propertyDeclaration: false,
        }],
      },
    },
  ],

  rules: {
    '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true }],
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/prop-types': 'error',
  },
};

