const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    specPattern: 'cypress/e2e/qce/features/*.feature'
  },

  env: {
    baseUrl: 'http://127.0.0.1:8000'
  }

});
