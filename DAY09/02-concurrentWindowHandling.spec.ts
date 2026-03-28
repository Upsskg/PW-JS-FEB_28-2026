

import { test } from "@playwright/test";

test.only(`Learn window handling using concurrent mode`,async ({page,context}) => {
    
await page.goto(`https://www.flipkart.com/`);

const searchBox = page.locator(`[placeholder="Search for Products, Brands and More"]`).first();

await searchBox.fill("Phone");

await searchBox.press("Enter");

// const newPage =  context.waitForEvent("page")     //listerner to capture the page that poped up while I made a click action

// await page.locator(`//div[contains(text(),"Kechaoda A27")]`).first().click(); //action 

// const childPage = await newPage  // newPage is the reference to resolve the promise for waitForEvent() method 
                                // childPage is the reference of the page that got invoked by the click action once the waitForEvent() is resolved

//const [childPage] = await Promise.all([context.waitForEvent("page"), page.locator(`//div[contains(text(),"Kechaoda A27")]`).first().click()]) // listerner action, click action
//destructuring of array is recommended in concurrent approach

const [childPage] = await Promise.all([context.waitForEvent("page"), page.locator(`//div[contains(text(),"Kechaoda A27")]`).first().click()]) // listerner action, click action

//using array index 

await childPage.waitForLoadState("domcontentloaded");

const price = await childPage.locator(`//div[contains(@class,"v1zwn21k v1zwn20")]`).innerText()

console.log(price)

console.log(await page.title()); // parent page

console.log(await childPage.title()); // new childPage

await page.bringToFront();
await page.locator(`//span[text()="Electronics"]`).click();

await page.waitForTimeout(3000) // demo purpose

/* We will be using await only after waitForEvent() has completed the action of listening and capturing the page and ao we will resolve the promise only after the click action */


})





test(`Learn multiple window handling using concurrent mode`,async ({page,context}) => {
    
await page.goto(`https://leafground.com/window.xhtml`);


await Promise.all([context.waitForEvent("page"),page.locator(`//span[text()="Open Multiple"]`).click()])

//context will receive ==> all array of pages only after resolving the waitForEvent() and click()

//method 1 array destructuring :

// const [parentPage,childPage1,childPage2] = context.pages(); //here context is holding the multiple pages 
//                                                             // pages() method to retreive all the pages corresponding to the particular context
// await page.waitForLoadState("domcontentloaded")

// console.log(await parentPage.title());

// console.log(await childPage1.title());

// console.log(await childPage2.title());

//method 2 :

const allPages = context.pages(); //here context is holding the multiple pages 
                                                            // pages() method to retreive all the pages corresponding to the particular context
await page.waitForLoadState("domcontentloaded")

console.log(await allPages[0].title()); // Window

console.log(await allPages[1].title()); // Web Table

console.log(await allPages[2].title()); // Dashboard


await page.waitForTimeout(3000)


})
