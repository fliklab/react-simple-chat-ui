const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3018",
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    specPattern: [
      "cypress/integration/**/*.js",
      "src/tests/integration/**/*.js",
    ],
  },
  video: false,
});
