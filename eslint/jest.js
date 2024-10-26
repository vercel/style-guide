const { FlatCompat } = require('@eslint/eslintrc');

const { TYPESCRIPT_FILES } = require('./constants');

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...flatCompat.plugins('jest'),
  // Prefer the Jest version of this rule. This silently fails when type
  // information is not available.
  {
    files: TYPESCRIPT_FILES,
    rules: {
      '@typescript-eslint/unbound-method': 'off',
      'jest/unbound-method': 'error',
    },
  },
];
