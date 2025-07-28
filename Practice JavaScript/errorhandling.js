// this code block cover how you handle errors with use of try and catch syntax as it's more reliable and more recommended to use 
// This function demonstrates basic error handling in JavaScript using try...catch.
// It attempts to parse a JSON string and logs the user's name if successful.
// If the input is not valid JSON, it catches the error and logs a helpful message.

function parseUserData(dataString) {

    try{
        let parsed = JSON.parse(dataString);
        console.log(`User name is: ${parsed.name}`)

    } catch(e) {
        console.log(`Failed to parse user data: ${e.message}`);
    } 
}

// Test cases
parseUserData('{"name": "Manan", "age": 23}');
parseUserData('{name: Manan}'); // invalid JSON
parseUserData('Hello, world!'); // not JSON at all

