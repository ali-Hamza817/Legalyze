const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: 'new' });
    console.log('Browser launched');
    await browser.close();
    console.log('Browser closed');
  } catch (error) {
    console.error('Error:', error);
  }
})();
