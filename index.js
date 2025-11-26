//function to calculate tax on a given amount
function calculateTax(amount) {
    return (amount * 0.1);
}

//function to convert a string to uppercase
function convertToUpperCase(str) {
    return str.toUpperCase();
}

//function to find the maximum number
function findMaximum(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}

//function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

//function to calculate discounted price
function calculateDiscountedPrice(originalprice, discountPercentage) { 
 return originalprice - (originalprice * discountPercentage / 100); 
}
    







// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };