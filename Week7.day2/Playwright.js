var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var wrrapperMethod = /** @class */ (function () {
    function wrrapperMethod() {
    }
    // async fill(locator: string, text: string){
    //     await this.page.locator(locator).fill(text)
    // }
    wrrapperMethod.prototype.click = function (locator) {
        console.log("clicking on the element" + locator);
    };
    wrrapperMethod.prototype.fill = function (locator, text) {
        console.log("filling the element" + locator + "with the text" + text);
    };
    return wrrapperMethod;
}());
//for abstract  class we  can create object- 
//let obj=new wrrapperMethod()
//class to class and abstract class to class -> extends
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.password = function () {
        console.log("Password method implementation");
    };
    return LoginPage;
}(wrrapperMethod));
var lp = new LoginPage();
lp.click("locator");
lp.fill("locator", "text");
lp.password();
