const puppeteer = require('puppeteer');

async function printWhatsapp() {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.setUserAgent(
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36'
    );

    await page.goto('https://web.whatsapp.com/');
    await page.waitForSelector('#app > div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.x1nhvcw1.xdt5ytf.x1dr59a3.xp22266.xcnrxux.xw2csxc.x1odjw0f.xyinxu5.xbxaen2.x1g2khh7.x1u72gb5.xp9ttsr.x6s0dn4.x9f619.xdounpk.x1hql6x6.xe4h88v > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4 > div.x1lliihq > div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xe93d63.xeuugli.x2lwn1j.x1nhvcw1.xdt5ytf.x1cy8zhl > div > div.x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.xl56j7k.xdt5ytf.x6s0dn4.x1n2onr6.x8vdgqj.x1o0six8.x18d9i69.x5zbcu4 > div:nth-child(1) > div > canvas');
    await page.screenshot({ path: 'qrCode.png' });
   browser.close();
}
printWhatsapp();