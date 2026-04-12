// function data(name:string,gender?:string,age?:number){

//     console.log(name + " " + age);
// }

// //optional parameter -> Varaiable ?
// data("playwright")

class Browser{


loadApplication(url:any):void
loadApplication(url:string,browser:string):void

loadApplication(url:string,browser?:string,locator?:string){

    if(browser){
        console.log("Launching " + url + " in " + browser);
    }else{
        console.log("Launching " + url);
    }

}

}

let b= new Browser()
b.loadApplication("www.leaftaps.com") //20
b.loadApplication("www.leaftaps.com","chrome") //18

