const requirePackage = require('./utils/require-package');

requirePackage('playwright-test', 'eslint-plugin-playwright');

module.exports = {
  extends: [
    'plugin:playwright/playwright-test',
    require.resolve('./rules/playwright-test.js'),
  ],
};
