'use strict';

module.exports = {
  rules: {
    // todo remove 'ignoreFunctionalComponents' after deprecation of defaultProps in React
    'react/require-default-props': ['error', { ignoreFunctionalComponents: true }],
    'arrow-parens': 'off',
    camelcase: 'off',
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
    'import/newline-after-import': ['error', { count: 2 }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'cypress/**',
        '.storybook/**',
        '**/stories/**',
        '**/stories.js',
        '**/*.stories.js',
      ],
    }],
    'import/prefer-default-export': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'], specialLink: ['to'],
    }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'linebreak-style': 'off',
    'no-control-regex': 'off',
    'no-multiple-empty-lines': ['error', { max: 2 }],
    'no-return-assign': 'off',
    'no-trailing-spaces': 'off',
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
    }],
    quotes: ['error', 'single'],
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': ['off', { ignorePureComponents: false }],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    semi: ['error', 'always'],
  },
};
