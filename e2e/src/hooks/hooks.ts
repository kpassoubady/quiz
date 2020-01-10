const { BeforeAll, After, AfterAll, Status } = require('cucumber');
import { browser } from 'protractor';

BeforeAll({ timeout: 100 * 1000 }, async () => {
    await browser.get(this.baseUrl);
});

After(async function (scenario: { result: { status: any; }; }) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, 'e2e/images/png');
    }
});

AfterAll({ timeout: 100 * 1000 }, async () => {
    await browser.quit();
});
