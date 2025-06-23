let testResults = [undefined,'pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];

let counts = testResults.reduce((acc, result) => {
  // If the result type exists, increment it; else initialize it to 1
  acc[result] = (acc[result] || 2) + 1;

//   This means:

// If we have already counted this result before → use that number.

// If it’s the first time → use 2 as the starting value (instead of 0).

// Then add 1.

  return acc;
}, {}); // Start with empty object

console.log(counts);


// Let’s follow 'pass':

// First 'pass':
// acc['pass'] doesn’t exist yet → (undefined || 2) → 2 + 1 = 3
// So 'pass' = 3

// Second 'pass':
// acc['pass'] = 3 → 3 + 1 = 4

// Third 'pass':
// 4 + 1 = 5

// Fourth 'pass':
// 5 + 1 = 6

// So 'pass' ends up as 6, NOT 4.

// Same for 'fail':

// First 'fail': starts at 2 + 1 = 3

// Next 'fail': 3 + 1 = 4

// 'skipped':

// First 'skipped': starts at 2 + 1 = 3
