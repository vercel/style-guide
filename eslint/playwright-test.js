const { FlatCompat } = require('@eslint/eslintrc');

const { rules } = require('./rules/playwright-test');

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...flatCompat.plugins('playwright'),
  ...flatCompat.env({
    'shared-node-browser': true,
  }),
  {
    rules,
  },
];
