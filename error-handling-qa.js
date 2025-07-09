// JavaScript Error Handling Q&A

/* 
Q1: What's the difference between throw and return?

Answer: 
- return: Normal function exit, returns a value to caller
- throw: Abnormal exit, creates an exception that must be caught

Example:
*/
function normalFunction() {
    return "success"; // Normal exit
}

function errorFunction() {
    throw new Error("something went wrong"); // Exception exit
}

/*
Q2: Can you catch syntax errors using try...catch?

Answer: No, syntax errors occur at parse time before code execution.
try...catch only catches runtime errors.

Example:
*/
try {
    // This won't catch syntax errors like:
    // let x = ; // SyntaxError - cannot be caught
    throw new Error("Runtime error"); // This can be caught
} catch (error) {
    console.log("Caught:", error.message);
}

/*
Q3: How do you handle errors in asynchronous code?

Answer: Use try...catch with async/await or .catch() with promises
*/

// With async/await
async function handleAsyncError() {
    try {
        await Promise.reject("Async error");
    } catch (error) {
        console.log("Caught async error:", error);
    }
}

// With promises
Promise.reject("Promise error")
    .catch(error => console.log("Caught promise error:", error));

/*
Q4: What is the use of finally in promises?

Answer: finally() runs regardless of promise resolution or rejection.
Used for cleanup operations.
*/
Promise.resolve("success")
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Cleanup always runs"));

/*
Q5: What's the benefit of custom error classes?

Answer: 
- Better error categorization
- Additional properties for context
- Specific error handling logic
- Improved debugging
*/

class DatabaseError extends Error {
    constructor(message, query) {
        super(message);
        this.name = 'DatabaseError';
        this.query = query;
    }
}

try {
    throw new DatabaseError("Connection failed", "SELECT * FROM users");
} catch (error) {
    if (error instanceof DatabaseError) {
        console.log(`DB Error: ${error.message}, Query: ${error.query}`);
    }
}