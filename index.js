const puppeteer = require('puppeteer');
const fs = require('fs');



const screenshotfunc = async (item) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(item);
    await page.screenshot({path: `${filename(item)}.png`, fullPage: true});
    await browser.close();
};

const filename = (string) => string.split( /\/\//)[1].split('.')[0];

fs.readFile('./stuff.txt', 'utf-8', function read(err, data) {
    if (err) throw err;
    const list = data.split('\n');
    list.map(item => screenshotfunc(item));

});








