

// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);  
// console.log(evenNumbers);  // [2, 4]

// let numbers = [9,324,9823,932,823,92]
// let oddNumbers = numbers.filter(num => num % 2 !== 0);
// console.log(oddNumbers)

//Testing example

let results =
 [
     {testcaseid: 1, status: 'pass'},
     {testcaseid: 2, status: 'fail'}
 ];
let failedTests = results.filter(result => result.status === 'pass');

console.log(failedTests)