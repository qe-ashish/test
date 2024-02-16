const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "e9vnnu",
  e2e: {
    specPattern: 'cypress/e2e/*.js'
  },
  },
);
