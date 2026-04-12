import { LoginPage } from "./LoginPage_GP";

export class WelcomePage extends LoginPage{


public crmsfa(){
    console.log("click crmsfa");
}

public logoutButton(){
    console.log("click logout button");
}


}

//single level inheritance -> connecting two classes with parent-child relationship
/*let wp=new WelcomePage()
wp.enterUsername()
wp.enterPassword()
wp.clickLogin()
wp.crmsfa()*/