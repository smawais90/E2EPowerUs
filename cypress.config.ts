import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://testing.powerus.de/',
  },
  responseTimeout: 60000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: true,
  },
});
