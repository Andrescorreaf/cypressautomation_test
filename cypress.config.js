const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  cleanCookiesBetweenTests: false,
  baseURL: 'https://www.saucedemo.com',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
