const { FlatCompat } = require('@eslint/eslintrc');
const jseslint = require('@eslint/js');
const eslintImport = require('eslint-plugin-import');
const eslintComments = require('eslint-plugin-eslint-comments');
const babelParser = require('@babel/eslint-parser');

const { ECMA_VERSION, JAVASCRIPT_FILES } = require('./constants');

// See: https://github.com/eslint/eslint/issues/3458
// require('@rushstack/eslint-patch/modern-module-resolution');

const { rules: bestPracticeRules } = require('./rules/best-practice');
const { rules: commentsRules } = require('./rules/comments');
const { rules: es6Rules } = require('./rules/es6');
const { rules: importRules } = require('./rules/import');
const { rules: possibleErrorsRules } = require('./rules/possible-errors');
const { rules: stylisticRules } = require('./rules/stylistic');
const { rules: unicornRules } = require('./rules/unicorn');
const { rules: variablesRules } = require('./rules/variables');

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

/**
 * This is the base for both our browser and Node ESLint config files.
 */
module.exports = [
  jseslint.configs.recommended,
  ...flatCompat.plugins('prettier', 'unicorn'),
  ...flatCompat.config(eslintImport.configs.recommended),
  ...flatCompat.config(eslintComments.configs.recommended),
  ...flatCompat.env({
    [`es${ECMA_VERSION}`]: true,
  }),
  {
    files: JAVASCRIPT_FILES,
    languageOptions: {
      ecmaVersion: ECMA_VERSION,
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        // Report unused `eslint-disable` comments.
        reportUnusedDisableDirectives: true,
        requireConfigFile: false,
      },
    },
    // Tell ESLint not to ignore dot-files, which are ignored by default.
    ignores: ['!.*.js'],
    settings: {
      // Use the Node resolver by default.
      'import/resolver': { node: {} },
    },
    rules: {
      ...bestPracticeRules,
      ...commentsRules,
      ...es6Rules,
      ...importRules,
      ...possibleErrorsRules,
      ...stylisticRules,
      ...unicornRules,
      ...variablesRules,
    },
  },
];
