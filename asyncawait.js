// async/await is a cleaner way to write Promise-based asynchronous code that looks like synchronous (normal) code.

// 👉 It’s built on top of Promises — so you still get the same power, but:

// No .then() chains

// No nested callbacks

// Easier to read & debug

// Function simulating data gathering
const gatherData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data gathered");
        }, 2000);
    });
};

// Async function to manage project
const manageProject = async () => {
    try {
        const data = await gatherData(); // Waits for gatherData to complete
        console.log(data); // Output: Data gathered
        // Continue with more tasks
    } catch (error) {
        console.error("Error: " + error); // Handles any errors
    }
};

// Call the async function
manageProject();

// async allows using await inside the function.
// await pauses execution until the promise resolves, simplifying asynchronous code.
// try/catch handles errors more gracefully
  