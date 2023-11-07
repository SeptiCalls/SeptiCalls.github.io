const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    const filePath = 'file://' + path.resolve(__dirname, '../index.html'); // Correct path to index.html
    await page.goto(filePath);
    await page.screenshot({ path: 'images/thumbnail.jpg' });
    await browser.close();
})();
