const puppeteer = require('puppeteer');

let config = {
    launchOptions: {
       headless:false
     }
}

const homepage = {
     search: 'input[type="text"]'
 }
       

puppeteer.launch(config.launchOptions).then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://Google.com');
  await page.type(homepage.search, "look");
  await page.screenshot({path: 'example.png'});



  await browser.close();
});