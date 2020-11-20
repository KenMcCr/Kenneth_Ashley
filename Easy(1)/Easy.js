// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15]

function Easy(numbers) {
    let odd = [];
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {

            even.push(numbers[i]);
        } else {

            odd.push(numbers[i]);
        }
    }

    const returnObject = {
        odd,
        even,
    };

    return returnObject;
}
console.log(Easy([3, 8, 17, 21, 44]));