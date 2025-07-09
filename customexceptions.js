// Custom Error Classes
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'NetworkError';
        this.statusCode = statusCode;
    }
}

// Usage Examples
function validateAge(age) {
    if (age < 0 || age > 150) {
        throw new ValidationError('Age must be between 0 and 150');
    }
    return true;
}

function fetchData(url) {
    // Simulating network error
    throw new NetworkError('Failed to fetch data', 404);
}

// Error Handling
try {
    validateAge(-5);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log('Validation Error:', error.message);
    }
}

try {
    fetchData('https://api.example.com');
} catch (error) {
    if (error instanceof NetworkError) {
        console.log(`Network Error: ${error.message} (Status: ${error.statusCode})`);
    }
}