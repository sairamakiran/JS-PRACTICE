function printIfEven(a, b) {
    // Check: is a OR b even?
    if (a % 2 === 0 || b % 2 === 0) {
      console.log(`Values are: ${a} and ${b}`);
    }
  }
  
  // Example usage:
  printIfEven(3, 5); // nothing prints (both odd)
  printIfEven(2, 5); // prints: Values are: 2 and 5
  printIfEven(7, 4); // prints: Values are: 7 and 4
  printIfEven(6, 8); // prints: Values are: 6 and 8
  