import { WelcomePage } from "./WelcomePage_P";

export class HomePage extends WelcomePage{
public clickLeads(){
    console.log("click leads");
}

public clickContacts(){
    console.log("click contacts");
}

}

//multilevel inheritance -> connecting three or more classes 
// with parent-child relationship
//LoginPage -> WelcomePage -> HomePage
let hp=new HomePage()
hp.enterUsername()
hp.enterPassword()
hp.clickLogin()
hp.crmsfa()
hp.clickLeads()