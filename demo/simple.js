const puppeteer = require('puppeteer');

const HOST_URL = "https://douban.com/";

let page;
let browser;
const width = 1280;
const height = 1080;

(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  // page = await browser.newPage();
  const [page] = await browser.pages();

  await page.goto(HOST_URL, { waitUntil: 'networkidle0' });

  await page.setViewport({ width, height });

  browser.close();
})();
