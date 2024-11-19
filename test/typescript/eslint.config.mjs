import typescriptConfig from '../../src/typescript.js';


/** @type {import('eslint').Linter.Config[]} */
export default [
  ...typescriptConfig,
];

// module.exports = {
//   env: {
//     browser: true,
//     commonjs: true,
//     es6: true,
//     node: false,
//   },
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     tsconfigRootDir: __dirname,
//     project: ['./tsconfig.json'],
//   },
//
//   settings: {
//     'import/resolver': {
//       alias: {
//         extensions: [
//           '.tsx',
//           '.ts',
//           '.android.tsx',
//           '.ios.tsx',
//           '.web.tsx',
//           '.js',
//           '.jsx',
//           '.android.js',
//           '.ios.js',
//           '.web.js',
//         ],
//       },
//     },
//   },
// };
