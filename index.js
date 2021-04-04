const chromeLauncher = require('chrome-launcher');
const puppeteer = require('puppeteer');
const lighthouse = require('lighthouse');
const config = require('./default-config');
const reportGenerator = require('lighthouse/lighthouse-core/report/report-generator');
const request = require('request');
const util = require('util');
const fs = require('fs');


(async() => {
// the web site url that we need to test
    const webSiteUrl = 'https://www.youtube.com/';

    const opts = {
        chromeFlags: ['--headless','--no-sandbox'],
        logLevel: 'info',
        output: 'json',
        disableDeviceEmulation: true,
        headless: true,
        args: ['--headless'],
        chromeFlags: ['--disable-mobile-emulation']
    };

// Launch chrome using chrome-launcher
    const chrome = await chromeLauncher.launch(opts);
    opts.port = chrome.port;

 // Connect to it using puppeteer.connect().
    const resp = await util.promisify(request)(`http://localhost:${opts.port}/json/version`);
    const {webSocketDebuggerUrl} = JSON.parse(resp.body);
    const browser = await puppeteer.connect({browserWSEndpoint: webSocketDebuggerUrl});

// Run Lighthouse.
    const report = await lighthouse(webSiteUrl, opts, config).then(results => {
        return results;
    });

// Generate reports
    const html = reportGenerator.generateReport(report.lhr, 'html');

    console.log(`Lighthouse score: ${report.lhr.score}`);

    await browser.disconnect();
    await chrome.kill();

    //Write report html to the file
    fs.writeFile('./reports/report.html', html, (err) => {
        if (err) {
            console.error(err);
        }
    });

})();
