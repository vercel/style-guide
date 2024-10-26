const requirePackage = require('./utils/require-package');

requirePackage('next', '@next/eslint-plugin-next');

const { FlatCompat } = require('@eslint/eslintrc');
const next = require('@next/eslint-plugin-next');

const flatCompat = new FlatCompat({});

module.exports = [...flatCompat.config(next.configs.recommended)];
