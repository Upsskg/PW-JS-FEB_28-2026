

import test from "@playwright/test"
import credentials from "../../Data/login.json"

test.describe.serial("Test to be executed in serial mode",async () => {

for( let data of credentials){

test(`Learn to Handle JSON ${data.TCaseID}`, async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`//input[@id="username"]`).fill(data.Username); // 0=>demosalesmanager, 1=>democsr

    await page.locator(`//input[@id="password"]`).fill(data.Password);//0=>crmsfa, 1=> crmsfa

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.waitForTimeout(3000) // FOR DEMO

})
}
})


    /* Internally in for of loop :
    First Iteration
    data =>  {
    "TCaseID":"TestCase1",
    "Username":"demosalesmanager",
    "Password":"crmsfa"
},

Second Iteration 
{
    "TCaseID":"TestCase2",
    "Username":"democsr",
    "Password":"crmsfa"
}
]

*/

/* Internally the compiler found the below is to happen:
//First Iteration :

test("Learn to Handle JSON TestCase1", async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`//input[@id="username"]`).fill(data.Username); // demosalesmanager

    await page.locator(`//input[@id="password"]`).fill(data.Password);//crmsfa

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.waitForTimeout(3000) // FOR DEMO

})
    
//Second Itertion 
test("Learn to Handle JSON TestCase2", async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`//input[@id="username"]`).fill(data.Username); // democsr

    await page.locator(`//input[@id="password"]`).fill(data.Password);//crmsfa

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.waitForTimeout(3000) // FOR DEMO

})*/