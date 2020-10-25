var Bank = /** @class */ (function () {
    function Bank(acct_no, name, balance) {
        this.acct_no = acct_no;
        this.name = name;
        this.balance = balance;
    }
    Bank.prototype.display = function () {
        console.log("Acct_no : " + this.acct_no + " name: " + " Balance : " + this.balance);
    };
    return Bank;
}());
var bankObj = new Bank(1002, "Charan", 50000);
bankObj.display();
console.log("Private account no : " + bankObj.acct_no);
console.log("Private account holder: " + bankObj.name);
