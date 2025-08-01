// Default Values for Function Parameters

const sendGreeting = (name = "Guest",greeting = "Hello") => {
    console.log(`${name} ${greeting}`);
}

sendGreeting();
sendGreeting('Manan');
sendGreeting('Manan', 'bye');