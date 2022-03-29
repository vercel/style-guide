module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // Changes that affect the build system or dependency-only changes
        'build',
        // Changes to CI workflows
        'ci',
        // Documentation-only changes
        'docs',
        // A new feature
        'feat',
        //A bug fix
        'fix',
        // A code change that improves performance
        'perf',
        // A code change that neither fixes a bug nor adds a feature
        'refactor',
        // A commit that reverts a previous commit
        'revert',
        // Changes that do not affect the meaning of the code
        'style',
        // Adding missing tests or correcting existing tests
        'test',
        // Used for automated releases-only
        'release',
      ],
    ],
    'scope-enum': [
      2,
      'always',
      [
        // Dependency-related changes
        'deps',
        // ESLint-related changes
        'eslint',
        // Prettier-related changes
        'prettier',
        // TypeScript-related changes
        'typescript',
        // Go-related changes
        'golang',
      ],
    ],
    'scope-empty': [1, 'never'],
  },
};
