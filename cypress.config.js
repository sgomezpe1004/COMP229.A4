const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      on('before:browser:launch', (browser = {}, launchOptions) => {
        return launchOptions
      })
    },
    baseUrl: 'http://localhost:5173', 
    video: true,
    screenshotOnRunFailure: true
  }
})
