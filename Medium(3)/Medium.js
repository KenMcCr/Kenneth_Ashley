// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder.
// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24

// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6

function gcd(num1, num2) {
    if (num2 === 0) {
        return num1
    }
    return gcd(num2, num1 % num2)
};

console.log(gcd(num1, num2));