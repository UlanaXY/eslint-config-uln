'use strict';

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    require.resolve('./base.js'),
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['**/*.js?(x)'],
      rules: {
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
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
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      rules: {
        // replacements
        'no-unused-vars': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true }],
        // off
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // rest
        '@typescript-eslint/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/comma-dangle': ['error', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'ignore',
        }],
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
    {
      files: ['**/*.stories.tsx', '**/*.js?(x)'],
      extends: ['plugin:@typescript-eslint/recommended-requiring-type-checking'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { optionalDependencies: false }],
      },
    },
  ],

  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/prop-types': 'error',
  },
};

