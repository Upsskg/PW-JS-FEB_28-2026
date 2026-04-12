var Access = /** @class */ (function () {
    function Access() {
    }
    Access.prototype.clearandtype = function () {
        console.log("clear and type");
    };
    Access.prototype.clear = function () {
        console.log("clear");
    };
    Access.prototype.locator = function () {
        console.log("locator");
    };
    Access.prototype.addMethod = function () {
        this.clear();
        this.locator();
    };
    return Access;
}());
var obje = new Access();
obje.clearandtype();
obje.addMethod();
