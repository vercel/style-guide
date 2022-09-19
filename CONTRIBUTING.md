# Contributing to Vercel's Style Guide

## Installing

This project uses pnpm.

To get started, run:

```sh
corepack enable
```

Then, run:

```sh
pnpm i
```

## Before creating a pull request

Before creating a pull request, please raise an issue.

After an issue is created, we generally wait 2-4 weeks before implementing
any changes. This provides ample time for engineers to share feedback on
proposed changes.

### Milestones and pre-releases

The default branch for this repository is `canary`. Each relevant commit into
`canary` triggers a pre-release. Merging `canary` into `main` will trigger a
release.

We try to group changes together, when possible, as monthly [milestones](https://github.com/vercel/style-guide/milestones).
This results in less major version changes than if every commit was merged to
`main` directly.

## Commits and release versioning

This repository uses [Standard Release](https://semantic-release.gitbook.io/semantic-release/)
to automate releases - included versioning and release note generation.

Commit standards are based on [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional).

### Creating a commit

Commit messages should be in the format:

```
type(scope?): message

Resolves #1
```

The scope should be included most of the time, and all allowed types and scopes
are documented here:

- https://github.com/vercel/style-guide/blob/main/.commitlintrc.js

### How commits affect versions

By default, commits with the `feat` type will cause a minor version bump, and
commits with the `fix` or `perf` type will cause a patch version bump.

If your commit is a breaking change, which will create new major release, you
should add a footer with `BREAKING CHANGE: [message]`

```
feat(eslint): migrate to ESLint 8

Resolves #1

BREAKING CHANGE: see the ESLint 8 release notes for all breaking changes
```

In this example, the release notes would look like this:

> # 1.0.0 (2021-01-01)
>
> ### Features
>
> - eslint: migrate to ESLint 8 ([commit-hash])
>
> ### BREAKING CHANGES
>
> - eslint: see the ESLint 8 release notes for all breaking changes

## Updating dependencies

To check for outdated dependencies, run:

```sh
npx npm-check-updates
```

This lists which dependencies have updates. Unlike `npm outdated`,
`npm-check-updates` has a `-u` flag which conveniently updates `package.json`.

When updating packages, it's important to read the release notes for every
updated package, including minor updates, as rules and extended configs may
have changed.
