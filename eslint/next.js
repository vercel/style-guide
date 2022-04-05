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
    'plugin:@next/next/core-web-vitals',
    require.resolve('./rules/next/jsx-a11y'),
  ],
  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parserOptions: { babelOptions },
      rules: {
        // Ignores rule violation for anchors that are children of <Link>s.
        // See https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
      },
    },
  ],
};
