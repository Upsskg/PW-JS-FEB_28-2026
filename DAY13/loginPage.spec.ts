
import { LoginPage  } from "./03-login";

import { test } from "@playwright/test";

test(`Login Page using POM`,async ({page}) => {
    
const login = new LoginPage(page) // constructor // p2352434343
await login.loadUrl("https://leaftaps.com/opentaps/control/main")
await login.enterCredentials()
await login.clickLogin()
await page.waitForTimeout(3000)


})