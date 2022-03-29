module.exports = {
  plugins: ['testing-library'],
  extends: [
    'plugin:jest/recommended',
    // We may want to separate this out in future, as it's only needed when
    // using React with Testing Library.
    'plugin:testing-library/react',
  ],
};
