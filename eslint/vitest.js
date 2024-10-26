const { FlatCompat } = require('@eslint/eslintrc');

const { rules } = require('./rules/vitest');

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...flatCompat.plugins('vitest'),
  {
    rules,
  },
];
