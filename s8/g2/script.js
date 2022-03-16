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
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.balanceInit = 0;
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function () {
        var deposito = 100;
        return this.balanceInit += deposito;
    };
    SonAccount.prototype.oneWithDraw = function () {
        var prelievo = 40;
        return this.balanceInit -= prelievo;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    MotherAccount.prototype.oneDeposit = function () {
        var deposito = 50;
        return this.balanceInit += deposito;
    };
    MotherAccount.prototype.oneWithDraw = function () {
        var prelievo = 20;
        return this.balanceInit -= prelievo;
    };
    MotherAccount.prototype.addInterest = function () {
        var percentuale = this.balanceInit / 100 * 10;
        return this.balanceInit += percentuale;
    };
    return MotherAccount;
}(SonAccount));
var account1 = new SonAccount(0);
var account2 = new MotherAccount(0);
console.log(account1);
console.log('versamento sonaccount: ' + account1.oneDeposit());
console.log('prelievo sonaccount: ' + account1.oneWithDraw());
console.log(account2);
console.log('versamento motheraccount: ' + account2.oneDeposit());
console.log('prelievo motheraccount: ' + account2.oneWithDraw());
console.log('interessi motheraccount: ' + account2.addInterest());
