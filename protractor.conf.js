// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  framework: "custom",
  debug: false,
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/*/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  plugins: [
    {
      package: "protractor-simple-cucumber-html-reporter-plugin",
      options: {
        automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
      },
    },
  ],
  directConnect: true,
  allScriptsTimeout: 45000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/**/*.steps.ts'
    ],
    format: [
      'json:test-reports/cucumber-test-results.json'
    ]
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });
  }
};
