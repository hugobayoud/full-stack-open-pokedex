const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
