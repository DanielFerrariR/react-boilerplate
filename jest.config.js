module.exports = {
  testEnvironment: 'jsdom',
  coverageDirectory: 'jest_coverage',
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}'],
  testPathIgnorePatterns: ['fixtures', 'config', 'test_utils'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'mdx', 'md'],
  testMatch: ['<rootDir>/test/jest/unit/**/*.(js|jsx|ts|tsx)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '.+\\.(svg|scss)$': 'jest-transform-stub',
    '^.+\\.(mdx)$': '@storybook/addon-docs/jest-transform-mdx',
    '^.+\\.(md)$': 'jest-raw-loader',
  },
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^public(.*)$': '<rootDir>/public$1',
    '^test(.*)$': '<rootDir>/test$1',
    '^stories(.*)$': '<rootDir>/stories$1',
  },
  setupFiles: ['<rootDir>/test/jest/config/set_env_vars.js'],
  setupFilesAfterEnv: ['<rootDir>/test/jest/config/setup_env.js'],
};
