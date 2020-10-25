"use strict";
exports.__esModule = true;
var bank = /** @class */ (function () {
    function bank() {
    }
    bank.prototype.assignData = function (accountNumber, name, balance) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.balance = balance;
    };
    bank.prototype.display = function () {
        console.log("Account Number: " + this.accountNumber);
        console.log("Account Holder Name: " + this.name);
        console.log("Account Balance: " + this.balance);
    };
    return bank;
}());
var obj3 = new bank();
obj3.assignData(10001, "Ritesh", 60000);
obj3.display();
