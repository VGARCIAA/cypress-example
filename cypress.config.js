const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile:false
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: './cypress/reports/',
    reportFilename: 'testresults',
    html: true,
    json: true, 
    timestamp: "longDate"
  },
  video: true, 
  screenshotOnRunFailure: true,
  env: {
    urlSauceDemo: 'https://www.saucedemo.com/v1/',
    urlActionBlack: 'https://www.actionblack.co/'
  },
  projectId: "dfoc2t"
});
