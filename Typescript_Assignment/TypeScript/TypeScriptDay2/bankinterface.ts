import banking = require("/Users/riteshyadav/Desktop/Ritesh_TypeScript/Day_2/Ibank");

class bank implements banking.Ibank{
    private accountNumber:number;
    private name:string;
    private balance:number;

    assignData(accountNumber:number,name:string,balance:number){
        this.accountNumber=accountNumber;
        this.name = name;
        this.balance = balance;

    }

    display():void{
        console.log("Account Number: "+this.accountNumber);
        console.log("Account Holder Name: "+this.name);
        console.log("Account Balance: "+this.balance);
    }
}

var obj3 = new bank();
obj3.assignData(10001,"Ritesh",60000);
obj3.display();