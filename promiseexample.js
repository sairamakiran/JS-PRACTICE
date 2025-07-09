// Function that simulates package delivery
const deliverPackage = () => {
    return new Promise((resolve, reject) => {
        console.log("Package is on its way...");
        setTimeout(() => {
            const delivered = true; // Simulate delivery status
            if (delivered) {
                resolve("Package delivered successfully!");
            } else {
                reject("Failed to deliver package.");
            }
        }, 3000); // Simulates a 3-second delay
    });
};

// Using the promise
deliverPackage()
    .then((message) => {
        console.log(message); // Output: Package delivered successfully!
    })
    .catch((error) => {
        console.log(error); // Output: Failed to deliver package.
    });


//     Definition: A promise is an object representing the eventual completion or failure of an asynchronous operation. It provides methods to handle success (.then()) and failure (.catch()).
// Story: Waiting for a Package Delivery
// Imagine you’ve ordered a package. You’re given a tracking number (promise) and told it will be delivered soon. You wait (resolve/reject) for the package to arrive, and once it does, you receive it and maybe even track it further.
