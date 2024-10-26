const { FlatCompat } = require('@eslint/eslintrc');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const eslintImport = require('eslint-plugin-import');

const { rules: reactRules } = require('./rules/react');
const { rules: jsxA11yRules } = require('./rules/jsx-a11y');

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...flatCompat.config(react.configs.recommended),
  ...flatCompat.config(reactHooks.configs.recommended),
  ...flatCompat.config(jsxA11y.configs.recommended),
  ...flatCompat.config(eslintImport.configs.recommended),
  ...flatCompat.config(eslintImport.configs.react),
  ...flatCompat.plugins('prettier'),
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactRules,
      ...jsxA11yRules,
    },
  },
];
