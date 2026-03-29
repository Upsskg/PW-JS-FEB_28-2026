

 import test from "@playwright/test"
 import dotenv from "dotenv"

 let filename = process.env.envFilename // $env:envFilename="qa" set the filename to "qa"

 dotenv.config({path:`Data/${filename}.env`}) // filename value will be fetched from the terminal

test(`Learn to Handle ENV`, async ({ page }) => {

    await page.goto(process.env.BaseUrl as string); //http://leaftaps.com/opentaps/control/main

    await page.locator(`//input[@id="username"]`).fill(process.env.LF_Username as string); 

    await page.locator(`//input[@id="password"]`).fill(process.env.LF_Password as string);

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.waitForTimeout(3000) // FOR DEMO


})

console.log(process.env.Username); // system username

//process is an object used to expose the system environment details of my local system


//



