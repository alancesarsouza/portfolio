import { FlatCompat } from '@eslint/eslintrc';

import eslintConfigPrettier from 'eslint-config-prettier';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['sort-exports'],
    rules: {
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true,
          allowNew: false,
          allowLiteral: false,
          allowObject: true
        }
      ],
      'import/order': [
        'error',
        {
          alphabetize: { caseInsensitive: false, order: 'asc' },
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: '@*', group: 'external', position: 'before' },
            { pattern: '@/**', group: 'internal', position: 'before' },
            { pattern: '*', group: 'internal', position: 'after' }
          ],
          'newlines-between': 'always',
          groups: ['builtin', 'external', 'internal'],
          pathGroupsExcludedImportTypes: ['react']
        }
      ],
      'no-console': ['warn'],
      'no-unneeded-ternary': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'react/jsx-sort-props': [
        1,
        {
          callbacksLast: true,
          multiline: 'last',
          reservedFirst: true,
          shorthandFirst: true
        }
      ],
      'react/self-closing-comp': ['error', { component: true, html: true }],
      'sort-exports/sort-exports': [
        /* https://www.npmjs.com/package/eslint-plugin-sort-exports */
        'error',
        { sortDir: 'asc' }
      ]
    }
  }),
  eslintConfigPrettier
];

export default eslintConfig;
