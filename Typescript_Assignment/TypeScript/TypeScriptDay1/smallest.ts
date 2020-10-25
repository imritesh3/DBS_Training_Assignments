function smallest (n1:number,n2:number):number{
    if(n1>n2)
        return n2;
    else 
        return n1;
}
console.log("Smallest is :"+smallest(20,100));