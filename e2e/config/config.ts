
import {
    browser, Config,
} from 'protractor';
import {
    Reporter
} from 'e2e/src/reports/reporter';

const jsonReports = process.cwd() + '/reports/json';

export const config: Config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER: false,
    baseUrl: 'http://localhost:4200',

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

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        compiler: 'ts:ts-node/register',
        format: ['progress', 'pretty:output.txt', 'json:./reports/json/cucumber_report.json'],
        require: '/steps/quiz_step_defs.ts',
        tags: false,
        profile: false,
        'no-source': true,
        strict: true,
        'no-colors': true,
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
