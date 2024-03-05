// Source: https://github.com/playwright-community/eslint-plugin-playwright/blob/v1.5.1/src/index.ts#L101-L129
const recommended = {
  'no-empty-pattern': 'off',
  'playwright/expect-expect': 'warn',
  'playwright/max-nested-describe': 'warn',
  'playwright/missing-playwright-await': 'error',
  'playwright/no-conditional-expect': 'warn',
  'playwright/no-conditional-in-test': 'warn',
  'playwright/no-element-handle': 'warn',
  'playwright/no-eval': 'warn',
  'playwright/no-focused-test': 'error',
  'playwright/no-force-option': 'warn',
  'playwright/no-nested-step': 'warn',
  'playwright/no-networkidle': 'error',
  'playwright/no-page-pause': 'warn',
  'playwright/no-skipped-test': 'warn',
  'playwright/no-standalone-expect': 'error',
  'playwright/no-unsafe-references': 'error',
  'playwright/no-useless-await': 'warn',
  'playwright/no-useless-not': 'warn',
  'playwright/no-wait-for-selector': 'warn',
  'playwright/no-wait-for-timeout': 'warn',
  'playwright/prefer-web-first-assertions': 'error',
  'playwright/valid-describe-callback': 'error',
  'playwright/valid-expect': 'error',
  'playwright/valid-expect-in-promise': 'error',
  'playwright/valid-title': 'error',
};

module.exports = {
  rules: {
    ...recommended,
    /**
     * Require lowercase test names.
     *
     * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
     */
    'playwright/prefer-lowercase-title': 'warn',
    /**
     * Require using `toHaveLength` over explicitly checking lengths.
     *
     * 🔧 Fixable - https://github.com/playwright-community/eslint-plugin-playwright/blob/main/docs/rules/prefer-lowercase-title.md
     */
    'playwright/prefer-to-have-length': 'warn',
  },
};
