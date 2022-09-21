module.exports = {
  rules: {
    /**
     * Require using `T[]` for array types.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/array-type/
     */
    '@typescript-eslint/array-type': 'warn',
    /**
     * Require using the record type.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-indexed-object-style/
     */
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    /**
     * Require consistent usage of type assertions.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/consistent-type-assertions/
     */
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow-as-parameter',
      },
    ],
    /**
     * Require consistent usage of interfaces and types.
     *
     * Interfaces are preferred by default as they can be implemented, extended
     * and merged.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-definitions/
     */
    '@typescript-eslint/consistent-type-definitions': 'warn',
    /**
     * Require consistent usage of type exports.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-exports/
     */
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    /**
     * Require consistent usage of type imports.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/consistent-type-imports/
     */
    '@typescript-eslint/consistent-type-imports': 'warn',
    /**
     * Require using function property types in method signatures.
     *
     * These have enhanced typechecking, whereas method signatures do not.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/method-signature-style/
     */
    '@typescript-eslint/method-signature-style': 'warn',
    /**
     * Require consistent naming conventions.
     *
     * Improves IntelliSense suggestions and avoids name collisions.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/naming-convention/
     */
    '@typescript-eslint/naming-convention': [
      'error',
      // Anything type-like should be written in PascalCase.
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
      // Interfaces cannot be prefixed with `I`, or have restricted names.
      {
        custom: {
          match: false,
          regex: '^I[A-Z]|^(Interface|Props|State)$',
        },
        format: ['PascalCase'],
        selector: 'interface',
      },
    ],
    /**
     * Require that `.toString()` is only called on objects which provide
     * useful information when stringified.
     *
     * This prevents strings like `"[object Object]"`.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/no-base-to-string/
     */
    '@typescript-eslint/no-base-to-string': 'error',
    /**
     * Disallow non-null assertion in locations that may be confusing.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
     */
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    /**
     * Disallow the use of classes as namespaces.
     *
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/no-extraneous-class/
     */
    '@typescript-eslint/no-extraneous-class': 'error',
    /**
     * Disallow invalid usage of the `void` type.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/no-invalid-void-type/
     */
    '@typescript-eslint/no-invalid-void-type': 'error',
    /**
     * Disallow the `void` operator except when used to discard a value.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/no-meaningless-void-operator/
     */
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    /**
     * Disallow unnecessary equality comparisons against boolean literals.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
     */
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    /**
     * Disallow unnecessary equality comparisons against boolean literals.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/no-unnecessary-condition/
     */
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    /**
     * Disallow unnecessary namespace qualifiers.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/no-unnecessary-qualifier/
     */
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    /**
     * Disallow unnecessary type arguments.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/no-unnecessary-type-arguments/
     */
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    /**
     * Require `.includes()` instead of `.indexOf()`.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/prefer-includes/
     */
    '@typescript-eslint/prefer-includes': 'warn',
    /**
     * Require that all enum members be literal values.
     *
     * This can prevent unexpected or unpredictable runtime behaviour.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/prefer-literal-enum-member/
     */
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    /**
     * Require using optional chain expressions instead of chained `&&`.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/prefer-optional-chain/
     */
    '@typescript-eslint/prefer-optional-chain': 'error',
    /**
     * Require using the reduce type parameter over type casting.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/prefer-reduce-type-parameter/
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
    /**
     * Require using `RegExp.exec()` over `String.match()` for consistency.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/prefer-regexp-exec/
     */
    '@typescript-eslint/prefer-regexp-exec': 'warn',
    /**
     * Require the use of `.startsWith()` and `.endsWith()` over older methods.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
     */
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
    /**
     * Require the use of `@ts-expect-error` over `@ts-ignore`.
     *
     * This directive operates in the same manner as `@ts-ignore`, but will
     * error if the line it's meant to be suppressing doesn't actually contain
     * an error, making it a lot safer.
     *
     * 🔧 Fixable - https://typescript-eslint.io/rules/prefer-ts-expect-error/
     */
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    /**
     * Require exhaustive checks when using union types in switch statements.
     *
     * This ensures cases are considered when items are later added to a union.
     *
     * 🚫 Not fixable - https://typescript-eslint.io/rules/switch-exhaustiveness-check/
     */
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
  },
};
