module.exports = {
  extends: [
    require.resolve('../../typescript.js'),
  ],
  parserOptions: {
    project: './test/typescript/tsconfig.json',
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions: [
          '.tsx',
          '.ts',
          '.android.tsx',
          '.ios.tsx',
          '.web.tsx',
          '.js',
          '.jsx',
          '.android.js',
          '.ios.js',
          '.web.js',
        ],
      },
    },
  },
};
