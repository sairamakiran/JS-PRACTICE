// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((acc, num) => acc + num, 0);  
// console.log(sum);  // 10

// Starts with 0, then does:
//  0 + 1 = 1
//  1 + 2 = 3
//  3 + 3 = 6
//  6 + 4 = 10
// So final result is: 10


let numbers = [92,2,2,2]

let sum = numbers.reduce((acc,num)=> acc-num,200)

console.log(sum)

// 200 - 92 = 108
// 108 - 2 = 106
// 106 - 2 = 104
// 104 - 2 = 102


// Count how many 'pass' and 'fail' results are in the array

let results = ['pass', 'fail', 'pass','fail','fail','pass','pass','pass'];
let passCount = results.reduce((acc, r) => r === 'pass' ? acc + 1 : acc, 0);
console.log("Pass Count "+passCount)
let failCount = results.reduce((acc, r) => r === 'fail' ? acc + 1 : acc, 0);
console.log("Faile Count "+failCount)

// How many are 'pass'

// How many are 'fail'

// 👉 3️⃣ To count 'pass':

// Go through each result.

// If the result is 'pass', add 1 to the counter.

// Otherwise, keep the counter the same.

// Start counting from 0.

// Final passCount will be 5.

// 👉 4️⃣ To count 'fail':

// Same idea: if the result is 'fail', add 1.

// Otherwise, don’t add.

// Start from 0.

// Final failCount will be 3.
