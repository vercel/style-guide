const { FlatCompat } = require('@eslint/eslintrc');
const comments = require('eslint-plugin-eslint-comments');

const { rules } = require('./rules/comments');

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...flatCompat.config(comments.configs.recommended),
  {
    rules,
  },
];

// 'plugin:eslint-comments/recommended',
