module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    '@stylistic',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [
    {
      files: ['**/*.{js,mjs,cjs,jsx}'],
      rules: {
        'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
        'react/prop-types': [
          'error',
          {
            ignore: [
              't', // i18next
              'i18n', // i18next
              'match', // react-router
              'navigation', // react-navigation
            ],
            customValidators: [],
          },
        ],
      },
    },
    {
      files: ['**/*.{ts,tsx}'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      extends: [
        'eslint-config-airbnb-typescript',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        // replacements
        'no-unused-vars': 'off',
        'comma-dangle': 'off',
        'semi': 'off', // eslint-disable-line quote-props
        // '@react/require-default-props': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        '@typescript-eslint/no-use-before-define': ['error', { functions: true, classes: true }],
        // off
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        // rest
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/typedef': ['error', {
          variableDeclaration: false,
          parameter: true,
          arrowParameter: false,
          memberVariableDeclaration: false,
          objectDestructuring: false,
          arrayDestructuring: false,
          propertyDeclaration: false,
        }],
        '@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
        // todo test
        '@typescript-eslint/semi': 'off',

        '@stylistic/type-annotation-spacing': 'error',
        '@stylistic/comma-dangle': ['error', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          enums: 'always-multiline',
          tuples: 'always-multiline',
          functions: 'ignore',
        }],
        '@stylistic/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        }],
      },
    },
  ],

  rules: {
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
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
      },
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
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
    }],
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-floating-promises': ['error', { ignoreVoid: true, ignoreIIFE: true }],
    'no-void': ['error', { allowAsStatement: true }],
    // todo remove 'ignoreFunctionalComponents' after deprecation of defaultProps in React
    'react/require-default-props': ['error', { ignoreFunctionalComponents: true }],
    'react/jsx-one-expression-per-line': ['error', { allow: 'literal' }],
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/prop-types': 'error',
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'spaced-comment': ['warn', 'always', {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    }],
  },
};

