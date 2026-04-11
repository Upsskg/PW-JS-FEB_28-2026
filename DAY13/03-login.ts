/* Actions performed for a login page
1, Launch Browser
2. Loading url
3. Click Login Button */

import { Page } from "@playwright/test"

export class LoginPage {

   globalpage:Page // globale varibae


       constructor(Localpage:Page){ //here Lpage will capture/hold the value of page fixture

        //Page os the type of page fixture
        this.globalpage=Localpage
    }


    async loadUrl(url: string) {
        await this.globalpage.goto(url)


    }


    async enterCredentials() {
        await this.globalpage.locator("#username").fill("demosalesmanager")
        await this.globalpage.locator("#password").fill("crmsfa")

    }

    async clickLogin() {

        await this.globalpage.locator(".decorativeSubmit").click()
    }


}



