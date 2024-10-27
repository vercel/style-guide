const { FlatCompat } = require('@eslint/eslintrc');

const { TYPESCRIPT_FILES } = require('./constants');
const { rules } = require('./rules/jest');

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...flatCompat.plugins('jest'),
  {
    files: TYPESCRIPT_FILES,
    rules: {
      ...rules,
      // Prefer the Jest version of this rule. This silently fails when type
      // information is not available.
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error',
    },
  },
];
