function checkPalindrome(data) {
    var i = 0;
    var j = data.length - 1;
    while (i < j) {
        if (data.charAt(i) != data.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
function checkPalindromeOfNum(data) {
    var reverse = 0;
    var digit;
    var temp = data;
    while (data > 0) {
        digit = temp % 10;
        reverse = (reverse * 10) + digit;
        data = data / 10;
    }
    if (reverse == temp)
        return true;
    else
        return false;
}
var data;
data = 121;
console.log(checkPalindromeOfNum(data));
data = "madam";
console.log(checkPalindrome(data));
