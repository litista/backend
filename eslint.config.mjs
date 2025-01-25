import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules',
      'eslint.config.js',
      'vite.config.js',
      '.prettierrc.json',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: { globals: globals.node },
    rules: {
      ...pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      'no-unused-vars': 0,
      indent: ['error', 2],
      eqeqeq: 'error',
    },
  },
];
