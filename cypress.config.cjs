const { defineConfig } = require("cypress");
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { removeDirectory })
    },
  },
});
