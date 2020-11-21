// Create a function that checks an array for prime numbers then inserts any pimes into a new array.                               
// Example1:                                                                             Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:												
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

function prime(numbers) {
    let primeNumbers = [];

    // loop through all the numbers in the array
    for (let i = 0; i < numbers.length; i++) {
        // get current number in this iteration
        let n = numbers[i];

        // by default assume n is prime
        let isPrime = true;

        // to find if n is prime try dividing
        // n by all numbers less than itself
        // starting at 2
        for (let j = 2; j <= n - 1; j++) {

            if (n % j == 0) {
                isPrime = false;
                break;
            }

        }

        if (isPrime) {
            primeNumbers.push(n);

        }



    }
    return (primeNumbers);

}

console.log(prime([10, 18, 19, 29, 33, 35, 47, 66, 83]));