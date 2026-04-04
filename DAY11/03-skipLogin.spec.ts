

import { test } from "@playwright/test";

test.use({storageState:"Data/login_LT.json"})

test(`Launch the page skipping the login page`,async ({page}) => {    

    await page.goto(`http://leaftaps.com/crmsfa/control/leadsMain`);

    console.log(await page.title());
    
})