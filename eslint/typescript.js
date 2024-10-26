const requirePackage = require('./utils/require-package');

requirePackage('typescript', 'typescript');

const { FlatCompat } = require('@eslint/eslintrc');
const tseslint = require('typescript-eslint');
const eslintImport = require('eslint-plugin-import');
const tsParser = require('@typescript-eslint/parser');

const { TYPESCRIPT_FILES } = require('./constants');

const { rules: typescriptRules } = require('./rules/typescript');
const {
  rules: typescriptExtensionRules,
} = require('./rules/typescript/extension');
const { rules: typescriptImportRules } = require('./rules/typescript/import');
const { rules: tsdocRules } = require('./rules/tsdoc');

const flatCompat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = [
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...flatCompat.config(eslintImport.configs.recommended),
  ...flatCompat.config(eslintImport.configs.typescript),
  ...flatCompat.plugins('prettier'),
  {
    files: TYPESCRIPT_FILES,
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...typescriptRules,
      ...typescriptExtensionRules,
      ...typescriptImportRules,
      ...tsdocRules,
    },
  },
];
