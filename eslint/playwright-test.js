module.exports = {
  plugins: ['playwright'],
  extends: [require.resolve('./rules/playwright-test.js')],
  env: {
    'shared-node-browser': true,
  },
};
