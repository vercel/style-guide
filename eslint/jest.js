const { TYPESCRIPT_FILES } = require('./constants');

module.exports = {
  plugins: ['testing-library'],
  extends: [
    'plugin:jest/recommended',
    // We may want to separate this out in future, as it's only needed when
    // using React with Testing Library.
    'plugin:testing-library/react',
    require.resolve('./rules/jest'),
  ],
  overrides: [
    // Prefer the Jest version of this rule. This silently fails when type
    // information is not available.
    {
      files: TYPESCRIPT_FILES,
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
  ],
};
