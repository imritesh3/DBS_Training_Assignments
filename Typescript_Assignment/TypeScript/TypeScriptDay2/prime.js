function calculatePrime(num) {
    var count = 0;
    var flag = 0;
    console.log("First Ten prime numbers are :");
    //console.log("2");
    for (var i = 2; i > 0; i++) {
        for (var j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            console.log(i);
            count += 1;
        }
        flag = 0;
        if (count == 10)
            break;
    }
}
var num = 10;
calculatePrime(num);
