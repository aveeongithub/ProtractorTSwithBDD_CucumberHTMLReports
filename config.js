"use strict";
exports.__esModule = true;
exports.config = void 0;
//import * as reporter from "cucumber-html-reporter";
var reporter = require('cucumber-html-reporter');
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome'
    },
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['e2e/features/*.feature'],
    cucumberOpts: {
        // require step definitions
        // tags:"@AngularTesting",
        format: 'json:./cucumberreport.json',
        require: [
            './e2e/**/*.steps.ts', // accepts a glob,
        ]
    },
    onComplete: function () {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "TestApp Fedex",
                "Test Environment": "QA",
                "Browser": "Chrome  Latest",
                "Platform": "MacOS",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    }
};
