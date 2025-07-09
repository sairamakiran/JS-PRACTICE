// Hands-On Exercise: JSON Parser with Custom Error and Finally

class JSONParseError extends Error {
    constructor(message, input) {
        super(message);
        this.name = 'JSONParseError';
        this.input = input;
    }
}

function parseJSON(str) {
    console.log(`Attempting to parse: ${str}`);
    
    try {
        const result = JSON.parse(str);
        console.log('Parsing successful');
        return result;
    } catch (error) {
        throw new JSONParseError(`Invalid JSON format: ${error.message}`, str);
    } finally {
        console.log('Parse attempt completed\n');
    }
}

// Test Cases
const testCases = [
    '{"name": "John", "age": 30}',  // Valid JSON
    '{name: "John"}',               // Invalid JSON (unquoted key)
    '{"incomplete": }',             // Invalid JSON (incomplete)
    '[1, 2, 3]'                    // Valid JSON array
];

testCases.forEach(testCase => {
    try {
        const result = parseJSON(testCase);
        console.log('Result:', result);
    } catch (error) {
        if (error instanceof JSONParseError) {
            console.log(`Custom Error: ${error.message}`);
            console.log(`Input was: ${error.input}`);
        }
    }
});