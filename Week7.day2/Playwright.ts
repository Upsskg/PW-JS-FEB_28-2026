abstract class wrrapperMethod{


    // async fill(locator: string, text: string){
    //     await this.page.locator(locator).fill(text)
    // }

    click(locator:string){
        console.log("clicking on the element"+locator)

    }

    fill(locator: string, text: string){   
        console.log("filling the element"+locator+"with the text"+text)

    }

    //type():void

    abstract password():void


}
//for abstract  class we  can create object- 
//let obj=new wrrapperMethod()
//class to class and abstract class to class -> extends

class LoginPage extends wrrapperMethod{
    password() {
        console.log("Password method implementation")
    }

}

let lp=new LoginPage()
lp.click("locator")
lp.fill("locator","text")
lp.password()