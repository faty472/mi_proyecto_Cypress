const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    //baseUrl: "http://localhost:3000", // tu app local
    baseUrl: "https://example.cypress.io",  // sitio de prueba oficial
    supportFile: "cypress/support/e2e.js",
  },
});
