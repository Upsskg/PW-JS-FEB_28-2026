// function data(name:string,gender?:string,age?:number){
//     console.log(name + " " + age);
// }
// //optional parameter -> Varaiable ?
// data("playwright")
var Browser = /** @class */ (function () {
    function Browser() {
    }
    Browser.prototype.loadApplication = function (url, browser, locator) {
        if (browser) {
            console.log("Launching " + url + " in " + browser);
        }
        else {
            console.log("Launching " + url);
        }
    };
    return Browser;
}());
var b = new Browser();
b.loadApplication("www.leaftaps.com"); //20
b.loadApplication("www.leaftaps.com", "chrome"); //18
