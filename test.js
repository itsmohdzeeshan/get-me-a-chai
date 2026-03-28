// Maximum and Minimum Digit in a Number

// Problem Statement: Given a number N, print the smallest and largest digits present in the number.

// Input: N = 2746
// Output: Largest digit: 7, Smallest digit: 2
// Explanation: 
// Largest digit in N is 7 whereras smallest digit is 2.

N = 2746
let largest = 0
let smallest = 9
while (N > 0) {
    let rem = N % 10
    if (rem >= largest) {
        largest = rem
    } 

    if (rem < smallest) {
        smallest = rem
    }

    N = Math.floor(N / 10)
}

console.log(largest);
console.log(smallest);