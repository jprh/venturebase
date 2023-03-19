// JavaScript Document
const puppeteer = require('puppeteer');

// exports.ping_kiosks = async function (option) {
//     let test = this.parse(option.data);
//     console.log(this.parse(option.data));
//     return {
//         test: test
//     };
// }


exports.ping_kiosks = async function (option) {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
    const page = await browser.newPage()
    await page.goto(this.parse(option.data))
    const name = await page.$eval('.hnname > a', el => el.innerText)
    // console.log(name)
    await browser.close()
    return {
        test: name
    }
}
