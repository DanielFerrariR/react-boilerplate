const { defineConfig } = require('cypress');
const webpackPreprocessor = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  downloadsFolder: 'test/cypress/downloads',
  fileServerFolder: 'test/cypress',
  fixturesFolder: 'test/cypress/fixtures',
  screenshotsFolder: 'test/cypress/screenshots',
  supportFolder: 'test/cypress/support',
  videosFolder: 'test/cypress/videos',
  viewportHeight: 768,
  viewportWidth: 1366,
  defaultCommandTimeout: 10000,
  videoCompression: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'test/cypress/support/e2e.{js,jsx,ts,tsx}',
    specPattern: 'test/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: require('./webpack/webpack.config.cypress')({}, {}),
        watchOptions: {},
      };

      on('file:preprocessor', webpackPreprocessor(options));
      require('@cypress/code-coverage/task')(on, config);
      require('cypress-log-to-output').install(on, (type, event) => {
        if (event.level === 'error' || event.type === 'error') {
          return true;
        }
        return false;
      });

      return config;
    },
  },
});
