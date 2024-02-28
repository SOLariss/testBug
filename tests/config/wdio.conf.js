// https://webdriver.io/docs/configurationfile.html


// default values
const config = {
  specs: ["../specs/**/*.feature.js"],
  maxInstances: 1,  
  automationProtocol: "webdriver",
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      ["goog:chromeOptions"]: {
        args: ["--window-size=1920,1080", "--ignore-certificate-errors"],        
      },
    },
  ],
  logLevel: "warn", 
  waitforTimeout: 10000,
  mochaOpts: {
    ui: "bdd",
    timeout: 10000,
  },
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "tests/allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  beforeTest(test) {
    if (!browser.__headless) {
      console.log(`Running test: ${test.title}`);
    }
  },
  async afterTest(test, context, { passed }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};

export { config };
