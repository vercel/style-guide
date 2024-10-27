const { FlatCompat } = require('@eslint/eslintrc');

const baseConfig = require('./_base');

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...baseConfig,
  ...flatCompat.env({
    browser: true,
  }),
];
