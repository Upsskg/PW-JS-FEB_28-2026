

import { test } from "@playwright/test";
import path from "path";


test(`Learn to handle file download`,async ({page}) => {
    

    await page.goto(`https://leafground.com/file.xhtml`);

    const filePromise = page.waitForEvent("download") // listerner captures the file that got downladed

    await page.locator('//span[text()="Download"]').click(); // click action

    const fDown = await filePromise // resolving the download action after completion of waitForEvent 

    //fDown == TestleafLogo.png

  //  fDown.saveAs("Data/Feb_28.png"); // Relative Path with customized name
 // fDown.saveAs(`Data/${fDown.suggestedFilename()}`); // Relative Path  with default name


    //Absolute path => recommended mthod
    // fDown.saveAs(path.join(__dirname,`../../Data/Abolute.png`));
     fDown.saveAs(path.join(__dirname,`../../Data/${fDown.suggestedFilename()}`));

     /* Notes : __dirname ==> control is on DAY09 folder 
     ../=> control moves from current folder to tests
     ../=> control moves from tests folder to root directory (PW-JS_28-2026-MAIN)
     /Data => Choose the folder that is uner the root diectory
     /Abolute.png => File saved under the folder Data

      */


    await page.waitForTimeout(3000)




})