const puppeteer = require('puppeteer');

async function openWhatsapp() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['window-size=1920,1080',],
    });
    const page = await browser.newPage();
    page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://web.whatsapp.com/');
}
openWhatsapp();