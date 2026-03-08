//css => cascading style sheets


import { test } from "@playwright/test"; // test function is imported from playwright library

test(`Test to launch a browser`, async ({ page }) => { // {page}=> page fixture


  await page.goto('http://leaftaps.com/opentaps/control/main');

  // await page.locator(`[id="username"]`).fill("democsr2"); //css syntax-1

  //  await page.locator(`#username`).fill("democsr2");//css syntax-2

  // await page.locator(`input`).nth(0).fill("democsr2"); //1st input // playwright locator nth() method

  await page.locator(`input`).first().fill("democsr2"); //1st input  // playwright locator first() method

  // await page.locator(`[id="password"]`).fill("crmsfa");

  // await page.locator(`#password`).fill("crmsfa");

  await page.locator(`input`).nth(1).fill("crmsfa"); // second input

  //await page.locator(`[class="decorativeSubmit"]`).click();
 
  // await page.locator(`.decorativeSubmit`).click();
  
  // await page.locator(`input`).nth(2).click() // third input
  
  await page.locator(`input`).last().click() // third input


  await page.waitForTimeout(3000) //here since execution is speed high using wait for demo purpose only

})
