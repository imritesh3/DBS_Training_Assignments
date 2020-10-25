function calculateFactorial(num:number):number{
    if(num==0 || num==1)
        return 1;
    else
        return num*calculateFactorial(num-1);
}
var num:number = 5;
var fact = console.log("Factorial of "+num +" is " +calculateFactorial(num));