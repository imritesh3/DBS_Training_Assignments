class Bank
{
  //when kept private , object cannot access the variable.
  public acct_no:number;
  public name:string;
  public balance : number;
  
  constructor(acct_no:number, name:string, balance:number)
  {
     this.acct_no= acct_no;
	 this.name = name;
	 this.balance= balance;
  }
  
  display():void
  {
    console.log ("Acct_no : " + this.acct_no + " name: "+ " Balance : " + this.balance);
  }
  

}

var bankObj = new Bank(101, "Ritesj", 5000);
bankObj.display();
console.log ("Private account no : "+bankObj.acct_no);
console.log("Private account holder: "+bankObj.name);
