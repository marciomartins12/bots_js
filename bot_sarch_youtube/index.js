const puppeter = require("puppeteer");

async function searchYoutube(content) {
    const browser = await puppeter.launch({
        headless: false,
    });
    const page = await browser.newPage();
    page.setViewport({ width: 1366, height: 768 });
    await page.goto("https://www.youtube.com");
    await page.waitForSelector("body > ytd-app");
    await page.type("#center > yt-searchbox > div.ytSearchboxComponentInputBox.ytSearchboxComponentInputBoxDark > form > input", content);
    await page.click("#center > yt-searchbox > button");

    await page.waitForSelector("#contents");
    setTimeout(async () => {
        browser.close();
    }, 80000);

}
searchYoutube("nodejs");