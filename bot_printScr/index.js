const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();

    page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://github.com/marciomartins12');


    await page.screenshot({ path: 'printTela.png' })

    await browser.close();
})();