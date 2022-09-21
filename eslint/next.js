const { JAVASCRIPT_FILES } = require('./constants');

const babelOptions = {
  presets: (() => {
    try {
      require.resolve('next/babel');
      return ['next/babel'];
    } catch (e) {
      return [];
    }
  })(),
};

module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    require.resolve('./rules/next/jsx-a11y'),
  ],
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parserOptions: { babelOptions },
    },
  ],
};
