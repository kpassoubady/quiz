// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

import {
  browser,
} from 'protractor';
import {
  Reporter
} from 'e2e/src/reports/reporter';

const jsonReports = process.cwd() + '/reports/json';

export const config = {
  allScriptsTimeout: 11000,
  getPageTimeout: 60000,
  specs: [
    'features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  ignoreUncaughtExceptions: true,
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: 'features/step_definitions/stepDefinitions.js',
    tags: false,
    profile: false,
    'no-source': true,
    strict: true,
    'no-colors': true,
    format: ['progress', 'pretty:output.txt', 'json: results.json'],

  },

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    Reporter.createDirectory(jsonReports);
  },
  onComplete: () => {
    Reporter.createHTMLReport();
  },
};
