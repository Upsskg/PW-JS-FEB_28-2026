

import test from "@playwright/test"
import { parse } from "csv-parse/sync"; // here we are importing to use the parse keyword to convert csv to object format
import fs from "fs"// fs is file system this is used to read the file from the system

test.use({storageState:"Data/login_LT.json"})

test.describe.serial(`Test executed in serial mode`,async () => {
    
let records: any[]

//testAnnotation for hooks

/* ***************************************************************************************************** */
//test.beforeAll() --> beforeAll annotation is executed first before the execution of any annotation it is taking care of Data COnnectivity
test.beforeAll(`Read data from CSV`, async () => {

    console.log(`beforeAll data connectivity`);    
    records = parse(fs.readFileSync("Data/login.csv"), { columns: true, skip_empty_lines: true })

})

/* ***************************************************************************************************** */

test.beforeEach(`Before Each test execution of lead and account module`, async ({ page }) => {

    console.log(`Before Each test execution of lead and account module`);

    await page.goto('http://leaftaps.com/crmsfa/control/main?externalLoginKey=EL758974712342');
    // await page.locator(`//input[@id="username"]`).fill(records[0].username); // 0=>demosalesmanager, 1=>democsr
    // await page.locator(`//input[@id="password"]`).fill(records[0].password);//0=>crmsfa, 1=> crmsfa
    // await page.locator(`//input[@class="decorativeSubmit"]`).click();
    // await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.waitForTimeout(3000) // FOR DEMO
})

/* ***************************************************************************************************** */

test(`Lead Module`, async ({ page }) => {

    console.log(`Executing after Lead Module`);
    await page.locator(`//a[text()="Create Lead"]`).click()
    await page.waitForTimeout(3000) // FOR DEMO
})

test(`Account Module`, async ({ page }) => {

    console.log(`Executing after Account Module`);
    await page.locator(`//a[text()="Create Account"]`).click()
    await page.waitForTimeout(3000) // FOR DEMO
})

/* ***************************************************************************************************** */


test.afterEach(`Fetch the test status of each test`, async ({},testinfo) => {
    console.log(`Executing after each test`);
    console.log(testinfo.status); // passed/ failed

    

})

/* ***************************************************************************************************** */

test.afterAll(`Upload all the reports at ones`,async () => {
    console.log(`Executed after completion of all tests`);
    console.log(`The report and screenshot are uploaded in test managment tool`);
    
    
})

})