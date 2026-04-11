

// // //class 
// // //1. Properties => tyres, engine,..
// // //2. Methods => build a product/car we will be using the properties


// // //Launch browser

// // //url
// // //username and password


// // //Url load
// // // CRdentials
// // //Login Button


// // class LoginPage{

// // //Launch browser // Action
// // console.log("Launch Browser");


// // //Url load // Action
// // console.log("Loading URL");

// // }


// //class 

// class Oopts{

//     //properties => variables
//     //methods => actionables

// oops(){ // method // actionables // priting the line in the teri
// console.log("Learning OOPS");

// }

// learnpom(){
//     console.log("Learning POM");
    
// }


// }


// const obj = new Oopts() // new keyword used to create an objetc / reference of the class
// obj.oops()
// obj.learnpom()



class Browser{ // class is a keyword and Browser is the name of the class

    browserInfo ="Chrome"  // Properties
    browserVersion = 121 // Properies

launchBrowser(){ // methods
console.log("Launching Chrome");

}

loadingPage(){
console.log("Loading the page");


}

}

const objectBrowser = new Browser() // Creation of object syntax => "new" keyword and class name with method bracket

objectBrowser.launchBrowser()
objectBrowser.loadingPage()

console.log(objectBrowser.browserInfo) // Chrome
console.log(objectBrowser.browserVersion); //121
