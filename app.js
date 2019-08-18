const puppeteer = require('puppeteer')


const tirar = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.authenticate({username:"myUser", password:"myPass"});
    await page.goto('MyLink')
    await page.screenshot({path: 'example.png'})

    await browser.close()
}

tirar()