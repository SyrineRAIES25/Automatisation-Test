module.exports = {
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl:'https://sapwdawsemea.pharma.aventis.com:9102/',
    excludeSpecPattern:['**/1-getting-started','**/2-advanced-examples'],
    specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};