// Function that says hello after a delay using a callback
function onStart(name,callback) {
    console.log("Starting the 'hello' function...");
    setTimeout(() => {
        console.log("Hello! This message was delayed: "+ name);
        callback(); // Calling the callback after the timeout
    }, 2000); // Delay of 2 seconds
    console.log("after timeout statement")
}

// Callback function to log a completion message
function onCompletion() {
    console.log("Callback executed: Finished greeting!");
}

// Call the hello function and pass the onCompletion function as a callback
onStart("Sai",onCompletion);

//Call back function - A function i.e passed as an argument to another function as a call back is called callback function.

// Imagine ordering pizza:

// You call the pizza shop (main function) and place an order.

// You give them your phone number (callback).

// They make the pizza (takes time).

// When it’s ready, they call you back on your phone number to tell you:
// “Your pizza is ready, come pick it up!”

// So your phone number is like the callback — they use it later, once the main work is finished.

