'use strict';

module.exports = {
  rules: {
    // todo remove 'ignoreFunctionalComponents' after deprecation of defaultProps in React
    'react/require-default-props': ['error', { ignoreFunctionalComponents: true }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore',
    }],
    curly: ['error', 'all'],
    'func-names': ['error', 'never'],
    'import/extensions': 'off',
    'import/newline-after-import': ['warn', { count: 2 }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'cypress/**',
        '.storybook/**',
        '**/stories/**',
        '**/stories.js?(x)',
        '**/stories.ts?(x)',
        '**/*.stories.js?(x)',
        '**/*.stories.ts?(x)',
        '**/*.test.js?(x)',
        '**/*.test.ts?(x)',
      ],
    }],
    'import/prefer-default-export': 'off',
    'import/order': [
      'warn',
      { groups: ['external', 'builtin', 'internal', 'parent', 'sibling', 'index', 'object'] },
    ],

    indent: ['error', 2, { SwitchCase: 1 }],
    // 'jsx-a11y/anchor-is-valid': ['error', {
    //   components: ['Link'], specialLink: ['to'],
    // }],
    // 'jsx-a11y/click-events-have-key-events': 'off',
    'linebreak-style': 'off',
    // 'no-control-regex': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    // 'no-return-assign': 'off',
    // 'no-trailing-spaces': 'off',
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
    }],
    // quotes: ['error', 'single'],
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-props-no-spreading': 'off',
    // 'react/prefer-stateless-function': ['off', { ignorePureComponents: false }],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
  },
  ignorePatterns: [
    '**/.eslintrc.js',
  ],
};
