/**
 * These are enabled by `react/recommended`, but we've made the decision to
 * disable them.
 */
const disabledRules = {
  // We recommend using TypeScript over `prop-types`, as `prop-types` can add
  // to a project's build size.
  // https://github.com/vercel/style-guide/issues/44
  'react/prop-types': 'off',
  // Disable requiring React to be imported, as this is no longer required.
  'react/react-in-jsx-scope': 'off',
};

module.exports = {
  rules: {
    ...disabledRules,
    /**
     * Require an explicit type when using button elements.
     *
     * 🚫 Not fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     */
    'react/button-has-type': 'warn',
    /**
     * Require consistent function type for function components.
     *
     * 🔧 Fixable - https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/function-component-definition.md
     */
    'react/function-component-definition': 'warn',
    /**
     * Require consistent boolean attributes notation in JSX.
     *
     * 🔧 Fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     */
    'react/jsx-boolean-value': 'warn',
    /**
     * Disallow unnecessary curly braces in JSX props and children.
     *
     * 🔧 Fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     */
    'react/jsx-curly-brace-presence': 'warn',
    /**
     * Require using shorthand form for React fragments, unless required.
     *
     * 🔧 Fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     */
    'react/jsx-fragments': 'warn',
    /**
     * Prevents usage of unsafe `target='_blank'`.
     *
     * This rule is a part of `react/recommended`, but we've modified it to
     * allow referrer.
     *
     * See: https://github.com/vercel/style-guide/issues/79
     *
     * 🔧 Fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     */
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: true,
      },
    ],
    /**
     * Disallow empty React fragments.
     *
     * 🔧 Fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    'react/jsx-no-useless-fragment': 'warn',
    /**
     * Require the use of PascalCase for user-defined JSX components.
     *
     * 🚫 Not fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     */
    'react/jsx-pascal-case': 'warn',
    /**
     * Require props to be sorted alphabetically.
     *
     * 🔧 Fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': 'warn',
    /**
     * Disallow usage of Array index in keys.
     *
     * 🚫 Not fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'warn',
    /**
     * Disallow closing tags for components without children.
     *
     * 🔧 Fixable - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    'react/self-closing-comp': 'warn',
  },
};
