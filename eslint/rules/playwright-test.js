module.exports = {
  rules: {
    /**
     * Require lowercase test names.
     *
     * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
     */
    'prefer-lowercase-title': 'warn',
    /**
     * Require using `toHaveLength` over explicitly checking lengths.
     *
     * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
     */
    'prefer-to-have-length': 'warn',
    /**
     * Require test cases and hooks to be inside a `test.describe` block.
     *
     * 🚫 Not fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
     */
    'require-top-level-describe': 'error',
  },
};
