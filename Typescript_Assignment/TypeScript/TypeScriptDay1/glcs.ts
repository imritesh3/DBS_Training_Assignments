var global_var: number = 20;
class MyClass
{
    local_var:number = 50;
    static static_var :number = 60;
    
    local_data():number
    {
        var local_val : number =10;
        return local_val;
    }
}

console.log("Global Variable:"+global_var);
console.log("Static Variable:"+MyClass.static_var);
var myClassObj = new MyClass();
console.log("Class Variable:"+myClassObj.local_var);
console.log("Local Variable:"+myClassObj.local_data());