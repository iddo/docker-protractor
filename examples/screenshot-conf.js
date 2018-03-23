exports.config = {
    directConnect: true,
    framework: "jasmine2",
    specs: ['*-spec.js'],

    // Chrome is not allowed to create a SUID sandbox when running inside Docker  
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['no-sandbox']
        }
    },

    plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath: '/output',
        screenshotOnExpect: 'failure+success',
        screenshotOnSpec: 'none',
        withLogs: true,
        writeReportFreq: 'asap',
        imageToAscii: 'none',
        clearFoldersBeforeTest: true
      }],
 
      onPrepare: function() {
          // returning the promise makes protractor wait for the reporter config before executing tests
          return global.browser.getProcessedConfig().then(function(config) {
              //it is ok to be empty
          });
      }
};