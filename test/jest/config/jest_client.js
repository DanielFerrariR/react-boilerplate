module.exports = {
  ...require('./jest_common'),
  testPathIgnorePatterns: ['fixtures', 'config', 'test_utils'],
  testEnvironment: 'jsdom',
  displayName: 'client',
};
