
import test, { expect } from "@playwright/test"

test.describe.serial(`Test grouping`,async () => {    


test("Learn test annotation test.skip", async ({ page }) => {
    test.setTimeout(5000)
    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`//input[@id="username"]`).fill("demosalesmanager");

    await page.locator(`//input[@id="password"]`).fill("crmsfa");

    await page.locator(`//input[@class="decorativeSubmit"]`).click({timeout:3000}); // action timeout

    await page.locator(`//a[contains(text(),"CRM")]`).click();

})

test.fixme("Learn test annotation test.fixme", async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`//input[@id="username"]`).fill("demosalesmanager");

    await page.locator(`//input[@id="password"]`).fill("crmsfa");

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

})


test.fail("Learn test annotation test.fail", async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`//input[@id="username"]`).fill("demosalesmanager");

    await page.locator(`//input[@id="password"]`).fill("crmsfa");

    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    expect(page.locator(`//input[@class="decorativeSubmit"]`)).toBeDisabled({timeout:6000}); // negative testing

    await page.locator(`//a[contains(text(),"CRM")]`).click();

})


test("Learn test annotation test.slow()", async ({ page }) => {

    test.slow() // will increase the default timeout by 3 times so it is 90000 ms of test execution

    await page.goto('http://leaftaps.com/opentaps/control/main');

    await page.locator(`//input[@id="username"]`).fill("demosalesmanager");

    await page.locator(`//input[@id="password"]`).fill("crmsfa");

    await page.locator(`//input[@class="decorativeSub"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

})
})

/* 1. Action timeout
2. Assertion timeout
3. GLobal timeout 
4. setT*/