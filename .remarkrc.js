module.exports = {
  plugins: [
    'preset-lint-consistent',
    'preset-lint-recommended',
    'preset-lint-markdown-style-guide',
    'preset-prettier',
    ['lint-no-duplicate-headings', false],
    ['lint-maximum-heading-length', false],
    ['lint-no-file-name-mixed-case', false],
    ['lint-no-heading-punctuation', false],
    ['lint-heading-increment', false],
  ],
};
