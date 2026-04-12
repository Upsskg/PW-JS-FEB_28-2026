"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var WelcomePage_P_1 = require("./WelcomePage_P");
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.clickLeads = function () {
        console.log("click leads");
    };
    HomePage.prototype.clickContacts = function () {
        console.log("click contacts");
    };
    return HomePage;
}(WelcomePage_P_1.WelcomePage));
//multilevel inheritance -> connecting three or more classes 
// with parent-child relationship
//LoginPage -> WelcomePage -> HomePage
var hp = new HomePage();
hp.enterUsername();
hp.enterPassword();
hp.clickLogin();
hp.crmsfa();
hp.clickLeads();
