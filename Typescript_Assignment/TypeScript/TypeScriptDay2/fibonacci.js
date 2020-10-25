function calculateFibonacci(a, b, num) {
    var c;
    console.log(a);
    console.log(b);
    for (var i = 2; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}
console.log("The first 10 numbers in fibonacci series are :");
var a = 0;
var b = 1;
var num = 10;
calculateFibonacci(a, b, num);
